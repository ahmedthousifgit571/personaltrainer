"use client";

import { useEffect, useRef, useState } from "react";
import { useLenis, startLenis } from "@/hooks/useLenis";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { FloatingCTA } from "@/components/FloatingCTA";
import { Marquee } from "@/components/sections/Marquee";
import { Story } from "@/components/sections/Story";
import { Programs } from "@/components/sections/Programs";
import { Method } from "@/components/sections/Method";
import { Statement } from "@/components/sections/Statement";
import { Transformations } from "@/components/sections/Transformations";
import { Testimonial } from "@/components/sections/Testimonial";
import { CTA } from "@/components/sections/CTA";
import { Footer } from "@/components/sections/Footer";

function detectMobile(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches;
}

export default function Experience() {
  const heroSectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useLenis();

  // Detect device and start Lenis immediately (no frame preloading needed)
  useEffect(() => {
    setIsMobile(detectMobile());
    startLenis();

    // Mark ready after a short delay to allow initial paint
    const timer = setTimeout(() => setReady(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Ensure video plays as soon as possible
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    const playVideo = () => {
      vid.play().catch(() => {
        // Autoplay blocked — silently ignore, the poster/first frame still shows
      });
    };

    if (vid.readyState >= 3) {
      playVideo();
    } else {
      vid.addEventListener("canplay", playVideo, { once: true });
    }

    return () => vid.removeEventListener("canplay", playVideo);
  }, [isMobile]);

  const videoSrc = isMobile ? "/videos/gymMobile.mp4" : "/videos/gymDesktop.mp4";

  return (
    <div className="bg-black">
      <Navbar />
      <FloatingCTA />

      {/* HERO ZONE — full-screen video background */}
      <section ref={heroSectionRef} className="relative h-screen w-full overflow-hidden">
        <video
          ref={videoRef}
          key={videoSrc}
          className="absolute inset-0 h-full w-full object-cover"
          src={videoSrc}
          muted
          autoPlay
          loop
          playsInline
          preload="auto"
          aria-hidden
        />
        <div className="scrim pointer-events-none absolute inset-0" />
        <Hero cinematicRef={heroSectionRef} ready={ready} />
      </section>

      {/* CONTENT ZONE — normal flow */}
      <main className="relative z-10 bg-black">
        <Story />
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
