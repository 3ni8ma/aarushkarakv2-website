import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Experience of Aarush Karak — Co-Founder & CEO of TheCoderBros, Application Developer at Hack Club, open-source contributor, and builder of AI, 3D web and spatial computing applications.",
  alternates: { canonical: "/experience" },
};

const experiences = [
  {
    role: "Co-Founder & CEO",
    org: "TheCoderBros",
    period: "July 2023 - Present",
    description:
      "Founded student-led tech initiative; architected open-source AI, 3D web, and spatial computing applications.",
    href: "https://thecoderbros.vercel.app",
    logo: "/images/logos/the-coder-bros.png",
  },
  {
    role: "Back End Developer",
    org: "CommunityOne",
    period: "June 2026 - Present",
    description:
      "Built cloud-native backend systems for open-source civic data platform centralizing public records and legislative datasets.",
    href: "https://github.com/3ni8ma/DoxDock",
    logo: "/images/logos/communityone.png",
  },
  {
    role: "Full-Stack SWE",
    org: "Chingu",
    period: "June 2026 - Present",
    description:
      "Participated in 6-week Agile Voyage cohort building React/Node.js/Python/PostgreSQL applications with automated data pipelines.",
    href: "https://www.chingu.io",
    logo: "/images/logos/chingu.png",
  },
  {
    role: "Stardance Challenge — Platform Engineer",
    org: "Hack Club",
    period: "June 2026 - Aug 2026",
    description:
      "Built for the largest STEM event of the summer — a Hack Club program in partnership with NASA, GitHub, and AMD. Designed and shipped astro-tasks, a Python CLI developer dashboard that checks GitHub notifications, coding stats, and local repo health in one command. Published on PyPI, MIT licensed, with modular architecture integrating GitHub CLI and git health checks.",
    href: "https://pypi.org/project/astro-tasks/",
    logo: "/images/logos/hackclub.svg",
  },
  {
    role: "Hackatime Coder (Co-op)",
    org: "Hack Club",
    period: "May 2026 - Aug 2026",
    description:
      "Tracked 1000+ hours of coding activity across 7 projects using Hackatime, an open-source WakaTime-compatible analytics platform. Maintained a 100% heartbeat acceptance rate through automated 24/7 pipeline infrastructure.",
    href: "https://hackclub.com",
    logo: "/images/logos/hackclub.svg",
  },
  {
    role: "OAuth Application Developer (Co-op)",
    org: "Hack Club",
    period: "June 2025 - July 2026",
    description:
      "Developed full-stack mobile/web app platform with serverless reactive architecture and optimized real-time sync.",
    href: "https://hackclub.com",
    logo: "/images/logos/hackclub.svg",
  },
  {
    role: "Web Developer & Freelancer",
    org: "Freelance Insider",
    period: "April 2025 - Present",
    description:
      "Delivered over $5,000 in high-value client projects specializing in 3D web environments, AI apps, and financial tools.",
    href: "https://www.freelanceinsider.net",
    logo: "/images/logos/freelance-insider.png",
  },
  {
    role: "Parliamentarian",
    org: "Technology Student Association (TSA)",
    period: "Aug 2025 - May 2026",
    description:
      "Officer for 9th Grade Center (200+ students, 30+ state finalists). Awarded 1st Place in Video Game 3D Design at TSA State Conference.",
    href: "https://tsaweb.org",
    logo: "/images/logos/tsa.png",
  },
  {
    role: "Maker Studio Teen Intern",
    org: "Sci-Tech Discovery Center",
    period: "June 2025 - Sept 2025",
    description:
      "Completed 40+ hours in STEAM makerspace teaching technical concepts. Youngest intern selected through competitive interview process.",
    href: "https://scitechdiscovery.org",
    logo: "/images/logos/scitech.png",
  },
];

export default function Experience() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="liquid-metal" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        <GlassCard className="p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold">
            <span className="text-gradient-cyan">Experience</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-medium">
            A timeline of my journey in software engineering, leadership, and
            open-source development.
          </p>
        </GlassCard>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan/50 via-crimson/40 to-cyan/30 md:-translate-x-px" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div
                key={`${exp.org}-${exp.role}`}
                className={`relative flex flex-col md:flex-row gap-4 md:gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3 h-3 rounded-full bg-cyan shadow-lg shadow-cyan/40 md:-translate-x-1.5 z-10 border-2 border-[#0d1117]" />

                {/* Content */}
                <div
                  className={`flex-1 ${
                    i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
                  } pl-6 md:pl-0`}
                >
                  <GlassCard as="a" href={exp.href} className="p-6 inline-block w-full group">
                    <div className="flex items-start gap-4">
                      {exp.logo && (
                        <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden bg-white/10 flex items-center justify-center p-2">
                          <img
                            src={exp.logo}
                            alt={`${exp.org} logo`}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      )}
                      <div className="min-w-0">
                        <span className="text-xs font-bold text-cyan/80 uppercase tracking-wider">
                          {exp.period}
                        </span>
                        <h3 className="mt-1 text-xl font-bold text-white group-hover:text-cyan transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-coral/90 mt-0.5 font-semibold">{exp.org}</p>
                        <p className="mt-3 text-sm text-white/70 leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
