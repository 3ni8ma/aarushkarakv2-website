"use client";

import { useState } from "react";
import CodeBlock from "./CodeBlock";

export interface TabItem {
  label: string;
  lang?: string;
  filename?: string;
  code: string;
}

export default function Tabs({ items }: { items: TabItem[] }) {
  const [active, setActive] = useState(0);
  const current = items[Math.min(active, items.length - 1)];

  return (
    <div className="my-6">
      <div className="flex flex-wrap gap-1.5 rounded-t-xl border border-b-0 border-white/10 bg-white/[0.03] p-1.5">
        {items.map((item, i) => (
          <button
            key={item.label}
            type="button"
            onClick={() => setActive(i)}
            className={`rounded-lg px-3 py-1.5 font-mono text-xs transition-colors ${
              i === active
                ? "bg-cyan/15 text-cyan"
                : "text-white/50 hover:text-white/80"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      <CodeBlock
        code={current.code}
        lang={current.lang || "text"}
        filename={current.filename}
      />
    </div>
  );
}