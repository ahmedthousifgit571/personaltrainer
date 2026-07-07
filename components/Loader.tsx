"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";
import { BRAND } from "@/lib/constants";

const CIRC = 238.76; // 2π × r=38

export function Loader({ progress, ready }: { progress: number; ready: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const exited = useRef(false);

  useEffect(() => {
    if (ready && !exited.current && ref.current) {
      exited.current = true;
      gsap.to(ref.current, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          if (ref.current) ref.current.style.display = "none";
        },
      });
    }
  }, [ready]);

  const pct = Math.min(Math.round(progress * 100), 100);

  return (
    <div
      ref={ref}
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
    >
      <svg width="100" height="100" viewBox="0 0 100 100" aria-hidden>
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="1"
        />
        <circle
          cx="50"
          cy="50"
          r="38"
          fill="none"
          stroke="#c9f73a"
          strokeWidth="1"
          strokeLinecap="round"
          strokeDasharray={CIRC}
          strokeDashoffset={CIRC * (1 - progress)}
          transform="rotate(-90 50 50)"
          style={{ transition: "stroke-dashoffset 0.2s linear" }}
        />
      </svg>

      <p className="mt-8 font-display text-4xl font-black tracking-[0.15em] text-white">
        {BRAND}
      </p>
      <p className="mt-4 font-label text-3xl text-accent">{pct}%</p>

      <div className="mt-6 h-px w-48 bg-white/10">
        <div
          className="h-full bg-accent"
          style={{ width: `${pct}%`, transition: "width 0.2s linear" }}
        />
      </div>
      <p className="mt-3 font-label text-[9px] tracking-[0.4em] text-white/30">
        PREPARING EXPERIENCE
      </p>
    </div>
  );
}
