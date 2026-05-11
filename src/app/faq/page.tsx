import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "FAQ",
  description: "Here is general information for your frequently asked questions. We're here to help and make your worries go away.",
  alternates: { canonical: "/faq" },
};

const faqs = [
  { q: "How much does a website cost?", a: "Our website packages start from affordable rates for small businesses. The exact cost depends on the complexity, number of pages, and features required. Contact us for a free, no-obligation quote." },
  { q: "How long does it take to build a website?", a: "A typical website takes 2-4 weeks from start to finish. More complex projects with custom features may take longer. We'll provide a clear timeline during our initial consultation." },
  { q: "Do you offer SEO services?", a: "Yes! SEO is one of our core services. We offer both on-page and off-page SEO optimization to help your website rank higher on Google and other search engines." },
  { q: "Will my website be mobile-friendly?", a: "Absolutely. Every website we build is fully responsive and optimized for all devices — mobile phones, tablets, and desktop computers." },
  { q: "Do you provide website maintenance?", a: "Yes, we offer ongoing website maintenance packages that include updates, security monitoring, backups, and performance optimization." },
  { q: "Can you redesign my existing website?", a: "Yes, we specialize in website redesigns. We'll modernize your site while preserving your brand identity and improving user experience and SEO." },
  { q: "What areas do you serve?", a: `We serve businesses across ${config.cities.length} cities in Canada including Toronto, Brampton, Calgary, Vancouver, Montreal, Edmonton, and many more.` },
  { q: "Do you offer AI consultation?", a: "Yes, our AI consultation service helps businesses leverage artificial intelligence to streamline operations, improve customer service, and gain competitive advantages." },
];

export default function FAQPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "FAQ", href: "/faq" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/blog/custom-web-design.png" alt="" fill className="object-cover object-center" priority />
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
              <span className="text-white/80 text-sm font-medium tracking-wide">{faqs.length} Questions Answered</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Got{" "}
              <span className="gradient-text-animated">Questions?</span>{" "}<br />We&apos;ve Got Answers.
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed">
              Find answers to the most common questions about our services, process, and pricing.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
          FAQ LIST
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={faq.q}
                className="group rounded-2xl p-7 reveal bg-white border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-lg transition-all duration-300"
                style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)", transitionDelay: `${(i % 4) * 0.08}s` }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    <span className="text-white font-black text-xs">Q</span>
                  </div>
                  <div>
                    <h3 className="text-gray-900 font-black text-lg mb-3 group-hover:text-[#00AADF] transition-colors duration-200">
                      {faq.q}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions */}
          <div
            className="mt-12 rounded-2xl p-8 text-center reveal"
            style={{
              background: "linear-gradient(135deg, rgba(0,170,223,0.08), rgba(0,59,111,0.1))",
              border: "1px solid rgba(0,170,223,0.2)",
            }}
          >
            <h3 className="text-gray-900 font-black text-xl mb-3">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our team is ready to answer anything. Get in touch for a free consultation.</p>
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-btn transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 20px rgba(0,170,223,0.4)" }}
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: { "@type": "Answer", text: faq.a },
            })),
          }),
        }}
      />
    </>
  );
}
