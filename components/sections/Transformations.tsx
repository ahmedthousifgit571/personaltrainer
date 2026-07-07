"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";

const COLUMNS = [
  { tall: "/images/bd3.jpg", short: "/images/bd1.jpg" },
  { tall: "/images/bd5.jpg", short: "/images/bd2.webp", offset: true },
  { tall: "/images/bd6.jpg", short: "/images/bd4.jpg" },
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

      <div data-reveal className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        {COLUMNS.map((col, i) => (
          <div
            key={i}
            className={`flex flex-col gap-3 ${col.offset ? "sm:mt-12" : ""}`}
          >
            <img
              src={col.tall}
              alt="Client transformation — before and after"
              loading="lazy"
              className="h-auto w-full grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
            />
            <img
              src={col.short}
              alt="Client physique result"
              loading="lazy"
              className="h-auto w-full grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
