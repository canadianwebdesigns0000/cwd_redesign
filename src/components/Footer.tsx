import Link from "next/link";
import { getConfig } from "@/lib/client-config";
import SocialIcon from "./SocialIcon";

const config = getConfig();

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-section-y-sm pb-8">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <h3 className="text-lg font-bold mb-4">{config.businessName}</h3>
            <p className="text-gray-300 text-sm mb-4">
              Professional web design, SEO, and digital marketing services across Canada since {config.founded}.
            </p>
            <div className="flex gap-1 flex-wrap">
              {config.socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 flex items-center justify-center rounded-lg text-gray-300 hover:text-white hover:bg-white/10 transition-all duration-200"
                  aria-label={link.label}
                >
                  <SocialIcon name={link.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-0.5 text-sm">
              {[
                { href: "/who-we-are", label: "Who We Are" },
                { href: "/our-story", label: "Our Story" },
                { href: "/portfolio", label: "Our Portfolio" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/careers", label: "Careers" },
                { href: "/contact", label: "Get In Touch" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-1.5 block min-h-[40px] flex items-center"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#00AADF] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${config.phone}`} className="hover:text-white transition-colors duration-200 py-1 min-h-[44px] flex items-center">{config.phone}</a>
              </li>
              {Object.entries(config.addresses).map(([key, addr]) => (
                <li key={key} className="flex items-start gap-2.5 pt-1">
                  <svg className="w-4 h-4 text-[#00AADF] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <span>
                    <span className="text-white capitalize font-semibold">{key}:</span><br />
                    {addr.street}<br />
                    {addr.city}, {addr.province} {addr.postalCode}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service areas */}
          <div>
            <h3 className="text-lg font-bold mb-4">Service Areas</h3>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-0 text-sm">
              {config.cities.map((city) => (
                <li key={city.slug}>
                  <Link
                    href={`/locations/${city.slug}`}
                    className="text-gray-300 hover:text-white transition-colors duration-200 py-1.5 block min-h-[40px] flex items-center"
                  >
                    {city.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-300">
            <p>&copy; {new Date().getFullYear()} {config.businessName}. All rights reserved.</p>
            <div className="flex gap-1 flex-wrap justify-center">
              {[
                { href: "/privacy-policy", label: "Privacy Policy" },
                { href: "/terms-and-conditions", label: "Terms & Conditions" },
                { href: "/refund-policy", label: "Refund Policy" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="hover:text-white transition-colors duration-200 px-3 py-2 min-h-[44px] flex items-center"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
