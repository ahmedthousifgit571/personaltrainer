"use client";

import { useRef } from "react";
import { ArrowRight } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { whatsappUrl } from "@/lib/constants";

export function Story() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section ref={ref} className="px-6 py-28 lg:px-12 lg:py-36">
      <div
        data-reveal
        className="mb-16 flex items-center gap-6 font-label text-[10px] tracking-[0.35em] text-white/50"
      >
        <span>01 — THE COACH</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        <div className="order-2 grid grid-cols-2 gap-4 lg:order-1">
          <div className="group overflow-hidden bg-white/5">
            <img
              src="/images/easa2.jpg"
              alt="Coach Easa — before"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
          <div className="mt-10 overflow-hidden bg-white/5">
            <img
              src="/images/Easa.jpg"
              alt="Coach Easa — today"
              loading="lazy"
              className="aspect-[3/4] w-full object-cover grayscale transition-[filter] duration-500 ease-out hover:grayscale-0"
            />
          </div>
        </div>

        <div className="order-1 lg:order-2">
          <h2
            data-reveal
            className="font-display text-[clamp(1.7rem,2.6vw,2.75rem)] font-bold leading-[1.05] tracking-[-0.02em] lg:whitespace-nowrap"
          >
            I was the{" "}
            <span className="inline-block bg-accent px-3 italic text-black">
              before
            </span>{" "}
            photo.
          </h2>

          <div
            data-reveal
            className="mt-8 flex max-w-lg flex-col gap-5 text-sm leading-relaxed text-white/70 lg:text-base"
          >
            <p>
              I grew up obese, and spent years stuck in the same cycle 
              motivated for a week, derailed by the next fad, back to square
              one. I know exactly what it feels like to want change and not
              know which advice to actually trust.
            </p>
            <p>
              Fitness doesn&rsquo;t have an information problem. It has a
              noise problem a thousand programs all promising the same
              result. I spent years in the gym and with clients cutting
              through it, keeping what works and killing the rest.
            </p>
            <p className="text-white">
              No fads. No 47-step routines. I cut through the BS and give
              you exactly what&rsquo;s required nothing more.
            </p>
          </div>

          <a
            data-reveal
            href={whatsappUrl(
              "Hi! I'm ready to start my transformation — I'd like to know more about your coaching programs."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 font-label text-[11px] tracking-[0.3em] text-white transition-colors hover:text-accent"
          >
            START YOUR TRANSFORMATION
            <ArrowRight
              size={15}
              strokeWidth={1.5}
              className="transition-transform duration-300 group-hover:translate-x-1.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
