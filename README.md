# PROJECT-HULK — Performance Coaching

A cinematic, scroll-driven marketing site for a performance/strength coaching brand. Built with Next.js 15, React 19, and Tailwind CSS v4, it centers on a full-screen, scrubbable image-sequence "flythrough" hero synced to scroll via GSAP and Lenis smooth scrolling.

> Performance coaching for people who refuse average. Strength, nutrition and accountability — forged from a decade of elite competition.

## Features

- **Scroll-scrubbed cinematic sequence** — a 300-frame image sequence rendered to `<canvas>` and scrubbed frame-by-frame as the user scrolls, with adaptive frame-stepping for desktop vs. mobile to manage memory/bandwidth.
- **Buttery smooth scrolling** via [Lenis](https://github.com/darkroomengineering/lenis), bridged into GSAP's `ScrollTrigger`.
- **Section-based landing page**: Hero, Stats, Programs, Marquee, Method, Statement, Transformations, Testimonial, CTA, and Footer.
- **Custom preloader** that gates interaction until the frame sequence is ready.
- **Fully typed** with TypeScript, styled with Tailwind CSS v4.

## Tech Stack

| Category   | Tools                                  |
| ---------- | --------------------------------------- |
| Framework  | [Next.js 15](https://nextjs.org/) (App Router), [React 19](https://react.dev/) |
| Styling    | [Tailwind CSS v4](https://tailwindcss.com/) |
| Animation  | [GSAP](https://gsap.com/) + ScrollTrigger, [Lenis](https://lenis.darkroom.engineering/) |
| Icons      | [lucide-react](https://lucide.dev/) |
| Language   | TypeScript |

## Getting Started

### Prerequisites

- Node.js 18.18+ (or 20+ recommended)
- npm (or your package manager of choice)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Production Build

```bash
npm run build
npm run start
```

## Project Structure

```
app/                    Next.js App Router entry (layout, page, global styles)
components/
  ├─ Experience.tsx      Top-level page composition (scroll rig + sections)
  ├─ Hero.tsx            Hero copy overlaid on the cinematic canvas
  ├─ Navbar.tsx           Site navigation
  ├─ Loader.tsx           Preloader shown while frames load
  ├─ FloatingCTA.tsx      Persistent call-to-action
  └─ sections/            Stats, Programs, Marquee, Method, Statement,
                           Transformations, Testimonial, CTA, Footer
hooks/
  ├─ useImageSequence.ts  Preloads and manages the frame sequence
  ├─ useCanvasSequence.ts Draws frames to canvas, synced to scroll progress
  ├─ useLenis.ts          Lenis smooth-scroll setup/teardown
  └─ useReveal.ts         Scroll-triggered reveal animations
lib/
  ├─ constants.ts         Brand, frame-sequence, and layout constants
  ├─ gsap.ts              GSAP/ScrollTrigger registration
  └─ cover.ts             Cover-fit sizing helpers for the canvas
public/
  ├─ frames/              Mobile/default image sequence (300 frames)
  └─ images/               Static imagery (transformations, etc.)
gymframesdesktop/         Source frame set for a desktop-resolution sequence
```

## Configuration

Brand name, frame-sequence paths, frame count, and per-device step size (how many frames are skipped for performance) all live in [lib/constants.ts](lib/constants.ts). Adjust `desktopStep`/`mobileStep` there to trade off smoothness against memory/bandwidth.

## License

This project is private and not licensed for public use.
