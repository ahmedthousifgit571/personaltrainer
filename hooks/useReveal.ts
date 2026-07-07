"use client";

import { useEffect, type RefObject } from "react";
import { gsap } from "@/lib/gsap";

export function useReveal(ref: RefObject<HTMLElement | null>) {
  useEffect(() => {
    if (!ref.current) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return; // elements are visible by default — just skip the motion

    const ctx = gsap.context(() => {
      gsap.from(ref.current!.querySelectorAll("[data-reveal]"), {
        opacity: 0,
        y: 40,
        filter: "blur(6px)",
        duration: 0.9,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: ref.current, start: "top 75%" },
      });
    }, ref);

    return () => ctx.revert();
  }, [ref]);
}
