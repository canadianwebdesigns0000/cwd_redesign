import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${config.businessName} — how we collect, use, and protect your information.`,
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-section-y-sm md:py-section-y">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark mb-8">Privacy Policy</h1>
        <p className="text-dark-light mb-4">Last updated: January 2025</p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Information We Collect</h2>
        <p className="text-dark-light mb-4">
          When you visit our website or contact us, we may collect personal information including your name,
          email address, phone number, and business details that you voluntarily provide through our contact forms.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">How We Use Your Information</h2>
        <p className="text-dark-light mb-4">
          We use the information we collect to respond to your inquiries, provide our services, improve our
          website, and send relevant communications about our services.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Google Analytics</h2>
        <p className="text-dark-light mb-4">
          We use Google Analytics to understand how visitors interact with our website. Google Analytics
          collects information anonymously and reports website trends without identifying individual visitors.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Cookies</h2>
        <p className="text-dark-light mb-4">
          Our website uses cookies to enhance your browsing experience and analyze site traffic. You can
          control cookie preferences through your browser settings.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Data Protection</h2>
        <p className="text-dark-light mb-4">
          We implement appropriate security measures to protect your personal information against unauthorized
          access, alteration, disclosure, or destruction.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Contact Us</h2>
        <p className="text-dark-light">
          If you have questions about this privacy policy, please contact us at{" "}
          <a href={`mailto:${config.emails.support}`} className="text-primary hover:underline">
            {config.emails.support}
          </a>.
        </p>
      </div>
    </section>
  );
}
