import type { MetadataRoute } from "next";
import { getAllPosts, toIsoDate } from "@/lib/content";
import { siteConfig } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const portrait = `${siteConfig.url}/images/aarush-karak-software-developer-toronto.jpg`;
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      changeFrequency: "monthly",
      priority: 1,
      images: [portrait],
    },
    {
      url: `${siteConfig.url}/about`,
      changeFrequency: "monthly",
      priority: 0.8,
      images: [portrait],
    },
    { url: `${siteConfig.url}/experience`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/skills`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${siteConfig.url}/blog`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/contact`, changeFrequency: "yearly", priority: 0.5 },
  ];

  const postRoutes: MetadataRoute.Sitemap = getAllPosts().map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    changeFrequency: "yearly",
    priority: 0.7,
    ...(toIsoDate(post.date)
      ? { lastModified: new Date(toIsoDate(post.date)) }
      : {}),
  }));

  return [...staticRoutes, ...postRoutes];
}