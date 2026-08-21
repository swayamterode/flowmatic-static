import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Flowmatic collects, uses, and protects your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

const sections = [
  {
    title: "Introduction",
    body: [
      `Flowmatic ("we", "our", "us") builds a no-code workflow automation platform that connects your tools, adds logic and AI, and runs your workflows for you. This Privacy Policy explains what information we collect when you use our website and app (together, the "Service"), how we use it, and the choices you have.`,
    ],
  },
  {
    title: "Information We Collect",
    body: [
      "Account information: your name, email address, and password (or OAuth identity) when you sign up.",
      "Workflow data: the automations you build, including the tools you connect, the triggers and actions you configure, and the data that flows through your workflows at runtime.",
      "Usage data: pages visited, features used, and general analytics collected to help us improve the product.",
      "Payment information: if you subscribe to a paid plan, billing details are handled by our payment processor — we do not store your full card number.",
    ],
  },
  {
    title: "How We Use Your Information",
    body: [
      "To provide, operate, and maintain the Service, including running your workflows.",
      "To communicate with you about your account, product updates, and support requests.",
      "To monitor and improve the performance, reliability, and security of the Service.",
      "To detect, prevent, and address technical issues or misuse.",
    ],
  },
  {
    title: "Cookies & Tracking",
    body: [
      "We use cookies and similar technologies to keep you signed in, remember your preferences (like light/dark theme), and understand how the Service is used. You can control cookies through your browser settings, though some features may not work correctly without them.",
    ],
  },
  {
    title: "Third-Party Services",
    body: [
      "Flowmatic connects to third-party tools and services that you choose to integrate into your workflows. When you connect an integration, we access only the data needed to run the workflows you've configured, using the permissions you grant. We also rely on infrastructure providers to host and run the Service.",
    ],
  },
  {
    title: "Data Retention & Security",
    body: [
      "We retain your account and workflow data for as long as your account is active, or as needed to provide the Service. We use reasonable technical and organizational measures to protect your data, but no method of transmission or storage is completely secure.",
    ],
  },
  {
    title: "Your Rights & Choices",
    body: [
      "Depending on where you live, you may have the right to access, correct, export, or delete your personal data. You can manage most of this directly from your account settings, or contact us using the details below.",
    ],
  },
  {
    title: "Children's Privacy",
    body: ["The Service is not directed to children under 13, and we do not knowingly collect personal information from children."],
  },
  {
    title: "Changes to This Policy",
    body: ["We may update this Privacy Policy from time to time. If we make material changes, we'll notify you through the Service or by other means before the changes take effect."],
  },
  {
    title: "Contact Us",
    body: ["Questions about this policy? Reach us at privacy@flowmatic.app."],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-16 md:py-24">
      <div className="space-y-3">
        <h1 className="font-display text-3xl font-semibold tracking-tight md:text-4xl" style={{ fontVariationSettings: '"opsz" 72' }}>
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm">Last updated: August 19, 2026</p>
      </div>

      <div className="mt-10 space-y-8">
        {sections.map((section) => (
          <div className="space-y-2" key={section.title}>
            <h2 className="font-semibold text-lg">{section.title}</h2>
            {section.body.length > 1 ? (
              <ul className="list-disc space-y-1.5 pl-5 text-muted-foreground text-sm leading-relaxed md:text-base">
                {section.body.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="text-muted-foreground text-sm leading-relaxed md:text-base">{section.body[0]}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
