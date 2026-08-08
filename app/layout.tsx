import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import Script from "next/script";
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
  title: "Aarush Karak | Portfolio",
  description:
    "Software developer, spatial computing & AI enthusiast. Founder @ TheCoderBros. Building the future one project at a time.",
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
