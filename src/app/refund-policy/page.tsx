import type { Metadata } from "next";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export const metadata: Metadata = {
  title: "Refund Policy",
  description: `Refund Policy for ${config.businessName} services.`,
  alternates: { canonical: "/refund-policy" },
};

export default function RefundPolicyPage() {
  return (
    <section className="py-section-y-sm md:py-section-y">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-dark mb-8">Refund Policy</h1>
        <p className="text-dark-light mb-4">Last updated: January 2025</p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Our Commitment</h2>
        <p className="text-dark-light mb-4">
          At {config.businessName}, we are committed to delivering high-quality services that meet
          our clients&apos; expectations. We work closely with each client to ensure satisfaction throughout
          the project lifecycle.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Refund Eligibility</h2>
        <p className="text-dark-light mb-4">
          Refund requests are evaluated on a case-by-case basis. Eligibility depends on the scope of
          work completed, the stage of the project, and the terms outlined in the service agreement.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">How to Request a Refund</h2>
        <p className="text-dark-light mb-4">
          To request a refund, please contact us at{" "}
          <a href={`mailto:${config.emails.support}`} className="text-primary hover:underline">
            {config.emails.support}
          </a>{" "}
          with your project details and reason for the request. We will respond within 5 business days.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Non-Refundable Items</h2>
        <p className="text-dark-light mb-4">
          Domain registrations, third-party software licenses, and hosting fees paid on behalf of the
          client are non-refundable as these are paid to external providers.
        </p>

        <h2 className="text-xl font-bold text-dark mt-8 mb-4">Contact</h2>
        <p className="text-dark-light">
          Questions? Contact us at{" "}
          <a href={`mailto:${config.emails.support}`} className="text-primary hover:underline">
            {config.emails.support}
          </a>{" "}
          or call {config.phone}.
        </p>
      </div>
    </section>
  );
}
