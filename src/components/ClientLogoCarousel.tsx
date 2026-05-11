"use client";

import Image from "next/image";

const clientLogos = [
  { src: "/logos/clients/ashcons.png", alt: "Ashcons" },
  { src: "/logos/clients/b2s.png", alt: "B2S" },
  { src: "/logos/clients/best-logo.png", alt: "Best Logo" },
  { src: "/logos/clients/blackgold.png", alt: "BlackGold" },
  { src: "/logos/clients/cbh.png", alt: "CBH" },
  { src: "/logos/clients/cdnbitcoin.png", alt: "CDN Bitcoin" },
  { src: "/logos/clients/clr.png", alt: "CLR" },
  { src: "/logos/clients/dreamtrue.png", alt: "DreamTrue" },
  { src: "/logos/clients/easytaxes.png", alt: "EasyTaxes" },
  { src: "/logos/clients/energyhealing.png", alt: "Energy Healing" },
  { src: "/logos/clients/ffa.png", alt: "FFA" },
  { src: "/logos/clients/kmparty.png", alt: "KM Party" },
  { src: "/logos/clients/las-services.png", alt: "LAS Services" },
  { src: "/logos/clients/src.png", alt: "SRC" },
  { src: "/logos/clients/sterilis.png", alt: "Sterilis" },
  { src: "/logos/clients/webp.jpg", alt: "WebP" },
  { src: "/logos/clients/zurva.png", alt: "Zurva" },
];

export default function ClientLogoCarousel() {
  const doubled = [...clientLogos, ...clientLogos];

  return (
    <section className="py-section-y-sm overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-dark text-center mb-8">
          Trusted by Businesses Across Canada
        </h2>
      </div>
      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
        <div className="flex animate-carousel motion-reduce:animate-none motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-8">
          {doubled.map((logo, i) => (
            <div
              key={`${logo.alt}-${i}`}
              className="flex-shrink-0 w-[140px] mx-6 flex items-center justify-center h-16 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={120}
                height={48}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
