import type { Metadata } from "next";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import ContactForm from "@/components/ContactForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Get a Free Quote",
  description: "Request a quote for a customized website. We can help you create a business website or enhance your site. Get in touch!",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Contact", href: "/contact" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/images/contact-right.png" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />

        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Free Consultation — No Commitment</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Let&apos;s Build Something{" "}
              <span className="gradient-text-animated">Amazing Together</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 24 hours with a free, no-obligation quote.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
          FORM + INFO
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-16">

            {/* Form */}
            <div className="reveal">
              <div className="bg-white rounded-2xl p-8 lg:p-10 border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
                <h2 className="text-2xl font-black text-gray-900 mb-2">Send Us a Message</h2>
                <p className="text-gray-500 text-sm mb-8">We reply within 24 hours, usually much sooner.</p>
                <ContactForm />
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-5 reveal delay-2">

              {/* Phone */}
              <a
                href={`tel:${config.phone}`}
                className="group bg-white rounded-2xl p-6 flex items-center gap-5 block border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Call Us</p>
                  <p className="text-gray-900 font-bold text-lg group-hover:text-[#00AADF] transition-colors duration-200">{config.phone}</p>
                </div>
              </a>

              {/* Email */}
              {config.emails.sales && (
                <a
                  href={`mailto:${config.emails.sales}`}
                  className="group bg-white rounded-2xl p-6 flex items-center gap-5 block border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Email Us</p>
                    <p className="text-gray-900 font-bold group-hover:text-[#00AADF] transition-colors duration-200">{config.emails.sales}</p>
                  </div>
                </a>
              )}

              {/* Hours */}
              <div className="bg-white rounded-2xl p-6 flex items-center gap-5 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5">Business Hours</p>
                  <p className="text-gray-900 font-bold">{config.businessHours}</p>
                </div>
              </div>

              {/* Offices */}
              {Object.entries(config.addresses).map(([key, addr]) => (
                <div key={key} className="bg-white rounded-2xl p-6 flex items-start gap-5 border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 mt-0.5"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs uppercase tracking-widest mb-0.5 capitalize">{key} Office</p>
                    <p className="text-gray-900 font-bold">{addr.city}, {addr.province}</p>
                    <p className="text-gray-500 text-sm mt-0.5">{addr.street}</p>
                  </div>
                </div>
              ))}

              {/* Trust signals */}
              <div
                className="rounded-2xl p-6"
                style={{ background: "linear-gradient(135deg, rgba(0,170,223,0.06), rgba(0,59,111,0.08))", border: "1px solid rgba(0,170,223,0.2)" }}
              >
                <p className="text-[#00AADF] font-bold text-sm mb-3">Why businesses trust us:</p>
                <div className="space-y-2">
                  {["No long-term contracts", "Free initial consultation", "Results guaranteed", `${config.reviewCount}+ five-star reviews`].map((t) => (
                    <div key={t} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      <span className="text-gray-700 text-sm">{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          OFFICE MAPS
          ============================================= */}
      <section className="py-12 relative" style={{ background: "#f8f9fb" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <p className="text-center text-[#00AADF] text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Offices</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p className="px-5 py-3 font-bold text-gray-800 text-sm bg-white border-b border-gray-100">Toronto Office — 2967 Dundas St W #718</p>
              <iframe
                src="https://maps.google.com/maps?q=2967+Dundas+St+W+Toronto+ON+M6P+1Z2&output=embed&zoom=15"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Toronto Office"
              />
            </div>
            <div className="rounded-2xl overflow-hidden border border-gray-200" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>
              <p className="px-5 py-3 font-bold text-gray-800 text-sm bg-white border-b border-gray-100">Brampton Office — 5 Cherrycrest Drive #202</p>
              <iframe
                src="https://maps.google.com/maps?q=5+Cherrycrest+Drive+Brampton+ON+L6P+3W4&output=embed&zoom=15"
                width="100%"
                height="280"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Brampton Office"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
