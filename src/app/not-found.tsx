import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
  robots: { index: false, follow: false },
};

const popularPages = [
  { label: "Services", href: "/services/web-design-development", icon: "🖥️" },
  { label: "Our Portfolio", href: "/portfolio", icon: "🎨" },
  { label: "Blog", href: "/blog", icon: "📝" },
  { label: "About Us", href: "/who-we-are", icon: "🏢" },
  { label: "FAQ", href: "/faq", icon: "❓" },
  { label: "Contact", href: "/contact", icon: "💬" },
];

export default function NotFound() {
  return (
    <div
      className="min-h-[80vh] flex items-center justify-center px-4 py-20"
      style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
    >
      {/* Background dot grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* Orb */}
      <div
        className="fixed top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.18 }}
      />

      <div className="relative max-w-2xl mx-auto text-center">
        {/* 404 display */}
        <div
          className="text-[8rem] font-black leading-none mb-2 select-none"
          style={{
            background: "linear-gradient(135deg, #00AADF, #003B6F)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          404
        </div>

        <h1 className="text-2xl font-black text-white mb-3">Page Not Found</h1>
        <p className="text-white/50 mb-10 leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or may have moved.
          Try one of the links below or head back home.
        </p>

        {/* Popular links grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
          {popularPages.map((page) => (
            <Link
              key={page.href}
              href={page.href}
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-all duration-200 min-h-[44px]"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.1)",
              }}
            >
              <span className="text-lg shrink-0">{page.icon}</span>
              <span className="text-white/80 text-sm font-semibold">{page.label}</span>
            </Link>
          ))}
        </div>

        {/* Primary actions */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-white font-bold rounded-xl transition-all duration-300 min-h-[44px]"
            style={{ background: "#00AADF", boxShadow: "0 4px 24px rgba(0,170,223,0.4)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 font-bold rounded-xl transition-all duration-300 min-h-[44px]"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
              color: "#fff",
            }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
            </svg>
            Contact Us
          </Link>
        </div>

        <p className="text-white/25 text-sm">
          Need help? Call us at{" "}
          <a href="tel:+16479002507" className="text-white/50 hover:text-white transition-colors underline underline-offset-2">
            +1 (647) 900-2507
          </a>
        </p>
      </div>
    </div>
  );
}
