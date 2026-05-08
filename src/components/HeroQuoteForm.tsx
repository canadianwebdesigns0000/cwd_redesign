"use client";

import { useState } from "react";
import Script from "next/script";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";

export default function HeroQuoteForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "" });

  const set = (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    try {
      let recaptchaToken = "";
      if (RECAPTCHA_SITE_KEY && typeof window !== "undefined" && (window as any).grecaptcha) {
        recaptchaToken = await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "homepage_quote" });
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: form.firstName,
          lastName: form.lastName,
          email: form.email,
          phone: form.phone,
          service: form.service,
          message: `Quick quote request from the homepage.\n\nService: ${form.service || "General Inquiry"}`,
          source: "homepage",
          recaptchaToken,
          _hp: "",
        }),
      });
      if (!res.ok) throw new Error("HTTP " + res.status);
      const data = await res.json();
      setStatus(data.success ? "done" : "error");
    } catch {
      setStatus("error");
    }
  }

  const field =
    "w-full px-4 py-3 rounded-xl text-sm text-white placeholder-white/40 outline-none transition-all duration-200 focus:ring-2 focus:ring-sky-400";
  const fieldStyle = {
    background: "rgba(255,255,255,0.08)",
    border: "1px solid rgba(255,255,255,0.15)",
  };

  if (status === "done") {
    return (
      <div
        className="rounded-2xl p-8 flex flex-col items-center justify-center text-center"
        style={{
          background: "rgba(0,15,35,0.82)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(0,170,223,0.3)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5)",
          minHeight: 380,
        }}
      >
        <div
          className="w-16 h-16 rounded-full flex items-center justify-center text-2xl mb-5"
          style={{ background: "rgba(0,208,132,0.15)", border: "2px solid rgba(0,208,132,0.4)" }}
        >
          ✓
        </div>
        <h3 className="text-white font-black text-xl mb-2">We Got Your Request!</h3>
        <p className="text-white/60 text-sm leading-relaxed max-w-xs">
          Our team will reach out within 24 hours with a custom quote.
        </p>
      </div>
    );
  }

  return (
    <>
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnLoad"
        />
      )}
      <form
        onSubmit={submit}
        className="rounded-2xl p-6"
        style={{
          background: "rgba(0,15,35,0.82)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(0,170,223,0.3)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 50px rgba(0,170,223,0.08)",
        }}
      >
        {/* Honeypot — hidden from real users, bots fill it out */}
        <input
          type="text"
          name="_hp"
          autoComplete="off"
          tabIndex={-1}
          aria-hidden="true"
          style={{ position: "absolute", left: "-9999px", width: "1px", height: "1px", opacity: 0 }}
        />

        {/* Header */}
        <div className="mb-5">
          <div className="flex items-center gap-2 mb-2">
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#00AADF" }} />
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: "#00AADF" }}>
              Free Quote
            </span>
          </div>
          <h2 className="text-white font-black text-lg leading-tight">Get Your Project Started</h2>
          <p className="text-white/45 text-xs mt-1">No obligation ✌ Reply within 24 hrs</p>
        </div>

        <div className="space-y-3">
          {/* Row 1: First + Last name */}
          <div className="grid grid-cols-2 gap-3">
            <input
              type="text"
              placeholder="First Name *"
              required
              value={form.firstName}
              onChange={set("firstName")}
              className={field}
              style={fieldStyle}
            />
            <input
              type="text"
              placeholder="Last Name *"
              required
              value={form.lastName}
              onChange={set("lastName")}
              className={field}
              style={fieldStyle}
            />
          </div>

          {/* Row 2: Email */}
          <input
            type="email"
            placeholder="Email Address *"
            required
            value={form.email}
            onChange={set("email")}
            className={field}
            style={fieldStyle}
          />

          {/* Row 3: Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={form.phone}
            onChange={set("phone")}
            className={field}
            style={fieldStyle}
          />

          {/* Row 4: Service */}
          <select
            value={form.service}
            onChange={set("service")}
            className={field}
            style={{
              ...fieldStyle,
              color: form.service ? "#fff" : "rgba(255,255,255,0.4)",
            }}
          >
            <option value="" style={{ background: "#0a1628" }}>Select a Service</option>
            <option value="Web Design & Development" style={{ background: "#0a1628" }}>Web Design & Development</option>
            <option value="SEO" style={{ background: "#0a1628" }}>SEO</option>
            <option value="Graphic Design" style={{ background: "#0a1628" }}>Graphic Design</option>
            <option value="Social Media" style={{ background: "#0a1628" }}>Social Media</option>
            <option value="Website Maintenance" style={{ background: "#0a1628" }}>Website Maintenance</option>
            <option value="AI Consultation" style={{ background: "#0a1628" }}>AI Consultation</option>
          </select>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "sending"}
            className="btn-shimmer w-full py-3.5 rounded-xl text-white font-black text-sm transition-all duration-300"
            style={{
              background: status === "sending"
                ? "rgba(0,170,223,0.5)"
                : "linear-gradient(135deg, #005B9A, #00AADF)",
              boxShadow: "0 4px 24px rgba(0,170,223,0.35)",
              cursor: status === "sending" ? "not-allowed" : "pointer",
            }}
          >
            {status === "sending" ? "Sending…" : "Get My Free Quote 🎯"}
          </button>

          {status === "error" && (
            <p className="text-red-400 text-xs text-center">
              Something went wrong – please call us or try again.
            </p>
          )}
        </div>

        <p className="text-white/25 text-xs text-center mt-4">🔒 Protected by reCAPTCHA. No spam.</p>
      </form>
    </>
  );
}
