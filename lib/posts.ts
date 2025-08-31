import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";

const POSTS_DIR = path.join(process.cwd(), "content", "posts");

export type PostMeta = {
  slug: string;
  title: string;
  description?: string;
  date?: string;
  tags?: string[];
};

export async function getAllPosts(): Promise<PostMeta[]> {
  const entries = await fs.readdir(POSTS_DIR);
  const posts: PostMeta[] = [];
  for (const file of entries) {
    if (!file.endsWith(".md")) continue;
    const slug = file.replace(/\.md$/, "");
    const full = path.join(POSTS_DIR, file);
    const md = await fs.readFile(full, "utf-8");
    const { data } = matter(md);
    posts.push({
      slug,
      title: String(data.title || slug),
      description: data.description ? String(data.description) : undefined,
      date: data.date ? String(data.date) : undefined,
      tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    });
  }
  // newest first if dates exist
  posts.sort((a, b) => (b.date || "").localeCompare(a.date || ""));
  return posts;
}

export async function getPostBySlug(slug: string) {
  const file = path.join(POSTS_DIR, slug + ".md");
  const md = await fs.readFile(file, "utf-8");
  const { content, data } = matter(md);
  return { content, meta: {
    slug,
    title: String(data.title || slug),
    description: data.description ? String(data.description) : undefined,
    date: data.date ? String(data.date) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
  }};
}

export async function getAllSlugs(): Promise<string[]> {
  const entries = await fs.readdir(POSTS_DIR);
  return entries.filter(f => f.endsWith(".md")).map(f => f.replace(/\.md$/, ""));
}
