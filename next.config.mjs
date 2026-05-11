/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  compress: true,
  poweredByHeader: false,
  experimental: {
    outputFileTracingIncludes: {
      "/blog": ["./content/blog/**/*.md"],
    },
  },
  async redirects() {
    return [
      // What We Do navigation alias
      { source: "/what-we-do", destination: "/services/web-design-development", permanent: true },
      { source: "/what-we-do/", destination: "/services/web-design-development", permanent: true },

      
      // ============================================
      // Service Slug Aliases
      // ============================================
      {
        source: "/services/web-design",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/services/social-media",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/services/maintenance",
        destination: "/services/website-maintenance",
        permanent: true,
      },

      // terms-conditions without 'and'
      {
        source: "/terms-conditions",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-conditions/",
        destination: "/terms-and-conditions",
        permanent: true,
      },

      // ============================================
      // Service Pages — WordPress → Vercel
      // ============================================
      {
        source: "/website-design-development",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/website-design-development/",
        destination: "/services/web-design-development",
        permanent: true,
      },
      {
        source: "/search-engine-optimization",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/search-engine-optimization/",
        destination: "/services/seo",
        permanent: true,
      },
      {
        source: "/graphic-design",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/graphic-design/",
        destination: "/services/graphic-design",
        permanent: true,
      },
      {
        source: "/social-media-optimization",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/social-media-optimization/",
        destination: "/services/social-media-optimization",
        permanent: true,
      },
      {
        source: "/maintenance",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/maintenance/",
        destination: "/services/website-maintenance",
        permanent: true,
      },
      {
        source: "/ai-consultation",
        destination: "/services/ai-consultation",
        permanent: true,
      },
      {
        source: "/ai-consultation/",
        destination: "/services/ai-consultation",
        permanent: true,
      },

      // ============================================
      // Page Aliases — WordPress → Vercel
      // ============================================
      {
        source: "/about-us",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/about-us/",
        destination: "/who-we-are",
        permanent: true,
      },
      {
        source: "/get-in-touch",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/get-in-touch/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/quote/",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/our-portfolio",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/our-portfolio/",
        destination: "/portfolio",
        permanent: true,
      },
      {
        source: "/terms-of-service",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/terms-of-service/",
        destination: "/terms-and-conditions",
        permanent: true,
      },
      {
        source: "/services",
        destination: "/services/web-design-development",
        permanent: true,
      },

      // ============================================
      // Location Pages — /web-designs/:city → /locations/:city
      // ============================================
      {
        source: "/web-designs/:city",
        destination: "/locations/:city",
        permanent: true,
      },
      {
        source: "/web-design/:city",
        destination: "/locations/:city",
        permanent: true,
      },

      // ============================================
      // City slug redirects — /web-design-{city} → /locations/{city}
      // ============================================
      { source: "/web-design-toronto",       destination: "/locations/toronto",       permanent: true },
      { source: "/web-design-mississauga",   destination: "/locations/mississauga",   permanent: true },
      { source: "/web-design-brampton",      destination: "/locations/brampton",      permanent: true },
      { source: "/web-design-calgary",       destination: "/locations/calgary",       permanent: true },
      { source: "/web-design-vancouver",     destination: "/locations/vancouver",     permanent: true },
      { source: "/web-design-montreal",      destination: "/locations/montreal",      permanent: true },
      { source: "/web-design-edmonton",      destination: "/locations/edmonton",      permanent: true },
      { source: "/web-design-ottawa",        destination: "/locations/ottawa",        permanent: true },
      { source: "/web-design-north-york",    destination: "/locations/north-york",    permanent: true },
      { source: "/web-design-richmond-hill", destination: "/locations/richmond-hill", permanent: true },
      { source: "/web-design-kitchener",     destination: "/locations/kitchener",     permanent: true },
      { source: "/web-design-halifax",       destination: "/locations/halifax",       permanent: true },
      { source: "/web-design-surrey",        destination: "/locations/surrey",        permanent: true },
      { source: "/web-design-london",        destination: "/locations/london",        permanent: true },
      { source: "/web-design-victoria",      destination: "/locations/victoria",      permanent: true },
      { source: "/web-design-windsor",       destination: "/locations/windsor",       permanent: true },
      { source: "/web-design-oshawa",        destination: "/locations/oshawa",        permanent: true },
      { source: "/web-design-vaughan",       destination: "/locations/vaughan",       permanent: true },
      { source: "/web-design-burnaby",       destination: "/locations/burnaby",       permanent: true },
      { source: "/web-design-ladner",        destination: "/locations/ladner",        permanent: true },
      { source: "/web-design-saskatoon",     destination: "/locations/saskatoon",     permanent: true },
      { source: "/web-design-barrie",        destination: "/locations/barrie",        permanent: true },

      // ============================================
      // Blog Posts — WordPress root-level → /blog/:slug
      // ============================================
      {
        source: "/5-ways-to-improve-your-websites-seo-in-2025",
        destination: "/blog/5-ways-to-improve-your-websites-seo-in-2025",
        permanent: true,
      },
      {
        source: "/why-every-business-needs-a-mobile-first-website",
        destination: "/blog/why-every-business-needs-a-mobile-first-website",
        permanent: true,
      },

      // ============================================
      // WordPress Infrastructure URLs
      // ============================================
      {
        source: "/wp-admin/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-login.php",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-content/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-includes/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/wp-json/:path*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/xmlrpc.php",
        destination: "/",
        permanent: true,
      },

      // ============================================
      // WordPress Taxonomy & Feed URLs
      // ============================================
      {
        source: "/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/feed/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/category/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/tag/:slug",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/author/:slug",
        destination: "/who-we-are",
        permanent: true,
      },

      // ============================================
      // Common WordPress Pagination
      // ============================================
      {
        source: "/page/:num",
        destination: "/",
        permanent: true,
      },

      // ============================================
      // WordPress Sitemap URLs → New Sitemap
      // ============================================
      {
        source: "/wp-sitemap.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/wp-sitemap-:path*",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap_index.xml",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/comments/feed",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/comments/feed/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
