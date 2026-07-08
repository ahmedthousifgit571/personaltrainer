"use client";

import { scrollToTarget } from "@/hooks/useLenis";
import { whatsappUrl } from "@/lib/constants";

export function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-30 flex gap-2.5">
      <button
        onClick={() => scrollToTarget("#programs")}
        className="bg-accent px-6 py-4 font-label text-[11px] font-medium tracking-[0.2em] text-black transition-colors hover:bg-white"
      >
        VIEW PROGRAMS
      </button>
      <a
        href={whatsappUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden bg-accent px-6 py-4 font-label text-[11px] font-medium tracking-[0.2em] text-black transition-colors hover:bg-white sm:block"
      >
        BOOK A SLOT
      </a>
    </div>
  );
}
