export default function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <div className="my-8 rounded-xl border border-cyan/30 bg-cyan/[0.04] p-5">
      <div className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-cyan/80">
        Key Takeaways
      </div>
      <ul className="space-y-2.5">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 text-sm leading-relaxed text-white/85">
            <span className="mt-0.5 font-mono text-xs text-cyan/70" aria-hidden="true">
              =&gt;
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}