"use client";

import { useEffect, useRef, useState, Fragment } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { scrollToTarget, startLenis, stopLenis } from "@/hooks/useLenis";
import { BRAND } from "@/lib/constants";

const LINKS = [
  { label: "PROGRAMS", href: "#programs" },
  { label: "BENEFITS", href: "#benefits" },
  { label: "METHOD", href: "#method" },
  { label: "RESULTS", href: "#results" },
  { label: "CONTACT", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Freeze the page while the mobile menu overlay is open.
  // Only restart Lenis if WE stopped it — otherwise the initial mount
  // would unlock scrolling while the loader still has it locked.
  const wasOpened = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpened.current = true;
      stopLenis();
    } else if (wasOpened.current) {
      wasOpened.current = false;
      startLenis();
    }
  }, [open]);

  const go = (href: string) => {
    setOpen(false);
    // Lenis is still stopped here (the effect that restarts it hasn't run
    // yet) — scrollTo() no-ops while stopped, so start it before scrolling.
    startLenis();
    scrollToTarget(href);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-40">
      <nav
        className={`transition-colors duration-500 ${
          scrolled || open
            ? "border-b border-white/10 bg-black/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6 lg:px-12">
          <button
            onClick={() => {
              setOpen(false);
              window.scrollTo({ top: 0 });
            }}
            className="font-display text-2xl font-black tracking-tight text-white"
            aria-label="Back to top"
          >
            {BRAND}
            <span className="text-accent">.</span>
          </button>

          <ul className="hidden items-center gap-x-8 lg:flex xl:gap-x-14">
            {LINKS.map((link, i) => (
              <Fragment key={link.label}>
                <li>
                  <button
                    onClick={() => scrollToTarget(link.href)}
                    className="font-label text-[11px] tracking-[0.25em] text-white transition-colors hover:text-accent"
                  >
                    {link.label}
                  </button>
                </li>
                {i < LINKS.length - 1 && (
                  <li aria-hidden className="select-none text-white/30">
                    +
                  </li>
                )}
              </Fragment>
            ))}
          </ul>

          <button
            onClick={() => scrollToTarget("#contact")}
            className="hidden items-center gap-1 font-label text-[11px] tracking-[0.25em] text-white transition-colors hover:text-accent lg:flex"
          >
            APPLY
            <ArrowUpRight size={14} strokeWidth={1.5} />
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="text-white lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? (
              <X size={26} strokeWidth={1.5} />
            ) : (
              <Menu size={26} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-x-0 bottom-0 top-20 z-50 flex flex-col bg-black px-6 pb-10 pt-6 lg:hidden">
          <ul className="flex-1">
            {LINKS.map((link, i) => (
              <li key={link.label} className="border-b border-white/10">
                <button
                  onClick={() => go(link.href)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="font-display text-3xl font-bold tracking-tight text-white">
                    {link.label.charAt(0) + link.label.slice(1).toLowerCase()}
                  </span>
                  <span className="font-label text-[10px] tracking-[0.3em] text-white/40">
                    0{i + 1}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => go("#contact")}
            className="flex items-center justify-center gap-2 bg-accent py-5 font-label text-[12px] font-medium tracking-[0.25em] text-black"
          >
            APPLY FOR COACHING
            <ArrowUpRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      )}
    </header>
  );
}
