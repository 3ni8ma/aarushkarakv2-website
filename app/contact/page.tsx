import BackgroundEffect from "@/components/BackgroundEffect";
import ContactForm from "@/components/ContactForm";
import GlassCard from "@/components/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Aarush Karak — email, LinkedIn, GitHub and social links for collaboration, open source and project inquiries.",
  alternates: { canonical: "/contact" },
};

const contactInfo = [
  {
    label: "Email",
    value: "worldshaans@gmail.com",
    href: "mailto:worldshaans@gmail.com",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="M22 4L12 13 2 4" />
      </svg>
    ),
  },
  {
    label: "Location",
    value: "Greater Toronto Area, Ontario, Canada",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/aarush-karak",
    href: "https://www.linkedin.com/in/aarush-karak/",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "github.com/3ni8ma",
    href: "https://github.com/3ni8ma",
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
];

const testimonials = [
  {
    quote:
      "Aarush was one of the youngest interns we've selected — he picked up technical concepts fast and taught them clearly to visitors.",
    name: "Sci-Tech Discovery Center",
    role: "Maker Studio Teen Internship",
  },
  {
    quote:
      "As parliamentarian he kept a 200+ student chapter running smoothly all year — then went and won 1st place at state.",
    name: "Technology Student Association",
    role: "Chapter Officer, 9th Grade Center",
  },
];

export default function Contact() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="fluid-smoke" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <GlassCard className="p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold">
            Get in <span className="text-gradient-cyan">Touch</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-medium">
            Have a project in mind or just want to say hello? Reach out through
            the form or connect directly.
          </p>
        </GlassCard>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Contact Form */}
          <GlassCard className="p-8">
            <h2 className="text-xl font-bold text-white mb-6">
              Send a Message
            </h2>
            <ContactForm />
          </GlassCard>

          {/* Contact Info */}
          <div className="space-y-6">
            <GlassCard className="p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                Contact Info
              </h2>
              <div className="space-y-5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="mt-0.5 text-cyan flex-shrink-0">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-white/60">{item.label}</p>
                      {"href" in item && item.href ? (
                        <a
                          href={item.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/90 hover:text-cyan transition-colors font-medium"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm text-white/90 font-medium">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </GlassCard>

            {/* Testimonials */}
            <GlassCard className="p-8">
              <h2 className="text-xl font-bold text-white mb-6">
                What People Say
              </h2>
              <div className="space-y-5">
                {testimonials.map((t) => (
                  <figure key={t.name}>
                    <blockquote className="text-sm text-white/80 leading-relaxed italic">
                      “{t.quote}”
                    </blockquote>
                    <figcaption className="mt-2 text-sm font-semibold text-cyan">
                      {t.name}
                      <span className="block text-xs font-medium text-white/50 not-italic">
                        {t.role}
                      </span>
                    </figcaption>
                  </figure>
                ))}
              </div>
              <p className="mt-6 text-xs text-white/40">
                Professional references available on request.
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
