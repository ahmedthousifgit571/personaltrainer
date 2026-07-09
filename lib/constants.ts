export const ZOOM_FACTOR = 1.12; // hides edge artifacts; leaves parallax travel room
export const CINEMATIC_VH = 600; // height of the sticky-canvas section in vh

export const FRAMES = {
  basePath: "/frames/",
  mobileBasePath: "/framesMobile/", // portrait-cropped set — landscape frames cut off the subject on phones
  prefix: "ezgif-frame-",
  ext: "jpg",
  pad: 3,
  total: 300,
  // 1920x1080 decodes to ~8.3MB/frame: step 3 = 100 frames (~830MB desktop),
  // step 6 = 50 frames (~415MB mobile) — inside the RAM budget.
  desktopStep: 3,
  mobileStep: 6,
} as const;

export function frameUrl(n: number, isMobile = false): string {
  const base = isMobile ? FRAMES.mobileBasePath : FRAMES.basePath;
  const padded = String(n).padStart(FRAMES.pad, "0");
  return `${base}${FRAMES.prefix}${padded}.${FRAMES.ext}`;
}

export function buildFrameUrls(isMobile: boolean): string[] {
  const step = isMobile ? FRAMES.mobileStep : FRAMES.desktopStep;
  const urls: string[] = [];
  for (let n = 1; n <= FRAMES.total; n += step) {
    urls.push(frameUrl(n, isMobile));
  }
  return urls;
}

export const BRAND = "PROJECT-HULK";

// WhatsApp booking. wa.me needs the full international number with no "+" or
// leading zeros — 91 is the India country code prefixed to the 10-digit mobile.
export const WHATSAPP_NUMBER = "917034040997";
export const WHATSAPP_MESSAGE =
  "Hi! I'd like to book a slot — I want to know more about your 1:1 personal coaching.";

export function whatsappUrl(
  message: string = WHATSAPP_MESSAGE,
  number: string = WHATSAPP_NUMBER,
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
