import type { Metadata } from "next";
import Link from "next/link";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/icons";
import { site } from "@/lib/site";
import type { IconName } from "@/components/icons";

export const metadata: Metadata = {
  title: "Support",
  description: `Get help with the ${site.name} app — contact us, account help and frequently asked questions.`,
};

const channels: { icon: IconName; label: string; value: string; href?: string; note: string }[] = [
  {
    icon: "mail",
    label: "Email us",
    value: site.contact.email,
    href: `mailto:${site.contact.email}`,
    note: "Best for account, payment and technical issues.",
  },
  {
    icon: "phone",
    label: "Call us",
    value: site.contact.phone,
    href: `tel:${site.contact.phone.replace(/\s/g, "")}`,
    note: site.contact.hours,
  },
  {
    icon: "clock",
    label: "Response time",
    value: "Within 1 business day",
    note: "We reply to most queries much sooner.",
  },
];

const supportFaqs = [
  {
    q: "I can't log in to my account",
    a: "Make sure you are using the same phone number or email you registered with. Use “Forgot password” on the login screen to reset it. If you still can't get in, email us and we'll help you recover your account.",
  },
  {
    q: "I paid but can't access my course",
    a: "Paid content usually unlocks within a few minutes. Close and reopen the app, or pull to refresh. If access hasn't appeared after 30 minutes, email us your registered number and payment reference and we'll fix it quickly.",
  },
  {
    q: "How do I download notes or videos for offline use?",
    a: "Open the lesson or note and tap the download icon. Downloaded items appear under “Downloads” and can be opened without an internet connection.",
  },
  {
    q: "The app is slow, crashing or a video won't play",
    a: "Update to the latest version from the App Store or Google Play, check your internet connection, then restart the app. If the problem continues, email us your device model and app version so we can investigate.",
  },
  {
    q: "How do I request a refund?",
    a: "Refund eligibility is described in each plan's details inside the app. To raise a request, email us from your registered address with your order details and we'll review it.",
  },
];

export default function SupportPage() {
  return (
    <>
      {/* header */}
      <header className="relative overflow-hidden border-b border-brand-100">
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white" />
          <div className="absolute -right-16 -top-10 h-64 w-64 rounded-full bg-brand-200/40 blur-3xl" />
        </div>
        <div className="container-page pb-14 pt-32 text-center sm:pt-40">
          <span className="eyebrow">
            <Icon name="shield" className="h-4 w-4" />
            We&apos;re here to help
          </span>
          <h1 className="mx-auto mt-4 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-ink text-balance sm:text-5xl">
            How can we help you?
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-brand-800/75">
            Questions about your account, courses or payments? Reach out and our team will get you
            back to studying as quickly as possible.
          </p>
          <a href={`mailto:${site.contact.email}`} className="btn-primary mt-8">
            <Icon name="mail" className="h-5 w-5" />
            Email support
          </a>
        </div>
      </header>

      {/* contact channels */}
      <section className="container-page py-16">
        <div className="grid gap-5 sm:grid-cols-3">
          {channels.map((c) => {
            const inner = (
              <>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600">
                  <Icon name={c.icon} className="h-6 w-6" />
                </div>
                <h2 className="mt-5 font-display text-lg font-bold text-ink">{c.label}</h2>
                <p className="mt-1 font-semibold text-brand-700">{c.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-brand-800/70">{c.note}</p>
              </>
            );
            return c.href ? (
              <a
                key={c.label}
                href={c.href}
                className="group cursor-pointer rounded-3xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                {inner}
              </a>
            ) : (
              <div
                key={c.label}
                className="rounded-3xl border border-brand-100 bg-white p-6 shadow-soft"
              >
                {inner}
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-brand-50/60 py-16 sm:py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Quick answers</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
              Common questions
            </h2>
          </div>
          <div className="mt-12">
            <Faq items={supportFaqs} />
          </div>
        </div>
      </section>

      {/* account deletion + privacy */}
      <section className="container-page py-16">
        <div className="mx-auto max-w-3xl rounded-4xl border border-brand-100 bg-white p-8 shadow-soft sm:p-10">
          <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">
            Manage or delete your account
          </h2>
          <p className="mt-3 leading-relaxed text-brand-800/80">
            You can delete your account and personal data at any time from{" "}
            <span className="font-semibold text-brand-700">Settings → Account → Delete Account</span>{" "}
            in the app, or by emailing us at{" "}
            <a
              href={`mailto:${site.contact.email}?subject=Delete my account`}
              className="cursor-pointer font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              {site.contact.email}
            </a>{" "}
            with the subject “Delete my account”. We process verified requests within 30 days.
          </p>
          <p className="mt-4 text-sm text-brand-800/70">
            For details on how we handle your data, read our{" "}
            <Link
              href="/privacy"
              className="cursor-pointer font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Privacy Policy
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
