import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "About Our Team",
  description: "About Canadian Web Design Company we specialize in innovative web design, development, & SEO services for dynamic online solutions.",
  alternates: { canonical: "/who-we-are" },
};

const stats = [
  { value: config.founded ? String(config.founded) : "10+", label: "Founded" },
  { value: `${config.teamSize}+`,             label: "Team Members" },
  { value: `${config.reviewCount}+`,          label: "5-Star Reviews" },
  { value: `${config.cities.length}+`,        label: "Cities Served" },
];

const values = [
  {
    title: "Results First",
    desc: "Every decision we make is driven by one question: does this deliver measurable ROI for our client? If not, we don't do it.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Radical Transparency",
    desc: "No hidden fees, no vague promises. We tell you exactly what we're doing, why, and what results to expect — always.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Long-Term Partnership",
    desc: "We don't disappear after launch. We grow alongside your business, continuously optimizing for better performance.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
  },
];

export default function WhoWeArePage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Who We Are", href: "/who-we-are" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/images/hero-leading-web-design.jpg" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />

        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Est. {config.founded} — {config.teamSize}+ Professionals</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              We Make Money,{" "}
              <span className="gradient-text-animated">If You Make Money</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-10">
              A passionate team of digital experts helping Canadian businesses dominate online — since {config.founded}.
            </p>

            {/* Stats row */}
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
          ABOUT SECTION
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Our Mission</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6" style={{ lineHeight: 1.1 }}>
                Your Success Is<br />Our Success
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Founded in {config.founded} by {config.president}, {config.businessName} has grown into a
                full-service digital agency with a team of {config.teamSize}+ professionals. Our philosophy is
                simple: your success is our success.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                We specialize in web design, graphic design, SEO, social media optimization, website maintenance,
                and AI consultation. Every project we take on is driven by one goal — delivering measurable ROI
                for our clients.
              </p>
              <p className="text-gray-600 leading-relaxed mb-10">
                With {config.reviewCount}+ five-star reviews and clients across {config.cities.length} cities in Canada, we&apos;ve
                built a reputation for excellence, reliability, and results.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer group inline-flex items-center gap-2 px-8 py-4 text-white font-bold rounded-btn transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 28px rgba(0,170,223,0.4)" }}
              >
                Work With Us
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>

            {/* Expertise areas */}
            <div className="reveal delay-2 space-y-4">
              {[
                { label: "Web Design & Development", detail: "500+ custom websites delivered", icon: "💻" },
                { label: "SEO & Digital Marketing",  detail: "300% avg traffic growth for clients", icon: "📈" },
                { label: "Graphic Design & Branding", detail: "Branding for 100+ Canadian businesses", icon: "🎨" },
                { label: "AI & Digital Consultation", detail: "Automation strategies that save hours", icon: "🤖" },
              ].map((item, i) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl p-5 border border-gray-100 flex items-center gap-4 hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transitionDelay: `${i * 0.08}s` }}
                >
                  <span className="text-2xl shrink-0" aria-hidden="true">{item.icon}</span>
                  <div>
                    <p className="font-black text-gray-900 text-sm">{item.label}</p>
                    <p className="text-gray-500 text-xs mt-0.5">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          VALUES
          ============================================= */}
      <section
        className="py-section-y relative overflow-hidden"
        style={{ background: "#060D20" }}
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "#00AADF", filter: "blur(160px)", opacity: 0.08 }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">What Drives Us</span>
            <h2 className="text-3xl lg:text-4xl font-black text-white">Our Core Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="group glass card-dark-hover rounded-2xl p-8 reveal"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "linear-gradient(135deg, rgba(0,170,223,0.35), rgba(0,170,223,0.15))" }}
                  aria-hidden="true"
                >
                  {v.icon}
                </div>
                <h3 className="text-white font-black text-xl mb-3 group-hover:text-accent transition-colors duration-200">{v.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          LEADERSHIP
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#f8fafc" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Leadership</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">The People Behind the Work</h2>
          </div>

          {/* Founder */}
          <div className="max-w-sm mx-auto mb-14 reveal-scale">
            <div className="bg-white rounded-2xl p-10 text-center border border-gray-100" style={{ boxShadow: "0 2px 24px rgba(0,0,0,0.07)" }}>
              <div
                className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
              >
                <span className="text-3xl font-black text-white">
                  {config.president?.split(" ").map((n) => n[0]).join("") ?? ""}
                </span>
              </div>
              <h3 className="text-gray-900 font-black text-2xl mb-1">{config.president}</h3>
              <p className="text-[#00AADF] font-bold text-sm mb-4 tracking-widest uppercase">President & Founder</p>
              <div className="w-16 h-px mx-auto mb-4 border-t border-gray-200" />
              <p className="text-gray-600 text-sm leading-relaxed">
                Leading {config.businessName} with a vision to empower Canadian businesses through digital excellence and results-driven strategies.
              </p>
            </div>
          </div>

          {/* Team Departments */}
          <div className="reveal">
            <p className="text-center text-[#00AADF] text-xs font-bold tracking-[0.2em] uppercase mb-8">Our 25+ Person Team</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
              {[
                { dept: "Web Development", count: "8 Engineers", icon: "👨‍💻" },
                { dept: "Design & UX",     count: "6 Designers", icon: "🎨" },
                { dept: "SEO & Content",   count: "5 Specialists", icon: "🔍" },
                { dept: "Client Success",  count: "4 Managers", icon: "🤝" },
                { dept: "Digital Ads",     count: "3 Strategists", icon: "📣" },
                { dept: "Graphic Design",  count: "3 Creatives", icon: "✏️" },
                { dept: "AI & Automation", count: "2 Consultants", icon: "🤖" },
                { dept: "Operations",      count: "2 Directors", icon: "⚙️" },
              ].map((t) => (
                <div
                  key={t.dept}
                  className="bg-white rounded-xl p-5 text-center border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)" }}
                >
                  <span className="text-2xl mb-2 block" aria-hidden="true">{t.icon}</span>
                  <p className="font-black text-gray-900 text-sm leading-snug">{t.dept}</p>
                  <p className="text-[#00AADF] text-xs font-bold mt-1">{t.count}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================
          CTA BAND
          ============================================= */}
      <section
        className="relative overflow-hidden py-20"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <div className="absolute top-0 left-1/3 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(110px)", opacity: 0.25 }} />
        <div className="absolute bottom-0 right-1/3 w-64 h-64 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(90px)", opacity: 0.3, animationDelay: "2s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <h2
            className="font-black text-white mb-6 reveal"
            style={{ fontSize: "clamp(2rem, 4vw, 3rem)", lineHeight: 1.1 }}
          >
            Ready to Work With{" "}
            <span className="gradient-text-animated">Canada&apos;s Best?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-xl mx-auto mb-10 reveal delay-1">
            Let&apos;s build something amazing together. Free consultation, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-2">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Get a Free Quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link
              href="/portfolio"
              className="inline-flex items-center justify-center px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
