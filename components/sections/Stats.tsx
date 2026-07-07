"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { useReveal } from "@/hooks/useReveal";

const STATS = [
  { value: 12, suffix: "+", label: "YEARS COACHING" },
  { value: 700, suffix: "+", label: "CLIENTS TRANSFORMED" },
  { value: 98, suffix: "%", label: "CLIENT RETENTION" },
  { value: 15, suffix: "K", label: "SESSIONS ON THE FLOOR" },
];

export function Stats() {
  const ref = useRef<HTMLElement>(null);
  useReveal(ref);

  useEffect(() => {
    if (!ref.current) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>("[data-counter]").forEach((el) => {
        const target = Number(el.dataset.counter);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = String(Math.round(obj.val));
          },
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="px-6 py-28 lg:px-12 lg:py-36">
      <div
        data-reveal
        className="mb-16 flex items-center gap-6 font-label text-[10px] tracking-[0.35em] text-white/50"
      >
        <span>01 — THE RECORD</span>
        <span className="h-px flex-1 bg-white/10" />
      </div>

      <div className="grid grid-cols-2 gap-y-16 lg:grid-cols-4">
        {STATS.map((stat, i) => (
          <div
            key={stat.label}
            data-reveal
            className={`px-2 lg:px-10 ${i > 0 ? "lg:border-l lg:border-white/10" : ""}`}
          >
            <p className="font-display text-6xl font-bold tracking-tight lg:text-7xl">
              <span data-counter={stat.value}>0</span>
              <span className="text-accent">{stat.suffix}</span>
            </p>
            <p className="mt-4 font-label text-[10px] tracking-[0.3em] text-white/50">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
