import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { remark } from "remark";
import html from "remark-html";

export interface BlogPost {
  title: string;
  slug: string;
  date: string;
  author: string;
  description: string;
  keywords: string[];
  category: string;
  featuredImage?: string;
  content?: string;
}

const postsDirectory = path.join(process.cwd(), "content/blog");
// Strip images still hosted on the decommissioned WordPress domain
const OLD_WP = /^https?:\/\/old\.canadianwebdesigns\.ca\//;

function sanitizeHtml(raw: string): string {
  // Remove injected <script> tags (WordPress malware / SEO spam)
  return raw.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script\s*>/gi, "");
}

export function getAllPosts(): BlogPost[] {
  if (!fs.existsSync(postsDirectory)) return [];
  const fileNames = fs.readdirSync(postsDirectory).filter((f) => f.endsWith(".md"));

  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data } = matter(fileContents);

    const rawImage: string | undefined = data.featuredImage;
    const featuredImage =
      rawImage && !OLD_WP.test(rawImage) ? rawImage : undefined;

    return {
      slug,
      title: data.title,
      date: data.date,
      author: (data.author && data.author !== "Canadian Web Designs") ? data.author : "Amir Khela",
      description: data.description,
      keywords: data.keywords ?? [],
      category: data.category,
      featuredImage,
    } as BlogPost;
  });

  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) return null;

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content: rawContent } = matter(fileContents);

  let content: string;
  const trimmed = rawContent.trim();
  if (trimmed.startsWith("<")) {
    content = sanitizeHtml(trimmed);
  } else {
    const processed = await remark().use(html).process(rawContent);
    content = sanitizeHtml(processed.toString());
  }

  const rawImage: string | undefined = data.featuredImage;
  const featuredImage =
    rawImage && !OLD_WP.test(rawImage) ? rawImage : undefined;

  return {
    slug,
    title: data.title,
    date: data.date,
    author: (data.author && data.author !== "Canadian Web Designs") ? data.author : "Amir Khela",
    description: data.description,
    keywords: data.keywords ?? [],
    category: data.category,
    featuredImage,
    content,
  };
}

export function getAllSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
