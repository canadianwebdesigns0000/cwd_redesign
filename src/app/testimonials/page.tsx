import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { getConfig } from "@/lib/client-config";
import StarRating from "@/components/StarRating";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const config = getConfig();

export const metadata: Metadata = {
  title: "Testimonials",
  description: `Read ${config.reviewCount}+ five-star reviews from ${config.businessName} clients across Canada.`,
  alternates: { canonical: "/testimonials" },
};

const testimonials = [
  { name: "Remove My Walls", initials: "RM", text: `${config.businessName} completely transformed our online presence. Our leads increased by 300% within the first month. Highly recommend their services to any business looking to grow.`, location: "Toronto, ON" },
  { name: "TCM Wellness", initials: "TW", text: "Professional, creative, and results-driven. They delivered exactly what we needed to grow our business online. The team went above and beyond our expectations.", location: "Brampton, ON" },
  { name: "GTA Grizzly", initials: "GG", text: "The best web design company in Canada. Their SEO work put us on the first page of Google within weeks. We've seen a significant increase in calls and inquiries.", location: "Mississauga, ON" },
  { name: "BlackGold Asphalt", initials: "BA", text: `Outstanding work on our website and branding. The team at ${config.businessName} really understands how to make a business stand out online.`, location: "Calgary, AB" },
  { name: "Local Restaurant Client", initials: "LR", text: "Our new website looks amazing and our online orders have doubled since launch. The team was responsive and professional throughout the entire process.", location: "Vancouver, BC" },
  { name: "Dental Clinic Client", initials: "DC", text: `We needed a modern website that would attract new patients. ${config.businessName} delivered beyond our expectations. Our online bookings are up 150%.`, location: "Ottawa, ON" },
  { name: "Real Estate Client", initials: "RE", text: "The SEO and web design package transformed our lead generation. We're now ranking on the first page for all our target keywords.", location: "Edmonton, AB" },
  { name: "E-commerce Client", initials: "EC", text: "From design to development to launch, the experience was seamless. Our online sales have grown significantly since the new site went live.", location: "Montreal, QC" },
  { name: "Construction Company Client", initials: "CC", text: "Professional team that understands the needs of service-based businesses. Our website now generates consistent leads every week.", location: "Halifax, NS" },
];

export default function TestimonialsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Testimonials", href: "/testimonials" }]} />

      {/* =============================================
          HERO
          ============================================= */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        {/* Background image */}
        <Image src="/blog/seo-services-london-ontario.png" alt="" fill className="object-cover object-center" priority />
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
              <span className="text-white/80 text-sm font-medium tracking-wide">{config.reviewCount}+ Verified Reviews</span>
            </div>
            <h1
              className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}
            >
              Real Clients,{" "}
              <span className="gradient-text-animated">Real Results</span>
            </h1>
            <div className="hero-fade-up-2 flex items-center gap-3 mb-4">
              <StarRating rating={5} size="lg" />
              <span className="text-white/70 font-semibold">{config.rating ?? 5}/5 — {config.reviewCount}+ reviews</span>
            </div>
            <p className="hero-fade-up-3 text-xl text-white/60 leading-relaxed">
              Don&apos;t take our word for it. See what Canadian business owners say about working with us.
            </p>
          </div>
        </div>
      </section>

      {/* =============================================
          TESTIMONIALS GRID
          ============================================= */}
      <section
        className="py-section-y relative"
        style={{ background: "#f8fafc" }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-14 reveal">
            {[
              { value: `${config.reviewCount}+`, label: "Five-Star Reviews" },
              { value: String(config.rating ?? 5), label: "Average Rating" },
              { value: `${config.cities.length}+`, label: "Cities Served" },
            ].map((s) => (
              <div key={s.label} className="bg-white rounded-2xl px-4 py-5 text-center border border-gray-100" style={{ boxShadow: "0 2px 12px rgba(0,0,0,0.05)" }}>
                <p className="text-3xl font-black text-gray-900 mb-1">{s.value}</p>
                <p className="text-gray-400 text-xs">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div
                key={t.name}
                className="group bg-white rounded-2xl p-7 flex flex-col reveal border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)", transitionDelay: `${(i % 3) * 0.1}s` }}
              >
                {/* Quote mark */}
                <div
                  className="text-5xl font-black leading-none mb-3 transition-colors duration-300"
                  style={{ color: "rgba(0,170,223,0.25)" }}
                >
                  &ldquo;
                </div>
                <StarRating rating={5} size="sm" />
                <blockquote className="text-gray-600 leading-relaxed mt-4 mb-6 text-sm flex-1 italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-5 border-t border-gray-100">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-black text-white shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, #003B6F, #00AADF)" }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{t.name}</p>
                    <p className="text-gray-400 text-xs">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal">
            <Link
              href="/contact"
              className="btn-shimmer inline-flex items-center gap-2 px-10 py-5 text-white font-black rounded-btn text-lg transition-all duration-300"
              style={{ background: "#00AADF", boxShadow: "0 4px 32px rgba(0,170,223,0.4)" }}
            >
              Get Your Free Quote
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
            "@type": "LocalBusiness",
            name: config.businessName,
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: config.rating,
              reviewCount: config.reviewCount,
              bestRating: 5,
            },
            review: testimonials.map((t) => ({
              "@type": "Review",
              reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
              author: { "@type": "Organization", name: t.name },
              reviewBody: t.text,
            })),
          }),
        }}
      />
    </>
  );
}
