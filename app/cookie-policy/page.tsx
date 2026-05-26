import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cookie Policy — British Best Betting Sites",
  description:
    "Cookie Policy for britishbestbettingsites.com. What cookies we use, why we use them, and how to manage your preferences at any time.",
  openGraph: {
    title: "Cookie Policy — British Best Betting Sites",
    description: "Full details on cookies used by britishbestbettingsites.com and how to control them.",
    url: "https://britishbestbettingsites.com/cookie-policy",
  },
}

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Cookie Policy"
        subtitle="Last updated: May 2026 — britishbestbettingsites.com"
      >

        <ContentBlock title="What Are Cookies?" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Cookies are small text files that a website stores on your device when you visit. They allow the
            site to recognise your browser on return visits, remember your preferences, and measure how you
            interact with content. Cookies do not contain personally identifying details such as your name,
            address, or payment information.
          </p>
        </ContentBlock>

        <ContentBlock title="Cookies We Use" accent="sky">
          <div className="space-y-3">
            {[
              {
                title: "Essential Cookies",
                tag: "Always Active",
                primary: true,
                desc: "These cookies are strictly necessary for britishbestbettingsites.com to function. They store your cookie consent decision so that we do not ask again on every page load, and support basic security and navigation functions. They cannot be disabled.",
                examples: ["cookieConsent_bbbs — stores your accept/essential-only choice and timestamp"],
              },
              {
                title: "Analytics Cookies",
                tag: "Optional",
                primary: false,
                desc: "We use Google Analytics to understand how visitors arrive at, navigate, and leave our site. All data is aggregated and anonymised — no individual user is identified. Analytics cookies help us improve the quality and structure of our editorial content.",
                examples: ["_ga, _gid, _gat_UA — Google Analytics session and user identifiers (anonymised)"],
              },
              {
                title: "Affiliate & Marketing Cookies",
                tag: "Optional",
                primary: false,
                desc: "These cookies record clicks on affiliate links to UKGC-licensed bookmakers so that referrals can be attributed and commission calculated. They allow us to earn the revenue that funds our independent editorial operation. No personal data is sold to any third party.",
                examples: ["Various first-party and partner click-tracking tokens set at the point of bookmaker link click"],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-xl overflow-hidden"
                style={{ border: "1px solid hsl(var(--border))" }}
              >
                <div
                  className="px-5 py-3 flex items-center justify-between border-b"
                  style={{
                    background: item.primary ? "hsl(var(--sky-light))" : "hsl(var(--secondary))",
                    borderColor: "hsl(var(--border))",
                  }}
                >
                  <h3 className="font-heading font-semibold text-sm text-foreground">{item.title}</h3>
                  <span
                    className="font-mono text-[9px] px-2.5 py-0.5 rounded-full uppercase tracking-widest"
                    style={
                      item.primary
                        ? { background: "hsl(var(--sky))", color: "white" }
                        : { background: "hsl(var(--muted))", color: "hsl(var(--slate-mid))", border: "1px solid hsl(var(--border))" }
                    }
                  >
                    {item.tag}
                  </span>
                </div>
                <div className="px-5 py-4" style={{ background: "hsl(var(--card))" }}>
                  <p className="font-sans text-muted-foreground text-xs leading-relaxed mb-3">{item.desc}</p>
                  <div
                    className="rounded-lg px-3 py-2"
                    style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
                  >
                    {item.examples.map((ex, j) => (
                      <p key={j} className="font-mono text-[10px] leading-relaxed" style={{ color: "hsl(var(--slate-mid))" }}>
                        {ex}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Managing Your Cookie Preferences" accent="grass">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mb-4">
            You have three ways to control which cookies this site sets on your device:
          </p>
          <ol className="space-y-3" role="list">
            {[
              {
                num: "1",
                title: "Cookie Banner",
                desc: "When you first visit britishbestbettingsites.com, a cookie preference panel appears. Select 'Accept All' to enable all cookie categories or 'Essential Only' to limit to strictly necessary cookies. Your choice is stored and remembered for 13 months.",
              },
              {
                num: "2",
                title: "Browser Settings",
                desc: "All major browsers (Chrome, Firefox, Safari, Edge) allow you to view, block, and delete cookies via their privacy or settings menus. Blocking all cookies may prevent some site functions from working correctly.",
              },
              {
                num: "3",
                title: "Browser Extensions",
                desc: "Privacy-focused browser extensions such as uBlock Origin or Privacy Badger can block third-party tracking scripts before they run on your device.",
              },
            ].map((item) => (
              <li key={item.num} className="flex items-start gap-3">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: "hsl(var(--grass))", color: "white" }}
                >
                  <span className="font-heading font-bold text-[11px]">{item.num}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-foreground">{item.title}</p>
                  <p className="font-sans text-muted-foreground text-xs leading-relaxed mt-0.5">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </ContentBlock>

        <ContentBlock title="Third-Party Cookies" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Some cookies on britishbestbettingsites.com are set by third-party services — principally Google Analytics
            and bookmaker affiliate networks. These third parties operate under their own privacy policies, which we
            encourage you to review. We do not have direct control over third-party cookies and their behaviour
            is governed by those external policies.
          </p>
        </ContentBlock>

        <ContentBlock title="Policy Updates" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            We may revise this Cookie Policy when we add new functionality, when third-party tools change, or when
            UK regulatory requirements are updated. Any material revision will be signalled by an updated
            &ldquo;last updated&rdquo; date at the top of this page. We recommend checking back periodically.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{ background: "hsl(var(--sky-pale))", border: "1px solid hsl(var(--sky) / 0.2)" }}
        >
          <p className="font-sans text-muted-foreground text-xs">
            Questions about our use of cookies? Contact us at{" "}
            <span className="font-semibold" style={{ color: "hsl(var(--sky))" }}>
              cookies@britishbestbettingsites.com
            </span>
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
