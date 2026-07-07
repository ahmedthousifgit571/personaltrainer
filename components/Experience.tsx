"use client";

import { useEffect, useRef } from "react";
import { CINEMATIC_VH } from "@/lib/constants";
import { useLenis, startLenis, stopLenis } from "@/hooks/useLenis";
import { useImageSequence } from "@/hooks/useImageSequence";
import { useCanvasSequence } from "@/hooks/useCanvasSequence";
import { Loader } from "@/components/Loader";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Stats } from "@/components/sections/Stats";
import { Marquee } from "@/components/sections/Marquee";
import { Programs } from "@/components/sections/Programs";
import { Method } from "@/components/sections/Method";
import { Statement } from "@/components/sections/Statement";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

export default function Experience() {
  const cinematicRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Order matters: Lenis bridge first, then frames, then the scrub engine.
  useLenis();
  const { frames, progress, ready } = useImageSequence();
  useCanvasSequence({ frames, canvasRef, scrollContainerRef: cinematicRef });

  // Lock scroll while the loader is up
  useEffect(() => {
    if (ready) startLenis();
    else stopLenis();
  }, [ready]);

  return (
    <div className="bg-black">
      <Loader progress={progress} ready={ready} />
      <Navbar />
      <FloatingCTA />

      {/* CINEMATIC ZONE — scroll here scrubs the flythrough */}
      <section ref={cinematicRef} style={{ height: `${CINEMATIC_VH}vh` }}>
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <canvas
            ref={canvasRef}
            className="absolute inset-0 h-full w-full"
            aria-hidden
          />
          <div className="scrim pointer-events-none absolute inset-0" />
          <Hero cinematicRef={cinematicRef} ready={ready} />
        </div>
      </section>

      {/* CONTENT ZONE — normal flow */}
      <main className="relative z-10 bg-black">
        <Stats />
        <Programs />
        <Marquee />
        <Method />
        <Statement />
        <Transformations />
        <Testimonial />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
