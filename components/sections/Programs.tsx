"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { scrollToTarget } from "@/hooks/useLenis";
import { frameUrl } from "@/lib/constants";

const PROGRAMS = [
  {
    tag: "IN PERSON",
    title: "1:1 Private Coaching",
    still: frameUrl(100),
    copy: "Hands-on sessions at a private studio. Every rep coached, every variable managed — training, recovery and nutrition rebuilt around your life.",
  },
  {
    tag: "REMOTE",
    title: "Online Coaching",
    still: frameUrl(184),
    copy: "Your program, my eyes, anywhere on earth. Weekly video review, habit tracking and a plan that adapts every single Sunday.",
  },
  {
    tag: "HYBRID",
    title: "Athlete Performance",
    still: frameUrl(262),
    copy: "Sport-specific speed, power and durability blocks for competitors — built from a decade on the elite circuit.",
  },
];

export function Programs() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section id="programs" ref={ref} className="px-6 py-28 lg:px-12 lg:py-36">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.02em]"
        >
          Choose your path.
        </h2>
        <p
          data-reveal
          className="font-label text-[10px] tracking-[0.35em] text-white/50"
        >
          02 — PROGRAMS
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-3">
        {PROGRAMS.map((program) => (
          <article key={program.title} data-reveal className="group">
            <button
              onClick={() => scrollToTarget("#contact")}
              className="block w-full text-left"
            >
              <div className="overflow-hidden bg-white/5">
                <img
                  src={program.still}
                  alt={program.title}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
              <p className="mt-6 font-label text-[10px] tracking-[0.3em] text-white/50">
                {program.tag}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {program.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {program.copy}
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-label text-[11px] tracking-[0.25em] text-accent transition-colors group-hover:text-white">
                EXPLORE
                <ArrowRight
                  size={14}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </span>
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}
