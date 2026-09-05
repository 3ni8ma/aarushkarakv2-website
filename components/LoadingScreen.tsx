"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen({ children }: { children: React.ReactNode }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const check = setInterval(() => {
      const effects = document.querySelectorAll("[data-aifx]");
      if (effects.length > 0) {
        clearInterval(check);
        clearTimeout(fallback);
        setReady(true);
      }
    }, 100);
    const fallback = setTimeout(() => {
      clearInterval(check);
      setReady(true);
    }, 4000);
    return () => {
      clearInterval(check);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      {!ready && (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0d1117]">
          <div className="relative flex items-center justify-center">
            <div className="h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-white/10 border-t-cyan animate-spin" />
            <div className="absolute h-12 w-12 sm:h-16 sm:w-16 rounded-full border-2 border-transparent border-b-crimson animate-spin" style={{ animationDirection: "reverse", animationDuration: "0.8s" }} />
          </div>
          <p className="mt-6 text-sm text-white/40 font-mono animate-pulse">Loading</p>
        </div>
      )}
      <div
        className={`transition-opacity duration-500 ${ready ? "opacity-100" : "opacity-0"}`}
      >
        {children}
      </div>
    </>
  );
}
