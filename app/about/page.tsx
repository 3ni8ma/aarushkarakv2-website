import BackgroundEffect from "@/components/BackgroundEffect";
import GlassCard from "@/components/GlassCard";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet Aarush Karak — software developer, AI and spatial computing enthusiast from Toronto, Canada. Founder of TheCoderBros and builder of hands-on technical projects.",
  alternates: { canonical: "/about" },
};

const education = [
  {
    school: "John Fraser Secondary School",
    location: "Mississauga, ON",
    period: "Feb 2026 - Present",
  },
  {
    school: "Coppell High School",
    location: "Coppell, TX",
    period: "Aug 2025 - Jan 2026",
  },
  {
    school: "Coppell Middle School West",
    location: "Coppell, TX",
    period: "Aug 2024 - May 2025",
  },
  {
    school: "Russian School of Mathematics (RSM)",
    location: "Mathematics",
    period: "2024 - 2029",
  },
];

const hobbies = [
  {
    title: "Pianist",
    description:
      "Classical and modern pianist (2015 - Present). Received Medals of Distinction in Grade 1 & Grade 2 Trinity College / University of West London examinations.",
  },
  {
    title: "Badminton Player",
    description:
      "Competitive player (2022 - Present). Competed in 2 USA Badminton Open Regional Championships and 3 Open Local Championships.",
  },
  {
    title: "Sports",
    description: "Soccer, Tennis.",
  },
];

const volunteer = [
  {
    title: "National Junior Honor Society (NJHS)",
    description:
      "50+ hours volunteer service, raised $3,000+ for Dallas Children's Advocacy Center.",
  },
  {
    title: "Ankur DFW",
    description:
      "200+ hours volunteer service across blood drives, community cleanups, food & clothing drives.",
  },
];

export default function About() {
  return (
    <div className="relative isolate min-h-screen overflow-hidden">
      <BackgroundEffect effect="fluted-glass" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-20">
        {/* Page Title */}
        <GlassCard className="p-8 mb-12 text-center">
          <h1 className="text-4xl font-bold">
            About <span className="text-gradient-cyan">Me</span>
          </h1>
          <p className="text-white/80 mt-4 max-w-xl mx-auto font-medium">
            Developer, leader, and lifelong learner building at the intersection of
            software and spatial computing.
          </p>
        </GlassCard>

        {/* Biography */}
        <GlassCard className="p-8 mb-12">
          <figure className="flex flex-col sm:flex-row items-center gap-6 mb-6">
            <Image
              src="/images/aarush-karak-software-developer-toronto.jpg"
              alt="Aarush Karak — Software Developer and Spatial Computing Engineer"
              width={192}
              height={288}
              loading="lazy"
              className="w-36 rounded-2xl object-cover shrink-0 border border-white/10"
            />
            <figcaption className="text-white/80 leading-relaxed">
              <strong className="text-white">Aarush Karak</strong> — software
              developer building AI systems and 3D spatial interfaces. Founder
              of TheCoderBros, based in Toronto, Canada.
            </figcaption>
          </figure>
          <p className="text-white/85 leading-relaxed text-lg">
            Grade 10 student passionate about computer science, software
            development, AI systems, and spatial computing. Builds end-to-end
            applications utilizing Python, JavaScript, Java, C++, Three.js,
            MediaPipe, REST APIs, PostgreSQL, React, and Node.js. Selected
            through a competitive interview process as the youngest Maker Studio
            Teen Intern at Sci-Tech Discovery Center (Frisco, TX). Former
            Elected Parliamentarian for TSA -- guided 200+ students, 30+ state
            finalists.
          </p>
        </GlassCard>

        {/* Education */}
        <GlassCard className="p-5 mb-8">
          <h2 className="text-2xl font-bold">Education</h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-16">
          {education.map((item) => (
            <GlassCard key={item.school} className="p-6">
              <h3 className="text-lg font-bold text-white">
                {item.school}
              </h3>
              <p className="text-sm text-cyan/80 mt-1 font-medium">{item.location}</p>
              <p className="text-sm text-white/60 mt-1">{item.period}</p>
            </GlassCard>
          ))}
        </div>

        {/* Extracurriculars */}
        <GlassCard className="p-5 mb-8">
          <h2 className="text-2xl font-bold">Beyond Code</h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
          {hobbies.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>

        {/* Volunteering */}
        <GlassCard className="p-5 mb-8">
          <h2 className="text-2xl font-bold">Community & Service</h2>
        </GlassCard>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {volunteer.map((item) => (
            <GlassCard key={item.title} className="p-6">
              <h3 className="text-lg font-bold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70 leading-relaxed">
                {item.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </div>
  );
}
