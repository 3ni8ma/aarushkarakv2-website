import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Skills",
  description:
    "Technical skills of Aarush Karak — Python, JavaScript, TypeScript, React, Three.js, AI systems, spatial computing, and full-stack development.",
  alternates: { canonical: "/skills" },
};

const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "Java",
      "C++",
      "HTML5/CSS3",
      "SQL",
    ],
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
      </svg>
    ),
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "Three.js",
      "MediaPipe",
      "REST APIs",
      "PostgreSQL",
    ],
  },
  {
    title: "Domains",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
      </svg>
    ),
    skills: [
      "Spatial Computing",
      "AI Systems",
      "UI/UX Design",
      "Web Development",
      "CLI Development",
    ],
  },
  {
    title: "Spoken Languages",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    skills: [
      "English (Native)",
      "Hindi (Native)",
      "Bengali (Native)",
      "Spanish (Limited)",
      "Marathi (Limited)",
    ],
  },
  {
    title: "Soft Skills & Leadership",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
    skills: [
      "Public Speaking",
      "Youth Mentorship",
      "Agile Methodologies",
      "Parliamentary Procedure",
    ],
  },
];

const certifications = [
  { name: "Introduction to Modern AI", issuer: "Cisco Networking Academy", date: "August 2026", href: "/certificates/introduction-to-modern-ai.pdf" },
  { name: "AI Security & Governance", issuer: "Securiti AI", date: "July 2026", href: "/certificates/ai-security-governance.pdf" },
  { name: "Artificial Intelligence Fundamentals", issuer: "IBM", date: "June 2026", href: "/certificates/ai-fundamentals.pdf" },
  { name: "Introduction to Generative AI", issuer: "Google", date: "June 2026", href: "/certificates/intro-to-gen-ai-badge.png" },
  { name: "Career Essentials in GitHub", issuer: "GitHub", date: "June 2026", href: "/certificates/github-professional-certificate.pdf" },
  { name: "Build Your Own Chatbot", issuer: "", date: "", href: "/certificates/build-your-own-chatbot.pdf" },
  { name: "AI Fluency: Framework & Foundations", issuer: "Anthropic", date: "2026", href: "/certificates/ai-fluency-framework-foundations.pdf" },
  { name: "Claude Code in Action", issuer: "Anthropic", date: "2026", href: "/certificates/claude-code-in-action.pdf" },
  { name: "Intro to Machine Learning", issuer: "Kaggle", date: "April 2026", href: "/certificates/intro-to-machine-learning.png" },
  { name: "Advanced SQL", issuer: "Kaggle", date: "2026", href: "/certificates/advanced-sql.png" },
  { name: "OpenCV Bootcamp", issuer: "OpenCV University", date: "", href: "/certificates/opencv-bootcamp.pdf" },
];

const awards = [
  {
    title: "First Place: Video Game 3D Design",
    org: "TSA State Conference",
    date: "May 2026",
    href: "/certificates/tsa-award.png",
  },
  {
    title: "Invited Scholar",
    org: "NYLF: Engineering @ George Mason University",
    date: "",
    href: "/certificates/nylf-award.png",
  },
  {
    title: "Abacus Grand Master",
    org: "SIP Academy India & International",
    date: "Jan 2022",
    href: "/certificates/abacus-award.png",
  },
  {
    title: "Certificate of Distinction (Gold Medal, Rank #8)",
    org: "SOF International Math Olympiad",
    date: "Jan 2021",
    href: "/certificates/sof-award.png",
  },
  {
    title: "Medals of Distinction (Grade 1 & 2 Piano)",
    org: "Trinity College / University of West London",
    date: "",
    href: "/certificates/trinity-award.png",
  },
];

export default function Skills() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="noise-shimmer" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-20">
        <GlassCard className="p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-gradient-cyan">Skills</span> & Expertise
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-medium">
            Technologies, certifications, and awards that define my journey.
          </p>
        </GlassCard>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((cat) => (
            <GlassCard key={cat.title} className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-cyan">{cat.icon}</span>
                <h3 className="text-lg font-bold text-white">
                  {cat.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-white/80 border border-white/10 hover:border-cyan/40 hover:text-cyan transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Certifications */}
        <GlassCard className="p-5 mb-8">
          <h2 className="text-2xl font-bold">Certifications</h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
          {certifications.map((cert) =>
            cert.href ? (
              <GlassCard key={cert.name} as="a" href={cert.href} className="p-5 group">
                <h3 className="text-sm font-bold text-white leading-snug group-hover:text-cyan transition-colors">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="mt-2 text-xs font-medium text-cyan/80">{cert.issuer}</p>
                )}
                {cert.date && (
                  <p className="mt-0.5 text-xs text-white/60">{cert.date}</p>
                )}
              </GlassCard>
            ) : (
              <GlassCard key={cert.name} className="p-5">
                <h3 className="text-sm font-bold text-white leading-snug">
                  {cert.name}
                </h3>
                {cert.issuer && (
                  <p className="mt-2 text-xs font-medium text-cyan/80">{cert.issuer}</p>
                )}
                {cert.date && (
                  <p className="mt-0.5 text-xs text-white/60">{cert.date}</p>
                )}
              </GlassCard>
            )
          )}
        </div>

        {/* Awards */}
        <GlassCard className="p-5 mb-8">
          <h2 className="text-2xl font-bold">Honors & Awards</h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {awards.map((award) => (
            <GlassCard key={award.title} as="a" href={award.href} className="p-5 group">
              <h3 className="text-sm font-bold text-white group-hover:text-cyan transition-colors leading-snug">
                {award.title}
              </h3>
              <p className="mt-2 text-xs font-medium text-coral/90">{award.org}</p>
              {award.date && (
                <p className="mt-0.5 text-xs text-white/60">{award.date}</p>
              )}
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
