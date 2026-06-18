// ─────────────────────────────────────────────────────────────────────────────
// Sadbhavana Educators — central site content & config.
// Edit everything here (brand, links, contact, stats, copy) in ONE place.
// Replace every value marked  // TODO  before going live / submitting to stores.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Sadbhavana Educators",
  shortName: "Sadbhavana",
  // The base URL of the deployed site. Used for SEO/Open Graph + store listings.
  url: "https://sadbhavanaeducators.in", // TODO: set to your real domain after deploy

  tagline: "UPSC preparation, finally in one place.",
  description:
    "Sadbhavana Educators is a complete UPSC Civil Services preparation app — structured courses, daily current affairs, full-length test series, live classes and one-to-one mentorship from experienced educators.",

  // The exams you prepare aspirants for (shown in the hero eyebrow).
  exams: ["UPSC CSE", "IAS", "IPS", "State PCS"],

  // ── Contact (REQUIRED by the app stores — must be real & monitored) ──────────
  contact: {
    email: "support@sadbhavanaeducators.in", // TODO: real, monitored inbox
    phone: "+91 00000 00000", // TODO: real support number (or remove)
    hours: "Mon–Sat, 9:00 AM – 7:00 PM IST",
    // Legal entity + address help with App Store / Play Store review.
    legalEntity: "Sadbhavana Educators", // TODO: registered company / proprietor name
    address: "City, State, India", // TODO: real address
  },

  // ── App store links (paste once your listings are live) ──────────────────────
  appStoreUrl: "#", // TODO: https://apps.apple.com/app/idXXXXXXXXX
  playStoreUrl: "#", // TODO: https://play.google.com/store/apps/details?id=...

  // ── Social proof / headline stats (use REAL numbers before launch) ───────────
  stats: [
    { value: "50,000+", label: "Aspirants learning" },
    { value: "4.8★", label: "Average rating" },
    { value: "1,200+", label: "Video lectures" },
    { value: "500+", label: "Test series papers" },
  ],

  // ── Brand date used on legal pages ───────────────────────────────────────────
  lastUpdated: "18 June 2026",
} as const;

export type Feature = {
  title: string;
  description: string;
  // icon key — maps to an SVG in src/components/icons.tsx
  icon: string;
};

export const features: Feature[] = [
  {
    icon: "book",
    title: "Structured courses",
    description:
      "Foundation to advanced — GS Prelims & Mains, NCERT basics and optional subjects, sequenced so you always know what to study next.",
  },
  {
    icon: "newspaper",
    title: "Daily current affairs",
    description:
      "Concise daily news analysis, editorial breakdowns and monthly compilations mapped to the UPSC syllabus.",
  },
  {
    icon: "target",
    title: "Full-length test series",
    description:
      "Prelims mock tests and Mains answer-writing practice with detailed solutions and rank comparison.",
  },
  {
    icon: "video",
    title: "Live & recorded classes",
    description:
      "Learn from experienced educators in live sessions, and replay any lecture anytime at your own pace.",
  },
  {
    icon: "file",
    title: "Notes & study material",
    description:
      "Downloadable PDFs, crisp revision modules and curated NCERT notes you can read fully offline.",
  },
  {
    icon: "users",
    title: "Mentorship & doubt solving",
    description:
      "One-to-one mentorship, fast doubt resolution and a personalised strategy built around your strengths.",
  },
  {
    icon: "chart",
    title: "Performance analytics",
    description:
      "Track accuracy, speed and weak areas after every test so each revision is sharper than the last.",
  },
  {
    icon: "pen",
    title: "Answer-writing evaluation",
    description:
      "Submit Mains answers and get structured feedback from mentors to improve presentation and content.",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
};

// TODO: replace with real, consented testimonials before launch.
export const testimonials: Testimonial[] = [
  {
    quote:
      "The daily current affairs and test series kept me consistent. Having my whole prep in one app removed all the chaos.",
    name: "Aspirant — Prelims 2025",
    role: "GS Foundation batch",
  },
  {
    quote:
      "Answer-writing feedback was the game changer for Mains. Mentors pointed out exactly what I kept getting wrong.",
    name: "Aspirant — Mains 2025",
    role: "Mains Mentorship",
  },
  {
    quote:
      "Lectures are clear and I could replay tough topics offline during my commute. The analytics showed me where to focus.",
    name: "Working professional",
    role: "Weekend learner",
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Which exams does Sadbhavana Educators cover?",
    a: "The app focuses on the UPSC Civil Services Examination (Prelims, Mains and interview guidance) along with State PCS preparation. Course details are listed inside the app.",
  },
  {
    q: "Is the app free to use?",
    a: "You can download the app and explore free content, daily current affairs and sample lessons at no cost. Full courses and test series are available through affordable paid plans shown inside the app.",
  },
  {
    q: "Can I study offline?",
    a: "Yes. Downloaded notes and many recorded lectures can be accessed offline, so you can keep preparing even without an internet connection.",
  },
  {
    q: "Which languages are supported?",
    a: "Content is available in English and Hindi for most courses, helping aspirants prepare in the medium they are most comfortable with.",
  },
  {
    q: "What devices are supported?",
    a: "Sadbhavana Educators is available for both iPhone (iOS) and Android phones and tablets. Use the download buttons above to get the app for your device.",
  },
  {
    q: "How do I get help or a refund?",
    a: "Visit our Support page or email us — our team responds within one business day. Refund eligibility is described in the plan details inside the app.",
  },
];
