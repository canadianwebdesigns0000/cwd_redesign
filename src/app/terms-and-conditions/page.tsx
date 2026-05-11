import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms and Conditions for ${config.businessName} services.`,
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <section className="py-section-y-sm md:py-section-y">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark mb-8">Terms &amp; Conditions</h1>
        <p className="text-dark-light mb-4">Last updated: January 2025</p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Agreement to Terms</h2>
        <p className="text-dark-light mb-4">
          By accessing and using the {config.businessName} website, you agree to be bound by these
          Terms and Conditions. If you do not agree, please do not use our website or services.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Services</h2>
        <p className="text-dark-light mb-4">
          {config.businessName} provides web design, graphic design, SEO, social media optimization,
          website maintenance, and AI consultation services. All services are subject to separate
          service agreements.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Intellectual Property</h2>
        <p className="text-dark-light mb-4">
          All content on this website, including text, graphics, logos, and images, is the property
          of {config.businessName} and is protected by copyright law.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-dark-light mb-4">
          {config.businessName} shall not be liable for any indirect, incidental, or consequential
          damages arising from the use of our website or services.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Contact</h2>
        <p className="text-dark-light">
          Questions about these terms? Contact us at{" "}
          <a href={`mailto:${config.emails.support}`} className="text-primary hover:underline">
            {config.emails.support}
          </a>.
        </p>
      </div>
    </section>
  );
}
