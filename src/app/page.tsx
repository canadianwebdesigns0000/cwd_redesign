import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import StarRating from "@/components/StarRating";
import ClientLogoCarousel from "@/components/ClientLogoCarousel";
import HeroQuoteForm from "@/components/HeroQuoteForm";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

const services = [
  {
    title: "Web Design & Development",
    description: "Custom, high-converting websites that look stunning on every device and drive real business growth.",
    href: "/services/web-design-development",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
      </svg>
    ),
  },
  {
    title: "Graphic Design",
    description: "Professional branding, logos, and marketing materials that make your business impossible to ignore.",
    href: "/services/graphic-design",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />
      </svg>
    ),
  },
  {
    title: "SEO",
    description: "Dominate search results and drive a flood of organic traffic to your business — sustainably.",
    href: "/services/seo",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5" />
      </svg>
    ),
  },
  {
    title: "Social Media Optimization",
    description: "Build a powerful brand presence and engaged community across every major social platform.",
    href: "/services/social-media-optimization",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" />
      </svg>
    ),
  },
  {
    title: "Website Maintenance",
    description: "Keep your website secure, fast, and perfectly tuned — so you never miss a beat or a lead.",
    href: "/services/website-maintenance",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.25 2.25 0 010-3.182l.71-.71a2.25 2.25 0 013.182 0l2.06 2.06 6.293-6.293a2.25 2.25 0 013.182 0l.71.71a2.25 2.25 0 010 3.182l-10.037 10.037a2.25 2.25 0 01-3.182 0z" />
      </svg>
    ),
  },
  {
    title: "AI Consultation",
    description: "Leverage the power of artificial intelligence to streamline operations and outpace competitors.",
    href: "/services/ai-consultation",
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    name: "Remove My Walls",
    text: `${config.businessName} completely transformed our online presence. Our leads increased by 300% within the first month.`,
    initials: "RM",
    location: "Toronto, ON",
  },
  {
    name: "TCM Wellness",
    text: "Professional, creative, and results-driven. They delivered exactly what we needed to grow our business online.",
    initials: "TW",
    location: "Brampton, ON",
  },
  {
    name: "GTA Grizzly",
    text: "The best web design company in Canada. Their SEO work put us on the first page of Google within weeks.",
    initials: "GG",
    location: "Mississauga, ON",
  },
];

const portfolio = [
  { src: "/portfolio/evolve-media-group.jpg",   name: "Evolve Media Group",        tag: "Web Design" },
  { src: "/portfolio/fade-central.jpg",          name: "Fade Central",              tag: "Web Design" },
  { src: "/portfolio/swj-modern-creations.jpg",  name: "SWJ Modern Creations",      tag: "Web Design" },
  { src: "/portfolio/el-afrek-lounge.jpg",       name: "EL Afrek Lounge",           tag: "Web Design" },
  { src: "/portfolio/sierra-college.jpg",        name: "Sierra College of Business", tag: "Web Design" },
  { src: "/portfolio/sonia-aimy.jpg",            name: "Sonia Aimy",                tag: "Web Design" },
];

