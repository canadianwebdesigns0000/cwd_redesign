import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";
import { getAllPosts } from "@/lib/blog";
import { getConfig } from "@/lib/client-config";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import BlogSearchBox from "@/components/BlogSearchBox";

const config = getConfig();
const POSTS_PER_PAGE = 12;

export const metadata: Metadata = {
  title: "Blog | Web Design & SEO Tips",
  description: `Web design, SEO, and digital marketing tips from ${config.businessName}.`,
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Web Design & SEO Tips — Canadian Web Designs",
    description: `Web design, SEO, and digital marketing tips from ${config.businessName}.`,
    url: `https://${config.domain}/blog`,
    siteName: config.businessName,
    locale: "en_CA",
    images: [{ url: "/images/hero-leading-web-design.jpg", width: 1200, height: 630, alt: "Canadian Web Designs — Web Design & Digital Marketing Blog" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/hero-leading-web-design.jpg"],
  },
};

interface Props {
  searchParams: Promise<{ page?: string; q?: string }>;
}

export default async function BlogPage({ searchParams }: Props) {
  const { page, q } = await searchParams;
  const allPosts = getAllPosts();

  const searchQuery = q?.trim() ?? "";
  const isSearching = searchQuery.length > 0;

  const filteredPosts = isSearching
    ? allPosts.filter((post) => {
        const needle = searchQuery.toLowerCase();
        return (
          post.title.toLowerCase().includes(needle) ||
          post.description?.toLowerCase().includes(needle) ||
          post.category?.toLowerCase().includes(needle) ||
          post.author?.toLowerCase().includes(needle)
        );
      })
    : allPosts;

  const currentPage = Math.max(1, parseInt(page || "1", 10));
  const totalPages  = isSearching ? 1 : Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const posts       = isSearching
    ? filteredPosts
    : filteredPosts.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE);

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Blog — Canadian Web Designs",
    description: `Web design, SEO, and digital marketing tips from ${config.businessName}.`,
    url: `https://${config.domain}/blog`,
    publisher: { "@type": "Organization", name: config.businessName },
    numberOfItems: allPosts.length,
  };

  // page numbers to show (window of 5)
  const pageNums: number[] = [];
  const start = Math.max(1, currentPage - 2);
  const end   = Math.min(totalPages, start + 4);
  for (let i = start; i <= end; i++) pageNums.push(i);

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />

      {/* HERO */}
      <section
        className="relative overflow-hidden py-14 md:py-20 flex items-center"
        style={{ background: "linear-gradient(135deg, #010C1E 0%, #052140 55%, #010D22 100%)" }}
      >
        <Image src="/blog/custom-web-design.png" alt="" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(105deg, rgba(1,12,30,0.94) 0%, rgba(1,12,30,0.85) 50%, rgba(1,12,30,0.75) 100%)" }} />
        <div className="absolute top-0 left-[8%] w-[500px] h-[500px] rounded-full pointer-events-none animate-orb"
          style={{ background: "#00AADF", filter: "blur(140px)", opacity: 0.22 }} />
        <div className="absolute bottom-0 right-[5%] w-80 h-80 rounded-full pointer-events-none animate-orb"
          style={{ background: "#003B6F", filter: "blur(110px)", opacity: 0.3, animationDelay: "2.5s" }} />
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />
        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="hero-fade-up inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass mb-6">
              <span className="w-2 h-2 rounded-full" style={{ background: "#00AADF", boxShadow: "0 0 8px rgba(0,170,223,0.8)" }} />
              <span className="text-white/80 text-sm font-medium tracking-wide">Insights & Strategies</span>
            </div>
            <h1 className="hero-fade-up-1 font-black text-white mb-5"
              style={{ fontSize: "clamp(1.8rem, 4vw, 2.6rem)", lineHeight: 1.05 }}>
              Grow Your Business{" "}
              <span className="gradient-text-animated">Online</span>
            </h1>
            <p className="hero-fade-up-2 text-xl text-white/60 leading-relaxed">
              Tips, insights, and strategies from Canada&apos;s top web design and digital marketing agency.
            </p>
            <p className="hero-fade-up-3 text-sm text-white/40 mt-3">
              {allPosts.length} articles
              {!isSearching && <> &nbsp;&bull;&nbsp; Page {currentPage} of {totalPages}</>}
            </p>
          </div>
        </div>
      </section>

      {/* BLOG GRID */}
      <section className="py-section-y relative" style={{ background: "#ffffff" }}>
        <div className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px)", backgroundSize: "36px 36px" }} />

        <div className="relative max-w-[1280px] mx-auto px-6 lg:px-8">
          {/* Search box */}
          <Suspense fallback={<div className="h-14 max-w-xl mx-auto mb-10 rounded-2xl bg-gray-100 animate-pulse" />}>
            <BlogSearchBox initialQ={searchQuery} />
          </Suspense>

          {isSearching && (
            <p className="text-center text-gray-500 text-sm mb-8">
              {filteredPosts.length === 0
                ? `No articles found for "${searchQuery}"`
                : `${filteredPosts.length} result${filteredPosts.length === 1 ? "" : "s"} for "${searchQuery}"`}
            </p>
          )}

          {posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400 text-xl mb-4">No posts found.</p>
              <Link href="/blog" className="text-[#00AADF] font-semibold hover:underline">
                Clear search and browse all articles
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post, i) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}
                  className="group block reveal-scale"
                  style={{ transitionDelay: `${(i % 3) * 0.1}s` }}>
                  <article className="bg-white rounded-2xl overflow-hidden h-full flex flex-col border border-gray-100 hover:border-[#00AADF]/30 hover:shadow-xl transition-all duration-300"
                    style={{ boxShadow: "0 2px 16px rgba(0,0,0,0.06)" }}>

                    {/* Thumbnail */}
                    <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[rgba(0,170,223,0.08)] to-[rgba(0,59,111,0.12)]">
                      {post.featuredImage ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          loading="lazy"
                        />
                      ) : (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-12 h-12" style={{ color: "rgba(0,170,223,0.3)" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                          </svg>
                        </div>
                      )}
                    </div>

                    <div className="p-6 flex flex-col flex-1">
                      <span className="inline-block text-xs font-bold tracking-[0.15em] uppercase mb-3 px-3 py-1 rounded-full self-start"
                        style={{ background: "rgba(0,170,223,0.1)", color: "#00AADF" }}>
                        {post.category}
                      </span>
                      <h2 className="text-lg font-black text-gray-900 mb-3 group-hover:text-[#00AADF] transition-colors duration-200 leading-snug flex-1 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-gray-500 text-sm mb-3 leading-relaxed line-clamp-2">{post.description}</p>
                      {post.author && (
                        <p className="text-gray-400 text-xs mb-4 flex items-center gap-1">
                          <svg className="w-3 h-3 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                          </svg>
                          {post.author}
                        </p>
                      )}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <time className="text-gray-400 text-xs">
                          {new Date(post.date).toLocaleDateString("en-CA", { year: "numeric", month: "short", day: "numeric" })}
                        </time>
                        <span className="text-[#00AADF] text-xs font-bold flex items-center gap-1 group-hover:gap-2 transition-all duration-200">
                          Read
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          )}

          {/* PAGINATION (only when not searching) */}
          {!isSearching && totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-2 flex-wrap">
              {/* Prev */}
              {currentPage > 1 ? (
                <Link href={`/blog?page=${currentPage - 1}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                  Prev
                </Link>
              ) : (
                <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-100 text-gray-300 cursor-not-allowed">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
                  Prev
                </span>
              )}

              {/* First page + ellipsis */}
              {pageNums[0] > 1 && (
                <>
                  <Link href="/blog?page=1" className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200">1</Link>
                  {pageNums[0] > 2 && <span className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">…</span>}
                </>
              )}

              {/* Page numbers */}
              {pageNums.map(n => (
                n === currentPage ? (
                  <span key={n} className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold text-white"
                    style={{ background: "linear-gradient(135deg, #00AADF, #003B6F)" }}>
                    {n}
                  </span>
                ) : (
                  <Link key={n} href={`/blog?page=${n}`}
                    className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200">
                    {n}
                  </Link>
                )
              ))}

              {/* Last page + ellipsis */}
              {pageNums[pageNums.length - 1] < totalPages && (
                <>
                  {pageNums[pageNums.length - 1] < totalPages - 1 && <span className="w-10 h-10 flex items-center justify-center text-gray-400 text-sm">…</span>}
                  <Link href={`/blog?page=${totalPages}`} className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200">{totalPages}</Link>
                </>
              )}

              {/* Next */}
              {currentPage < totalPages ? (
                <Link href={`/blog?page=${currentPage + 1}`}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-200 text-gray-600 hover:border-[#00AADF] hover:text-[#00AADF] transition-all duration-200">
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </Link>
              ) : (
                <span className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-gray-100 text-gray-300 cursor-not-allowed">
                  Next
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
                </span>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
