import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Known app routes — root-level paths that are NOT old WordPress blog slugs.
 * Any root-level path not in this set and not containing a dot (file extension)
 * is assumed to be an old WordPress blog post and redirected to /blog/:slug.
 */
const KNOWN_ROUTES = new Set([
  "blog",
  "careers",
  "contact",
  "faq",
  "locations",
  "our-story",
  "portfolio",
  "privacy-policy",
  "refund-policy",
  "services",
  "terms-and-conditions",
  "testimonials",
  "who-we-are",
  "api",
  // WordPress URLs already handled by next.config.mjs redirects
  "about-us",
  "get-in-touch",
  "quote",
  "our-portfolio",
  "terms-of-service",
  "website-design-development",
  "search-engine-optimization",
  "graphic-design",
  "social-media-optimization",
  "maintenance",
  "ai-consultation",
  "web-designs",
  "web-design",
  "wp-admin",
  "wp-login.php",
  "wp-content",
  "wp-includes",
  "wp-json",
  "xmlrpc.php",
  "feed",
  "category",
  "tag",
  "author",
  "page",
  "comments",
]);

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only process root-level paths (single segment, no nested slashes)
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length !== 1) return NextResponse.next();

  const slug = segments[0];

  // Skip known routes, files (contain dots), and Next.js internals
  // Handle explicit page redirects BEFORE the KNOWN_ROUTES pass-through
  const PAGE_REDIRECTS: Record<string, string> = {
    "what-we-do": "/services/web-design-development",
  };
  if (PAGE_REDIRECTS[slug]) {
    const redirectUrl = request.nextUrl.clone();
    redirectUrl.pathname = PAGE_REDIRECTS[slug];
    return NextResponse.redirect(redirectUrl, 301);
  }

  if (KNOWN_ROUTES.has(slug) || slug.startsWith("_next") || slug.includes(".")) {
    return NextResponse.next();
  }

  // Redirect old WordPress root-level blog post slugs to /blog/:slug
  const url = request.nextUrl.clone();
  url.pathname = `/blog/${slug}`;
  return NextResponse.redirect(url, 301);
}

export const config = {
  matcher: [
    // Match root-level paths only, exclude static files and Next.js internals
    "/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|images|icons).*)",
  ],
};
