"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";

let lenisInstance: Lenis | null = null;

export function scrollToTarget(target: string) {
  if (lenisInstance) {
    lenisInstance.scrollTo(target, { duration: 1.6, offset: 0 });
  } else {
    const el = document.querySelector(target);
    el?.scrollIntoView({ behavior: "smooth" });
  }
}

export function stopLenis() {
  lenisInstance?.stop();
}

export function startLenis() {
  lenisInstance?.start();
}

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
    lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update); // keep ScrollTrigger in sync with Lenis

    // Single clock: only the GSAP ticker drives lenis.raf — a second rAF loop
    // would advance Lenis twice per frame and desync the scrub.
    const ticker = (t: number) => lenis.raf(t * 1000);
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0); // prevents delta spikes causing frame jumps

    return () => {
      gsap.ticker.remove(ticker);
      lenis.destroy();
      lenisInstance = null;
    };
  }, []);
}
