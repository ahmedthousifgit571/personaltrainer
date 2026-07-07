"use client";

import { useEffect, useRef, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

interface Props {
  cinematicRef: RefObject<HTMLElement | null>;
  ready: boolean;
}

export function Hero({ cinematicRef, ready }: Props) {
  const rootRef = useRef<HTMLDivElement>(null);

  // Scroll-out: fade + blur across the first 25% of the cinematic scroll
  useEffect(() => {
    if (!rootRef.current || !cinematicRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(rootRef.current, {
        opacity: 0,
        y: -40,
        filter: "blur(8px)",
        ease: "none",
        scrollTrigger: {
          trigger: cinematicRef.current,
          start: "top top",
          end: "25% top",
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, [cinematicRef]);

  // Entrance: staggered rise once the loader clears
  useEffect(() => {
    if (!ready || !rootRef.current) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = gsap.context(() => {
      gsap.from("[data-hero-el]", {
        opacity: 0,
        y: 60,
        filter: "blur(10px)",
        duration: 1.2,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.3,
      });
    }, rootRef);
    return () => ctx.revert();
  }, [ready]);

  return (
    <div
      ref={rootRef}
      className="absolute inset-0 flex flex-col justify-center px-6 lg:px-16"
    >
      <p
        data-hero-el
        className="mb-8 font-label text-[11px] tracking-[0.45em] text-accent"
      >
        PERFORMANCE COACHING — EST. 2014
      </p>

      <h1 className="font-ganey leading-[0.92] tracking-[-0.03em]">
        <span data-hero-el className="block text-[clamp(1.75rem,8.5vw,7.5rem)]">
          Become
        </span>
        <span
          data-hero-el
          className="ml-[8vw] block text-[clamp(1.75rem,8.5vw,7.5rem)] lg:ml-[16vw]"
        >
          Relentless
        </span>
      </h1>

      <p
        data-hero-el
        className="absolute inset-x-0 bottom-10 text-center font-label text-[11px] tracking-[0.4em] text-white/80"
      >
        FORGED FROM A DECADE OF ELITE COMPETITION
      </p>

      <span
        aria-hidden
        className="absolute left-6 bottom-10 hidden select-none font-label text-white/40 lg:block"
      >
        +
      </span>
      <span
        aria-hidden
        className="absolute right-6 top-1/3 hidden select-none font-label text-white/40 lg:block"
      >
        +
      </span>
    </div>
  );
}
