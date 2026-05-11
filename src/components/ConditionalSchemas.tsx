"use client";

import { usePathname } from "next/navigation";

const SUPPRESS_LOCAL_BUSINESS = ["/privacy-policy", "/refund-policy", "/terms-and-conditions"];

interface Props {
  localBusiness: object;
  website: object;
  product: object;
}

export default function ConditionalSchemas({ localBusiness, website, product }: Props) {
  const pathname = usePathname();
  const showLocalBusiness = !SUPPRESS_LOCAL_BUSINESS.some((p) => pathname.startsWith(p));
  return (
    <>
      {showLocalBusiness && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(product) }}
      />
    </>
  );
}
