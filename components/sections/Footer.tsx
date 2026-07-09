"use client";

import { scrollToTarget } from "@/hooks/useLenis";
import { whatsappUrl } from "@/lib/constants";

const SITEMAP = [
  { label: "Programs", href: "#programs" },
  { label: "Method", href: "#method" },
  { label: "Results", href: "#results" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/easa.va?igsh=MWRjdDNiYTAwemRtZg%3D%3D&utm_source=qr",
  },
  { label: "WhatsApp", href: whatsappUrl() },
];

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="grid gap-14 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <p className="max-w-sm font-display text-2xl font-medium leading-snug tracking-[-0.01em] text-white/90">
          Enhance your performance through discipline.
        </p>

        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:justify-items-end">
          <div>
            <p className="mb-5 font-label text-[10px] tracking-[0.35em] text-white/40">
              SITEMAP
            </p>
            <ul className="space-y-3">
              {SITEMAP.map((item) => (
                <li key={item.label}>
                  <button
                    onClick={() => scrollToTarget(item.href)}
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 font-label text-[10px] tracking-[0.35em] text-white/40">
              SOCIAL
            </p>
            <ul className="space-y-3">
              {SOCIAL.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-white/70 transition-colors hover:text-accent"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="mb-5 font-label text-[10px] tracking-[0.35em] text-white/40">
              CONTACT
            </p>
            <a
              href="mailto:Easava99@gmail.com"
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              Easava99@gmail.com
            </a>
          </div>
        </div>
      </div>

      <div aria-hidden className="select-none overflow-hidden">
        <p className="translate-y-[12%] text-center font-display text-[32vw] font-black leading-[0.82] tracking-[-0.04em] text-white/10 lg:text-[26vw] lg:translate-y-[16%] lg:leading-[0.78]">
          HULK
        </p>
      </div>

      <div className="flex flex-col gap-2 border-t border-white/10 px-6 py-6 font-label text-[10px] tracking-[0.25em] text-white/40 sm:flex-row sm:justify-between lg:px-12">
        <p>© 2026 HULK PERFORMANCE COACHING</p>
        <p>BUILT DIFFERENT. BUILT DAILY.</p>
      </div>
    </footer>
  );
}
