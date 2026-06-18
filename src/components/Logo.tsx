import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand logo, built from the official Sadbhavana Educators artwork in /public:
 *   • /public/logo-mark.png  — the badge emblem (square, transparent)
 *   • /public/logo-full.png  — the full lockup with wordmark (used in the footer)
 *
 * To replace the artwork, just overwrite those PNGs (keep the file names).
 */

export function BrandMark({ size = 40, className = "" }: { size?: number; className?: string }) {
  return (
    <Image
      src="/logo-mark.png"
      alt=""
      width={size}
      height={size}
      className={className}
      priority
    />
  );
}

export function Logo({
  className = "",
  markSize = 40,
  textClassName = "text-lg sm:text-xl",
  showText = true,
}: {
  className?: string;
  markSize?: number;
  textClassName?: string;
  showText?: boolean;
}) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <BrandMark size={markSize} />
      {showText && (
        <span className={`font-display font-extrabold tracking-tight text-ink ${textClassName}`}>
          {site.name}
        </span>
      )}
    </span>
  );
}

export function LogoFull({ className = "h-20 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo-full.png"
      alt={`${site.name} logo`}
      width={186}
      height={201}
      className={className}
    />
  );
}
