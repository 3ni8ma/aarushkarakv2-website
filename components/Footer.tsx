import Link from "next/link";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/3ni8ma",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/aarush-karak-260257321/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "dev.to",
    href: "https://dev.to/3ni8ma",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M7.42 10.05c-.18-.16-.46-.23-.84-.23H6l.02 2.44.04 2.45.56-.02c.41 0 .63-.07.83-.26.24-.24.26-.67.6-2.5.04-.21.07-1.22.11-1.87-.08-.5-.19-.71-.74-1.01zm11.28 1.72c-.06-.82-.1-1.4-.13-1.73l-.13-.8c-.08-.55-.6-.81-1.26-1.16a9.3 9.3 0 00-1.13-.5c-.84-.33-2.5-.64-3.5-.64H8.7v9.47h2.23v-3.7l1.32 1.92c.25.36.52.52.8.52.2 0 .31-.09.31-.34 0-.1 0-.25-.03-.56l-.2-1.18-1.3-2.37c-.1-.17-.1-.33.05-.5.17-.16.18-.23-.05-.5l-1.02-1.28c-.19-.23-.27-.51-.27-.6 0-.09.04-.14.15-.14.1 0 .37.05.76.17l1.28.46c.55.2 1.07.46 1.55.77.25.17.54.38.8.62l.27.24c.25-.21.56-.47.91-.77.6-.52 1.3-1.14 2.1-1.85.77-.73 1.13-1.2 1.13-1.42 0-.1-.07-.26-.46-.26-.2.01-.7.12-1.23.4l-.85.42a15.6 15.6 0 01-1.13.66c1.3-.23 1.86-.55 2.46-1.1.31-.3.62-.71.62-1.02 0-.3-.24-.48-.6-.48-.13 0-.27.02-.4.08-.82.33-1.55.76-2.38 1.4a10.5 10.5 0 00-1.54 1.42l-.47.6-.4-.36-.71-.68c-.21-.2-.34-.3-.44-.45-.13-.15-.42-.14-.66-.26-.35-.12-.5-.16-1.25-.26-.47-.07-1.55-.13-2.24-.14H4c-.6 0-1.5.12-1.5.74 0 .26.18.3.32.37.34.16.36.27.36.92 0 .67-.26 1.1-.62 1.15l.33.3c.27.27.2.6-.02.28.04 1.08.51 1.55.84 1.9.12.11.14.23.04.33-.18.18-.48.31-.72.37-.18.04-.52.16-.6.4-.06.15.06.3.32.3h2.6c1.1 0 1.9-.13 2.6-.44.5-.22.9-.48 1.14-.94.24-.46.4-.98.33-1.56-.06.16-.13.33-.13.5 0 .34.26.42.74.48.2.02.44.02.66.03.87.03 1.63-.5 1.78-1.22.08-.27.42-.03.5.03l.22.2c.13.14.16-.05.31.19.12.2.58 1.06 1.86 2.17.73.66.86.85 1.2 1.17.34.32.83.72 1.42.97.5.23 1.31.4 1.9.4.4 0 .5-.12.5-.28 0-.34-.37-.47-.98-.78.5-.28.87-.42 1.23-.85.26-.3.35-.46.35-.59 0-.12-.05-.24-.15-.4-.56-.58-.25-1.12-2.34-1.1h-.87c1.08-.78 1.67-1.12 3.43-1.16h.38c.25-.03.7-.1.7-.67.01-.3-.1-.42-.86-.5z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:worldshaans@gmail.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-[#0d1117]/60 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link
              href="/"
              className="text-lg font-bold tracking-widest text-white hover:text-cyan transition-colors"
            >
              AARUSH KARAK
            </Link>
            <p className="mt-3 text-sm text-white/40 max-w-xs leading-relaxed">
              Software developer, spatial computing & AI enthusiast, and founder
              building the future one project at a time.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/experience", label: "Experience" },
                { href: "/skills", label: "Skills" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/40 hover:text-cyan transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-4 uppercase tracking-wider">
              Connect
            </h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/50 hover:text-cyan hover:border-cyan/30 hover:bg-cyan/5 transition-all duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-white/30">
              Toronto, ON &middot; Canada
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Aarush Karak. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
