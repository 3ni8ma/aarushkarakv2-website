import fs from "fs";
import path from "path";

export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  repo: string;
  excerpt: string;
  difficulty?: string;
  readingTime: string;
  wordCount: number;
}

export function toIsoDate(date: string): string {
  const parsed = new Date(date);
  return Number.isNaN(parsed.getTime()) ? "" : parsed.toISOString().slice(0, 10);
}

const contentDir = path.join(process.cwd(), "content");

function extractExcerpt(content: string): string {
  const lines = content.split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (
      trimmed &&
      !trimmed.startsWith("export ") &&
      !trimmed.startsWith("import ") &&
      !trimmed.startsWith("#") &&
      !trimmed.startsWith("```") &&
      trimmed.length > 60
    ) {
      return trimmed
        .replace(/\[([^\]]*)\]\([^)]*\)/g, "$1")
        .replace(/`/g, "")
        .replace(/[*_]/g, "")
        .slice(0, 220)
        .trim();
    }
  }
  return "";
}

export function getAllPosts(): BlogPostMeta[] {
  const files = fs.readdirSync(contentDir).filter((f) => f.endsWith(".mdx"));
  return files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      const raw = fs.readFileSync(path.join(contentDir, file), "utf-8");
      const title =
        raw.match(/export const title = "(.*)"/)?.[1] || slug;
      const date = raw.match(/export const date = "(.*)"/)?.[1] || "";
      const tagsMatch = raw.match(/export const tags = \[(.*)\]/);
      const tags = tagsMatch
        ? tagsMatch[1].split(",").map((t) => t.trim().replace(/"/g, ""))
        : [];
      const repo = raw.match(/export const repo = "(.*)"/)?.[1] || "";
      const difficulty = raw.match(/export const difficulty = "(.*)"/)?.[1];
      const excerpt = extractExcerpt(raw);
      const wordCount = raw
        .replace(/^export[\s\S]*?\n\n/, "")
        .replace(/```[\s\S]*?```/g, " ")
        .replace(/<[^>]+>/g, " ")
        .split(/\s+/)
        .filter(Boolean).length;
      const minutes = Math.max(1, Math.round(wordCount / 200));
      const readingTime = `${minutes} min read`;
      return { slug, title, date, tags, repo, excerpt, difficulty, readingTime, wordCount };
    })
    .sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );
}

export function getPostBySlug(slug: string): BlogPostMeta | undefined {
  return getAllPosts().find((p) => p.slug === slug);
}
