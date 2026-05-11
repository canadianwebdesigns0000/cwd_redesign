import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Preloader from "@/components/Preloader";
import { getConfig } from "@/lib/client-config";
import HreflangTags from "@/components/HreflangTags";
import ConditionalSchemas from "@/components/ConditionalSchemas";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const config = getConfig();

export const metadata: Metadata = {
  metadataBase: new URL(`https://${config.domain}`),
  title: {
    default: `Web Design & Digital Marketing Across Canada | Canadian Web Designs`,
    template: `%s | ${config.businessName}`,
  },
  description:
    `Professional web design, SEO, and digital marketing services across Canada. Custom websites built for results.`,
  authors: [{ name: config.businessName }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: config.businessName,
    title: `Affordable Web Design in Toronto | Canadian Web Designs`,
    description:
      `Professional web design, SEO, and digital marketing services across Canada. Custom websites built for results.`,
    url: `https://${config.domain}`,
    images: [
      {
        url: "/images/hero-leading-web-design.jpg",
        width: 1200,
        height: 630,
        alt: "Canadian Web Designs — Affordable Web Design in Toronto, Canada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@canadianwebdesigns",
    creator: "@canadianwebdesigns",
    title: `Affordable Web Design in Toronto | Canadian Web Designs`,
    description:
      `Professional web design, SEO, and digital marketing services across Canada. Custom websites built for results.`,
    images: ["/images/hero-leading-web-design.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  name: config.businessName,
  url: `https://${config.domain}`,
  logo: `https://${config.domain}/logos/logo.webp`,
  image: `https://${config.domain}/images/hero-leading-web-design.jpg`,
  description: "Canadian Web Designs is Toronto's top-rated affordable web design agency offering custom websites, SEO, graphic design, social media, and AI consultation services across Canada.",
  priceRange: "$$",
  telephone: config.phone,
  email: config.emails.support,
  hasMap: "https://www.google.com/maps/search/Canadian+Web+Designs+Toronto",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: config.phone,
    contactType: "customer service",
    areaServed: "CA",
    availableLanguage: "English",
  },
  address: [
    {
      "@type": "PostalAddress",
      streetAddress: "2967 Dundas St W #718",
      addressLocality: "Toronto",
      addressRegion: "ON",
      postalCode: "M6P 1Z2",
      addressCountry: "CA",
    },
    {
      "@type": "PostalAddress",
      streetAddress: "5 Cherrycrest Drive #202",
      addressLocality: "Brampton",
      addressRegion: "ON",
      postalCode: "L6P 3W4",
      addressCountry: "CA",
    },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "150",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Sharanya K." },
      reviewBody: "Canadian Web Designs completely transformed our online presence. The team was professional, responsive, and delivered a stunning website that exceeded our expectations. Our leads have increased significantly since launch!",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Shawn M." },
      reviewBody: "Best web design agency in Toronto! They built our e-commerce site from scratch and the results have been incredible. The SEO work they did has us ranking on the first page of Google. Highly recommend.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Dorota W." },
      reviewBody: "I was blown away by the quality of work and speed of delivery. Canadian Web Designs understood our brand perfectly and created a website that truly represents who we are. Great value for money.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5", bestRating: "5" },
      author: { "@type": "Person", name: "Matthew R." },
      reviewBody: "Working with Canadian Web Designs was a fantastic experience from start to finish. Their attention to detail and commitment to customer satisfaction is unmatched. Our new website has dramatically improved our business.",
    },
  ],
  founder: { "@type": "Person", name: "Amir Khela" },
  foundingDate: "2014",
  numberOfEmployees: { "@type": "QuantitativeValue", value: 25 },
  sameAs: config.socialLinks.map((link) => link.href),
  areaServed: [
    { "@type": "City", name: "Toronto" },
    { "@type": "City", name: "Brampton" },
    { "@type": "City", name: "Mississauga" },
    { "@type": "City", name: "Vancouver" },
    { "@type": "City", name: "Calgary" },
    { "@type": "AdministrativeArea", name: "Canada" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: config.businessName,
  url: `https://${config.domain}`,
  publisher: { "@type": "Organization", name: config.businessName },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `https://${config.domain}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const productSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web Design & Digital Marketing Services",
  provider: { "@type": "LocalBusiness", name: config.businessName },
  description: "Professional web design, SEO, graphic design, social media optimization, and AI consultation services for Canadian businesses.",
  areaServed: "Canada",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-CA" className={inter.variable}>
      <head>
        <meta name="theme-color" content="#00AADF" />
        <link rel="icon" href="/logos/favicon.png" type="image/png" />
        <link rel="shortcut icon" href="/logos/favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/logos/apple-touch-icon.png" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.googletagmanager.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://analytics.google.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        <HreflangTags />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-dark antialiased font-sans">
        <Preloader />
        <GoogleAnalytics />
        <Header />
        <main className="flex-1 pt-header-h">{children}</main>

        {/* Awards & Recognition — above footer on every page */}
        <section className="py-10 border-t border-gray-100" style={{ background: "#ffffff" }}>
          <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
            <p className="text-center text-[#00AADF] text-xs font-bold tracking-[0.2em] uppercase mb-7">Awards &amp; Recognition</p>
            <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-14">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/badges/designrush.png" alt="DesignRush Accredited Agency" height="50" className="h-12 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/badges/reliable.png" alt="Reliable Business" height="60" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/badges/clever-canadian.png" alt="Canada Best" height="60" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/badges/clutch.png" alt="Clutch Top Rated" height="40" className="h-10 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img loading="lazy" src="/badges/bbb.png" alt="BBB Accredited" height="55" className="h-14 w-auto object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </section>

        <Footer />
        <ConditionalSchemas
          localBusiness={localBusinessSchema}
          website={websiteSchema}
          product={productSchema}
        />

        {/* Scroll reveal + counter animation engine */}
        <Script id="cwd-animations" strategy="afterInteractive">{`
          (function () {
            // --- Reveal Observer ---
            var revealObs = new IntersectionObserver(function (entries) {
              entries.forEach(function (e) {
                if (e.isIntersecting) {
                  e.target.classList.add('visible');
                  revealObs.unobserve(e.target);
                }
              });
            }, { threshold: 0.12, rootMargin: '0px 0px -48px 0px' });

            // --- Counter Observer ---
            var counterObs = new IntersectionObserver(function (entries) {
              entries.forEach(function (e) {
                if (!e.isIntersecting) return;
                var el = e.target;
                if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
                  var t=parseInt(el.getAttribute("data-count")||"0",10); var sf=el.getAttribute("data-suffix")||""; var pf=el.getAttribute("data-prefix")||""; el.textContent=pf+t+sf; counterObs.unobserve(el); return;
                }
                var target = parseInt(el.getAttribute('data-count') || '0', 10);
                var suffix = el.getAttribute('data-suffix') || '';
                var prefix = el.getAttribute('data-prefix') || '';
                var duration = 1800;
                var startTime = null;
                function tick(now) {
                  if (!startTime) startTime = now;
                  var progress = Math.min((now - startTime) / duration, 1);
                  var eased = 1 - Math.pow(1 - progress, 4);
                  el.textContent = prefix + Math.round(eased * target) + suffix;
                  if (progress < 1) requestAnimationFrame(tick);
                }
                requestAnimationFrame(tick);
                counterObs.unobserve(el);
              });
            }, { threshold: 0.5 });

            function init() {
              document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale').forEach(function (el) {
                if (!el.dataset.observed) { el.dataset.observed = '1'; revealObs.observe(el); }
              });
              document.querySelectorAll('[data-count]').forEach(function (el) {
                if (!el.dataset.observed) { el.dataset.observed = '1'; counterObs.observe(el); }
              });
            }

            init();

            // Re-init after Next.js soft navigation.
            // pushState fires when URL changes, but RSC rendering is async —
            // so we retry at multiple intervals to catch elements as they appear.
            function onNav() {
              [80, 250, 500, 900, 1500].forEach(function(d) { setTimeout(init, d); });
            }
            var _push    = history.pushState.bind(history);
            var _replace = history.replaceState.bind(history);
            history.pushState    = function() { _push.apply(history, arguments);    onNav(); };
            history.replaceState = function() { _replace.apply(history, arguments); onNav(); };
            window.addEventListener('popstate', onNav);

            // Fallback: watch for new reveal elements added to the DOM
            var debounce;
            new MutationObserver(function() {
              clearTimeout(debounce);
              debounce = setTimeout(init, 100);
            }).observe(document.documentElement, { childList: true, subtree: true });
          })();
        `}</Script>
      </body>
    </html>
  );
}
