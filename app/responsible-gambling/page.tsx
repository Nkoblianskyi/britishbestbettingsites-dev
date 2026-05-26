import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Responsible Gambling — British Best Betting Sites",
  description:
    "Our commitment to safer gambling. Practical advice, problem gambling warning signs, and free UK support services. britishbestbettingsites.com — responsible by default.",
  openGraph: {
    title: "Responsible Gambling — British Best Betting Sites",
    description: "Free UK gambling support services, safer betting principles, and self-exclusion guidance.",
    url: "https://britishbestbettingsites.com/responsible-gambling",
  },
}

export default function ResponsibleGamblingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="Responsible Gambling"
        subtitle="britishbestbettingsites.com — Bet for enjoyment, always stay in control"
        badge={{ text: "18+ Only", danger: true }}
      >

        {/* Critical warning */}
        <div
          className="rounded-xl px-5 py-5"
          style={{
            background: "hsl(var(--coral-light))",
            border: "2px solid hsl(var(--coral) / 0.4)",
          }}
        >
          <p className="font-sans text-sm text-foreground leading-relaxed">
            <strong className="font-bold" style={{ color: "hsl(var(--coral))" }}>Important: </strong>
            Sports betting can cause serious financial, emotional, and social harm. You should only ever
            bet with money you can genuinely afford to lose. If gambling is affecting your wellbeing,
            seek free and confidential help immediately at{" "}
            <a
              href="https://www.begambleaware.org"
              className="underline underline-offset-2 font-semibold"
              style={{ color: "hsl(var(--coral))" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              BeGambleAware.org
            </a>{" "}
            or call the National Gambling Helpline on{" "}
            <strong className="text-foreground">0808 8020 133</strong> (free, 24 hours, 7 days).
          </p>
          <p
            className="font-heading font-bold text-sm mt-3 uppercase tracking-widest"
            style={{ color: "hsl(var(--coral))" }}
          >
            Persons under 18 must not gamble
          </p>
        </div>

        <ContentBlock title="What Is Responsible Gambling?" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Responsible gambling means treating betting as one form of paid entertainment — like going to a
            concert or a restaurant — with a fixed budget decided before you start. You accept that losses are
            a normal part of the experience, you stop when your limit is reached, and you never let gambling
            interfere with your finances, work, or relationships. Every UKGC-licensed bookmaker we list is
            legally required to provide tools that help you stay in control.
          </p>
        </ContentBlock>

        <ContentBlock title="Four Core Principles" accent="sky">
          <div className="divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                num: "01",
                title: "Only Bet What You Can Afford to Lose",
                desc: "Your gambling budget must come from disposable leisure income only — money that is not allocated to rent, utility bills, food, savings, or family needs. If losing the bet would cause you genuine financial stress, it is not money you can afford to bet.",
              },
              {
                num: "02",
                title: "Set Your Limits Before You Deposit",
                desc: "Every UKGC-licensed operator must provide deposit limits, loss limits, session time limits, and wager limits. Configure these before you place your first bet — not after you have already exceeded a comfortable amount. UKGC rules require a 24-hour cooling-off period before any limit can be increased.",
              },
              {
                num: "03",
                title: "Never Chase a Loss",
                desc: "The urge to place a bigger bet to recover a previous loss is one of the most common paths into problem gambling. Every loss is simply the cost of the entertainment you chose to pay for. Accept it, move on, and do not make an unplanned bet in reaction to it.",
              },
              {
                num: "04",
                title: "Keep Betting in Its Proper Place",
                desc: "Betting should occupy a small, defined slice of your leisure time and budget. If you find yourself thinking about gambling during unrelated activities, rearranging your schedule to accommodate betting, or feeling anxious when you cannot access a betting app, those are signs to seek support.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="font-heading font-bold text-xl leading-none flex-shrink-0 pt-0.5"
                  style={{ color: "hsl(var(--sky))", minWidth: "2.5rem" }}
                >
                  {item.num}
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-sm text-foreground">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <div className="grid md:grid-cols-2 gap-5">
          <ContentBlock title="Healthy Habits" accent="grass">
            <ul className="space-y-2.5" role="list">
              {[
                "Set a firm monthly betting budget and treat it as already spent",
                "Activate deposit and session time limits on every account you open",
                "Maintain a wide range of other leisure interests alongside betting",
                "Schedule regular periods completely away from all betting apps",
                "Register with GAMSTOP self-exclusion if you need a longer break",
                "Tell a trusted friend or family member about your betting activity",
              ].map((item, i) => (
                <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--grass))" }} aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>

          <ContentBlock title="Warning Signs" accent="coral">
            <ul className="space-y-2.5" role="list">
              {[
                "Spending more than you planned or have budgeted for",
                "Hiding bets, accounts, or losses from people close to you",
                "Using credit cards, loans, or borrowed money to fund gambling",
                "Neglecting work, study, family, or personal responsibilities",
                "Feeling restless, irritable, or low when you cannot place a bet",
                "Convincing yourself you have a system that will eventually win",
              ].map((item, i) => (
                <li key={i} className="font-sans text-sm text-muted-foreground flex items-start gap-2.5">
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--coral))" }} aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </ContentBlock>
        </div>

        <ContentBlock title="Free UK Support Services" accent="sky">
          <div className="grid sm:grid-cols-2 gap-3">
            {[
              {
                name: "GambleAware",
                url: "begambleaware.org",
                desc: "Free confidential support, self-help tools, and specialist treatment referrals across the UK",
                href: "https://www.begambleaware.org",
              },
              {
                name: "GamCare",
                url: "gamcare.org.uk",
                desc: "National Gambling Helpline: 0808 8020 133 — available 24 hours, 7 days a week, free of charge",
                href: "https://www.gamcare.org.uk",
              },
              {
                name: "GAMSTOP",
                url: "gamstop.co.uk",
                desc: "UK self-exclusion scheme — a single registration instantly blocks access to all UKGC-licensed sites",
                href: "https://www.gamstop.co.uk",
              },
              {
                name: "Gambling Therapy",
                url: "gamblingtherapy.org",
                desc: "Free international online support, peer-to-peer forums, and live chat counselling sessions",
                href: "https://www.gamblingtherapy.org",
              },
            ].map((org, i) => (
              <a
                key={i}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl p-4 transition-all hover:shadow-md"
                style={{
                  background: "hsl(var(--sky-pale))",
                  border: "1px solid hsl(var(--sky) / 0.2)",
                }}
              >
                <div className="font-heading font-semibold text-sm text-foreground">{org.name}</div>
                <div className="font-mono text-[10px] mt-0.5" style={{ color: "hsl(var(--sky))" }}>{org.url}</div>
                <div className="font-sans text-muted-foreground text-xs mt-1.5 leading-relaxed">{org.desc}</div>
              </a>
            ))}
          </div>
        </ContentBlock>

      </PageLayout>
      <Footer />
    </div>
  )
}
