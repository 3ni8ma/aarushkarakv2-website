"use client";

import { useEffect, useState } from "react";

/**
 * Non-blocking splash overlay.
 * Children are ALWAYS rendered (SEO/crawler-safe). The overlay is purely
 * visual, fades quickly, respects prefers-reduced-motion, and never waits
 * on external scripts.
 */
export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setShow(false), reduced ? 0 : 700);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      <div
        aria-hidden={!show}
        className={`pointer-events-none fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1117] transition-opacity duration-500 ${
          show ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="relative flex items-center justify-center">
          <div className="h-12 w-12 rounded-full border-2 border-white/10 border-t-cyan animate-spin sm:h-16 sm:w-16" />
        </div>
        <p className="mt-6 font-mono text-sm text-white/40 animate-pulse">Loading</p>
      </div>
      {children}
    </>
  );
}
