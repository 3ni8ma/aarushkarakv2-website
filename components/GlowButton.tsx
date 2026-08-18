import type { ReactNode } from "react";

interface GlowButtonProps {
  href?: string;
  download?: boolean;
  target?: string;
  rel?: string;
  type?: "button" | "submit";
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

export default function GlowButton({
  href,
  download,
  target,
  rel,
  type = "button",
  className = "",
  children,
  onClick,
}: GlowButtonProps) {
  if (href) {
    return (
      <a
        href={href}
        download={download}
        target={target}
        rel={rel}
        className={`glow-btn ${className}`}
        onClick={onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={`glow-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}
