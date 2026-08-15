"use client";

import hljs from "highlight.js/lib/core";
import python from "highlight.js/lib/languages/python";
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import sql from "highlight.js/lib/languages/sql";
import bash from "highlight.js/lib/languages/bash";
import json from "highlight.js/lib/languages/json";
import go from "highlight.js/lib/languages/go";
import rust from "highlight.js/lib/languages/rust";
import css from "highlight.js/lib/languages/css";
import markdown from "highlight.js/lib/languages/markdown";
import yaml from "highlight.js/lib/languages/yaml";
import { useMemo, useState } from "react";

hljs.registerLanguage("python", python);
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("json", json);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("css", css);
hljs.registerLanguage("markdown", markdown);
hljs.registerLanguage("yaml", yaml);

const LANG_ALIASES: Record<string, string> = {
  js: "javascript",
  jsx: "javascript",
  ts: "typescript",
  tsx: "typescript",
  sh: "bash",
  shell: "bash",
  zsh: "bash",
  py: "python",
  text: "plaintext",
  plaintext: "plaintext",
};

export const HIGHLIGHTED_LANGS = new Set([
  "python",
  "javascript",
  "typescript",
  "sql",
  "bash",
  "json",
  "go",
  "rust",
  "css",
  "markdown",
  "yaml",
]);

function iconFor(lang: string): string {
  if (lang === "python") return "py";
  if (lang === "bash" || lang === "sh" || lang === "shell") return ">$";
  return lang.slice(0, 3);
}

export default function CodeBlock({
  code,
  lang = "text",
  filename,
  highlight = true,
}: {
  code: string;
  lang?: string;
  filename?: string;
  highlight?: boolean;
}) {
  const normalized = (LANG_ALIASES[lang.toLowerCase()] || lang).toLowerCase();
  const canHighlight = highlight && HIGHLIGHTED_LANGS.has(normalized);

  const html = useMemo(() => {
    if (!canHighlight) return "";
    try {
      return hljs.highlight(code, { language: normalized }).value;
    } catch {
      return code
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    }
  }, [code, normalized, canHighlight]);

  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    }
  }

  return (
    <div className="my-6 overflow-hidden rounded-xl border border-white/10 bg-[#0d1117]/80">
      <div className="flex items-center gap-3 border-b border-white/10 px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-crimson/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-coral/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-cyan/80" />
        </span>
        <span className="truncate font-mono text-xs text-white/60">
          {filename || "code"}
        </span>
        <span className="ml-auto rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-wider text-cyan/80">
          {iconFor(normalized)}
        </span>
        <button
          type="button"
          onClick={copy}
          className="rounded-md border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[0.65rem] text-white/70 transition-colors hover:border-cyan/40 hover:text-cyan"
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="codeblock-body">
          {canHighlight ? (
            <code
              className={`hljs language-${normalized}`}
              dangerouslySetInnerHTML={{ __html: html }}
            />
          ) : (
            <code className={`language-${normalized}`}>{code}</code>
          )}
        </pre>
      </div>
    </div>
  );
}