import { fileURLToPath } from "node:url";
import { dirname } from "node:path";

const projectRoot = dirname(fileURLToPath(import.meta.url));

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Serve images as plain static files. Robust on Cloudflare Workers and
    // ideal here (only small static logo PNGs) — no runtime image optimizer.
    unoptimized: true,
  },
  // Pin the workspace root so a stray parent lockfile can't misdirect
  // Turbopack's auto-detection.
  turbopack: {
    root: projectRoot,
  },
};

export default nextConfig;
