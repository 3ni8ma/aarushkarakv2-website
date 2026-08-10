# PRODUCT REQUIREMENTS DOCUMENT (PRD) -- Aarush Karak Portfolio v2

## Project Title

**Aarush Karak -- Personal Portfolio Website (v2 Redesign)**

## Core Objective

Re-engineer the existing portfolio (https://aarushkarak.vercel.app/) as a high-performance Next.js application featuring dynamic procedural WebGL canvas backgrounds, glassmorphism UI components, and a cyber-dark aesthetic. The new design retains ALL content from the current site while completely overhauling the visual presentation.

---

## Target Profile Summary

- **Name:** Aarush Karak
- **Role:** Founder @ TheCoderBros | Software Developer | Spatial Computing & AI Specialist | Student @ John Fraser Secondary School
- **Location:** Greater Toronto Area, Ontario, Canada
- **Email:** worldshaans@gmail.com / 1135807@pdsb.net
- **Phone:** +1 (647) 519-4798
- **Current Portfolio:** https://aarushkarak.vercel.app/
- **LinkedIn:** https://www.linkedin.com/in/aarush-karak/

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| UI Animation | AI Designer Effects (https://cdn.aidesigner.ai/effects/runtime/v1.js) |
| Icons | Glassmorphism-themed SVG icons from svgrepo.com / iconbuddy.com |
| Deployment | Vercel |

---

## Navigation & Architecture

6 core pages accessible via a sticky glassmorphism navigation bar with active route indicator and mobile responsive drawer menu:

1. **Home (`/`)** -- Hero presentation, key stats, featured projects teaser, quick CTAs
2. **About (`/about`)** -- Bio, background, education history, extracurricular leadership, volunteering
3. **Experience (`/experience`)** -- Full chronological work experience, open-source, internships, leadership
4. **Skills (`/skills`)** -- Interactive catalog of languages, tools, frameworks, certifications, honors
5. **Blog (`/blog`)** -- Technical writeups, devlogs, project case studies
6. **Contact (`/contact`)** -- Contact form, social links, references, resume download

---

## Detailed Page Content Specifications

---

### PAGE 1: Home (`/`)

**Background Effect:** fluid-smoke
**Layout:** Single column hero, stats bar, featured projects grid

#### Hero Section
- **Headline:** "Aarush Karak" (large, bold, white)
- **Sub-headline:** "Sophomore @ John Fraser Secondary School | Founder @ TheCoderBros | Software Developer | Spatial Computing & AI Enthusiast" (smaller, white/70 opacity)
- **Highlight Badge Grid** (4 badges in 2x2 grid, glass-card styled):
  - Founder @ TheCoderBros
    - 1st Place TSA State Champion (Video Game 3D Design)
  - NYLF Engineering Invited Scholar
- **CTA Buttons** (glass-card styled, side by side):
  - "Explore Projects" (scrolls to featured projects section below, or links to `/experience`)
  - "Download Resume" (links to resume PDF download)
- Each badge/button should have an appropriate glassmorphism-themed SVG icon

#### Key Statistics Bar
- A horizontal row of 3-4 glass-styled stat cards below the hero:
  - "200+" Coding Hours Tracked
  - "9+ Projects"
  - "$5K+" Freelance Revenue
  - "200+" Volunteer Hours

#### Featured Projects Section (Grid of Glass Cards)
Section heading: "Featured Projects"

Each card: glass-card with project logo/icon, title, short description, tech tags, optional link.

1. **HELIOS** -- Browser-based AI operating system with touch-free hand-gesture navigation and a 3D spatial interface. Built with Three.js & MediaPipe.
2. **astro-tasks** -- Python CLI developer dashboard on PyPI integrating GitHub CLI, git health checks, and WakaTime coding stats.
3. **AuraFinance (Finance Hub)** -- Full-stack financial intelligence platform with live market monitoring and AI-driven prediction (Prophet, yfinance). React/Python FastAPI/Supabase stack.
4. **Knowledge-Globe** -- Interactive 3D encyclopedia visualizing knowledge networks on a 3D interactive globe.
5. **FixMate** -- AI-powered home maintenance diagnostic application.
6. **CommunityOne** -- Open-source civic data platform centralizing public records and legislative datasets.

---

### PAGE 2: About (`/about`)

**Background Effect:** fluted-glass
**Layout:** Single column with sections separated by spacing

#### Biography Card (glass-card, full width)
Content (prose):
"Grade 10 student passionate about computer science, software development, AI systems, and spatial computing. Builds end-to-end applications utilizing Python, JavaScript, Java, C++, Three.js, MediaPipe, REST APIs, PostgreSQL, React, and Node.js. Selected through a competitive interview process as the youngest Maker Studio Teen Intern at Sci-Tech Discovery Center (Frisco, TX). Former Elected Parliamentarian for TSA -- guided 200+ students, 30+ state finalists."

#### Education Section
Section heading: "Education"
Grid of glass cards for each entry:

| School | Location | Period |
|--------|----------|--------|
| John Fraser Secondary School | Mississauga, ON | Feb 2026 - Present |
| Coppell High School | Coppell, TX | Aug 2025 - Jan 2026 |
| Coppell Middle School West | Coppell, TX | Aug 2024 - May 2025 |
| Russian School of Mathematics (RSM) | Mathematics | 2024 - 2029 |
| Garden High School | India | 2014 - 2018 |

#### Extracurriculars & Hobbies Section
Section heading: "Beyond Code"
Glass cards for each:

- **Pianist** -- Classical and modern pianist (2015 - Present). Received Medals of Distinction in Grade 1 & Grade 2 Trinity College / University of West London examinations.
- **Badminton Player** -- Competitive player (2022 - Present). Competed in 2 USA Badminton Open Regional Championships and 3 Open Local Championships.
- **Sports** -- Soccer, Tennis.

#### Volunteering & Community Section
Section heading: "Community & Service"

- **National Junior Honor Society (NJHS)** -- 50+ hours volunteer service, raised $3,000+ for Dallas Children's Advocacy Center.
- **Ankur DFW** -- 200+ hours volunteer service across blood drives, community cleanups, food & clothing drives.

---

### PAGE 3: Experience (`/experience`)

**Background Effect:** liquid-metal
**Layout:** Vertical timeline with alternating left/right glass cards

#### Timeline Entries (chronological, most recent first):

1. **TheCoderBros -- Co-Founder & CEO** (July 2023 - Present)
   Founded student-led tech initiative; architected open-source AI, 3D web, and spatial computing applications.

2. **CommunityOne -- Back End Developer** (June 2026 - Present)
   Built cloud-native backend systems for open-source civic data platform centralizing public records and legislative datasets.

6. **Chingu -- Full-Stack SWE** (June 2026 - Present)
   Participated in 6-week Agile Voyage cohort building React/Node.js/Python/PostgreSQL applications with automated data pipelines.

7. **Fiverr -- Web Developer & Freelancer** (April 2025 - Present)
   Delivered over $5,000 in high-value client projects specializing in 3D web environments, AI apps, and financial tools.

8. **Technology Student Association (TSA) -- Parliamentarian** (Aug 2025 - May 2026)
   Officer for 9th Grade Center (200+ students, 30+ state finalists). Awarded 1st Place in Video Game 3D Design at TSA State Conference.

9. **Sci-Tech Discovery Center -- Maker Studio Teen Intern** (June 2025 - Sept 2025)
   Completed 40+ hours in STEAM makerspace teaching technical concepts. Youngest intern selected through competitive interview process.

Each timeline card: glass-card with role title, organization, date range, description, optional icon.

---

### PAGE 4: Skills (`/skills`)

**Background Effect:** noise-shimmer
**Layout:** Category grid + certifications grid + awards grid

#### Technical Skills (Grid of glass cards, grouped by category)

**Languages:** Python, JavaScript, TypeScript, Java, C++, HTML5/CSS3, SQL
**Frameworks & Libraries:** React, Next.js, Node.js, Three.js, MediaPipe, REST APIs, PostgreSQL
**Domains:** Spatial Computing, AI Systems, UI/UX Design, Web Development, CLI Development
**Spoken Languages:** English (Native), Hindi (Native), Bengali (Native), Spanish (Limited Working), Marathi (Limited Working)
**Soft Skills & Leadership:** Public Speaking, Youth Mentorship, Agile Methodologies, Parliamentary Procedure

Each skill should be a small pill/chip inside a category glass card. Use appropriate glassmorphism-themed icons for each category.

#### Verified Certifications Grid
Section heading: "Certifications"
Grid of glass certification cards, each showing: cert name, issuer, date, optional badge/icon.

- Artificial Intelligence Fundamentals -- IBM (June 2026)
- Introduction to Generative AI -- Google (June 2026)
- Career Essentials in GitHub -- GitHub (June 2026)
- Intro to Machine Learning -- Kaggle (April 2026)
- Advanced SQL -- Kaggle
- AI Fluency Framework & Foundations
- Claude Code in Action
- OpenCV Bootcamp

#### Honors & Awards Grid
Section heading: "Honors & Awards"
Grid of glass award cards.

- First Place: Video Game 3D Design -- TSA State Conference (May 2026)
- Invited Scholar -- National Youth Leadership Forum (NYLF): Engineering at George Mason University
- Abacus Grand Master -- SIP Academy India & International (Jan 2022)
- Certificate of Distinction (Gold Medal, Rank #8) -- SOF International Math Olympiad (Jan 2021)
- Medals of Distinction (Grade 1 & 2 Piano) -- Trinity College / University of West London

---

### PAGE 5: Blog (`/blog`)

**Background Effect:** aurora-flow
**Layout:** Grid of glass blog post cards

#### Blog Posts:

1. **Building `astro-tasks`: Python CLI Developer Dashboard** (July 2026)
   How I designed, packaged, and published a modular CLI to PyPI integrating GitHub notifications and git health checks.

2. **Spatial Computing on the Web: MediaPipe + Three.js** (June 2026)
   Lessons learned from building HELIOS -- a gesture-controlled browser OS without hardware wearables.

3. **Civic Tech and Open Source Data Platforms** (June 2026)
   Architecting backend tools for CommunityOne to bridge local public record accessibility gaps.

Each card: glass-card with title, date, excerpt, "Read More" link (with hover effect). The blog content itself can be placeholder article pages for now, linked from each card.

--- 

### PAGE 6: Contact (`/contact`)

**Background Effect:** mesh-gradient
**Layout:** Three sections: contact form, direct info, references

#### Interactive Contact Form Card (glass-card, centered)
Fields:
- Name (text input)
- Email (email input)
- Subject (text input)
- Message (textarea)
- Submit button (glass-card styled with cyan hover glow)

All inputs styled with glassmorphism background: `bg-white/5 backdrop-blur-md border border-white/10 focus:border-cyan-400/50 focus:ring-cyan-400/20`

#### Direct Contact Information Card (glass-card)
- **Email:** worldshaans@gmail.com | 1135807@pdsb.net
- **Phone:** +1 (647) 519-4798
- **Location:** Greater Toronto Area, Ontario, Canada
- **LinkedIn:** https://www.linkedin.com/in/aarush-karak
- **GitHub / Portfolio:** https://aarushkarak.vercel.app/

Each with a glassmorphism-themed SVG icon.

#### Professional References Card (glass-card)
- **Jacie Hood** -- Director of Education, Sci-Tech Discovery Center
  - Phone: 469-896-2188
  - Email: jacie.hood@scitechdiscovery.org
- **Abby Resendez** -- Media & Computer Science Teacher, Coppell ISD
  - Email: aresendez@coppellisd.com

---

## Design Tokens

```css
/* Colors */
--color-bg-base: #0d1117;
--color-cyan: #00f2fe;
--color-crimson: #e60049;
--color-coral: #d67964;
--color-text-primary: #ffffff;
--color-text-secondary: rgba(255, 255, 255, 0.6);
--color-glass-bg: rgba(255, 255, 255, 0.08);
--color-glass-border: rgba(255, 255, 255, 0.18);
--color-glass-hover-border: rgba(0, 242, 254, 0.4);

/* Glass Card */
--glass-blur: 50px;
--glass-radius: 20px;
--glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);

/* Typography */
--font-family: 'Inter', system-ui, sans-serif;
--font-light: 300;
--font-regular: 400;
--font-semibold: 600;
--font-bold: 700;
```

---

## Responsive Design

| Breakpoint | Width | Behavior |
|------------|-------|----------|
| Mobile | < 640px | Single column layouts, hamburger nav, stacked grids, smaller padding |
| Tablet | 640px - 1024px | 2-column grids where applicable, normal spacing |
| Desktop | > 1024px | 3-column grids, full spacing, max-width container (1200px) |

---

## Interactive States

- **Glass cards:** hover lifts card 4px (`translateY(-4px)`), border glows cyan, shadow intensifies
- **CTA buttons:** pulsating cyan glow on hover, scale 1.02
- **Nav links:** active page gets cyan underline, hover gets cyan text color
- **Form inputs:** cyan focus ring, glassmorphism background maintained
- **Skill pills:** subtle cyan border on hover
- **Timeline timeline:** left connector line animates with cyan gradient on scroll

---

## Acceptance Criteria

- [ ] All 6 pages render with correct dynamic background effects
- [ ] Glassmorphism cards display correctly with blur, borders, and hover states
- [ ] Navigation is sticky, responsive (mobile hamburger), and highlights active route
- [ ] All content from the existing portfolio (https://aarushkarak.vercel.app/) is preserved
- [ ] Contact form is functional (can submit to a form service or mailto fallback)
- [ ] Resume download link works
- [ ] All social links (LinkedIn, GitHub, Email) are functional
- [ ] Responsive layouts work on mobile, tablet, and desktop
- [ ] Glassmorphism icons load correctly from svgrepo.com/iconbuddy.com
- [ ] AI Designer effects runtime loads and activates background animations
- [ ] Page transitions are smooth with no layout shift
