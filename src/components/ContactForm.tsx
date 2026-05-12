"use client";

import { useState, useCallback } from "react";
import Script from "next/script";
import { getConfig } from "@/lib/client-config";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

const config = getConfig();
const services = [...config.services.map((s) => s.title), "Other"];

const inputClass =
  "w-full px-4 py-3 min-h-[44px] rounded-xl outline-none transition-all duration-200 text-gray-900 placeholder:text-gray-400 font-medium"
  + " bg-gray-50 border border-gray-200 focus:border-[#00AADF] focus:bg-white focus:ring-2 focus:ring-[#00AADF]/20";

async function getRecaptchaToken(siteKey: string): Promise<string> {
  return new Promise((resolve) => {
    const gc = (window as any).grecaptcha;
    if (!gc) { resolve(""); return; }
    const run = () =>
      gc.execute(siteKey, { action: "contact" }).then(resolve).catch(() => resolve(""));
    if (typeof gc.ready === "function") {
      gc.ready(run);
    } else {
      run();
    }
  });
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(false);

    try {
      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined") {
        recaptchaToken = await getRecaptchaToken(RECAPTCHA_SITE_KEY);
      }

      const form = e.currentTarget;
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }, []);

  if (submitted) {
    return (
      <div className="rounded-2xl p-8 text-center" style={{ background: "rgba(0,170,223,0.1)", border: "1px solid rgba(0,170,223,0.25)" }}>
        <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: "rgba(0,170,223,0.2)" }}>
          <svg className="w-7 h-7" style={{ color: "#00AADF" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        </div>
        <h3 className="text-xl font-black text-gray-900 mb-2">Message Sent!</h3>
        <p className="text-gray-500">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="afterInteractive"
        />
      )}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-1.5">
              First Name <span style={{ color: "#00AADF" }}>*</span>
            </label>
            <input type="text" id="firstName" name="firstName" placeholder="John" className={inputClass} />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-1.5">
              Last Name <span style={{ color: "#00AADF" }}>*</span>
            </label>
            <input type="text" id="lastName" name="lastName" placeholder="Smith" className={inputClass} />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Email <span style={{ color: "#00AADF" }}>*</span>
          </label>
          <input type="email" id="email" name="email" placeholder="john@company.com" className={inputClass} />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Phone
          </label>
          <input type="tel" id="phone" name="phone" placeholder="+1 (416) 000-0000" className={inputClass} />
        </div>
        <div>
          <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Service Interested In
          </label>
          <select id="service" name="service" className={inputClass}>
            <option value="">Select a service</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1.5">
            Message <span style={{ color: "#00AADF" }}>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            placeholder="Tell us about your project..."
            className={`${inputClass} resize-none`}
          />
        </div>

        {error && (
          <div className="flex items-center gap-3 p-4 rounded-xl" style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)" }}>
            <svg className="w-5 h-5 shrink-0" style={{ color: "#ef4444" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
            </svg>
            <p className="text-sm font-medium" style={{ color: "#ef4444" }}>
              Something went wrong. Please try again or call us at {config.phone}.
            </p>
          </div>
        )}

        <button
          type="submit"
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 text-white font-black rounded-xl transition-all duration-300 cursor-pointer btn-shimmer"
          style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}
        >
          Send Message
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
          </svg>
        </button>
        <p className="text-xs text-gray-400">
          Protected by reCAPTCHA &amp; Google{" "}
          <a href="https://policies.google.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">Privacy Policy</a>.
        </p>
      </form>
    </>
  );
}
