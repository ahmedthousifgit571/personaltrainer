"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { X, Send, ArrowRight } from "lucide-react";
import { useCoachingModal } from "@/components/CoachingModalContext";
import { whatsappUrl } from "@/lib/constants";
import { stopLenis, startLenis } from "@/hooks/useLenis";

/* ------------------------------------------------------------------ */
/*  Google Apps Script Web App URL                                    */
/*  Replace with your deployed Apps Script URL after setup.           */
/* ------------------------------------------------------------------ */
const APPS_SCRIPT_URL = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL ?? "";

/* ------------------------------------------------------------------ */

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

type Status = "idle" | "submitting" | "success" | "error";

export function CoachingModal() {
  const { isOpen, close } = useCoachingModal();
  const overlayRef = useRef<HTMLDivElement>(null);
  const firstInputRef = useRef<HTMLInputElement>(null);

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  // Lock scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      stopLenis();
      document.body.style.overflow = "hidden";
      setTimeout(() => firstInputRef.current?.focus(), 350);
    } else {
      startLenis();
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    if (isOpen) window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, close]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const payload = {
        ...form,
        date: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      };

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  if (!isOpen) return null;

  return (
    <div
      ref={overlayRef}
      onClick={(e) => {
        // Close if click is on the overlay or the centering wrapper (not the card itself)
        const target = e.target as HTMLElement;
        if (!target.closest("[data-modal-card]")) close();
      }}
      className="fixed inset-0 z-[100] overflow-y-auto overscroll-contain scrollbar-hide bg-black/80 backdrop-blur-md animate-fade-in"
    >
      {/* Centering wrapper — min-height ensures vertical centering when content is short */}
      <div className="flex min-h-full items-center justify-center p-5 sm:p-8">
        <div data-modal-card className="relative w-full max-w-lg overflow-hidden border border-white/10 bg-[#0e0e0e] shadow-2xl animate-slide-up"
             style={{ borderRadius: "2px" }}>

          {/* ── Accent bar ── */}
          <div className="h-[3px] shrink-0 bg-accent" />

          {/* ── Close button ── */}
          <button
            onClick={close}
            className="absolute right-3 top-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-white/50 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X size={16} strokeWidth={2} />
          </button>

          {/* Header */}
          <div className="px-6 pb-1 pt-6">
            <p className="font-label text-[9px] tracking-[0.4em] text-accent sm:text-[10px]">
              START YOUR JOURNEY
            </p>
            <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-white sm:text-2xl">
              Apply for Coaching
            </h2>
            <p className="mt-1.5 text-xs leading-relaxed text-white/45 sm:text-sm">
              Fill out the form and Coach Easa will reach out, or DM directly on
              WhatsApp.
            </p>
          </div>

          {/* ── Success state ── */}
          {status === "success" ? (
            <div className="px-6 py-10 text-center">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-accent/15">
                <Send size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-lg font-semibold text-white">
                Application Sent!
              </h3>
              <p className="mt-1 text-xs text-white/45 sm:text-sm">
                Coach Easa will get back to you soon.
              </p>
              <button
                onClick={() => {
                  setStatus("idle");
                  close();
                }}
                className="mt-5 bg-accent px-8 py-2.5 font-label text-[10px] font-medium tracking-[0.2em] text-black transition-colors hover:bg-white sm:text-[11px]"
              >
                DONE
              </button>
            </div>
          ) : (
            /* ── Form ── */
            <form onSubmit={handleSubmit} className="px-6 pb-6 pt-4">
              <div className="grid gap-3.5">
                {/* Name */}
                <div>
                  <label
                    htmlFor="coaching-name"
                    className="mb-1 block font-label text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]"
                  >
                    FULL NAME <span className="text-accent">*</span>
                  </label>
                  <input
                    ref={firstInputRef}
                    id="coaching-name"
                    name="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-accent/40"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="coaching-email"
                    className="mb-1 block font-label text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]"
                  >
                    EMAIL ADDRESS <span className="text-accent">*</span>
                  </label>
                  <input
                    id="coaching-email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-accent/40"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label
                    htmlFor="coaching-phone"
                    className="mb-1 block font-label text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]"
                  >
                    CONTACT NUMBER <span className="text-accent">*</span>
                  </label>
                  <input
                    id="coaching-phone"
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    className="w-full border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-accent/40"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="coaching-message"
                    className="mb-1 block font-label text-[9px] tracking-[0.2em] text-white/35 sm:text-[10px]"
                  >
                    MESSAGE
                  </label>
                  <textarea
                    id="coaching-message"
                    name="message"
                    rows={2}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your fitness goals..."
                    className="w-full resize-none border border-white/10 bg-white/[0.04] px-3.5 py-2.5 text-sm text-white placeholder:text-white/20 outline-none transition-colors focus:border-accent/40"
                  />
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="mt-5 flex w-full items-center justify-center gap-2 bg-accent py-3.5 font-label text-[10px] font-medium tracking-[0.25em] text-black transition-colors hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:text-[11px]"
              >
                {status === "submitting" ? (
                  <>
                    <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-black/30 border-t-black" />
                    SUBMITTING...
                  </>
                ) : (
                  <>
                    SUBMIT APPLICATION
                    <Send size={13} strokeWidth={2} />
                  </>
                )}
              </button>

              {status === "error" && (
                <p className="mt-2 text-center text-[11px] text-red-400">
                  Something went wrong. Please try again or use WhatsApp below.
                </p>
              )}

              {/* Divider */}
              <div className="my-4 flex items-center gap-3">
                <div className="h-px flex-1 bg-white/10" />
                <span className="font-label text-[8px] tracking-[0.3em] text-white/25 sm:text-[9px]">
                  OR
                </span>
                <div className="h-px flex-1 bg-white/10" />
              </div>

              {/* WhatsApp */}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2.5 border border-[#25D366]/25 bg-[#25D366]/8 py-3.5 font-label text-[10px] font-medium tracking-[0.2em] text-[#25D366] transition-colors hover:bg-[#25D366]/15 sm:text-[11px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                DM ON WHATSAPP
                <ArrowRight size={13} strokeWidth={2} />
              </a>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

