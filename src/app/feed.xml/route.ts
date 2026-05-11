import { getAllPosts } from "@/lib/blog";
import { getConfig } from "@/lib/client-config";

export const dynamic = "force-static";
export const revalidate = 3600;

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export async function GET() {
  const config = getConfig();
  const posts = getAllPosts().slice(0, 50);

  const items = posts
    .map((post) => {
      const pubDate = new Date(post.date).toUTCString();
      return `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>https://${config.domain}/blog/${post.slug}</link>
      <guid isPermaLink="true">https://${config.domain}/blog/${post.slug}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.description ?? ""}]]></description>
      <category>${escapeXml(post.category ?? "")}</category>
      <author>${escapeXml(config.emails?.support ?? "info@canadianwebdesigns.ca")} (${escapeXml(post.author ?? config.businessName)})</author>
    </item>`;
    })
    .join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:content="http://purl.org/rss/modules/content/">
  <channel>
    <title>${escapeXml(config.businessName)} Blog</title>
    <link>https://${config.domain}/blog</link>
    <description>Web design, SEO, and digital marketing tips from ${escapeXml(config.businessName)}.</description>
    <language>en-CA</language>
    <managingEditor>${escapeXml(config.emails?.support ?? "info@canadianwebdesigns.ca")} (${escapeXml(config.businessName)})</managingEditor>
    <webMaster>${escapeXml(config.emails?.support ?? "info@canadianwebdesigns.ca")} (${escapeXml(config.businessName)})</webMaster>
    <image>
      <url>https://${config.domain}/logos/logo.webp</url>
      <title>${escapeXml(config.businessName)} Blog</title>
      <link>https://${config.domain}/blog</link>
    </image>
    <atom:link href="https://${config.domain}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`;

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  });
}
