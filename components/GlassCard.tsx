import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "a";
  href?: string;
  onClick?: () => void;
  ariaLabel?: string;
  id?: string;
}

export default function GlassCard({
  children,
  className = "",
  as: Tag = "div",
  href,
  onClick,
  ariaLabel,
  id,
}: GlassCardProps) {
  const baseClass = `glass-card ${className}`;

  if (Tag === "a" && href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        id={id}
        className={baseClass}
        onClick={onClick}
        aria-label={ariaLabel}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag id={id} className={baseClass} onClick={onClick} aria-label={ariaLabel}>
      {children}
    </Tag>
  );
}
