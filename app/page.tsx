import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import GlowButton from "@/components/GlowButton";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Aarush Karak | Software Developer, AI & Spatial Computing",
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteConfig.url,
    title: "Aarush Karak | Software Developer, AI & Spatial Computing",
    description: siteConfig.description,
  },
};

const projects = [
  {
    title: "HELIOS",
    image: "/images/projects/Helios-thumbnail.png",
    description:
      "Browser-based AI operating system with touch-free hand-gesture navigation and a 3D spatial interface. Built with Three.js & MediaPipe.",
    tags: ["Three.js", "MediaPipe", "AI", "Spatial Computing"],
    href: "https://github.com/3ni8ma/HELIOS",
  },
  {
    title: "astro-tasks",
    image: "/images/projects/Astro-Tasks-thumbnail.png",
    description:
      "Python CLI developer dashboard on PyPI integrating GitHub CLI, git health checks, and stats. Built for the Stardance Challenge (NASA x GitHub x AMD).",
    tags: ["Python", "CLI", "PyPI", "Open Source"],
    href: "https://github.com/3ni8ma/astro-tasks",
  },
  {
    title: "Finance Hub",
    image: "/images/projects/Finance-Hub-thumbnail.png",
    description:
      "Full-stack financial intelligence platform with live market monitoring, AI-driven predictions using Prophet, and real-time dashboards.",
    tags: ["React", "FastAPI", "Supabase", "ML"],
    href: "https://github.com/3ni8ma/Finance-Hub",
  },
  {
    title: "Knowledge-Globe",
    image: "/images/projects/Knowledge-Globe-thumbnail.png",
    description:
      "Interactive 3D encyclopedia visualizing knowledge networks on a rotatable 3D globe with dynamic data connections.",
    tags: ["Three.js", "WebGL", "Data Viz"],
    href: "https://github.com/3ni8ma/Knowledge-Globe",
  },
  {
    title: "FixMate",
    image: "/images/projects/FixMate-thumbnail.png",
    description:
      "AI-powered home maintenance diagnostic application that helps users identify and resolve household issues.",
    tags: ["AI", "Web App", "Diagnostics"],
    href: "https://github.com/3ni8ma/Fixmate-App",
  },
  {
    title: "CommunityOne",
    image: "/images/projects/CommunityOne-thumbnail.png",
    description:
      "Open-source civic data platform centralizing public records and legislative datasets with cloud-native backend systems.",
    tags: ["Node.js", "PostgreSQL", "Civic Tech"],
    href: "https://github.com/3ni8ma/DoxDock",
  },
];

const stats = [
  { value: "200+", label: "Coding Hours Tracked" },
  { value: "9+", label: "Projects" },
  { value: "$5K+", label: "Freelance Revenue" },
  { value: "200+", label: "Volunteer Hours" },
];

export default function Home() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="mesh-gradient" />

      {/* Hero Section */}
      <section className="relative z-10 min-h-[calc(100vh-4rem)] px-4 py-20 flex flex-col md:flex-row items-center md:items-center justify-center gap-10 md:gap-16 max-w-5xl mx-auto">
        <div className="flex-1 text-left">
          <h1>
            <img
              src="/images/logo-text.png"
              alt="Aarush Karak"
              className="h-12 sm:h-16 md:h-20 w-auto"
            />
          </h1>
          <GlassCard className="mt-6 px-8 py-5 max-w-2xl">
            <p className="text-lg sm:text-xl text-white/80 leading-relaxed font-medium">
              Sophomore @ John Fraser Secondary School | Founder @ TheCoderBros |
              Software Developer | Spatial Computing & AI Enthusiast
            </p>
          </GlassCard>

          <div className="mt-8 grid grid-cols-2 gap-3 w-full max-w-lg">
            {[
              "Founder @ TheCoderBros",
              "Open-Source Maintainer",
              "1st Place TSA State Champion (Video Game 3D Design)",
              "NYLF Engineering Invited Scholar",
            ].map((badge) => (
              <div
                key={badge}
                className="glass-card px-4 py-3 text-sm text-white/90 text-left font-semibold"
              >
                {badge}
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <GlowButton
              href="/blog"
              className="px-8 py-3 text-sm font-bold text-white hover:text-cyan transition-all"
            >
              Explore Projects
            </GlowButton>
            <GlowButton
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 text-sm font-bold text-white hover:text-cyan transition-all"
            >
              View Resume
            </GlowButton>
          </div>
        </div>

        <div className="flex-shrink-0">
          <div className="relative w-56 md:w-72 rounded-2xl overflow-hidden border border-white/10 glass-card p-2">
            <img
              src="/images/aarush-karak-software-developer-toronto.jpg"
              alt="Aarush Karak — Software Developer and Spatial Computing Engineer, Founder of TheCoderBros"
              width={1023}
              height={1537}
              fetchPriority="high"
              className="w-full h-auto rounded-xl block"
            />
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative z-10 mx-auto max-w-4xl px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <GlassCard key={stat.label} className="text-center py-6 px-4">
              <div className="text-3xl font-bold text-cyan">{stat.value}</div>
              <div className="mt-1 text-sm text-white/70 font-medium">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative z-10 mx-auto max-w-6xl px-4 pb-24">
        <GlassCard className="p-6 mb-12 text-center">
          <h2 className="text-3xl font-bold">
            Featured <span className="text-gradient-cyan">Projects</span>
          </h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <GlassCard key={project.title} as="a" href={project.href} className="p-6 flex flex-col group">
              <div className="relative overflow-hidden rounded-xl border border-white/10 mb-4">
                <img
                  src={project.image}
                  alt={`${project.title} preview`}
                  className="w-full aspect-video object-cover block transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan transition-colors">
                  {project.title}
                </h3>
                <svg className="h-4 w-4 text-white/30 group-hover:text-cyan transition-colors flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </div>
              <p className="mt-3 text-sm text-white/70 leading-relaxed flex-1">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs font-semibold rounded-full bg-white/10 text-cyan border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  );
}
