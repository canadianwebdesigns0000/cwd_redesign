import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Our Story",
  description: "Canadian Web Designs Story is dedicated to serving Canadian Businesses and we look forward to one day having the honor of serving you.",
  alternates: { canonical: "/our-story" },
};

const milestones = [
  {
    year: config.founded ? String(config.founded) : "Day 1",
    title: "The Beginning",
    text: `${config.businessName} was founded by ${config.president} with a bold vision: to build a digital agency where client success comes first. Starting with web design, we quickly expanded into SEO, graphic design, and digital marketing.`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
  {
    year: "",
    title: "Growing Our Team",
    text: `As demand grew, so did our team. We brought on specialists in SEO, social media, graphic design, and website maintenance. Today, we're a team of ${config.teamSize}+ dedicated professionals.`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
  {
    year: "",
    title: "Expanding Across Canada",
    text: `From our offices in ${Object.values(config.addresses).map((a) => a.city).join(" and ")}, we expanded our reach to serve businesses in ${config.cities.length} cities across Canada — from Vancouver to Halifax.`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    year: "",
    title: `${config.reviewCount}+ Five-Star Reviews`,
    text: `Our commitment to client success has earned us ${config.reviewCount}+ five-star reviews. Our philosophy — "We Make Money, If You Make Money" — drives everything we do.`,
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
      </svg>
    ),
  },
  {
    year: "Today",
    title: "Today & Beyond",
    text: "We continue to innovate with AI consultation services and cutting-edge web technologies, helping Canadian businesses stay ahead in the digital landscape.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
];

export default function OurStoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Our Story", href: "/our-story" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/images/amir-portrait.png" alt="" fill className="object-cover object-center" priority />
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
              <span className="text-white/80 text-sm font-medium tracking-wide">Est. {config.founded} — Canada&apos;s Trusted Agency</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Built on{" "}
              <span className="gradient-text-animated">Results,</span>{" "}<br />Driven by Purpose
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-10">
              How a bold idea in {config.founded} grew into a team of {config.teamSize}+ professionals serving businesses across Canada.
            </p>

            {/* Quick stats */}
            <div className="hero-fade-up-3 grid grid-cols-3 gap-4">
              {[
                { value: `${config.teamSize}+`, label: "Team Members" },
                { value: `${config.cities.length}+`, label: "Cities Served" },
                { value: `${config.reviewCount}+`, label: "5★ Reviews" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-xl px-4 py-3 text-center">
                  <p className="text-2xl font-black text-white">{s.value}</p>
                  <p className="text-white/50 text-xs mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          TIMELINE
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="space-y-6">
            {milestones.map((m, i) => (
              <div
                key={m.title}
                className="group bg-white rounded-2xl p-7 flex gap-6 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.1}s` }}
              >
                {/* Icon + line */}
                <div className="flex flex-col items-center">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 text-white transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    {m.icon}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-px flex-1 mt-4" style={{ background: "linear-gradient(to bottom, rgba(0,170,223,0.3), transparent)", minHeight: "2rem" }} />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  {m.year && (
                    <span
                      className="inline-block text-xs font-black tracking-[0.2em] uppercase mb-2 px-3 py-1 rounded-full"
                      style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}
                    >
                      {m.year}
                    </span>
                  )}
                  <h2 className="text-gray-900 font-black text-xl mb-3 group-hover:text-[#00AADF] transition-colors duration-200">
                    {m.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">{m.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center reveal">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.4)" }}
            >
              Start Your Story With Us
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
