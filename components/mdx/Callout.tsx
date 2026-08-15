import { ReactNode } from "react";

type CalloutType = "tip" | "warn" | "note" | "info";

const CONFIG: Record<
  CalloutType,
  { label: string; className: string; dot: string }
> = {
  tip: {
    label: "TIP",
    className: "border-cyan/40 bg-cyan/5",
    dot: "bg-cyan",
  },
  warn: {
    label: "WARNING",
    className: "border-crimson/40 bg-crimson/5",
    dot: "bg-crimson",
  },
  note: {
    label: "NOTE",
    className: "border-white/20 bg-white/5",
    dot: "bg-white/70",
  },
  info: {
    label: "INFO",
    className: "border-coral/40 bg-coral/5",
    dot: "bg-coral",
  },
};

export default function Callout({
  type = "note",
  title,
  children,
}: {
  type?: CalloutType;
  title?: string;
  children: ReactNode;
}) {
  const c = CONFIG[type];
  return (
    <div
      className={`my-6 flex gap-3 rounded-xl border px-4 py-3 ${c.className}`}
      role="note"
    >
      <span
        className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${c.dot}`}
        aria-hidden="true"
      />
      <div className="min-w-0">
        <div className="mb-1 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-white/60">
          {title || c.label}
        </div>
        <div className="text-sm leading-relaxed text-white/85">{children}</div>
      </div>
    </div>
  );
}