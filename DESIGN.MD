# DESIGN SPECIFICATION -- Aarush Karak Portfolio v2

## 1. Aesthetic Theme & Visual Identity

- **Theme Name:** Cyber Dark Glassmorphism
- **Base Background Color:** `#0d1117`
- **Primary Color Palette:**
  - Electric Cyan: `#00f2fe`
  - Neon Crimson: `#e60049`
  - Soft Coral / Accent: `#d67964`
  - Deep Dark Base: `#0d1117`
- **Visual Style:** Modern, interactive, dark-mode glassmorphic cards over dynamic procedural WebGL canvas backgrounds. High-contrast typography with clean layout scannability. Neon-cyber accents on interactive states.
- **Typography:** System sans-serif or Inter/Geist (light 300 / regular 400 / semibold 600 / bold 700 weights). All text white `#ffffff` with opacity variants for secondary text (`text-white/60`, `text-white/80`).
- **Icon Style:** Glassmorphism-themed SVG icons from free no-watermark sources (svgrepo.com, iconbuddy.com) -- outlined or duotone style, tinted with cyan/crimson accent colors.

---

## 2. Global Runtime Script Requirement

Include the AI Designer effects runtime in `app/layout.tsx` (Next.js App Router):

```tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#0d1117] text-white antialiased min-h-screen">
        {children}
        <Script
          src="https://cdn.aidesigner.ai/effects/runtime/v1.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
```

---

## 3. Page Structure & Routing

The application uses Next.js App Router with 6 top-level routes:

| Route | File | Background Effect |
|-------|------|-------------------|
| `/` | `app/page.tsx` | fluid-smoke |
| `/about` | `app/about/page.tsx` | fluted-glass |
| `/experience` | `app/experience/page.tsx` | liquid-metal |
| `/skills` | `app/skills/page.tsx` | noise-shimmer |
| `/blog` | `app/blog/page.tsx` | aurora-flow |
| `/contact` | `app/contact/page.tsx` | mesh-gradient |

Every page route must be wrapped in a container with `className="relative isolate min-h-screen overflow-hidden"` to keep the canvas effect pinned strictly behind content (`-z-10`).

---

## 4. Dynamic Page Background Configurations

### 4.1 Home Page (`/`) -- Fluid Smoke

```tsx
<div
  data-aifx="fluid-smoke"
  data-aifx-colors="#00f2fe,#e60049,#00f2fe,#00f2fe"
  data-aifx-bg="#0d1117"
  data-aifx-bg-alpha="0.47"
  data-aifx-speed="0.64"
  data-aifx-scale="1.87"
  data-aifx-warp="1.53"
  data-aifx-rise="0.57"
  data-aifx-swirl="0.55"
  data-aifx-contrast="1"
  data-aifx-softness="0.78"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

### 4.2 About Page (`/about`) -- Fluted Glass

```tsx
<div
  data-aifx="fluted-glass"
  data-aifx-colors="#e60049,#00f2fe,#0d1117,#0d1117"
  data-aifx-bg="#0d1117"
  data-aifx-speed="0.79"
  data-aifx-flutes="39"
  data-aifx-shape="pattern"
  data-aifx-profile="contour"
  data-aifx-distortion="0.8"
  data-aifx-highlight="2"
  data-aifx-blur="2.5"
  data-aifx-angle="251"
  data-aifx-grain="0"
  data-aifx-mouse="1"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

### 4.3 Experience Page (`/experience`) -- Liquid Metal

```tsx
<div
  data-aifx="liquid-metal"
  data-aifx-colors="#e60049,#e60049,#00f2fe,#00f2fe"
  data-aifx-bg="#0d1117"
  data-aifx-speed="1.78"
  data-aifx-scale="1.58"
  data-aifx-contrast="2.2"
  data-aifx-flow-angle="33"
  data-aifx-relief="2.05"
  data-aifx-mouse="0.5"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

### 4.4 Skills Page (`/skills`) -- Noise Shimmer

```tsx
<div
  data-aifx="noise-shimmer"
  data-aifx-colors="#00f2fe,#e60049,#d67964"
  data-aifx-bg="#0d1117"
  data-aifx-scale="0.7"
  data-aifx-shimmer="1"
  data-aifx-intensity="0.69"
  data-aifx-contrast="2.5"
  data-aifx-speed="2"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

