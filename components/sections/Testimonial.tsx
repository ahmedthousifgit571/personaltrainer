"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { frameUrl } from "@/lib/constants";
import { testimonials, type Testimonial } from "@/lib/testimonials";

function TestimonialCard({ slug, quote, name, role, long }: Testimonial) {
  return (
    <figure data-reveal>
      <span
        aria-hidden
        className="mb-6 block font-display text-6xl leading-none text-accent"
      >
        &ldquo;
      </span>
      <blockquote
        className={`font-display text-[clamp(1.6rem,3.4vw,3rem)] font-medium leading-[1.15] tracking-[-0.01em] ${
          long ? "line-clamp-4" : ""
        }`}
      >
        {quote}
      </blockquote>
      {long && (
        <Link
          href={`/testimonials/${slug}`}
          className="group mt-4 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] text-accent transition-colors hover:text-white"
        >
          READ FULL STORY
          <ArrowRight
            size={15}
            strokeWidth={1.5}
            className="transition-transform duration-300 group-hover:translate-x-1.5"
          />
        </Link>
      )}
      <figcaption className="mt-6 font-label text-[11px] tracking-[0.3em] text-white/70">
        {name} — {role}
      </figcaption>
    </figure>
  );
}

export function Testimonial() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <img
        src={frameUrl(104)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.45] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />

      <div className="relative z-10 flex min-h-screen max-w-3xl flex-col justify-center gap-20 px-6 py-32 lg:gap-28 lg:px-12">
        {testimonials.map((entry) => (
          <TestimonialCard key={entry.slug} {...entry} />
        ))}
      </div>
    </section>
  );
}
