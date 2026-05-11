"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { getConfig, type ClientNavItem } from "@/lib/client-config";
import LanguageToggle from "./LanguageToggle";

const config = getConfig();

function DesktopDropdown({ item }: { item: ClientNavItem }) {
  return (
    <div className="relative group">
      <Link
        href={item.href}
        className="flex items-center gap-1 text-sm font-semibold text-dark hover:text-primary transition-colors duration-200 relative py-1"
      >
        {item.label}
        <svg
          className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180"
          fill="none" viewBox="0 0 24 24" stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
        {/* Underline animation */}
        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
      </Link>
      <div className="absolute left-0 top-full pt-2 hidden group-hover:block z-50">
        <div
          className="bg-white rounded-2xl py-2 min-w-[260px] border border-gray-100"
          style={{ boxShadow: "0 20px 50px rgba(0,0,0,0.12)" }}
        >
          {item.children!.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="block px-5 py-2.5 text-sm text-dark hover:bg-primary-50 hover:text-primary transition-all duration-150 font-medium whitespace-nowrap"
            >
              {child.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

function MobileNav({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      <nav
        className="fixed top-header-h left-0 right-0 z-50 max-h-[calc(100vh-4rem)] overflow-y-auto"
        style={{ background: "rgba(255,255,255,0.97)", backdropFilter: "blur(20px)", boxShadow: "0 20px 50px rgba(0,0,0,0.15)" }}
      >
        <div className="py-2">
          {config.navigation.map((item) => (
            <div key={item.href}>
              {item.children ? (
                <>
                  <button
                    onClick={() => setExpandedItem(expandedItem === item.label ? null : item.label)}
                    className="flex items-center justify-between w-full px-6 py-3.5 text-base font-semibold text-dark border-b border-gray-100 hover:bg-primary-50 transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${expandedItem === item.label ? "rotate-180" : ""}`}
                      fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {expandedItem === item.label && (
                    <div className="bg-primary-50/60">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block px-10 py-2.5 text-sm font-medium text-dark-light hover:text-primary transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block px-6 py-3.5 text-base font-semibold text-dark border-b border-gray-100 hover:bg-primary-50 transition-colors"
                >
                  {item.href === "/contact" ? "Contact" : item.label}
                </Link>
              )}
            </div>
          ))}
          <div className="px-6 py-4 space-y-3">
            <a
              href={`tel:${config.phone}`}
              className="flex items-center gap-2 text-sm font-semibold text-dark"
            >
              <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              {config.phone}
            </a>
            <Link
              href="/contact"
              onClick={onClose}
              className="btn-shimmer block w-full text-center px-6 py-3.5 text-white font-bold rounded-btn transition-all duration-200 min-h-[44px]"
              style={{ background: "#00AADF", boxShadow: "0 4px 16px rgba(0,170,223,0.4)" }}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-40 h-header-h transition-all duration-300"
      style={
        scrolled
          ? { background: "rgba(255,255,255,0.96)", backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)", boxShadow: "0 2px 20px rgba(0,0,0,0.08)" }
          : { background: "#ffffff", boxShadow: "0 1px 0 rgba(0,0,0,0.06)" }
      }
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 flex items-center justify-between h-full">

        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 group">
          <Image
            src="/logos/logo-150.png"
            alt={config.businessName}
            style={{ height: "36px", width: "auto" }}
            width={150}
            height={36}
            priority
            className="transition-transform duration-200 group-hover:scale-105"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {config.navigation.map((item) =>
            item.children ? (
              <DesktopDropdown key={item.href} item={item} />
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="relative text-sm font-semibold text-dark hover:text-primary transition-colors duration-200 py-1 group"
              >
                {item.href === "/contact" ? "Contact" : item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full transition-all duration-300 group-hover:w-full" />
              </Link>
            )
          )}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${config.phone}`}
            className="hidden md:flex items-center gap-2 text-sm font-semibold text-dark hover:text-primary transition-colors duration-200"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
            {config.phone}
          </a>
          <LanguageToggle />
          <Link
            href="/contact"
            className="btn-shimmer hidden lg:inline-flex items-center justify-center px-5 py-2.5 text-white font-bold rounded-btn text-sm transition-all duration-200 min-h-[44px]"
            style={{ background: "#00AADF", boxShadow: "0 4px 16px rgba(0,170,223,0.35)" }}
          >
            Get In Touch
          </Link>
          <button
            className="lg:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-dark hover:text-primary transition-colors focus:outline-none"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
