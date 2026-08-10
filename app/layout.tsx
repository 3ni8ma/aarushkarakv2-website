import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
import { siteConfig } from "@/lib/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import LiquidGlassFilter from "@/components/LiquidGlassFilter";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Aarush Karak | Software Developer, AI & Spatial Computing",
    template: "%s | Aarush Karak",
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: "Aarush Karak | Software Developer, AI & Spatial Computing",
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Karak | Software Developer, AI & Spatial Computing",
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/profile.jpg`,
  jobTitle: "Software Developer",
  description: siteConfig.description,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  worksFor: {
    "@type": "Organization",
    name: "TheCoderBros",
    url: siteConfig.socials.thecoderbros,
  },
  knowsAbout: [
    "Software Development",
    "Spatial Computing",
    "Artificial Intelligence",
    "Three.js",
    "React",
    "Web Development",
  ],
  sameAs: [
    siteConfig.socials.github,
    siteConfig.socials.linkedin,
    siteConfig.socials.instagram,
    siteConfig.socials.credly,
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${jetbrainsMono.variable} dark`}
    >
      <head>
        <link rel="preconnect" href="https://cdn.aidesigner.ai" />
        <link rel="dns-prefetch" href="https://cdn.aidesigner.ai" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="bg-[#0d1117] text-white antialiased min-h-screen flex flex-col">
        <LiquidGlassFilter />
        <LoadingScreen>
          <Navbar />
          <main className="flex-1 pt-16">{children}</main>
          <Footer />
        </LoadingScreen>
        <Script
          src="https://cdn.aidesigner.ai/effects/runtime/v1.js"
          strategy="lazyOnload"
        />
        <Script id="remove-aifx-badge" strategy="lazyOnload">
          {`const _aifxClear=setInterval(()=>{const b=document.querySelector("[data-aifx-wm]");b&&(b.remove(),clearInterval(_aifxClear))},50);setTimeout(()=>clearInterval(_aifxClear),8e3);`}
        </Script>
      </body>
    </html>
  );
}
