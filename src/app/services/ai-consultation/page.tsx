import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";
import ServicePageTemplate from "@/components/ServicePageTemplate";

const service = getConfig().services.find((s) => s.slug === "ai-consultation")!;

export const metadata: Metadata = {
  title: "AI Consultation Services",
  description: "Leverage artificial intelligence to automate operations and outpace competitors. Canadian Web Designs offers AI consultation and implementation for Canadian businesses.",
  alternates: { canonical: "/services/ai-consultation" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is AI consultation for businesses?",
      acceptedAnswer: { "@type": "Answer", text: "AI consultation helps your business identify opportunities to use artificial intelligence tools — such as chatbots, automated customer responses, predictive analytics, and content generation — to save time, reduce costs, and improve customer experience." },
    },
    {
      "@type": "Question",
      name: "Is AI automation only for large companies?",
      acceptedAnswer: { "@type": "Answer", text: "No. AI tools are now accessible and affordable for small and medium-sized businesses. We help Canadian businesses of all sizes implement practical AI solutions that deliver immediate ROI without complex infrastructure." },
    },
    {
      "@type": "Question",
      name: "What AI tools do you work with?",
      acceptedAnswer: { "@type": "Answer", text: "We work with a range of AI platforms including OpenAI (ChatGPT / GPT-4), Anthropic Claude, Google Gemini, and purpose-built automation tools like Zapier, Make, and n8n. We recommend the best fit for your specific use case and budget." },
    },
    {
      "@type": "Question",
      name: "How long does AI implementation take?",
      acceptedAnswer: { "@type": "Answer", text: "Simple automations like AI-powered email responses or chatbot setup can be deployed in as little as 1–2 weeks. More complex integrations into existing systems may take 4–8 weeks. We provide a detailed project timeline after the discovery session." },
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
