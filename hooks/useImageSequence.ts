"use client";

import { useState, useEffect } from "react";
import { buildFrameUrls } from "@/lib/constants";

function detectMobile(): boolean {
  return window.matchMedia("(max-width: 1023px), (pointer: coarse)").matches;
}

export function useImageSequence() {
  const [frames, setFrames] = useState<HTMLImageElement[]>([]);
  const [progress, setProgress] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const urls = buildFrameUrls(detectMobile());
    const imgs: HTMLImageElement[] = new Array(urls.length);
    let loaded = 0;

    Promise.all(
      urls.map(
        (url, i) =>
          new Promise<void>((resolve) => {
            const img = new Image();
            img.onload = async () => {
              // decode() moves JPEG decompression off the first drawImage call —
              // without it the first scroll hitches on a main-thread decode.
              try {
                await img.decode();
              } catch {
                /* decode can reject on some browsers — the load still counts */
              }
              loaded++;
              if (!cancelled) setProgress(loaded / urls.length);
              resolve();
            };
            img.onerror = () => {
              console.error("[useImageSequence] FRAME FAILED:", url);
              loaded++;
              if (!cancelled) setProgress(loaded / urls.length);
              resolve();
            };
            img.src = url;
            imgs[i] = img;
          }),
      ),
    ).then(() => {
      if (cancelled) return;
      const valid = imgs.filter((img) => img && img.naturalWidth > 0);
      console.log(`[useImageSequence] ${valid.length}/${urls.length} frames ready`);
      setFrames(valid);
      setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return { frames, progress, ready };
}
