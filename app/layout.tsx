import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
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
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Aarush Karak — Software Developer, AI & Spatial Computing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Karak | Software Developer, AI & Spatial Computing",
    description: siteConfig.description,
    images: ["/twitter-image.png"],
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
  "@id": `${siteConfig.url}/#person`,
  name: siteConfig.name,
  url: siteConfig.url,
  image: `${siteConfig.url}/images/aarush-karak-software-developer-toronto.jpg`,
  jobTitle: "Software Developer",
  description: siteConfig.description,
  email: "mailto:worldshaans@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Toronto",
    addressRegion: "ON",
    addressCountry: "CA",
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "John Fraser Secondary School",
  },
  award: "1st Place TSA State Champion (Video Game 3D Design)",
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
    siteConfig.socials.kaggle,
    siteConfig.socials.devto,
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
      </body>
    </html>
  );
}
