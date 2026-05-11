"use client";

import { usePathname } from "next/navigation";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export default function HreflangTags() {
  const pathname = usePathname();
  const url = `https://${config.domain}${pathname}`;
  return (
    <>
      <link rel="alternate" hrefLang="en-CA" href={url} />
      <link rel="alternate" hrefLang="x-default" href={url} />
    </>
  );
}
