import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import { getAllPosts, getPostBySlug, toIsoDate } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

export async function generateMetadata(
  props: PageProps<"/blog/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const meta = getPostBySlug(slug);

  if (!meta) {
    return {};
  }

  const title = meta.title;
  const description = meta.excerpt || siteConfig.description;
  const url = `${siteConfig.url}/blog/${meta.slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${meta.slug}` },
    keywords: meta.tags,
    openGraph: {
      type: "article",
      url,
      title: `${title} | Aarush Karak`,
      description,
      siteName: siteConfig.name,
      publishedTime: toIsoDate(meta.date) || undefined,
      tags: meta.tags,
      images: `${siteConfig.url}${siteConfig.ogImage}`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: `${siteConfig.url}${siteConfig.ogImage}`,
    },
  };
}

export default async function BlogPostPage(props: PageProps<"/blog/[slug]">) {
  const { slug } = await props.params;
  const meta = getPostBySlug(slug);

  if (!meta) {
    notFound();
  }

  let Content: React.ComponentType;
  try {
    const mod = await import(`@/content/${slug}.mdx`);
    Content = mod.default;
  } catch {
    notFound();
  }

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt || siteConfig.description,
    datePublished: toIsoDate(meta.date) || undefined,
    url: `${siteConfig.url}/blog/${meta.slug}`,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    keywords: meta.tags,
    author: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Person",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blog/${meta.slug}`,
    },
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <BackgroundEffect effect="fluid-smoke" />

      <div className="relative z-10 mx-auto max-w-5xl px-4 py-20">
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm font-bold text-white/60 hover:text-cyan transition-colors mb-8"
        >
          <svg
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
          Back to Blog
        </Link>

        <GlassCard className="p-8 md:p-12 mb-8">
          <span className="text-xs font-bold text-cyan/80 uppercase tracking-wider">
            {meta.date}
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-bold text-gradient-cyan leading-tight">
            {meta.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
            <a
              href={meta.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-cyan transition-colors"
            >
              <svg
                className="h-4 w-4"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-cyan border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </GlassCard>

        <GlassCard className="p-8 md:p-12 prose-container">
          <Content />
        </GlassCard>
      </div>
    </div>
  );
}
