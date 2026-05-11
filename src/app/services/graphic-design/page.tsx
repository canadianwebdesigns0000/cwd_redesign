import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "graphic-design")!;

export const metadata: Metadata = {
  title: "Graphic Design Services",
  description: "Professional graphic design, logo design, and branding services across Canada. Canadian Web Designs creates visuals that make your business unforgettable.",
  alternates: { canonical: "/services/graphic-design" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much does logo design cost?",
      acceptedAnswer: { "@type": "Answer", text: "Our logo design packages start at $299 and include multiple concepts, revisions, and all final file formats (PNG, SVG, PDF). Full branding packages with brand guidelines are also available." },
    },
    {
      "@type": "Question",
      name: "What graphic design services do you offer?",
      acceptedAnswer: { "@type": "Answer", text: "We offer logo design, full brand identity packages, business cards, brochures, social media graphics, banner ads, print materials, infographics, and more. If you need it designed, we can create it." },
    },
    {
      "@type": "Question",
      name: "How many design revisions do I get?",
      acceptedAnswer: { "@type": "Answer", text: "All our design packages include unlimited revisions until you are 100% satisfied. We want you to love what we create — we don't stop until you do." },
    },
    {
      "@type": "Question",
      name: "What file formats will I receive?",
      acceptedAnswer: { "@type": "Answer", text: "You receive all source files and export formats: SVG (vector), PNG (transparent background), PDF (print-ready), JPG, and any platform-specific formats you need. You own 100% of the final files." },
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
