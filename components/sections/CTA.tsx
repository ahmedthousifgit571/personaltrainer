"use client";

import { useRef } from "react";
import { useReveal } from "@/hooks/useReveal";
import { frameUrl, whatsappUrl } from "@/lib/constants";

export function CTA() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  return (
    <section
      id="contact"
      ref={ref}
      className="relative overflow-hidden px-6 py-40 text-center lg:py-56"
    >
      <img
        src={frameUrl(296)}
        alt=""
        aria-hidden
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover brightness-[0.28] grayscale"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />

      <div className="relative z-10">
        <p
          data-reveal
          className="font-label text-[10px] tracking-[0.4em] text-accent"
        >
          LIMITED AVAILABILITY — 5 SPOTS FOR Q3
        </p>
        <h2
          data-reveal
          className="mx-auto mt-8 max-w-4xl font-display text-[clamp(2.8rem,7vw,6.5rem)] font-bold leading-[0.95] tracking-[-0.03em]"
        >
          Ready to become{" "}
          <span className="inline-block bg-accent px-3 text-black">
            undeniable?
          </span>
        </h2>
        <p
          data-reveal
          className="mx-auto mt-8 max-w-xl leading-relaxed text-white/60"
        >
          Coaching starts with a conversation, not a contract. Tell me where
          you are, where you refuse to stay — and we build from there.
        </p>
        <div
          data-reveal
          className="mt-12 flex justify-center"
        >
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-accent px-10 py-5 font-label text-[11px] font-medium tracking-[0.25em] text-black transition-colors hover:bg-white"
          >
            APPLY FOR COACHING
          </a>
        </div>
      </div>
    </section>
  );
}
