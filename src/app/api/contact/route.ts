import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECAPTCHA_SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || "";

// In-memory rate limiting — best-effort on serverless (limits bursts within same instance)
const rateLimitMap = new Map<string, number[]>();
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000;

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const cutoff = now - RATE_LIMIT_WINDOW_MS;
  const hits = (rateLimitMap.get(ip) || []).filter((t) => t > cutoff);
  if (hits.length >= RATE_LIMIT_MAX) return true;
  rateLimitMap.set(ip, [...hits, now]);
  return false;
}

const SPAM_PATTERNS = [
  /\b(viagra|cialis|casino|poker|lottery|prize winner|congratulations you|bitcoin|crypto investment|nft|forex|earn \$|make money fast|work from home|click here|free offer|act now|buy now|call now|order now|seo backlink|guest post|link building offer)\b/i,
  /<[a-z][\s\S]*>/i,
];

function isSpamContent(text: string): boolean {
  return SPAM_PATTERNS.some((p) => p.test(text));
}

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function generateAiReply(
  firstName: string,
  service: string,
  message: string
): Promise<string> {
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) return "";

  const prompt = `You are a friendly customer success representative at Canadian Web Designs, a top-rated Canadian web design and digital marketing agency. Write a warm, personalized auto-reply email body (no subject line, no greeting header — just the body text starting with "Hi ${firstName},") to a new lead who just submitted a contact form.

Lead details:
- First name: ${firstName}
- Service of interest: ${service || "Web Design"}
- Their message: "${message}"

Guidelines:
- Keep it under 120 words
- Be warm and professional
- Acknowledge their specific interest/service
- Mention we'll get back within 24 hours (usually same day)
- End with "The Canadian Web Designs Team"
- Do NOT include a subject line or email header — just the body text`;

  try {
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: "claude-haiku-4-5-20251001",
        max_tokens: 256,
        messages: [{ role: "user", content: prompt }],
      }),
    });
    if (!response.ok) return "";
    const data = await response.json();
    return data?.content?.[0]?.text?.trim() || "";
  } catch {
    return "";
  }
}

async function sendSms(to: string, body: string): Promise<void> {
  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const from = process.env.TWILIO_PHONE_FROM;
  if (!accountSid || !authToken || !from || !to) return;

  await fetch(
    `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`,
    {
      method: "POST",
      headers: {
        Authorization: "Basic " + Buffer.from(`${accountSid}:${authToken}`).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ To: to, From: from, Body: body }).toString(),
    }
  );
}

export async function POST(request: NextRequest) {
  // IP rate limiting
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  const body = await request.json();
  const { firstName, lastName, email, phone, service, message, recaptchaToken, source, _hp } = body;

  // Honeypot: bots fill this hidden field, real users never see it
  if (_hp) {
    return NextResponse.json({ success: true });
  }

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Email format validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address" }, { status: 400 });
  }

  // Message length
  if (message.length < 5 || message.length > 5000) {
    return NextResponse.json({ error: "Message length invalid" }, { status: 400 });
  }

  // Spam content filter — flag for review, still deliver
  const possibleSpam = isSpamContent(`${firstName} ${lastName} ${message}`);

  // reCAPTCHA v3 — enforced when secret key is configured
  if (RECAPTCHA_SECRET_KEY) {
    if (!recaptchaToken) {
      return NextResponse.json({ error: "reCAPTCHA token required" }, { status: 403 });
    }
    const verifyResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
    });
    const verifyData = await verifyResponse.json();
    if (!verifyData.success || verifyData.score < 0.5) {
      return NextResponse.json({ error: "reCAPTCHA verification failed" }, { status: 403 });
    }
  }

  const internalEmailBody = `
New Contact Form Submission
===========================

Name:    ${firstName} ${lastName}
Email:   ${email}
Phone:   ${phone || "Not provided"}
Service: ${service || "Not specified"}

Message:
${message}
  `.trim();

  // 1. Send internal notification email
  try {
    await transporter.sendMail({
      from: `"CWD Website" <${process.env.SMTP_USER}>`,
      to: "dev@canadianwebdesigns.com, sales.canadianwebdesigns@gmail.com",
      replyTo: email,
      subject: source === "homepage"
        ? `${possibleSpam ? "[SPAM?] " : ""}New Message from home page`
        : `${possibleSpam ? "[SPAM?] " : ""}New Contact Form: ${firstName} ${lastName}`,
      text: internalEmailBody,
    });
  } catch (err) {
    console.error("Failed to send internal email:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }

  // 2. AI-generated auto-reply to the lead (fire-and-forget)
  generateAiReply(firstName, service || "web design services", message).then(async (aiBody) => {
    if (!aiBody) return;
    try {
      await transporter.sendMail({
        from: `"Canadian Web Designs" <${process.env.SMTP_USER}>`,
        to: email,
        subject: `We received your request, ${firstName}! — Canadian Web Designs`,
        text: aiBody + "\n\n---\nCanadian Web Designs | canadianwebdesigns.ca | 647-689-6069",
        html: `<div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;">
          <img src="https://canadianwebdesigns.ca/logos/logo.webp" alt="Canadian Web Designs" style="height:40px;margin-bottom:24px;" />
          <div style="background:#f8f9fa;border-left:4px solid #00AADF;padding:20px;border-radius:4px;">
            ${aiBody.replace(/\n/g, "<br/>")}
          </div>
          <p style="color:#999;font-size:12px;margin-top:24px;">
            Canadian Web Designs &bull; <a href="https://canadianwebdesigns.ca">canadianwebdesigns.ca</a> &bull; 647-689-6069
          </p>
        </div>`,
      });
    } catch (err) {
      console.error("Failed to send AI auto-reply:", err);
    }
  });

  // 3. SMS notifications (fire-and-forget)
  const smsOwnerTo = process.env.TWILIO_NOTIFY_PHONE;
  if (smsOwnerTo) {
    const ownerSms = `📔 New CWD Lead: ${firstName} ${lastName} | ${service || "General"} | ${email} | ${phone || "no phone"}`;
    sendSms(smsOwnerTo, ownerSms).catch(() => {});
  }

  if (phone && process.env.TWILIO_SMS_LEAD_REPLY === "true") {
    const leadSms = `Hi ${firstName}! Thanks for reaching out to Canadian Web Designs. We received your message and will get back to you within 24 hours. Questions? Call us: 647-689-6069`;
    sendSms(phone, leadSms).catch(() => {});
  }

  return NextResponse.json({ success: true });
}
