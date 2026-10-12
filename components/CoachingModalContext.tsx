"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

interface ModalCtx {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const CoachingModalContext = createContext<ModalCtx>({
  isOpen: false,
  open: () => {},
  close: () => {},
});

export function CoachingModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  return (
    <CoachingModalContext.Provider value={{ isOpen, open, close }}>
      {children}
    </CoachingModalContext.Provider>
  );
}

export function useCoachingModal() {
  return useContext(CoachingModalContext);
}
