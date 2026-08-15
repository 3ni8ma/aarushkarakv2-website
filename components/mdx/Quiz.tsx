"use client";

import { useState } from "react";

export default function Quiz({
  question,
  options,
  answer,
  explanation,
}: {
  question: string;
  options: string[];
  answer: number;
  explanation?: string;
}) {
  const [selected, setSelected] = useState<number | null>(null);
  const answered = selected !== null;
  const correct = selected === answer;

  return (
    <div className="my-8 rounded-xl border border-white/10 bg-white/[0.03] p-5">
      <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-coral/80">
        Quick Check
      </div>
      <div className="mb-4 text-sm font-semibold leading-relaxed text-white/90">
        {question}
      </div>
      <div className="space-y-2">
        {options.map((option, i) => {
          let cls =
            "border-white/10 bg-white/[0.03] text-white/75 hover:border-cyan/40 active:scale-[0.99]";
          if (answered) {
            if (i === answer) {
              cls = "border-cyan/60 bg-cyan/10 text-cyan";
            } else if (i === selected) {
              cls = "border-crimson/60 bg-crimson/10 text-white/70";
            } else {
              cls = "border-white/5 bg-white/[0.02] text-white/40";
            }
          }
          return (
            <button
              key={i}
              type="button"
              disabled={answered}
              onClick={() => setSelected(i)}
              className={`flex w-full items-center gap-3 rounded-lg border px-4 py-2.5 text-left text-sm transition-colors ${cls}`}
            >
              <span className="font-mono text-xs text-white/40">
                {String.fromCharCode(65 + i)}
              </span>
              {option}
              {answered && i === answer && (
                <span className="ml-auto font-mono text-xs" aria-hidden="true">
                  {"\u2713"}
                </span>
              )}
            </button>
          );
        })}
      </div>
      {answered && explanation && (
        <div
          className={`mt-4 border-l-2 pl-3 text-sm leading-relaxed ${
            correct
              ? "border-cyan/60 text-cyan"
              : "border-crimson/60 text-white/70"
          }`}
        >
          {explanation}
        </div>
      )}
    </div>
  );
}