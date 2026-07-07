"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { frameUrl } from "@/lib/constants";

const PANELS = [
  {
    step: "01",
    lines: ["Unbreakable", "Strength"],
    still: frameUrl(40),
    copy: "Technique-first progressive overload across the lifts that matter. Strength that holds up outside the gym — built to keep every joint honest for decades, not weeks.",
  },
  {
    step: "02",
    lines: ["Engineered", "Nutrition"],
    still: frameUrl(140),
    copy: "No starvation protocols. A fueling system built from your bloodwork, schedule and appetite — precise enough to drive change, human enough to live with.",
  },
  {
    step: "03",
    lines: ["Relentless", "Accountability"],
    still: frameUrl(230),
    copy: "Weekly check-ins, biometric tracking and programming that adapts to the data you produce. You will never wonder if it's working — you'll watch it work.",
  },
];

export function Method() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      const panels = gsap.utils.toArray<HTMLElement>("[data-panel]");

      panels.forEach((panel, i) => {
        const inner = panel.querySelector<HTMLElement>("[data-panel-inner]");
        const next = panels[i + 1];

        // Outgoing panel: pushed upward + dimmed while the next slides over it
        if (next && inner) {
          gsap.to(inner, {
            yPercent: -22,
            opacity: 0.25,
            ease: "none",
            scrollTrigger: {
              trigger: next,
              start: "top bottom",
              end: "top top",
              scrub: true,
            },
          });
        }

        // Incoming panel: content rises into place as it arrives
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          gsap.from(panel.querySelectorAll("[data-panel-el]"), {
            opacity: 0,
            y: 60,
            duration: 1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: panel, start: "top 60%" },
          });
        }
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="method" ref={ref} className="relative">
      {PANELS.map((panel, i) => (
        <div
          key={panel.step}
          data-panel
          className="sticky top-0 flex h-screen items-center overflow-hidden bg-black"
          style={{ zIndex: i + 1 }}
        >
          <img
            src={panel.still}
            alt=""
            aria-hidden
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover brightness-[0.38] grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-black/50" />

          <div
            data-panel-inner
            className="relative z-10 grid w-full gap-10 px-6 py-16 lg:grid-cols-2 lg:items-center lg:px-12"
          >
            <div>
              <p
                data-panel-el
                className="mb-6 font-label text-[10px] tracking-[0.35em] text-accent"
              >
                THE METHOD — {panel.step}
              </p>
              <h2 className="font-display text-[clamp(1.9rem,6.5vw,5.5rem)] font-bold leading-[0.95] tracking-[-0.02em]">
                {panel.lines.map((line, i) => (
                  <span key={line} data-panel-el className="block">
                    {i === 0 ? (
                      <span className="inline-block bg-accent px-3 text-black">
                        {line}
                      </span>
                    ) : (
                      line
                    )}
                  </span>
                ))}
              </h2>
            </div>
            <p
              data-panel-el
              className="max-w-md text-base leading-relaxed text-white/80 lg:justify-self-end lg:text-lg"
            >
              {panel.copy}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}
