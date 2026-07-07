export const ZOOM_FACTOR = 1.12; // hides edge artifacts; leaves parallax travel room
export const CINEMATIC_VH = 600; // height of the sticky-canvas section in vh

export const FRAMES = {
  basePath: "/frames/",
  prefix: "ezgif-frame-",
  ext: "jpg",
  pad: 3,
  total: 300,
  // 1920x1080 decodes to ~8.3MB/frame: step 3 = 100 frames (~830MB desktop),
  // step 6 = 50 frames (~415MB mobile) — inside the RAM budget.
  desktopStep: 3,
  mobileStep: 6,
} as const;

export function frameUrl(n: number): string {
  const padded = String(n).padStart(FRAMES.pad, "0");
  return `${FRAMES.basePath}${FRAMES.prefix}${padded}.${FRAMES.ext}`;
}

export function buildFrameUrls(isMobile: boolean): string[] {
  const step = isMobile ? FRAMES.mobileStep : FRAMES.desktopStep;
  const urls: string[] = [];
  for (let n = 1; n <= FRAMES.total; n += step) {
    urls.push(frameUrl(n));
  }
  return urls;
}

export const BRAND = "APEX";
