"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { Icon } from "./icons";
import { site } from "@/lib/site";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#why", label: "Why us" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#faq", label: "FAQ" },
  { href: "/support", label: "Support" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="container-page pt-3 sm:pt-4">
        <nav
          className={`flex items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 sm:px-5 ${
            scrolled
              ? "border-brand-100 bg-white/90 shadow-soft backdrop-blur-md"
              : "border-transparent bg-white/60 backdrop-blur-sm"
          }`}
        >
          <Link href="/" className="cursor-pointer" aria-label={`${site.name} home`}>
            <Logo markSize={36} textClassName="text-base sm:text-lg" />
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="cursor-pointer rounded-full px-4 py-2 text-sm font-semibold text-brand-800/80 transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <a href={site.playStoreUrl} className="btn-primary text-sm">
              <Icon name="download" className="h-4 w-4" />
              Download app
            </a>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="inline-flex h-11 w-11 cursor-pointer items-center justify-center rounded-full text-brand-800 hover:bg-brand-50 lg:hidden"
          >
            <Icon name={open ? "close" : "menu"} className="h-6 w-6" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="container-page lg:hidden">
          <div className="mt-2 animate-fade-up rounded-3xl border border-brand-100 bg-white p-3 shadow-card">
            <div className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="cursor-pointer rounded-2xl px-4 py-3 text-base font-semibold text-brand-800 transition-colors hover:bg-brand-50"
                >
                  {l.label}
                </Link>
              ))}
            </div>
            <a
              href={site.playStoreUrl}
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 w-full"
            >
              <Icon name="download" className="h-5 w-5" />
              Download the app
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
