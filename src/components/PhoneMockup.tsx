import { Icon } from "./icons";

// A stylised phone frame with a mock app screen.
// Replace <AppScreen /> with a real <Image> of your app screenshot once ready:
//   <Image src="/screenshot.png" alt="Sadbhavna Educators app" fill className="object-cover" />

function AppScreen() {
  return (
    <div className="flex h-full flex-col bg-brand-50">
      {/* status-ish header */}
      <div className="bg-gradient-to-br from-brand-600 to-brand-800 px-5 pb-6 pt-7 text-white">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[11px] text-white/70">Good morning, Aspirant</p>
            <p className="font-display text-base font-bold">Today&apos;s plan</p>
          </div>
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <Icon name="users" className="h-4 w-4" />
          </div>
        </div>
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-white/12 p-3 backdrop-blur">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/20">
            <Icon name="newspaper" className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <p className="truncate text-[12px] font-semibold">Daily Current Affairs</p>
            <p className="truncate text-[10px] text-white/70">18 June · 12 new items</p>
          </div>
        </div>
      </div>

      {/* progress */}
      <div className="-mt-3 px-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
          <div className="relative flex h-12 w-12 items-center justify-center">
            <svg viewBox="0 0 36 36" className="h-12 w-12 -rotate-90">
              <circle cx="18" cy="18" r="15" fill="none" stroke="#E0F2FE" strokeWidth="4" />
              <circle
                cx="18"
                cy="18"
                r="15"
                fill="none"
                stroke="#0EA5E9"
                strokeWidth="4"
                strokeDasharray="94"
                strokeDashoffset="28"
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute text-[10px] font-bold text-brand-700">70%</span>
          </div>
          <div>
            <p className="text-[12px] font-semibold text-ink">Weekly target</p>
            <p className="text-[10px] text-brand-800/60">7 of 10 lessons done</p>
          </div>
        </div>
      </div>

      {/* list */}
      <div className="flex-1 space-y-2.5 px-4 pt-3">
        {[
          { icon: "video", t: "Polity · Live class", s: "Today, 6:00 PM", c: "bg-brand-100 text-brand-700" },
          { icon: "target", t: "Prelims Test 12", s: "100 Q · 2 hrs", c: "bg-orange-100 text-accent-600" },
          { icon: "file", t: "Economy notes", s: "PDF · 24 pages", c: "bg-emerald-100 text-emerald-700" },
        ].map((r) => (
          <div key={r.t} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
            <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${r.c}`}>
              <Icon name={r.icon as never} className="h-4 w-4" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] font-semibold text-ink">{r.t}</p>
              <p className="truncate text-[10px] text-brand-800/60">{r.s}</p>
            </div>
            <Icon name="arrowRight" className="h-4 w-4 text-brand-300" />
          </div>
        ))}
      </div>

      {/* bottom nav */}
      <div className="mt-2 flex items-center justify-around border-t border-brand-100 bg-white px-2 py-3">
        {["book", "newspaper", "target", "chart"].map((n, i) => (
          <div
            key={n}
            className={`flex h-9 w-9 items-center justify-center rounded-xl ${
              i === 0 ? "bg-brand-600 text-white" : "text-brand-300"
            }`}
          >
            <Icon name={n as never} className="h-4 w-4" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function PhoneMockup({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <div className="relative mx-auto aspect-[9/19] w-[260px] rounded-[2.6rem] border-[10px] border-slate-900 bg-slate-900 shadow-glow sm:w-[280px]">
        {/* notch */}
        <div className="absolute left-1/2 top-0 z-10 h-6 w-32 -translate-x-1/2 rounded-b-2xl bg-slate-900" />
        <div className="h-full w-full overflow-hidden rounded-[2rem]">
          <AppScreen />
        </div>
      </div>
    </div>
  );
}
