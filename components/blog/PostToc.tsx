"use client";

import { useEffect, useState } from "react";

interface Heading {
  id: string;
  text: string;
  level: number;
}

export default function PostToc() {
  const [headings, setHeadings] = useState<Heading[]>([]);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const root = document.getElementById("post-body");
    if (!root) return;

    const els = Array.from(
      root.querySelectorAll<HTMLElement>("h2, h3"),
    ).filter((el) => el.className !== "sr-only");

    const items: Heading[] = els.map((el, i) => {
      const id = el.id || `section-${i}`;
      el.id = id;
      return { id, text: el.textContent || "", level: Number(el.tagName[1]) };
    });
    setHeadings(items);
    if (items.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  if (headings.length === 0) return null;

  return (
    <nav className="sticky top-24 hidden max-h-[70vh] w-56 shrink-0 overflow-y-auto xl:block">
      <div className="mb-3 px-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/40">
        On this page
      </div>
      <ul className="space-y-1 border-l border-white/10">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(h.id)?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
                history.replaceState(null, "", `#${h.id}`);
              }}
              className={`block border-l-2 py-1 pr-3 text-[0.8125rem] leading-snug transition-colors ${
                h.level === 3 ? "pl-6" : "pl-3"
              } ${
                active === h.id
                  ? "-ml-px border-cyan text-cyan"
                  : "border-transparent text-white/45 hover:text-white/75"
              }`}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}