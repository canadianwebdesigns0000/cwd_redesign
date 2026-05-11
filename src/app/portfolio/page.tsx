import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import PortfolioGrid from "@/components/PortfolioGrid";
// v4

export const metadata: Metadata = {
  title: "Our Portfolio",
  description:
    "Browse our portfolio of web design, SEO, and digital marketing projects for Canadian businesses.",
  alternates: { canonical: "/portfolio" },
};

const stats = [
  { value: "19+",  label: "Live Projects" },
  { value: "300%", label: "Avg Traffic Growth" },
  { value: "5★",   label: "Client Satisfaction" },
  { value: "30d",  label: "Avg Launch Time" },
];

export default function PortfolioPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Portfolio", href: "/portfolio" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/portfolio/evolve-media-group.jpg" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.78) 100%)" }} />

        <div className="absolute top-0 left-[10%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.25 }} />
        <div className="absolute bottom-0 right-[5%] w-96 h-96 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.35, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Real Results. Real Clients.</span>
            </div>

            <h1 className="hero-fade-up-1 font-black text-white mb-6"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}>
              Work That{" "}
              <span className="gradient-text-animated">Speaks for Itself</span>
            </h1>

            <p className="hero-fade-up-2 text-lg text-white/60 leading-relaxed max-w-xl mb-10">
              Every project we build is engineered to generate real business results — more traffic, more leads, more revenue.
            </p>

            <div className="hero-fade-up-3 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {stats.map((s) => (
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
          PORTFOLIO GRID (client component with category filters)
          ============================================= */}
      <PortfolioGrid />

      {/* =============================================
          BOTTOM CTA BAND
          ============================================= */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.2 }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(90px)", opacity: 0.3, animationDelay: "2s" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-black text-white mb-4 reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
          >
            Ready to See Your Business Here?
          </h2>
          <p className="text-white/60 max-w-xl mx-auto mb-8 reveal delay-1">
            Every project starts with a free consultation. Tell us about your goals and let&apos;s build something extraordinary.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.4)" }}
            >
              Get a Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
