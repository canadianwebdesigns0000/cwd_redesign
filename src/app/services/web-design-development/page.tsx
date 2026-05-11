import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "web-design-development")!;

export const metadata: Metadata = {
  title: "Professional Web Design & Development in Canada",
  description: "Custom web design and development services across Canada. Mobile-first, SEO-optimized, high-converting websites built by Canadian Web Designs.",
  alternates: { canonical: "/services/web-design-development" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does a professional website cost in Canada?",
      acceptedAnswer: { "@type": "Answer", text: "Our custom websites typically range from $1,500 to $10,000+ depending on the scope, features, and complexity. We offer transparent, flat-rate pricing with no hidden fees. Contact us for a free quote tailored to your business." },
    },
    {
      "@type": "Question",
      name: "How long does it take to build a website?",
      acceptedAnswer: { "@type": "Answer", text: "Our average project launch time is 30 days. Simple websites can be ready in 2 weeks, while complex e-commerce or custom web applications may take 6–8 weeks. We provide a clear timeline at the start of every project." },
    },
    {
      "@type": "Question",
      name: "Do you build websites on WordPress or custom code?",
      acceptedAnswer: { "@type": "Answer", text: "We build on both — WordPress/WooCommerce for content-driven sites and blogs, Shopify for e-commerce, and fully custom Next.js/React applications for high-performance needs. We recommend the right platform based on your goals." },
    },
    {
      "@type": "Question",
      name: "Will my website be mobile-friendly?",
      acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every website we build is mobile-first and fully responsive. We test across all major devices and browsers before launch to ensure a flawless experience for every visitor." },
    },
    {
      "@type": "Question",
      name: "Do you provide website hosting and maintenance?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We offer managed hosting, security monitoring, regular updates, and ongoing maintenance packages. Our maintenance plans start at an affordable monthly rate and keep your site secure, fast, and up-to-date." },
    },
  ],
};

export default function ServicePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <ServicePageTemplate service={service} />
    </>
  );
}
