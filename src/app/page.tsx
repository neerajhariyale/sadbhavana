import { StoreBadges } from "@/components/StoreBadges";
import { PhoneMockup } from "@/components/PhoneMockup";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/icons";
import { site, features, testimonials, faqs } from "@/lib/site";

const whyPoints = [
  {
    icon: "target",
    title: "Built only for UPSC",
    text: "Every course, test and note is mapped to the Civil Services syllabus — no filler, no distractions.",
  },
  {
    icon: "users",
    title: "Mentors who've been there",
    text: "Guidance and answer evaluation from experienced educators who understand what the exam rewards.",
  },
  {
    icon: "chart",
    title: "Data-driven revision",
    text: "Analytics after every test surface your weak areas so your limited time goes where it matters most.",
  },
  {
    icon: "globe",
    title: "Learn anywhere",
    text: "Available in English and Hindi, on iOS and Android, with offline access for notes and lectures.",
  },
];

const steps = [
  { n: "01", title: "Download & set your goal", text: "Pick your target year and optional subject in under a minute." },
  { n: "02", title: "Follow your daily plan", text: "Lectures, current affairs and revision served in the right order each day." },
  { n: "03", title: "Test, review, improve", text: "Attempt test series, get analytics and mentor feedback, then refine." },
];

export default function HomePage() {
  return (
    <>
      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden">
        {/* decorative background */}
        <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-50 via-white to-white" />
          <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-200/40 blur-3xl" />
          <div className="absolute -right-16 top-40 h-72 w-72 rounded-full bg-accent-400/20 blur-3xl" />
        </div>

        <div className="container-page grid items-center gap-12 pb-16 pt-28 sm:pt-32 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:pb-24 lg:pt-40">
          <div className="animate-fade-up">
            <span className="eyebrow">
              <Icon name="shield" className="h-4 w-4" />
              {site.exams.join(" · ")}
            </span>

            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-ink text-balance sm:text-6xl">
              Crack UPSC with <span className="gradient-text">everything in one app</span>.
            </h1>

            <p className="mt-5 max-w-xl text-lg leading-relaxed text-brand-800/75 text-pretty">
              {site.name} brings structured courses, daily current affairs, full-length test series,
              live classes and one-to-one mentorship together — so your entire Civil Services
              preparation lives in your pocket.
            </p>

            <div className="mt-8">
              <StoreBadges />
              <p className="mt-3 flex items-center gap-2 text-sm text-brand-800/60">
                <Icon name="check" className="h-4 w-4 text-brand-500" />
                Free to download · Start learning today
              </p>
            </div>

            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {site.stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-extrabold text-ink sm:text-3xl">
                    {s.value}
                  </dt>
                  <dd className="text-sm text-brand-800/60">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative animate-float justify-self-center lg:justify-self-end">
            <PhoneMockup />
          </div>
        </div>
      </section>

      {/* ───────────────────────── Stats bar ───────────────────────── */}
      <section className="border-y border-brand-100 bg-brand-900">
        <div className="container-page grid grid-cols-2 gap-6 py-10 sm:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-display text-3xl font-extrabold text-white">{s.value}</p>
              <p className="mt-1 text-sm text-brand-100/70">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ───────────────────────── Features ───────────────────────── */}
      <section id="features" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Everything you need</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl">
              One app for your entire preparation
            </h2>
            <p className="mt-4 text-lg text-brand-800/70">
              From your first NCERT lesson to your final Mains revision, every tool is built to keep
              you consistent and exam-ready.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <article
                key={f.title}
                className="group rounded-3xl border border-brand-100 bg-white p-6 shadow-soft transition-all duration-200 hover:-translate-y-1 hover:border-brand-200 hover:shadow-card"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50 text-brand-600 transition-colors duration-200 group-hover:bg-brand-600 group-hover:text-white">
                  <Icon name={f.icon as never} className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-ink">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-brand-800/70">{f.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Why us ───────────────────────── */}
      <section id="why" className="scroll-mt-24 bg-brand-50/60 py-20 sm:py-28">
        <div className="container-page grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="eyebrow">Why aspirants choose us</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl">
              Serious preparation, made simple
            </h2>
            <p className="mt-4 text-lg text-brand-800/70">
              We strip away the noise so you can focus on what actually moves your rank.
            </p>

            <ul className="mt-8 space-y-5">
              {whyPoints.map((p) => (
                <li key={p.title} className="flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white text-brand-600 shadow-soft">
                    <Icon name={p.icon as never} className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-ink">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-brand-800/70">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* How it works */}
          <div className="rounded-4xl border border-brand-100 bg-white p-7 shadow-card sm:p-9">
            <h3 className="font-display text-xl font-bold text-ink">How it works</h3>
            <ol className="mt-6 space-y-6">
              {steps.map((s, i) => (
                <li key={s.n} className="relative flex gap-5 pb-6 last:pb-0">
                  {i < steps.length - 1 && (
                    <span className="absolute left-[22px] top-12 h-[calc(100%-2.5rem)] w-px bg-brand-100" />
                  )}
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-600 font-display text-sm font-bold text-white">
                    {s.n}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-ink">{s.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-brand-800/70">{s.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <div className="mt-2 rounded-2xl bg-brand-50 p-4 text-sm text-brand-800/80">
              <span className="font-semibold text-brand-700">Tip:</span> consistency beats intensity —
              the app&apos;s daily plan keeps your streak alive.
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Reviews ───────────────────────── */}
      <section id="reviews" className="scroll-mt-24 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">
              <Icon name="star" className="h-4 w-4 text-accent-500" />
              Loved by aspirants
            </span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl">
              Trusted by thousands preparing every day
            </h2>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="flex flex-col rounded-3xl border border-brand-100 bg-white p-7 shadow-soft"
              >
                <div className="flex gap-0.5 text-accent-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Icon key={i} name="star" className="h-4 w-4" />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[15px] leading-relaxed text-brand-900/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-brand-100 pt-4">
                  <p className="font-display font-bold text-ink">{t.name}</p>
                  <p className="text-sm text-brand-800/60">{t.role}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── Download CTA ───────────────────────── */}
      <section id="download" className="scroll-mt-24 pb-24">
        <div className="container-page">
          <div className="relative overflow-hidden rounded-4xl bg-gradient-to-br from-brand-700 to-brand-900 px-7 py-14 text-center shadow-glow sm:px-12 sm:py-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 rounded-full bg-accent-500/20 blur-3xl"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -left-10 h-56 w-56 rounded-full bg-brand-400/20 blur-3xl"
            />
            <h2 className="mx-auto max-w-2xl font-display text-3xl font-extrabold tracking-tight text-white text-balance sm:text-4xl">
              Start your UPSC journey today
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-brand-100/80">
              Download {site.name} and turn scattered study into a focused, daily routine.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreBadges />
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section id="faq" className="scroll-mt-24 bg-brand-50/60 py-20 sm:py-28">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <span className="eyebrow">Questions, answered</span>
            <h2 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-ink text-balance sm:text-4xl">
              Frequently asked questions
            </h2>
          </div>
          <div className="mt-12">
            <Faq items={faqs} />
          </div>
          <p className="mt-8 text-center text-sm text-brand-800/70">
            Still have a question?{" "}
            <a
              href="/support"
              className="cursor-pointer font-semibold text-brand-700 underline-offset-4 hover:underline"
            >
              Visit our Support page
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
