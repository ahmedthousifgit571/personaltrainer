"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappUrl } from "@/lib/constants";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* ── Ambient glow effects ── */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[600px] w-[600px] rounded-full bg-accent/8 blur-[160px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-[500px] w-[500px] rounded-full bg-accent/5 blur-[140px]" />

      {/* ── Main content ── */}
      <div className="relative z-10 px-6 pt-32 pb-20 lg:px-12 lg:pt-40 lg:pb-28">
        {/* Top label bar */}
        <div
          data-reveal
          className="mb-14 flex items-center gap-6 font-label text-[10px] tracking-[0.35em] text-accent/70"
        >
          <span className="flex items-center gap-3">
            <span className="inline-block h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(201,247,58,0.6)]" />
            ONLINE FITNESS COACH — Easa
          </span>
          <span className="h-px flex-1 bg-gradient-to-r from-accent/20 to-transparent" />
        </div>

        {/* Headline — big and bold, spans full width */}
        <h2
          data-reveal
          className="mb-16 font-display text-[clamp(2.2rem,5.5vw,4.5rem)] font-bold leading-[1.02] tracking-[-0.03em]"
        >
          I was the{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-accent px-4 py-1 italic text-black">
              before
            </span>
            <span className="absolute inset-0 translate-x-1 translate-y-1 bg-accent/30" />
          </span>{" "}
          photo.
        </h2>

        {/* Two-column: images + copy */}
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20 xl:gap-28">
          {/* ── Image column ── */}
          <div data-reveal className="relative">
            <div className="grid grid-cols-2 gap-4">
              {/* BEFORE image */}
              <div className="group relative overflow-hidden rounded-sm">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 z-20 rounded-full bg-white/10 px-3 py-1 font-label text-[9px] tracking-[0.3em] text-white/90 backdrop-blur-md">
                  BEFORE
                </span>
                <img
                  src="/images/easa2.jpg"
                  alt="Coach Easa — before transformation"
                  loading="eager"
                  className="aspect-[3/4] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* AFTER image */}
              <div className="group relative mt-10 overflow-hidden rounded-sm">
                <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span className="absolute bottom-4 left-4 z-20 rounded-full bg-accent/90 px-3 py-1 font-label text-[9px] tracking-[0.3em] text-black backdrop-blur-md">
                  AFTER
                </span>
                <img
                  src="/images/Easa.jpg"
                  alt="Coach Easa — after transformation"
                  loading="eager"
                  className="aspect-[3/4] w-full object-cover transition-[filter,transform] duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </div>

            {/* Decorative connecting arrow between images */}
            <div className="absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-accent/40 bg-black/80 shadow-[0_0_20px_rgba(201,247,58,0.15)] backdrop-blur-md">
                <ArrowRight size={18} className="text-accent" />
              </div>
            </div>
          </div>

          {/* ── Copy column ── */}
          <div className="flex flex-col justify-center">
            <div
              data-reveal
              className="flex max-w-lg flex-col gap-6 text-[15px] leading-[1.75] text-white/65 lg:text-base"
            >
              <p>
                I grew up obese, and spent years stuck in the same cycle —
                motivated for a week, derailed by the next fad, back to square
                one. I know exactly what it feels like to want change and not
                know which advice to actually trust.
              </p>
              <p>
                Fitness doesn&rsquo;t have an information problem. It has a
                noise problem — a thousand programs all promising the same
                result. I spent years in the gym and with clients cutting
                through it, keeping what works and killing the rest.
              </p>
              <p className="border-l-2 border-accent/50 pl-5 text-white font-medium">
                No fads. No 47-step routines. I cut through the BS and give
                you exactly what&rsquo;s required — nothing more.
              </p>
            </div>

            {/* CTA button */}
            <a
              data-reveal
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex w-fit items-center gap-3 bg-accent px-7 py-4 font-label text-[11px] font-semibold tracking-[0.3em] text-black transition-all duration-300 hover:gap-5 hover:bg-white hover:shadow-[0_0_30px_rgba(201,247,58,0.25)]"
            >
              START YOUR TRANSFORMATION
              <ArrowRight
                size={15}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

          </div>
        </div>
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
