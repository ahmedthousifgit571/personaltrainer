"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { scrollToTarget } from "@/hooks/useLenis";
import { frameUrl, BRAND } from "@/lib/constants";

const STILLS = [frameUrl(20), frameUrl(155), frameUrl(280)];

export function Statement() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="relative px-6 py-32 lg:px-12 lg:py-44">
      <p
        data-reveal
        className="absolute right-6 top-16 font-label text-[10px] tracking-[0.35em] text-white/50 lg:right-12"
      >
        BECOME THE ELITE
      </p>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div>
          <p
            data-reveal
            className="font-display text-[clamp(1.9rem,3.4vw,3rem)] font-medium leading-[1.15] tracking-[-0.02em]"
          >
            {BRAND} sits at the cross-section of{" "}
            <span className="text-accent">sports science</span>, hard-earned
            discipline, and an absolute refusal to accept average.
          </p>

          <button
            data-reveal
            onClick={() => scrollToTarget("#method")}
            className="group mt-12 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] text-white transition-colors hover:text-accent"
          >
            DISCOVER THE METHOD
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </button>
        </div>

        <div className="flex justify-start gap-4 lg:justify-end">
          {STILLS.map((still, i) => (
            <img
              key={still}
              data-reveal
              src={still}
              alt=""
              aria-hidden
              loading="lazy"
              className={`w-[24vw] object-cover grayscale sm:w-40 ${
                i === 1 ? "h-[36vw] sm:h-64" : "h-[30vw] sm:h-52"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