### 4.5 Blog Page (`/blog`) -- Aurora Flow

```tsx
<div
  data-aifx="aurora-flow"
  data-aifx-colors="#00f2fe,#e60049,#d67964"
  data-aifx-bg="#0d1117"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

### 4.6 Contact Page (`/contact`) -- Mesh Gradient

```tsx
<div
  data-aifx="mesh-gradient"
  data-aifx-colors="#e60049,#e60049,#00f2fe,#0d1117"
  data-aifx-bg="#0d1117"
  data-aifx-speed="1.04"
  data-aifx-scale="2.09"
  data-aifx-warp="1.5"
  data-aifx-softness="1"
  data-aifx-contrast="1.16"
  data-aifx-grain="0.2"
  data-aifx-mouse="1"
  className="absolute inset-0 -z-10 pointer-events-none"
  aria-hidden="true"
/>
```

---

## 5. Glassmorphism Card Component

Add to `app/globals.css`:

```css
@layer utilities {
  .glass-card {
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.25),
      inset 0 1px 0 rgba(255, 255, 255, 0.3),
      inset 0 -1px 0 rgba(255, 255, 255, 0.1);
    position: relative;
    overflow: hidden;
    transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
  }

  .glass-card:hover {
    transform: translateY(-4px);
    border-color: rgba(0, 242, 254, 0.4);
    box-shadow:
      0 12px 40px rgba(0, 242, 254, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }

  .glass-card::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.8),
      transparent
    );
    pointer-events: none;
  }

  .glass-card::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.8),
      transparent,
      rgba(255, 255, 255, 0.3)
    );
    pointer-events: none;
  }
}
```

---

## 6. Navigation Bar Design

- Full-width sticky header at top, `z-50`
- Dark semi-transparent background: `bg-[#0d1117]/80 backdrop-blur-xl`
- Contains: site logo/name ("AARUSH KARAK") on left, nav links on right
- Nav links: Home, About, Experience, Skills, Blog, Contact
- Active route highlighted with electric cyan underline or glow
- Mobile: hamburger menu that expands to a full-screen overlay with glassmorphism background
- Each nav item: subtle hover effect (cyan text color transition)
- Glassmorphism border-bottom: `border-b border-white/10`

---

## 7. Footer Design

- Glassmorphism-styled footer with subtle top border
- Sections: Quick Links (nav), Social Links (GitHub, LinkedIn, Email icons), Copyright
- Social icons: glassmorphism-themed SVG icons from svgrepo.com/iconbuddy.com
- Background: `bg-[#0d1117]/60 backdrop-blur-md`
- Copyright text: `text-white/40 text-sm`

---

## 8. Responsive Breakpoints

| Breakpoint | Width | Layout Adjustments |
|------------|-------|-------------------|
| Mobile | < 640px | Single column, stacked cards, smaller text, hamburger nav |
| Tablet | 640-1024px | 2-column grids, normal spacing |
| Desktop | > 1024px | 3-column grids, full spacing, side padding |

---

## 9. Interactive States

- All glass cards: `hover:translateY(-4px)`, cyan border glow
- All buttons: glassmorphism background, cyan border on hover, subtle scale transform
- All links: cyan color on hover, underline or glow effect
- Form inputs: glassmorphism inset background, cyan focus ring
- Timeline items (experience page): left connector line with cyan gradient

---

## 10. Icon Sources

- Primary: https://www.svgrepo.com (open-source SVG vector icons)
- Secondary: https://iconbuddy.com/ (200k+ icons, various formats)
- Style: outlined or duotone, colored with theme accent colors (cyan `#00f2fe`, crimson `#e60049`)
- Categories needed: code/development, social media (GitHub, LinkedIn), email, phone, location, education, award, music, sports, certificate
