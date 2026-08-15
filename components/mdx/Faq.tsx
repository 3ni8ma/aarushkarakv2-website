export interface FaqItem {
  q: string;
  a: string;
}

export default function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className="my-8 space-y-3">
      {items.map((item, i) => (
        <details
          key={i}
          className="group rounded-xl border border-white/10 bg-white/[0.03] open:border-cyan/30"
        >
          <summary className="flex cursor-pointer select-none list-none items-center gap-3 px-4 py-3 text-sm font-semibold text-white/90 [&::-webkit-details-marker]:hidden">
            <span className="font-mono text-xs text-cyan/80">
              {String(i + 1).padStart(2, "0")}
            </span>
            {item.q}
            <span
              className="ml-auto font-mono text-cyan transition-transform group-open:rotate-45"
              aria-hidden="true"
            >
              +
            </span>
          </summary>
          <div className="border-t border-white/10 px-4 py-3 pl-8 text-sm leading-relaxed text-white/75">
            {item.a}
          </div>
        </details>
      ))}
    </div>
  );
}