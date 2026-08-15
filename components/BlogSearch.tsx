"use client";

import { useState } from "react";
import Link from "next/link";
import GlassCard from "@/components/GlassCard";

interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readingTime: string;
}

export default function BlogSearch({ posts }: { posts: Post[] }) {
  const [query, setQuery] = useState("");

  const filtered = query.trim()
    ? posts.filter(
        (p) =>
          p.title.toLowerCase().includes(query.toLowerCase()) ||
          p.excerpt.toLowerCase().includes(query.toLowerCase()),
      )
    : posts;

  return (
    <>
      <div className="relative mb-10 max-w-xl mx-auto">
        <svg
          className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-white/30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
        <input
          type="text"
          placeholder="Search blog posts..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="glass-input w-full pl-12 pr-4 py-3 text-sm text-white placeholder:text-white/30"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-center text-white/50 mt-12">No posts found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {filtered.map((post) => (
            <GlassCard key={post.slug} as="a" href={`/blog/${post.slug}`} className="p-6 flex flex-col group">
              <span className="text-xs font-bold text-cyan/80 uppercase tracking-wider">
                {post.date}
              </span>
              <span className="ml-2 text-xs text-white/40">{post.readingTime}</span>
              <h2 className="mt-2 text-xl font-bold text-white group-hover:text-cyan transition-colors leading-snug">
                {post.title}
              </h2>
              <p className="mt-3 text-sm text-white/70 leading-relaxed flex-1">
                {post.excerpt}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-cyan group-hover:text-white transition-colors">
                Read More
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </span>
            </GlassCard>
          ))}
        </div>
      )}
    </>
  );
}
