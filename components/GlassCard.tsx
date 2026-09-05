import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "article" | "a";
  href?: string;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className = "",
  as: Tag = "div",
  href,
  onClick,
}: GlassCardProps) {
  const baseClass = `glass-card ${className}`;

  if (Tag === "a" && href) {
    const isExternal = href.startsWith("http");
    return (
      <a
        href={href}
        className={baseClass}
        onClick={onClick}
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Tag className={baseClass} onClick={onClick}>
      {children}
    </Tag>
  );
}
