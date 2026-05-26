import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy — British Best Betting Sites",
  description:
    "Privacy Policy for britishbestbettingsites.com. How we collect, use, and protect your personal data under UK GDPR and the Data Protection Act 2018.",
  openGraph: {
    title: "Privacy Policy — British Best Betting Sites",
    description: "How britishbestbettingsites.com handles your personal data under UK GDPR.",
    url: "https://britishbestbettingsites.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Privacy Policy"
        subtitle="Last updated: May 2026 — britishbestbettingsites.com"
      >

        <ContentBlock title="Introduction & Data Controller" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            British Best Betting Sites (britishbestbettingsites.com) is committed to protecting the privacy of every
            visitor to this website. This Privacy Policy sets out in plain language what data we collect, why we
            collect it, how long we keep it, who may access it, and what rights you hold under UK GDPR (the UK
            General Data Protection Regulation) and the Data Protection Act 2018.
          </p>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-3">
            By using britishbestbettingsites.com you acknowledge this policy. If you do not agree with any part
            of it, please do not use the site.
          </p>
        </ContentBlock>

        <ContentBlock title="What We Collect" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-3">
            We collect the following categories of data automatically when you visit this site:
          </p>
          <ul className="space-y-2" role="list">
            {[
              "IP address and approximate city-level geographic location",
              "Browser type, version, and device operating system",
              "Pages visited, scroll depth, time on page, and navigation paths",
              "The referring website or search query that brought you to our site",
              "Cookie consent status and the timestamp of your choice",
              "Clicks on affiliate links leading to licensed bookmaker partner sites",
            ].map((item, i) => (
              <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-2"
                  style={{ background: "hsl(var(--sky))" }}
                  aria-hidden="true"
                />
                {item}
              </li>
            ))}
          </ul>
          <p className="font-sans text-muted-foreground text-xs leading-relaxed mt-4">
            We do not collect names, email addresses, payment details, or any other directly identifying personal
            data unless you contact us directly via email.
          </p>
        </ContentBlock>

        <ContentBlock title="How We Use Your Data" accent="sky">
          <div className="space-y-0 divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                title: "Site Performance & Content Improvement",
                desc: "Aggregated, anonymised analytics data helps us understand which content delivers value to visitors and where navigation or layout can be improved.",
              },
              {
                title: "Affiliate Attribution",
                desc: "Click data on bookmaker affiliate links is passed to our licensed operator partners solely to attribute referrals and calculate commission. This data is not used to build individual user profiles.",
              },
              {
                title: "Regulatory Compliance",
                desc: "We may process or disclose data where required by applicable UK law, including lawful requests from regulatory authorities such as the Information Commissioner's Office (ICO).",
              },
              {
                title: "Security & Fraud Prevention",
                desc: "IP data and device fingerprinting may be used to detect and block abusive traffic, bot activity, or fraudulent affiliate click patterns.",
              },
            ].map((item, i) => (
              <div key={i} className="py-3 first:pt-0 last:pb-0">
                <h3 className="font-heading font-semibold text-xs text-foreground mb-1">{item.title}</h3>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Data Retention" accent="grass">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Analytics data is retained for a maximum of 26 months before being automatically deleted. Cookie consent
            records are retained for 13 months. Affiliate click data is retained for up to 90 days for commission
            reconciliation purposes. If you contact us directly, any email correspondence is retained for up to
            three years and then permanently deleted.
          </p>
        </ContentBlock>

        <ContentBlock title="Your Rights Under UK GDPR" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
            As a data subject under UK GDPR, you have the following rights regarding your personal data:
          </p>
          <div className="grid sm:grid-cols-2 gap-2.5">
            {[
              { right: "Right of Access", desc: "Request a copy of all personal data we hold about you." },
              { right: "Right to Rectification", desc: "Ask us to correct inaccurate or incomplete personal data." },
              { right: "Right to Erasure", desc: "Request deletion of your data where there is no lawful basis to retain it." },
              { right: "Right to Restrict Processing", desc: "Ask us to pause processing your data under certain circumstances." },
              { right: "Right to Data Portability", desc: "Receive your personal data in a structured, machine-readable format." },
              { right: "Right to Object", desc: "Object to processing carried out on the basis of legitimate interests." },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-3"
                style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
              >
                <div className="font-heading font-semibold text-xs mb-0.5" style={{ color: "hsl(var(--sky))" }}>
                  {item.right}
                </div>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Cookies & Third-Party Processors" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            This site uses cookies. For full details on the types of cookies we deploy and how to manage your
            preferences, please read our{" "}
            <a href="/cookie-policy" className="underline underline-offset-2" style={{ color: "hsl(var(--sky))" }}>
              Cookie Policy
            </a>. Anonymous analytics data may be processed by Google Analytics on our behalf under a
            data processing agreement. Affiliate tracking data is shared with licensed bookmaker partners for
            commission attribution only. All third-party processors are contractually required to comply with UK GDPR.
          </p>
        </ContentBlock>

        <ContentBlock title="Contact & Complaints" accent="grass">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            To exercise any of your rights or if you have a question about how we handle your personal data,
            contact our privacy team at{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--sky))" }}>
              privacy@britishbestbettingsites.com
            </span>. We aim to respond to all requests within 30 calendar days. If you are not satisfied with
            our response, you have the right to lodge a complaint with the UK supervisory authority at{" "}
            <a
              href="https://ico.org.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2"
              style={{ color: "hsl(var(--sky))" }}
            >
              ico.org.uk
            </a>.
          </p>
        </ContentBlock>

      </PageLayout>
      <Footer />
    </div>
  )
}
