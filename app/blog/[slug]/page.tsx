import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import ReadingProgress from "@/components/blog/ReadingProgress";
import PostToc from "@/components/blog/PostToc";
import CopyLinkButton from "@/components/blog/CopyLinkButton";
import { getAllPosts, getPostBySlug, toIsoDate } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return getAllPosts().map(({ slug }) => ({ slug }));
}

const DIFFICULTY_COLORS: Record<string, string> = {
  Beginner: "bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
  Intermediate: "bg-cyan/10 text-cyan border-cyan/30",
  Advanced: "bg-crimson/10 text-crimson border-crimson/30",
};

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

function ShareLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/60 transition-colors hover:border-cyan/40 hover:text-cyan"
    >
      {children}
    </a>
  );
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

  const posts = getAllPosts();
  const index = posts.findIndex((p) => p.slug === slug);
  const prev = index > 0 ? posts[index - 1] : undefined;
  const next = index >= 0 && index < posts.length - 1 ? posts[index + 1] : undefined;

  const postUrl = `${siteConfig.url}/blog/${meta.slug}`;
  const shareText = encodeURIComponent(`${meta.title} — ${siteConfig.name}`);
  const shareUrl = encodeURIComponent(postUrl);

  const difficultyColor = meta.difficulty
    ? DIFFICULTY_COLORS[meta.difficulty] || DIFFICULTY_COLORS.Intermediate
    : undefined;

  const blogPostingJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: meta.title,
    description: meta.excerpt || siteConfig.description,
    datePublished: toIsoDate(meta.date) || undefined,
    url: postUrl,
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
      "@id": postUrl,
    },
  };

  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogPostingJsonLd) }}
      />
      <ReadingProgress />
      <BackgroundEffect effect="fluid-smoke" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
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

        <div className="grid gap-10 xl:grid-cols-[minmax(0,1fr)_240px]">
          <div className="min-w-0">
            <GlassCard className="p-8 md:p-12 mb-8">
              <div className="flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-wider">
                <span className="text-cyan/80">{meta.date}</span>
                <span className="text-white/25">&middot;</span>
                <span className="text-white/50">{meta.readingTime}</span>
                <span className="text-white/25">&middot;</span>
                <span className="text-white/50">
                  {meta.wordCount.toLocaleString()} words
                </span>
                {difficultyColor && (
                  <>
                    <span className="text-white/25">&middot;</span>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[0.65rem] font-bold ${difficultyColor}`}
                    >
                      {meta.difficulty}
                    </span>
                  </>
                )}
              </div>
              <h1 className="mt-4 text-3xl md:text-4xl font-bold text-gradient-cyan leading-tight">
                {meta.title}
              </h1>

              <div className="mt-5 flex flex-wrap items-center gap-3">
                <a
                  href={meta.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white/60 hover:text-cyan transition-colors"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
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
                <div className="ml-auto flex items-center gap-2">
                  <ShareLink
                    href={`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`}
                    label="Share on X"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  </ShareLink>
                  <ShareLink
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`}
                    label="Share on LinkedIn"
                  >
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </ShareLink>
                  <CopyLinkButton url={postUrl} />
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-8 md:p-12 prose-container">
              <div id="post-body">
                <Content />
              </div>
            </GlassCard>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {prev && (
                <Link
                  href={`/blog/${prev.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-cyan/40"
                >
                  <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/40">
                    &larr; Older
                  </div>
                  <div className="text-sm font-semibold text-white/80 group-hover:text-cyan transition-colors">
                    {prev.title}
                  </div>
                </Link>
              )}
              {next && (
                <Link
                  href={`/blog/${next.slug}`}
                  className="group rounded-xl border border-white/10 bg-white/[0.03] p-5 text-right transition-colors hover:border-cyan/40 sm:col-start-2"
                >
                  <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-wider text-white/40">
                    Newer &rarr;
                  </div>
                  <div className="text-sm font-semibold text-white/80 group-hover:text-cyan transition-colors">
                    {next.title}
                  </div>
                </Link>
              )}
            </div>
          </div>

          <PostToc />
        </div>
      </div>
    </div>
  );
}