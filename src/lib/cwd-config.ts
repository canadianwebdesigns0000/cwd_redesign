import type { ClientConfig } from "./client-config";

export const cwdConfig: ClientConfig = {
  // Business Identity
  businessName: "Canadian Web Designs",
  industry: "web-design",
  president: "Amir Khela",
  founded: 2014,
  teamSize: 25,

  // Reputation
  rating: 5,
  reviewCount: 150,

  // Contact
  phone: "647-689-6069",
  emails: {
    support: "support@canadianwebdesigns.ca",
    careers: "careers@canadianwebdesigns.ca",
    sales: "sales@canadianwebdesigns.ca",
  },
  addresses: {
    toronto: {
      street: "2967 Dundas St W #718",
      city: "Toronto",
      province: "ON",
      postalCode: "M6P 1Z2",
    },
    brampton: {
      street: "5 Cherrycrest Drive #202",
      city: "Brampton",
      province: "ON",
      postalCode: "L6P 3W4",
    },
  },
  businessHours: "Mon-Fri 08:00-18:00",

  // Web / Analytics
  domain: "canadianwebdesigns.ca",
  gaId: "G-GT8P1K4C3T",

  // Content
  services: [
    {
      slug: "web-design-development",
      title: "Web Design & Development",
      tagline: "Custom websites that convert visitors into customers",
      description:
        "We build fast, responsive, and visually stunning websites tailored to your business goals. Every site we create is optimized for performance, SEO, and conversions — because a beautiful website that doesn't generate leads is just a digital brochure.",
      features: [
        "Custom responsive design for all devices",
        "Fast-loading, SEO-optimized architecture",
        "E-commerce and booking integrations",
        "Content management systems",
        "SSL security and performance optimization",
        "Ongoing support and maintenance",
      ],
    },
    {
      slug: "graphic-design",
      title: "Graphic Design",
      tagline: "Professional branding that makes you stand out",
      description:
        "First impressions matter. Our graphic design team creates compelling visual identities that capture your brand essence and resonate with your target audience — from logos and business cards to marketing materials and social media graphics.",
      features: [
        "Logo design and brand identity",
        "Business cards and stationery",
        "Marketing materials and brochures",
        "Social media graphics and templates",
        "Infographics and presentations",
        "Print-ready and digital formats",
      ],
    },
    {
      slug: "seo",
      title: "Search Engine Optimization (SEO)",
      tagline: "Dominate search results and drive organic traffic",
      description:
        "Our data-driven SEO strategies put your business in front of customers who are actively searching for your services. We combine technical optimization, content strategy, and link building to deliver measurable results.",
      features: [
        "Comprehensive SEO audit and strategy",
        "On-page and technical SEO optimization",
        "Keyword research and content strategy",
        "Local SEO and Google Business Profile",
        "Link building and authority development",
        "Monthly reporting and analytics",
      ],
    },
    {
      slug: "social-media-optimization",
      title: "Social Media Optimization",
      tagline: "Build your brand presence across social platforms",
      description:
        "Grow your audience and engage with customers where they spend their time. Our social media team develops strategies that increase brand awareness, drive engagement, and generate leads through Facebook, Instagram, LinkedIn, and more.",
      features: [
        "Social media strategy and planning",
        "Content creation and scheduling",
        "Community management and engagement",
        "Paid social advertising campaigns",
        "Analytics and performance reporting",
        "Platform-specific optimization",
      ],
    },
    {
      slug: "website-maintenance",
      title: "Website Maintenance",
      tagline: "Keep your website secure, fast, and up-to-date",
      description:
        "Your website is a living asset that needs regular care. Our maintenance plans ensure your site stays secure, performs at its best, and continues to serve your business goals — so you can focus on running your business.",
      features: [
        "Regular security updates and patches",
        "Performance monitoring and optimization",
        "Content updates and modifications",
        "Backup management and recovery",
        "Uptime monitoring and alerting",
        "Technical support and troubleshooting",
      ],
    },
    {
      slug: "ai-consultation",
      title: "AI Consultation",
      tagline: "Leverage artificial intelligence for business growth",
      description:
        "Stay ahead of the curve with our AI consultation services. We help businesses identify opportunities to implement AI solutions that streamline operations, improve customer experiences, and create competitive advantages.",
      features: [
        "AI readiness assessment",
        "Chatbot and automation implementation",
        "AI-powered content strategy",
        "Process automation consulting",
        "AI tool selection and integration",
        "Team training and adoption support",
      ],
    },
  ],

  cities: [
    { name: "Calgary", province: "AB", slug: "calgary" },
    { name: "Vancouver", province: "BC", slug: "vancouver" },
    { name: "Montreal", province: "QC", slug: "montreal" },
    { name: "Edmonton", province: "AB", slug: "edmonton" },
    { name: "Toronto", province: "ON", slug: "toronto" },
    { name: "Mississauga", province: "ON", slug: "mississauga" },
    { name: "Ottawa", province: "ON", slug: "ottawa" },
    { name: "North York", province: "ON", slug: "north-york" },
    { name: "Richmond Hill", province: "ON", slug: "richmond-hill" },
    { name: "Brampton", province: "ON", slug: "brampton" },
    { name: "Kitchener", province: "ON", slug: "kitchener" },
    { name: "Halifax", province: "NS", slug: "halifax" },
    { name: "Surrey", province: "BC", slug: "surrey" },
    { name: "London", province: "ON", slug: "london" },
    { name: "Victoria", province: "BC", slug: "victoria" },
    { name: "Windsor", province: "ON", slug: "windsor" },
    { name: "Oshawa", province: "ON", slug: "oshawa" },
    { name: "Vaughan", province: "ON", slug: "vaughan" },
    { name: "Burnaby", province: "BC", slug: "burnaby" },
    { name: "Ladner", province: "BC", slug: "ladner" },
    { name: "Saskatoon", province: "SK", slug: "saskatoon" },
    { name: "Barrie", province: "ON", slug: "barrie" },
  ],

  // Navigation
  navigation: [
    { label: "Home", href: "/" },
    {
      label: "Who We Are",
      href: "/who-we-are",
      children: [
        { label: "Who We Are", href: "/who-we-are" },
        { label: "Our Story", href: "/our-story" },
      ],
    },
    {
      label: "What We Do",
      href: "/services",
      children: [
        { label: "Web Design & Development", href: "/services/web-design-development" },
        { label: "Graphic Design", href: "/services/graphic-design" },
        { label: "SEO", href: "/services/seo" },
        { label: "Social Media Optimization", href: "/services/social-media-optimization" },
        { label: "Website Maintenance", href: "/services/website-maintenance" },
        { label: "AI Consultation", href: "/services/ai-consultation" },
      ],
    },
    { label: "Our Portfolio", href: "/portfolio" },
    { label: "Get In Touch", href: "/contact" },
  ],

  socialLinks: [
    { label: "Facebook", href: "https://facebook.com/canadianwebdesigns", icon: "facebook" },
    { label: "Instagram", href: "https://instagram.com/canadianwebdesigns", icon: "instagram" },
    { label: "YouTube", href: "https://youtube.com/canadianwebdesigns", icon: "youtube" },
    { label: "Twitter/X", href: "https://x.com/canadianwebdesigns", icon: "twitter" },
    { label: "LinkedIn", href: "https://linkedin.com/company/canadianwebdesigns", icon: "linkedin" },
    { label: "Amazon", href: "https://amazon.com/author/canadianwebdesigns", icon: "amazon" },
  ],
};
