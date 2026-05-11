import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Career Opportunities",
  description: `Join the ${config.businessName} team. Explore career opportunities in web design, SEO, and digital marketing.`,
  alternates: { canonical: "/careers" },
};

const perks = [
  {
    title: "Remote-First Culture",
    desc: "Work from anywhere in Canada. We believe great work happens when people have the freedom to choose their environment.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    ),
  },
  {
    title: "Grow With Us",
    desc: "We invest in your growth with training, mentorship, and opportunities to expand your skills across every discipline.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
      </svg>
    ),
  },
  {
    title: "Impactful Work",
    desc: "Every project you build directly impacts a Canadian business. Your work creates real jobs, real revenue, real change.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export default function CareersPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Careers", href: "/careers" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/blog/web-design-company.png" alt="" fill className="object-cover object-center" priority />
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
              <span className="text-white/80 text-sm font-medium tracking-wide">We&apos;re Hiring — Join the Team</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Build Your Career at{" "}
              <span className="gradient-text-animated">Canada&apos;s Top Agency</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed mb-10">
              Join a team of {config.teamSize}+ passionate professionals who help Canadian businesses succeed online.
            </p>

            <div className="hero-fade-up-3 grid grid-cols-3 gap-4">
              {[
                { value: `${config.teamSize}+`, label: "Team Members" },
                { value: `${config.cities.length}+`, label: "Cities" },
                { value: config.founded ? String(config.founded) : "10+", label: "Est." },
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
          OPEN POSITIONS
          ============================================= */}
      <section className="py-section-y relative" style={{ background: "#f8fafc" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.03) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Open Positions</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Current Openings</h2>
            <p className="text-gray-500 mt-3 max-w-xl mx-auto">All positions are fully remote across Canada. Apply through our contact page.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {[
              { title: "Web Designer", type: "Full-Time", level: "Mid–Senior", tags: ["Figma", "UI/UX", "Webflow"] },
              { title: "Frontend Developer", type: "Full-Time", level: "Mid–Senior", tags: ["React", "Next.js", "TypeScript"] },
              { title: "SEO Specialist", type: "Full-Time / Contract", level: "Junior–Mid", tags: ["Technical SEO", "Google Analytics", "Content"] },
              { title: "Digital Marketing Manager", type: "Full-Time", level: "Senior", tags: ["Google Ads", "Meta Ads", "Strategy"] },
            ].map((job, i) => (
              <div
                key={job.title}
                className="reveal bg-white rounded-2xl p-7 border border-gray-100 hover:border-[#00AADF]/40 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.08}s` }}
              >
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="font-black text-gray-900 text-lg">{job.title}</h3>
                    <p className="text-gray-500 text-sm mt-0.5">{job.level} &nbsp;&middot;&nbsp; Remote — Canada</p>
                  </div>
                  <span className="shrink-0 text-xs font-bold px-3 py-1 rounded-full" style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}>
                    {job.type}
                  </span>
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tags.map(tag => (
                    <span key={tag} className="text-xs font-semibold px-2.5 py-1 rounded-lg" style={{ background: "#f1f5f9", color: "#475569" }}>
                      {tag}
                    </span>
                  ))}
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-[#00AADF] text-sm font-bold hover:gap-2.5 transition-all duration-200"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          WHY JOIN US
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#ffffff" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-14 reveal">
            <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why Join Us</span>
            <h2 className="text-3xl lg:text-4xl font-black text-gray-900">Why Work With Us?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14">
            {perks.map((perk, i) => (
              <div
                key={perk.title}
                className="group bg-white rounded-2xl p-8 reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${i * 0.12}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                >
                  {perk.icon}
                </div>
                <h3 className="text-gray-900 font-black text-xl mb-3 group-hover:text-[#00AADF] transition-colors duration-200">{perk.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Apply CTA */}
            <div
              className="max-w-2xl mx-auto rounded-2xl p-10 text-center reveal"
              style={{
                background: "linear-gradient(135deg, #003B6F 0%, #0057A8 100%)",
                boxShadow: "0 8px 40px rgba(0,59,111,0.25)",
              }}
            >
              <h3 className="text-white font-black text-2xl mb-3">Interested in Joining Us?</h3>
              <p className="text-white/75 mb-8 leading-relaxed">
                We&apos;re always open to hearing from talented individuals. Send your resume and portfolio and let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
                style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.4)" }}
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
                Apply Now
              </Link>
            </div>
        </div>
      </section>
    </>
  );
}