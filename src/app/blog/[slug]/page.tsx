import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getPostBySlug, getAllPosts } from "@/lib/blog";
import { getConfig } from "@/lib/client-config";
import ShareButtons from "@/components/ShareButtons";

const config = getConfig();

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      url: `https://${config.domain}/blog/${post.slug}`,
      siteName: config.businessName,
      ...(post.featuredImage ? { images: [{ url: post.featuredImage, width: 1200, height: 630, alt: post.title }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      ...(post.featuredImage ? { images: [post.featuredImage] } : {}),
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();

  const recentPosts = getAllPosts().filter((p) => p.slug !== slug).slice(0, 5);
  const heroImage = post.featuredImage || "/blog/web-design-company.png";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    ...(post.featuredImage ? { image: post.featuredImage } : {}),
    author: { "@type": "Person", name: post.author },
    publisher: {
      "@type": "Organization",
      name: config.businessName,
      url: `https://${config.domain}`,
      logo: { "@type": "ImageObject", url: `https://${config.domain}/logos/logo.webp` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://${config.domain}/blog/${post.slug}` },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `https://${config.domain}` },
      { "@type": "ListItem", position: 2, name: "Blog", item: `https://${config.domain}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `https://${config.domain}/blog/${post.slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />

      {/* ─── HERO ─── */}
      <section
        className="relative overflow-hidden flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)", minHeight: "380px" }}
      >
        {/* Background image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={heroImage} alt="" className="w-full h-full object-cover object-center" aria-hidden="true" />
        </div>
        {/* Overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.95) 0%, rgba(1,12,30,0.88) 50%, rgba(1,12,30,0.80) 100%)" }}
        />
        {/* Orbs */}
        <div className="absolute top-0 left-[8%] w-[420px] h-[420px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.2 }} />
        <div className="absolute bottom-0 right-[5%] w-72 h-72 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.28, animationDelay: "2.5s" }} />
        {/* Dot grid */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full py-16 md:py-24">
          {/* Breadcrumb */}
          <nav className="text-sm text-white/60 mb-5" aria-label="Breadcrumb">
            <ol className="flex items-center gap-1.5 flex-wrap">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li aria-hidden="true" className="text-white/30">/</li>
              <li className="text-white/70 truncate max-w-[280px]">{post.title}</li>
            </ol>
          </nav>

          {/* Category */}
          <span
            className="inline-flex items-center text-xs font-bold tracking-[0.12em] uppercase px-3 py-1.5 rounded-full mb-4"
            style={{ background: "rgba(0,170,223,0.2)", color: "#33C2E8", border: "1px solid rgba(0,170,223,0.3)" }}
          >
            {post.category}
          </span>

          {/* Title */}
          <h1
            className="hero-fade-up-1 font-black text-white mb-5 max-w-3xl"
            style={{ fontSize: "clamp(1.65rem, 3.8vw, 2.6rem)", lineHeight: 1.1 }}
          >
            {post.title}
          </h1>

          {/* Meta */}
          <div className="flex items-center gap-5 text-sm text-white/65 flex-wrap">
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {post.author}
            </span>
            <span aria-hidden="true" className="text-white/25">&middot;</span>
            <time dateTime={post.date} className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "long", day: "numeric" })}
            </time>
          </div>
        </div>
      </section>

      {/* ─── CONTENT + SIDEBAR ─── */}
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10 lg:gap-14 items-start">

          {/* LEFT: Article */}
          <div>
            <article>
              <div
                className="blog-content prose prose-lg max-w-none
                  prose-headings:text-dark prose-headings:font-bold prose-headings:leading-snug
                  prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                  prose-h3:text-xl prose-h3:mt-10 prose-h3:mb-3
                  prose-h4:text-lg prose-h4:mt-8 prose-h4:mb-2
                  prose-p:text-dark-light prose-p:leading-[1.85] prose-p:mb-5
                  prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-a:font-medium
                  prose-strong:text-dark prose-strong:font-bold
                  prose-ul:my-5 prose-ul:pl-5 prose-li:text-dark-light prose-li:mb-2
                  prose-ol:my-5 prose-ol:pl-5
                  prose-hr:my-10 prose-hr:border-gray-200
                  prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-5 prose-blockquote:not-italic
                  prose-img:rounded-2xl prose-img:shadow-lg prose-img:my-8 prose-img:w-full"
                dangerouslySetInnerHTML={{ __html: post.content! }}
              />
            </article>

            {/* Share */}
            <div className="mt-10 pt-8 border-t border-gray-200">
              <p className="text-xs font-bold tracking-[0.15em] uppercase text-gray-400 mb-4">Share this article</p>
              <ShareButtons title={post.title} slug={post.slug} />
            </div>

            {/* Back */}
            <div className="mt-8 pt-6 border-t border-gray-100">
              <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-medium hover:underline text-sm">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to all posts
              </Link>
            </div>
          </div>

          {/* RIGHT: Sidebar */}
          <aside className="lg:sticky lg:top-24 flex flex-col gap-6">

            {/* Recent Posts */}
            <div className="bg-white rounded-2xl overflow-hidden"
              style={{ border: "1px solid #f0f0f0", boxShadow: "0 2px 20px rgba(0,0,0,0.06)" }}>
              <div className="px-6 py-5 border-b border-gray-100 flex items-center gap-2">
                <div className="w-1 h-5 rounded-full" style={{ background: "linear-gradient(180deg, #00AADF, #003B6F)" }} />
                <h3 className="font-bold text-dark text-lg">Recent Posts</h3>
              </div>
              <ul>
                {recentPosts.map((rp) => (
                  <li key={rp.slug} className="border-b border-gray-50 last:border-0">
                    <Link href={`/blog/${rp.slug}`} className="flex gap-4 px-5 py-4 hover:bg-gray-50/80 transition-colors group">
                      <div className="w-16 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                        {rp.featuredImage ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={rp.featuredImage} alt={rp.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center"
                            style={{ background: "rgba(0,170,223,0.08)" }}>
                            <svg className="w-6 h-6" style={{ color: "rgba(0,170,223,0.35)" }}
                              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                              <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-dark group-hover:text-primary transition-colors line-clamp-2 leading-snug mb-1.5">
                          {rp.title}
                        </p>
                        <time className="text-xs text-gray-400">
                          {new Date(rp.date).toLocaleDateString("en-CA", { month: "short", day: "numeric", year: "numeric" })}
                        </time>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 border-t border-gray-100">
                <Link href="/blog" className="text-sm font-semibold text-primary hover:underline flex items-center gap-1.5">
                  View all posts
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Free Quote CTA */}
            <div className="rounded-2xl overflow-hidden relative"
              style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}>
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: "#00AADF", filter: "blur(80px)", opacity: 0.18 }} />
              <div className="absolute inset-0 pointer-events-none"
                style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
              <div className="relative p-6">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-wide uppercase px-3 py-1.5 rounded-full mb-4"
                  style={{ background: "rgba(0,170,223,0.18)", color: "#33C2E8" }}>
                  <span className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#00AADF", boxShadow: "0 0 6px rgba(0,170,223,0.8)" }} />
                  Free Consultation
                </span>
                <h3 className="text-xl font-black text-white mb-2 leading-snug">
                  Ready to Grow Your Business Online?
                </h3>
                <p className="text-sm text-white/65 leading-relaxed mb-5">
                  Get a free, no-obligation quote from Canada&apos;s top web design team.
                </p>
                <ul className="space-y-2.5 mb-6">
                  {["Custom web design & development", "SEO optimization included", "Fast turnaround guaranteed"].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-white/75">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: "#00AADF" }}
                        fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact"
                  className="btn-shimmer flex items-center justify-center gap-2 w-full py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300"
                  style={{ background: "linear-gradient(135deg, #00AADF, #003B6F)", boxShadow: "0 4px 15px rgba(0,170,223,0.35)" }}>
                  Get a Free Quote
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>
                <p className="text-center text-xs text-white/35 mt-3">No commitment required</p>
              </div>
            </div>

          </aside>
        </div>
      </div>
    </>
  );
}
