import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PageLayout, ContentBlock } from "@/components/page-layout"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us — British Best Betting Sites",
  description:
    "Learn about the team behind britishbestbettingsites.com — our editorial mission, independent review methodology, and commitment to safer gambling in the UK.",
  openGraph: {
    title: "About British Best Betting Sites",
    description: "Who we are, how we work, and why we only list UKGC-licensed bookmakers.",
    url: "https://britishbestbettingsites.com/about",
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <PageLayout
        title="About British Best Betting Sites"
        subtitle="britishbestbettingsites.com"
      >

        <ContentBlock title="Who We Are" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            British Best Betting Sites was founded by a small team of UK sports betting enthusiasts who grew frustrated
            with comparison sites that buried the important information — wagering requirements, payout speeds, responsible
            gambling standards — behind flashy headlines and undisclosed commercial relationships.
          </p>
          <p className="font-sans text-muted-foreground text-sm leading-relaxed mt-3">
            We built this site to do the opposite. Every bookmaker we list has been tested with a real account,
            real money, and real customer support interactions. We document what we find — good and bad — and publish
            our scoring methodology in full so you can judge for yourself.
          </p>
        </ContentBlock>

        <ContentBlock title="Our Editorial Standards" accent="sky">
          <div className="divide-y" style={{ borderColor: "hsl(var(--border))" }}>
            {[
              {
                title: "Minimum Four-Week Review Period",
                desc: "No bookmaker is listed without passing a structured four-week evaluation covering all six scoring pillars. We do not accept sponsored reviews or fast-track placements for any fee.",
              },
              {
                title: "Real Account, Real Money Testing",
                desc: "Every reviewer holds an active, funded account with each operator they assess. Withdrawal speeds, customer support quality, and cash-out reliability are all tested through genuine transactions.",
              },
              {
                title: "Monthly Re-evaluation",
                desc: "A site that earns a high score today can lose it tomorrow. We re-test every listed operator on a rolling monthly basis. Operators that change terms unfavourably, delay payouts, or fail responsible gambling audits are demoted or removed immediately.",
              },
              {
                title: "Affiliate Transparency",
                desc: "We earn commission through affiliate links when you register via our site. This is disclosed clearly across every page. Affiliate revenue funds our independent operation — it does not influence a single position in our rankings.",
              },
              {
                title: "UKGC Compliance as a Non-Negotiable",
                desc: "An active, unrestricted UK Gambling Commission licence is the baseline requirement for any operator we consider reviewing. Any bookmaker with upheld UKGC consumer complaints is excluded from our list regardless of its scores.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                <div
                  className="w-0.5 flex-shrink-0 self-stretch rounded-full"
                  style={{ background: "hsl(var(--sky))" }}
                  aria-hidden="true"
                />
                <div>
                  <h3 className="font-heading font-semibold text-sm text-foreground">{item.title}</h3>
                  <p className="font-sans text-muted-foreground text-xs mt-1 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Values" accent="grass">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              {
                title: "Honesty",
                desc: "If a bookmaker's welcome offer is poor value, we say so. If customer support is slow, that is in the review. We publish genuine findings, not sanitised marketing copy.",
              },
              {
                title: "Independence",
                desc: "No operator pays for a position. No bookmaker has approval rights over their review. Our scores are determined exclusively by our methodology.",
              },
              {
                title: "Responsibility",
                desc: "We take safer gambling seriously. Every page on this site includes a responsible gambling message. We never feature operators with poor player protection records.",
              },
              {
                title: "Accuracy",
                desc: "We verify licence status, bonus terms, and withdrawal times before publishing. Facts are checked and re-checked every time we update the rankings.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="rounded-lg px-4 py-4"
                style={{ background: "hsl(var(--secondary))", border: "1px solid hsl(var(--border))" }}
              >
                <h3 className="font-heading font-semibold text-xs mb-1.5" style={{ color: "hsl(var(--sky))" }}>
                  {item.title}
                </h3>
                <p className="font-sans text-muted-foreground text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </ContentBlock>

        <ContentBlock title="Our Review Team" accent="sky">
          <p className="font-sans text-muted-foreground text-sm leading-relaxed">
            Our review team consists of sports betting specialists with over 35 years of combined experience covering
            UK and European gambling markets. Reviewers must hold active funded accounts and submit documented evidence
            of testing before any score is published. All reviewers are required to disclose any personal connection
            to an operator under review. No reviewer has any financial stake in the bookmakers we assess.
          </p>
        </ContentBlock>

        <div
          className="rounded-xl px-5 py-4"
          style={{
            background: "hsl(var(--sky-pale))",
            border: "1px solid hsl(var(--sky) / 0.2)",
          }}
        >
          <p className="font-sans text-muted-foreground text-xs leading-relaxed">
            <strong className="text-foreground font-semibold">Disclaimer:</strong>{" "}
            britishbestbettingsites.com is an informational comparison website. We are not a bookmaker and do not accept
            bets. All featured operators hold a current UKGC licence. Affiliate links may be used to fund independent
            editorial operations. Gambling involves risk. Please gamble responsibly. 18+ only.
          </p>
        </div>

      </PageLayout>
      <Footer />
    </div>
  )
}
