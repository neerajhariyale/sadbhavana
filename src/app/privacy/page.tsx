import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses, and protects your information.`,
};

type Section = {
  heading: string;
  body?: string[];
  bullets?: string[];
};

const sections: Section[] = [
  {
    heading: "1. Introduction",
    body: [
      `This Privacy Policy explains how ${site.contact.legalEntity} (“we”, “us”, “our”), the operator of the ${site.name} mobile application and website (together, the “Service”), collects, uses, shares and protects your information.`,
      "By downloading, accessing or using the Service, you agree to the practices described in this Policy. If you do not agree, please do not use the Service.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: ["We collect the following categories of information:"],
    bullets: [
      "Information you provide: your name, email address, phone number, exam preferences, and any content you submit (such as answers, doubts, or support messages).",
      "Payment information: when you purchase a plan, payments are processed by our third-party payment provider. We do not store full card or banking details on our servers.",
      "Usage and learning data: courses viewed, lessons completed, test attempts, scores and progress, used to personalise your study experience.",
      "Device and technical data: device model, operating system, app version, unique device identifiers, IP address, and crash or diagnostic logs.",
      "Cookies and similar technologies on our website to keep you signed in and understand how the site is used.",
    ],
  },
  {
    heading: "3. How we use your information",
    bullets: [
      "To create and manage your account and provide the Service.",
      "To deliver courses, current affairs, test series, analytics and mentorship.",
      "To process payments and provide access to paid plans.",
      "To send important notices, updates, and (with your consent) educational or promotional messages.",
      "To provide customer support and respond to your requests.",
      "To monitor, secure, troubleshoot and improve the Service.",
      "To comply with legal obligations and enforce our terms.",
    ],
  },
  {
    heading: "4. Sharing your information",
    body: [
      "We do not sell your personal information. We share information only with:",
    ],
    bullets: [
      "Service providers who help us operate the Service — for example cloud hosting, analytics, payment processing and push-notification providers — under appropriate confidentiality obligations.",
      "Legal and safety: where required by law, regulation, legal process, or to protect the rights, property or safety of our users or others.",
      "Business transfers: in connection with a merger, acquisition or sale of assets, subject to this Policy.",
    ],
  },
  {
    heading: "5. Third-party services",
    body: [
      "The Service may use third-party tools that process limited data on our behalf, such as analytics and crash reporting (for example Google Firebase / Google Analytics) and a payment gateway. These providers process data under their own privacy policies. We encourage you to review them.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We retain personal information for as long as your account is active or as needed to provide the Service, comply with legal obligations, resolve disputes and enforce agreements. When data is no longer required, we delete or anonymise it.",
    ],
  },
  {
    heading: "7. Data security",
    body: [
      "We use reasonable administrative, technical and organisational measures — including encryption in transit and access controls — to protect your information. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.",
    ],
  },
  {
    heading: "8. Your rights and choices",
    bullets: [
      "Access and update: you can view and edit your profile information within the app.",
      "Marketing: you can opt out of promotional messages at any time.",
      "Notifications: you can manage push notifications from your device settings.",
      "Access, correction or deletion requests: contact us using the details below.",
    ],
  },
  {
    heading: "9. Account and data deletion",
    body: [
      `You may request deletion of your account and associated personal data at any time. To do so, go to Settings → Account → Delete Account in the app, or email us at ${site.contact.email} with the subject “Delete my account”.`,
      "We will verify your request and delete your personal data within 30 days, except where we are required to retain certain information for legal, accounting or security purposes.",
    ],
  },
  {
    heading: "10. Children's privacy",
    body: [
      "The Service is intended for users preparing for competitive examinations and is not directed to children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe a child has provided us personal information, please contact us so we can remove it.",
    ],
  },
  {
    heading: "11. Changes to this Policy",
    body: [
      "We may update this Privacy Policy from time to time. Material changes will be notified within the app or on this page, and we will update the “Last updated” date below.",
    ],
  },
  {
    heading: "12. Contact us",
    body: [
      `If you have any questions about this Privacy Policy or your data, contact us:`,
      `Email: ${site.contact.email}`,
      `${site.contact.legalEntity}, ${site.contact.address}`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <article>
      {/* header */}
      <header className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page pb-12 pt-32 sm:pt-40">
          <span className="eyebrow">Legal</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-ink sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-brand-800/60">Last updated: {site.lastUpdated}</p>
        </div>
      </header>

      {/* body */}
      <div className="container-page py-14">
        <div className="mx-auto max-w-3xl space-y-10">
          {sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl font-bold text-ink sm:text-2xl">{s.heading}</h2>
              {s.body?.map((p, i) => (
                <p key={i} className="mt-3 leading-relaxed text-brand-800/80">
                  {p}
                </p>
              ))}
              {s.bullets && (
                <ul className="mt-3 space-y-2">
                  {s.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3 leading-relaxed text-brand-800/80">
                      <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>
      </div>
    </article>
  );
}
