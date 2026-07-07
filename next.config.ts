import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // StrictMode double-mounts components in dev; the duplicate ScrollTrigger
  // registration kills the canvas scrub. Keep it off for this project.
  reactStrictMode: false,
  // A stray package-lock.json in the user home dir makes Next mis-infer the root
  outputFileTracingRoot: __dirname,
};

export default nextConfig;