export default function HomePage() {
  return (
    <>
      {/* =============================================
          HERO — Dark, Animated
          ============================================= */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{
          minHeight: "calc(100vh - 4rem)",
          background: "#010C1E",
        }}
      >
        {/* Background image */}
        <Image
          src="/images/hero-leading-web-design.jpg"
          alt=""
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay — left darker for readability, right lighter to show image */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.82) 0%, rgba(1,12,30,0.55) 45%, rgba(1,12,30,0.30) 100%)" }}
        />

        {/* Animated orbs */}
        <div
          className="absolute animate-orb pointer-events-none"
          style={{
            top: "5%", left: "2%",
            width: 600, height: 600,
            borderRadius: "50%",
            background: "#00AADF",
            filter: "blur(130px)",
            opacity: 0.35,
          }}
        />
        <div
          className="absolute animate-orb pointer-events-none"
          style={{
            bottom: "0%", right: "0%",
            width: 480, height: 480,
            borderRadius: "50%",
            background: "#00AADF",
            filter: "blur(110px)",
            opacity: 0.22,
            animationDelay: "2.5s",
          }}
        />
        <div
          className="absolute animate-orb pointer-events-none"
          style={{
            top: "40%", right: "30%",
            width: 300, height: 300,
            borderRadius: "50%",
            background: "#33C2E8",
            filter: "blur(90px)",
            opacity: 0.18,
            animationDelay: "1.2s",
          }}
        />

        {/* Dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-16 items-center">

            {/* LEFT: Text */}
            <div>
              {/* Trust badge */}
              <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-8">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }}
                />
                <span className="text-white/80 text-sm font-medium tracking-wide">
                  Canada&rsquo;s Most Trusted Web Agency
                </span>
              </div>

              <h1 className="hero-fade-up-1 font-black text-white leading-tight mb-6"
                style={{ fontSize: "clamp(2.6rem, 6vw, 4.2rem)", lineHeight: 1.05 }}>
                Web Design &amp; Digital Marketing{" "}<br />
                <span className="gradient-text-animated">That Makes You Money</span>
              </h1>

              <p className="hero-fade-up-2 text-lg text-white leading-relaxed max-w-lg mb-10">
                Canada&rsquo;s trusted web design &amp; digital marketing agency.{" "}
                <span className="font-semibold">{config.reviewCount}+ five-star reviews</span>{" "}
                across {config.cities.length} cities nationwide since {config.founded}.
              </p>

              <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4 mb-12">
                <Link
                  href="/contact"
                  className="btn-shimmer group inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-btn text-base transition-all duration-300"
                  style={{
                    background: "#00AADF",
                    boxShadow: "0 4px 28px rgba(0,170,223,0.45)",
                  }}
                >
                  Get a Free Quote
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 glass text-white font-semibold rounded-btn text-base hover:bg-white/15 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </div>

              <div className="hero-fade-up-4 flex items-center gap-3">
                <StarRating rating={5} size="md" />
                <span className="text-white/50 text-sm">
                  {config.reviewCount}+ Five Star Reviews on Google
                </span>
              </div>
            </div>

            {/* RIGHT: Quote Form */}
            <div className="relative hidden lg:block">
              <HeroQuoteForm />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-[0.25em] uppercase">Scroll</span>
          <svg className="w-5 h-5 animate-scroll-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </section>

      {/* =============================================
          STATS BAR
          ============================================= */}
      <section className="py-16 bg-white border-b border-gray-100">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { count: 200,  suffix: "+", label: "Five Star Reviews",    icon: "⭐" },
              { count: config.cities.length, suffix: "+", label: "Cities Served", icon: "📍" },
              { count: 10,   suffix: "+", label: "Years Experience",     icon: "🏆" },
              { count: 500,  suffix: "+", label: "Projects Completed",   icon: "✅" },
            ].map((stat, i) => (
              <div key={i} className={`reveal`} style={{ transitionDelay: `${i * 0.1}s` }}>
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="text-4xl lg:text-5xl font-black text-dark mb-1">
                  <span data-count={stat.count} data-suffix={stat.suffix}>0{stat.suffix}</span>
                </div>
                <p className="text-sm text-dark-light font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          SERVICES — Dark section
          ============================================= */}
      <section
        className="relative overflow-hidden py-section-y"
        style={{ background: "#08121F" }}
      >
        <Image src="/blog/web-design-company.png" alt="" fill className="object-cover object-center pointer-events-none" style={{ opacity: 0.28 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(8,18,31,0.75)" }} />
        {/* Background orb */}
        <div
          className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "#00AADF", filter: "blur(150px)", opacity: 0.18 }}
        />
        <div
          className="absolute bottom-0 left-0 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "#00AADF", filter: "blur(130px)", opacity: 0.12 }}
        />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          {/* Heading */}
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
              What We Do
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
              Full-Service Digital Solutions
            </h2>
            <p className="text-lg text-white/50 max-w-xl mx-auto">
              Everything you need to dominate your market online — under one roof.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((service, i) => (
              <Link
                key={service.href}
                href={service.href}
                className="group glass card-dark-hover rounded-2xl p-8 block reveal"
                style={{ transitionDelay: `${(i % 3) * 0.12}s` }}
              >
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{ background: "linear-gradient(135deg, rgba(0,170,223,0.35), rgba(0,170,223,0.2))" }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-accent transition-colors duration-200">
                  {service.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary-light group-hover:gap-3 transition-all duration-200">
                  Learn More
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          PROCESS — How We Work
          ============================================= */}
      <section className="py-section-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Our Process
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-dark mb-4">How We Work</h2>
            <p className="text-lg text-dark-light max-w-xl mx-auto">
              A proven, repeatable process that delivers exceptional results every single time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">
            {/* Connector line */}
            <div
              className="hidden md:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px"
              style={{ background: "linear-gradient(90deg, #00AADF, #00AADF, #00AADF)", opacity: 0.25 }}
            />

            {[
              {
                num: "01",
                title: "Discovery",
                desc: "We deep-dive into your business, goals, and competition to craft a winning digital strategy tailored to you.",
                emoji: "🔍",
              },
              {
                num: "02",
                title: "Design & Build",
                desc: "Our team creates a stunning, custom solution — pixel-perfect design meets rock-solid development.",
                emoji: "🎨",
              },
              {
                num: "03",
                title: "Launch & Grow",
                desc: "We go live, then keep optimizing — tracking performance and driving continuous, compounding growth.",
                emoji: "🚀",
              },
            ].map((step, i) => (
              <div
                key={step.num}
                className="text-center reveal"
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <div className="relative inline-flex items-center justify-center w-32 h-32 rounded-full mb-6"
                  style={{ background: "linear-gradient(135deg, rgba(0,170,223,0.1), rgba(0,170,223,0.07))" }}>
                  <span className="text-5xl">{step.emoji}</span>
                  <span
                    className="absolute -top-1 -right-1 w-9 h-9 rounded-full flex items-center justify-center text-xs font-black text-white"
                    style={{ background: "linear-gradient(135deg, #00AADF, #00AADF)" }}
                  >
                    {step.num}
                  </span>
                </div>
                <h3 className="text-xl font-black text-dark mb-3">{step.title}</h3>
                <p className="text-dark-light text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =============================================
          WHY CHOOSE US — Content-rich SEO section
          ============================================= */}
      <section className="py-section-y bg-white">
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

            {/* Left: main copy */}
            <div className="reveal">
              <span className="inline-block text-[#00AADF] text-sm font-bold tracking-[0.2em] uppercase mb-4">Why Canadian Web Designs</span>
              <h2 className="text-3xl lg:text-4xl font-black text-gray-900 mb-6 leading-tight">
                Canada&apos;s Most Trusted Web Design &amp; Digital Marketing Agency
              </h2>
              <div className="prose prose-gray max-w-none text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Since 2014, Canadian Web Designs has helped hundreds of small and medium businesses across Canada build a powerful online presence. From Toronto to Vancouver, Brampton to Calgary, our team of 25+ designers, developers, and marketers delivers websites that don&apos;t just look great — they drive real revenue.
                </p>
                <p>
                  We believe every Canadian business deserves a professional website at an affordable price. That&apos;s why we offer transparent, flat-rate pricing with no hidden fees and no long-term contracts. Whether you need a brand-new website, an SEO overhaul, or a complete digital marketing strategy, we have a solution that fits your budget.
                </p>
                <p>
                  Our web design process starts with understanding your business goals, your industry, and your customers. We then craft a custom website strategy built around converting visitors into leads — not just a pretty design. Every website we build is mobile-first, fast-loading, and optimized for search engines from day one.
                </p>
                <p>
                  Beyond web design, we offer a full suite of digital marketing services: search engine optimization (SEO), Google Ads management, social media marketing, graphic design, and AI-powered business consultation. We&apos;re your one-stop shop for digital growth — so you never have to juggle multiple vendors again.
                </p>
              </div>
            </div>

            {/* Right: differentiators */}
            <div className="reveal space-y-5">
              {[
                {
                  title: "Canadian-Owned & Operated",
                  body: "We&apos;re proudly Canadian. Our team understands the Canadian market, bilingual considerations, and local SEO — giving your business an edge over international agencies.",
                  icon: "🍁",
                },
                {
                  title: "Results-Focused Development",
                  body: "Every design decision is rooted in conversion rate optimization. We build websites that turn visitors into paying customers — backed by data, not guesswork.",
                  icon: "📈",
                },
                {
                  title: "Dedicated Support",
                  body: "You get a real person, not a ticket system. Our clients have direct access to their project manager throughout the build and beyond.",
                  icon: "🤝",
                },
                {
                  title: "No Lock-In Contracts",
                  body: "We earn your business every month. Our affordable monthly maintenance and marketing plans are flexible — cancel any time if we&apos;re not delivering.",
                  icon: "🔓",
                },
                {
                  title: "End-to-End Digital Solutions",
                  body: "From your first Google impression to the moment a visitor fills out your contact form, we optimize every step. SEO, ads, social media, and web design — all under one roof.",
                  icon: "⚡",
                },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className="reveal flex gap-4 p-5 rounded-2xl border border-gray-100 bg-white hover:border-[#00AADF]/30 hover:shadow-md transition-all duration-300"
                  style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.04)", transitionDelay: `${i * 0.07}s` }}
                >
                  <span className="text-2xl shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-black text-gray-900 text-base mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: item.body }} />
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* =============================================
          PORTFOLIO PREVIEW — Dark section
          ============================================= */}
      <section
        className="py-section-y relative overflow-hidden"
        style={{ background: "#08121F" }}
      >
        <Image src="/portfolio/remove-my-walls.jpg" alt="" fill className="object-cover object-center pointer-events-none" style={{ opacity: 0.25 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "rgba(8,18,31,0.78)" }} />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.035) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="max-w-[1280px] mx-auto px-6 lg:px-8 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 gap-4 reveal">
            <div>
              <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-3">
                Portfolio
              </span>
              <h2 className="text-4xl lg:text-5xl font-black text-white">Our Work</h2>
            </div>
            <Link
              href="/portfolio"
              className="group inline-flex items-center gap-2 text-primary-light font-semibold hover:text-accent transition-colors shrink-0"
            >
              View All Projects
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {portfolio.map((item, i) => (
              <Link
                key={item.src}
                href="/portfolio"
                className="group block reveal-scale"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                {/* Image */}
                <div
                  className="relative overflow-hidden rounded-2xl"
                  style={{
                    aspectRatio: "16/10",
                    boxShadow: "0 8px 30px rgba(0,0,0,0.4)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <Image
                    src={item.src}
                    alt={item.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: "rgba(0,170,223,0.08)" }}
                  />
                </div>
                {/* Text below */}
                <div className="mt-3 px-1">
                  <h3 className="text-white font-bold text-base leading-snug group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-white/40 text-sm mt-0.5">{item.tag}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================
          TESTIMONIALS
          ============================================= */}
      <section className="py-section-y" style={{ background: "#f8f7fc" }}>
        <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-4">
              Reviews
            </span>
            <h2 className="text-4xl lg:text-5xl font-black text-dark mb-4">What Our Clients Say</h2>
            <div className="flex items-center justify-center gap-3">
              <StarRating rating={5} size="lg" />
              <span className="text-dark-light ml-1">
                {config.rating}/5 from {config.reviewCount}+ verified reviews
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="bg-white rounded-2xl p-8 card-hover reveal"
                style={{
                  transitionDelay: `${i * 0.12}s`,
                  boxShadow: "0 4px 24px rgba(0,170,223,0.07)",
                }}
              >
                <div
                  className="text-6xl font-black leading-none mb-3"
                  style={{ color: "rgba(0,170,223,0.15)" }}
                >
                  &ldquo;
                </div>
                <StarRating rating={5} size="sm" />
                <blockquote className="text-dark leading-relaxed mt-4 mb-6 text-sm italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0"
                    style={{ background: "linear-gradient(135deg, #00AADF, #00AADF)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 reveal">
            <Link
              href="/testimonials"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary text-primary font-bold rounded-btn hover:bg-primary hover:text-white transition-all duration-300"
            >
              View All Reviews
            </Link>
          </div>
        </div>
      </section>

      {/* Client Logo Carousel */}
      <ClientLogoCarousel />

      {/* =============================================
          CTA — Dark with animated orbs
          ============================================= */}
      <section
        className="relative py-14 overflow-hidden"
        style={{ background: "#010C1E" }}
      >
        <Image src="/blog/seo-services-london-ontario.png" alt="" fill className="object-cover object-center pointer-events-none" style={{ opacity: 0.28 }} />
        <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(135deg, rgba(1,12,30,0.82) 0%, rgba(5,33,64,0.80) 55%, rgba(1,13,26,0.82) 100%)" }} />
        <div
          className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(120px)", opacity: 0.38 }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(100px)", opacity: 0.28, animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 text-center">
          <span className="inline-block text-accent text-sm font-bold tracking-[0.2em] uppercase mb-6 reveal">
            Get Started Today
          </span>
          <h2
            className="font-black text-white mb-6 reveal delay-1"
            style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", lineHeight: 1.08 }}
          >
            Ready to Grow<br />
            <span className="gradient-text-animated">Your Business?</span>
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10 reveal delay-2">
            Get a free consultation and see exactly how we can help you dominate your market online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center reveal delay-3">
            <Link
              href="/contact"
              className="btn-shimmer group inline-flex items-center justify-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.5)" }}
            >
              Book a Free Call
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href={`tel:${config.phone}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-5 glass text-white font-bold rounded-btn text-lg hover:bg-white/15 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
          </div>

          {/* Trust micro-signals */}
          <div className="flex flex-wrap justify-center gap-8 mt-12 reveal delay-4">
            {["No long-term contracts", "Free initial consultation", "Results guaranteed"].map((t) => (
              <span key={t} className="text-white/40 text-sm flex items-center gap-2">
                <span className="text-accent">✓</span> {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <BreadcrumbSchema items={[]} />

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: config.businessName,
            image: `https://${config.domain}/logo.png`,
            "@id": `https://${config.domain}`,
            url: `https://${config.domain}`,
            telephone: config.phone,
            address: Object.values(config.addresses).map((addr) => ({
              "@type": "PostalAddress",
              streetAddress: addr.street,
              addressLocality: addr.city,
              addressRegion: addr.province,
              postalCode: addr.postalCode,
              addressCountry: "CA",
            })),
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
              opens: "08:00",
              closes: "18:00",
            },
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: config.rating,
              reviewCount: config.reviewCount,
              bestRating: 5,
            },
          }),
        }}
      />
    </>
  );
}
