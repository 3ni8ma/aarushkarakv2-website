import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import BlogSearch from "@/components/BlogSearch";
import { getAllPosts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Technical writeups and project case studies by Aarush Karak — AI systems, spatial computing, real-time dashboards, CLI tooling, and web development deep dives.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  const posts = getAllPosts().map(({ slug, title, date, excerpt }) => ({
    slug,
    title,
    date,
    excerpt,
  }));

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="aurora-flow" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <GlassCard className="p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-gradient-cyan">Blog</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-medium">
            Technical writeups, devlogs, project case studies, and engineering
            updates.
          </p>
        </GlassCard>

        <BlogSearch posts={posts} />
      </div>
    </div>
  );
}
