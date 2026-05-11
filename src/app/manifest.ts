import type { MetadataRoute } from "next";
import { getConfig } from "@/lib/client-config";

export default function manifest(): MetadataRoute.Manifest {
  const config = getConfig();
  return {
    name: config.businessName,
    short_name: "CWD",
    description: "Web Design & Digital Marketing Across Canada",
    start_url: "/",
    display: "standalone",
    background_color: "#010C1E",
    theme_color: "#00AADF",
    icons: [
      {
        src: "/logos/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/logos/logo.webp",
        sizes: "192x192",
        type: "image/webp",
        purpose: "maskable",
      },
      {
        src: "/logos/logo.webp",
        sizes: "512x512",
        type: "image/webp",
        purpose: "maskable",
      },
    ],
  };
}
