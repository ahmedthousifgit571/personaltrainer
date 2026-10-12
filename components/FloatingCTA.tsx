"use client";

import { scrollToTarget } from "@/hooks/useLenis";
import { useCoachingModal } from "@/components/CoachingModalContext";

export function FloatingCTA() {
  const { open } = useCoachingModal();

  return (
    <div className="fixed bottom-5 right-5 z-30 flex flex-col items-end gap-2.5 sm:flex-row">
      <button
        onClick={() => scrollToTarget("#programs")}
        className="bg-accent px-4 py-3 font-label text-[10px] font-medium tracking-[0.2em] text-black transition-colors hover:bg-white sm:px-6 sm:py-4 sm:text-[11px]"
      >
        VIEW PROGRAMS
      </button>
      <button
        onClick={open}
        className="bg-accent px-4 py-3 font-label text-[10px] font-medium tracking-[0.2em] text-black transition-colors hover:bg-white sm:px-6 sm:py-4 sm:text-[11px]"
      >
        APPLY FOR COACHING
      </button>
    </div>
  );
}
