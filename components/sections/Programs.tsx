"use client";

import { useRef, useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { frameUrl, whatsappUrl } from "@/lib/constants";

const PROGRAM = {
  title: "1:1 Private Coaching",
  still: frameUrl(100),
  copy: "Every rep coached, every variable managed — training, recovery and nutrition rebuilt around your life.",
  includes: [
    "Unlimited personalized workout iterations",
    "Advanced macro assessment & daily nutrition logs",
    "Weekly + priority progress check-ins",
    "Unlimited daily communication support (on-the-go texting)",
    "Habit tracking & accountability system",
    "In-app workout videos + custom form correction videos",
  ],
  gallery: [
    { src: "/images/Easa.jpg", alt: "Coach physique — private studio", tall: true },
    { src: "/images/Image%20(3).jpg", alt: "Hands-on training session" },
    { src: "/images/Image%20(9).jpg", alt: "Client transformation result" },
  ],
};

// The other paths (Online Coaching, Athlete Performance) are hidden for now —
// keep the copy here so they can be reinstated without rewriting the section.

export function Programs() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  useReveal(ref);

  return (
    <section id="programs" ref={ref} className="px-6 py-28 lg:px-12 lg:py-36">
      <div className="mb-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <h2
          data-reveal
          className="font-display text-[clamp(2.5rem,6vw,5rem)] font-bold leading-none tracking-[-0.02em]"
        >
          Choose your path.
        </h2>
        <p
          data-reveal
          className="font-label text-[10px] tracking-[0.35em] text-white/50"
        >
          02 — PROGRAMS
        </p>
      </div>

      <article data-reveal className="group grid gap-10 lg:grid-cols-2 lg:gap-14">
        <div className="overflow-hidden bg-white/5">
          <img
            src={PROGRAM.still}
            alt={PROGRAM.title}
            loading="lazy"
            className="aspect-[4/5] w-full object-cover grayscale contrast-110 transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col justify-center">
          <h3 className="font-display text-3xl font-semibold tracking-tight lg:text-4xl">
            {PROGRAM.title}
          </h3>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-white/60">
            {PROGRAM.copy}
          </p>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="program-detail"
            className="mt-8 inline-flex w-fit items-center gap-2 font-label text-[11px] tracking-[0.25em] text-accent transition-colors hover:text-white"
          >
            {open ? "CLOSE" : "EXPLORE"}
            <ArrowRight
              size={14}
              strokeWidth={1.5}
              className={`transition-transform duration-300 ${
                open ? "rotate-90" : "group-hover:translate-x-1"
              }`}
            />
          </button>
        </div>
      </article>

      <div
        id="program-detail"
        className={`grid transition-[grid-template-rows] duration-500 ease-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="mt-14 border-t border-white/10 pt-14">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
              <div>
                <p className="font-label text-[10px] tracking-[0.35em] text-white/50">
                  WHAT&rsquo;S INCLUDED
                </p>
                <ul className="mt-8 flex flex-col gap-5">
                  {PROGRAM.includes.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-accent text-black">
                        <Check size={12} strokeWidth={3} />
                      </span>
                      <span className="text-sm leading-relaxed text-white/80">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-12 inline-flex items-center gap-3 bg-accent px-7 py-4 font-label text-[11px] tracking-[0.25em] text-black transition-colors hover:bg-white"
                >
                  BOOK A SLOT
                  <ArrowRight size={14} strokeWidth={2} />
                </a>
              </div>

              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {PROGRAM.gallery.map((img) => (
                  <img
                    key={img.src}
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className={`h-full w-full object-cover grayscale transition-[filter] duration-500 ease-out hover:grayscale-0 ${
                      img.tall ? "row-span-2" : "aspect-square"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
