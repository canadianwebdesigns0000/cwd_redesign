import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "social-media-optimization")!;

export const metadata: Metadata = {
  title: "Social Media Optimization Services",
  description: "Build a powerful social media presence with Canadian Web Designs. Social media optimization, content creation, and community management across all platforms.",
  alternates: { canonical: "/services/social-media-optimization" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which social media platforms do you manage?",
      acceptedAnswer: { "@type": "Answer", text: "We manage Instagram, Facebook, LinkedIn, TikTok, X (Twitter), Pinterest, and YouTube. We recommend the best platforms for your industry and audience — not all platforms make sense for every business." },
    },
    {
      "@type": "Question",
      name: "How often will you post on my social media accounts?",
      acceptedAnswer: { "@type": "Answer", text: "Posting frequency depends on your package and platform. Typically we post 3–7 times per week per platform, with a content calendar approved by you in advance. Consistency is key to growing your following." },
    },
    {
      "@type": "Question",
      name: "Do you create the social media content or do I need to provide it?",
      acceptedAnswer: { "@type": "Answer", text: "We handle everything — copywriting, graphic design, video editing, and scheduling. You simply review and approve the monthly content calendar. You can also supply your own photos or videos if you prefer a more personal touch." },
    },
    {
      "@type": "Question",
      name: "How do you measure social media success?",
      acceptedAnswer: { "@type": "Answer", text: "We track follower growth, engagement rate, reach, impressions, click-through rates, and leads generated. Monthly reports are provided so you always know how your social media is performing." },
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
