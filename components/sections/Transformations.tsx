"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

// Photo wall — every client image shown in full at its natural aspect ratio,
// in order (3–12; there is no image 10), flowing left-to-right across a
// three-column grid.
const IMAGES = [
  "/images/Image%20(4).jpg",
  "/images/Image%20(3).jpg",
  "/images/Image%20(6).jpg",
  "/images/Image%20(5).jpg",
  "/images/Image%20(8).jpg",
  "/images/Image%20(7).jpg",
  "/images/Image%20(9).jpg",
  "/images/esa3.jpg",
  "/images/Image%20(12).jpg",
];

export function Transformations() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="results" ref={ref} className="px-6 py-28 lg:px-12 lg:py-36">
      <div
        data-reveal
        className="mb-16 flex items-center gap-6 font-label text-[10px] tracking-[0.35em] text-white/50"
      >
        <span>04 — TRANSFORMATIONS</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <h2
        data-reveal
        className="mb-16 font-display text-[clamp(2.4rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-[-0.02em]"
      >
        The results don&rsquo;t
        <br />
        <span className="italic text-accent">need a caption.</span>
      </h2>

      <div data-reveal className="grid grid-cols-2 items-start gap-3 sm:grid-cols-3">
        {IMAGES.map((src) => (
          <img
            key={src}
            src={src}
            alt="Client transformation result"
            loading="lazy"
            className="h-auto w-full grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
          />
        ))}
      </div>
    </section>
  );
}
