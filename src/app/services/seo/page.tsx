import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "seo")!;

export const metadata: Metadata = {
  title: "SEO Services",
  description: "Looking for the best Search Engine Optimization service in Canada? Canadian Web Designs can help — we offer a complete SEO service package.",
  alternates: { canonical: "/services/seo" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does SEO take to show results?",
      acceptedAnswer: { "@type": "Answer", text: "Most clients see measurable improvement in rankings and organic traffic within 3–6 months. Competitive industries may take 6–12 months. We provide monthly reporting so you can track progress every step of the way." },
    },
    {
      "@type": "Question",
      name: "What is included in your SEO service?",
      acceptedAnswer: { "@type": "Answer", text: "Our SEO service includes a full technical audit, on-page optimization, keyword research, content strategy, link building, local SEO (Google Business Profile), and monthly performance reports." },
    },
    {
      "@type": "Question",
      name: "Do you offer local SEO for Canadian businesses?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. We specialize in local SEO across all major Canadian cities including Toronto, Brampton, Mississauga, Calgary, and Vancouver. We optimize your Google Business Profile, build local citations, and create geo-targeted content." },
    },
    {
      "@type": "Question",
      name: "Can you guarantee first-page Google rankings?",
      acceptedAnswer: { "@type": "Answer", text: "No ethical SEO agency can guarantee specific rankings — Google's algorithm is complex and constantly changing. What we guarantee is a proven, white-hat strategy and transparent reporting. Our average client sees 300%+ organic traffic growth within 12 months." },
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
