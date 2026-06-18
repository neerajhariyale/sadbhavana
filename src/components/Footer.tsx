import Link from "next/link";
import { LogoFull } from "./Logo";
import { Icon } from "./icons";
import { StoreBadges } from "./StoreBadges";
import { site } from "@/lib/site";

export function Footer() {
  const cols: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Product",
      links: [
        { href: "/#features", label: "Features" },
        { href: "/#why", label: "Why us" },
        { href: "/#reviews", label: "Reviews" },
        { href: "/#download", label: "Download" },
      ],
    },
    {
      title: "Company",
      links: [
        { href: "/#faq", label: "FAQ" },
        { href: "/support", label: "Support" },
        { href: "/privacy", label: "Privacy Policy" },
      ],
    },
  ];

  return (
    <footer className="border-t border-brand-100 bg-brand-50/60">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr] md:gap-8">
          <div>
            <LogoFull className="h-20 w-auto" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-brand-800/70">
              {site.description}
            </p>
            <StoreBadges className="mt-6" size="sm" />
          </div>

          {cols.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-sm font-bold uppercase tracking-wide text-brand-900">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="cursor-pointer text-sm text-brand-800/70 transition-colors hover:text-brand-700"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-brand-100 pt-6 text-sm text-brand-800/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {site.lastUpdated.split(" ").pop()} {site.contact.legalEntity}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <a
              href={`mailto:${site.contact.email}`}
              className="inline-flex cursor-pointer items-center gap-1.5 transition-colors hover:text-brand-700"
            >
              <Icon name="mail" className="h-4 w-4" />
              {site.contact.email}
            </a>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="globe" className="h-4 w-4" />
              India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
