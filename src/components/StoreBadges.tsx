import { site } from "@/lib/site";

// App Store + Google Play badges, recreated as inline SVG so they stay crisp
// and need no external image assets. Links come from src/lib/site.ts.

function AppStoreBadge() {
  return (
    <svg viewBox="0 0 180 54" role="img" aria-hidden="true" className="h-[54px] w-auto">
      <rect x="0.5" y="0.5" width="179" height="53" rx="10" fill="#000" stroke="#3A3A3C" />
      {/* Apple logo */}
      <path
        transform="translate(20 13)"
        d="M19.6 14.9c0-3 2.5-4.5 2.6-4.5-1.4-2.1-3.6-2.4-4.4-2.4-1.9-.2-3.6 1.1-4.6 1.1-.9 0-2.4-1.1-3.9-1-2 0-3.9 1.2-4.9 3-2.1 3.6-.5 9 1.5 11.9 1 1.4 2.2 3 3.7 2.9 1.5-.1 2-1 3.8-1s2.3 1 3.9.9c1.6 0 2.6-1.4 3.6-2.9 1.1-1.6 1.6-3.2 1.6-3.3-.1 0-3-1.2-3-4.6zM16.6 6c.8-1 1.4-2.4 1.2-3.8-1.2 0-2.6.8-3.4 1.8-.8.9-1.5 2.3-1.3 3.6 1.3.1 2.7-.7 3.5-1.6z"
        fill="#fff"
      />
      <text x="48" y="21" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9">
        Download on the
      </text>
      <text x="47" y="39" fill="#fff" fontFamily="Inter, sans-serif" fontSize="19" fontWeight="600">
        App Store
      </text>
    </svg>
  );
}

function PlayStoreBadge() {
  return (
    <svg viewBox="0 0 180 54" role="img" aria-hidden="true" className="h-[54px] w-auto">
      <rect x="0.5" y="0.5" width="179" height="53" rx="10" fill="#000" stroke="#3A3A3C" />
      <g transform="translate(20 16)">
        <path d="M0 1.2v19.6c0 .8.4 1.2.9 1.4L11.8 11 1 .1C.4.3 0 .6 0 1.2z" fill="#00D3FF" />
        <path d="M16.2 6.6 12.6 4 1 .1 11.8 11l4.4-4.4z" fill="#00F076" />
        <path d="M16.2 15.4 11.8 11l-4.4 4.4L11 22.1l5.2-3z" fill="#FF3A44" />
        <path d="M21.1 9.6 16.2 6.6 11.8 11l4.4 4.4 4.9-2.8c1.1-.7 1.1-2.3 0-3z" fill="#FFC500" />
      </g>
      <text x="56" y="21" fill="#fff" fontFamily="Inter, sans-serif" fontSize="9" letterSpacing="1">
        GET IT ON
      </text>
      <text x="55" y="39" fill="#fff" fontFamily="Inter, sans-serif" fontSize="18" fontWeight="600">
        Google Play
      </text>
    </svg>
  );
}

export function StoreBadges({
  className = "",
  size = "md",
}: {
  className?: string;
  size?: "sm" | "md";
}) {
  const scale = size === "sm" ? "scale-90 origin-left" : "";
  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      <a
        href={site.appStoreUrl}
        aria-label="Download Sadbhavana Educators on the Apple App Store"
        className={`inline-flex cursor-pointer rounded-[10px] transition-transform duration-200 hover:-translate-y-0.5 ${scale}`}
        {...(site.appStoreUrl === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        <AppStoreBadge />
      </a>
      <a
        href={site.playStoreUrl}
        aria-label="Get Sadbhavana Educators on Google Play"
        className={`inline-flex cursor-pointer rounded-[10px] transition-transform duration-200 hover:-translate-y-0.5 ${scale}`}
        {...(site.playStoreUrl === "#" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
      >
        <PlayStoreBadge />
      </a>
    </div>
  );
}
