import Script from "next/script";
import { getConfig } from "@/lib/client-config";

const config = getConfig();

export default function GoogleAnalytics() {
  if (!config.gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${config.gaId}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.gaId}');
        `}
      </Script>
    </>
  );
}
