"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { frameUrl } from "@/lib/constants";

export function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <img
        src={frameUrl(104)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.45] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

      <figure className="relative z-10 max-w-3xl px-6 py-32 lg:px-12">
        <span
          data-reveal
          aria-hidden
          className="mb-6 block font-display text-6xl leading-none text-accent"
        >
          &ldquo;
        </span>
        <blockquote
          data-reveal
          className="font-display text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.15] tracking-[-0.01em]"
        >
          I trained around the same injury for three years. Twelve weeks in,
          it&rsquo;s gone  and I&rsquo;m moving more weight at forty than I did
          at twenty-five. This isn&rsquo;t a program. It&rsquo;s a rebuild.
        </blockquote>
        <figcaption
          data-reveal
          className="mt-10 font-label text-[11px] tracking-[0.3em] text-white/70"
        >
          DANIEL OKAFOR — FOUNDER &amp; EX-RUGBY UNION
        </figcaption>
      </figure>
    </section>
  );
}
