"use client"

import { useState } from "react"
import {
  ChevronDown,
  ChevronUp,
  ShieldCheck,
  Trophy,
  Star,
  Zap,
  CreditCard,
  Headphones,
  Search,
  ClipboardList,
  BarChart2,
  Award,
  AlertTriangle,
  HeartHandshake,
} from "lucide-react"
import { bettingSites } from "@/lib/mock-data"

/* ─── How We Review ─────────────────────────────────────── */
const PILLARS = [
  {
    icon: ShieldCheck,
    number: "01",
    title: "Licensing & Security",
    weight: "30%",
    color: "sky",
    desc: "We verify every operator holds an active, unsuspended UKGC licence and audits SSL-encrypted connections, player fund protection levels, and anti-fraud infrastructure.",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Welcome Offers",
    weight: "25%",
    color: "grass",
    desc: "We analyse the realistic value of new-customer bonuses — factoring in wagering requirements, minimum odds, and expiry windows — not just the headline bonus figure.",
  },
  {
    icon: Star,
    number: "03",
    title: "Odds Quality",
    weight: "20%",
    color: "sky",
    desc: "Our analysts compare Premier League, horse racing, and major tournament odds weekly across all listed operators to identify consistent value and low overround.",
  },
  {
    icon: Zap,
    number: "04",
    title: "Platform & App",
    weight: "15%",
    color: "grass",
    desc: "We test desktop and mobile UX during live matches. Speed, cash-out responsiveness, registration simplicity, and navigation depth all contribute to this pillar.",
  },
  {
    icon: CreditCard,
    number: "05",
    title: "Payments",
    weight: "7%",
    color: "sky",
    desc: "We check deposit options, withdrawal processing times, minimum and maximum limits, and fee transparency across all available banking methods.",
  },
  {
    icon: Headphones,
    number: "06",
    title: "Customer Support",
    weight: "3%",
    color: "grass",
    desc: "Live chat, email, and telephone support are all tested. We measure first-response times and the quality of resolution for real account-related queries.",
  },
]

/* ─── FAQ ─────────────────────────────────────────────────── */
const FAQS = [
  {
    q: "How do you decide which betting sites appear on this list?",
    a: "Every site must hold a current, unrestricted UKGC licence. From there, candidates go through a minimum four-week hands-on review across six scoring pillars. Only operators achieving a composite score of 8.5 or above are published. Sites with upheld complaints or poor responsible gambling records are excluded regardless of their score.",
  },
  {
    q: "Are welcome offers always worth claiming?",
    a: "Not always. A headline figure of £50 in free bets is only attractive if the wagering requirement is 30x or lower and the minimum odds are reasonable (typically 1.5 or above). Our reviews highlight the genuine value, not the marketing promise. Where a bonus is poor value, we say so explicitly.",
  },
  {
    q: "How often are the rankings updated?",
    a: "Our editorial team reviews every listed operator on a rolling monthly basis. Any bookmaker that fails a re-test — due to changing terms, payout delays, or customer service decline — is immediately re-evaluated and may be repositioned or removed.",
  },
  {
    q: "Do you accept money from the bookmakers you review?",
    a: "Our rankings are strictly independent. We earn commission through affiliate links when you register via our site, but this does not influence any operator's position. A bookmaker's rank is determined entirely by our scoring methodology.",
  },
  {
    q: "What is GAMSTOP and how do I use it?",
    a: "GAMSTOP is the UK's national self-exclusion scheme. Registering at gamstop.co.uk blocks your access to all UKGC-licensed betting and casino sites for a period you choose (minimum six months). Every operator we list is required by UKGC regulations to participate in GAMSTOP.",
  },
  {
    q: "Is it safe to bet online with UK bookmakers?",
    a: "All operators on this list hold a valid UKGC licence. This means they are legally required to segregate player funds, use 128-bit SSL encryption, provide responsible gambling tools, and comply with strict advertising standards. They are regulated by one of the most rigorous gambling authorities in the world.",
  },
]

/* ─── Our Pick ────────────────────────────────────────────── */
function OurPickBanner() {
  const topSite = bettingSites[0]
  return (
    <section
      className="w-full py-12 px-4"
      style={{ background: "hsl(var(--sky-light))", borderTop: "1px solid hsl(var(--sky) / 0.15)", borderBottom: "1px solid hsl(var(--sky) / 0.15)" }}
    >
      <div className="mx-auto max-w-[1100px]">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
            style={{ background: "hsl(var(--sky))" }}
            aria-hidden="true"
          >
            <Award className="w-5 h-5 text-white" />
          </div>
          <div>
            <h2 className="font-heading font-bold text-xl text-foreground">Our Top Pick This Month</h2>
            <p className="text-sm font-sans mt-0.5" style={{ color: "hsl(var(--sky))" }}>
              Highest composite score across all six review pillars
            </p>
          </div>
        </div>

        {/* Pick card */}
        <a
          href={topSite.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          aria-label={`Visit ${topSite.name} — ${topSite.bonus}`}
          className="block rounded-xl overflow-hidden transition-all hover:shadow-lg"
          style={{ background: "hsl(var(--card))", border: "1.5px solid hsl(var(--sky) / 0.35)" }}
        >
          <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
            {/* Logo */}
            <div
              className="flex-shrink-0 flex items-center justify-center rounded-xl overflow-hidden"
              style={{ background: "hsl(var(--surface-raised))", padding: "10px 18px", border: "1px solid hsl(var(--border))" }}
            >
              <img
                src={topSite.logo || "/placeholder.svg"}
                alt={`${topSite.name} logo`}
                className="h-12 max-w-[160px] object-contain"
              />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0 text-center sm:text-left">
              <p className="font-mono text-[10px] uppercase tracking-widest mb-1" style={{ color: "hsl(var(--slate-light))" }}>
                Welcome Offer
              </p>
              <p className="font-heading font-bold text-2xl md:text-3xl text-foreground leading-tight">
                {topSite.bonus}
              </p>
              <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
                {topSite.features.map((f, i) => (
                  <span
                    key={i}
                    className="font-mono text-[9px] uppercase tracking-wide px-2.5 py-1 rounded-full"
                    style={{ background: "hsl(var(--sky-pale))", color: "hsl(var(--sky))", border: "1px solid hsl(var(--sky) / 0.2)" }}
                  >
                    {f}
                  </span>
                ))}
              </div>
            </div>

            {/* Score */}
            <div className="hidden sm:flex flex-col items-center gap-1.5 flex-shrink-0">
              <div className="font-heading font-bold text-4xl leading-none" style={{ color: "hsl(var(--sky))" }}>
                {topSite.rating.toFixed(1)}
              </div>
              <div className="font-mono text-[10px]" style={{ color: "hsl(var(--slate-light))" }}>/ 10</div>
            </div>

            {/* CTA */}
            <div className="flex-shrink-0">
              <div
                className="inline-block font-mono text-[11px] uppercase tracking-widest font-bold px-6 py-3 rounded-lg"
                style={{ background: "hsl(var(--sky))", color: "hsl(var(--white))" }}
              >
                Visit Site
              </div>
            </div>
          </div>
        </a>

        {/* Note */}
        <p className="font-sans text-xs mt-3 text-center" style={{ color: "hsl(var(--slate-light))" }}>
          Our top pick is reviewed monthly. Ranking reflects editorial scoring only — not commercial arrangements.
        </p>
      </div>
    </section>
  )
}

/* ─── How We Review section ───────────────────────────────── */
function HowWeReview() {
  return (
    <section
      className="w-full py-14 px-4"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Header with timeline-style intro */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "hsl(var(--sky-light))" }}
                aria-hidden="true"
              >
                <Search className="w-4 h-4" style={{ color: "hsl(var(--sky))" }} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--sky))" }}>
                Our Methodology
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
              How We Review Every Bookmaker
            </h2>
            <p className="font-sans text-sm leading-relaxed mt-2 max-w-2xl" style={{ color: "hsl(var(--slate-mid))" }}>
              No bookmaker earns a place on this list without passing a structured, four-week hands-on evaluation
              by our specialist editorial team. Here is what we examine — and how much each area counts.
            </p>
          </div>
          <div
            className="flex-shrink-0 flex items-center gap-2 px-4 py-2.5 rounded-xl"
            style={{ background: "hsl(var(--sky-light))", border: "1px solid hsl(var(--sky) / 0.2)" }}
          >
            <ClipboardList className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--sky))" }} />
            <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--sky))" }}>
              4-week review minimum
            </span>
          </div>
        </div>

        {/* Pillars — alternating two-col layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {PILLARS.map((pillar) => {
            const Icon = pillar.icon
            const isGrass = pillar.color === "grass"
            return (
              <div
                key={pillar.number}
                className="rounded-xl p-5 flex flex-col gap-3"
                style={{
                  background: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                {/* Number + icon row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{
                        background: isGrass ? "hsl(var(--grass-light))" : "hsl(var(--sky-light))",
                      }}
                    >
                      <Icon
                        className="w-4 h-4"
                        style={{ color: isGrass ? "hsl(var(--grass))" : "hsl(var(--sky))" }}
                        aria-hidden="true"
                      />
                    </div>
                    <span
                      className="font-heading font-bold text-sm text-foreground"
                    >
                      {pillar.title}
                    </span>
                  </div>
                  <span
                    className="font-heading font-bold text-xl"
                    style={{ color: isGrass ? "hsl(var(--grass))" : "hsl(var(--sky))" }}
                  >
                    {pillar.weight}
                  </span>
                </div>

                {/* Weight bar */}
                <div
                  className="h-1 rounded-full w-full"
                  style={{ background: "hsl(var(--border))" }}
                >
                  <div
                    className="h-1 rounded-full"
                    style={{
                      width: pillar.weight,
                      background: isGrass ? "hsl(var(--grass))" : "hsl(var(--sky))",
                    }}
                  />
                </div>

                {/* Description */}
                <p className="text-xs leading-relaxed" style={{ color: "hsl(var(--slate-mid))" }}>
                  {pillar.desc}
                </p>

                {/* Step number badge */}
                <div className="mt-auto pt-2 flex justify-end">
                  <span
                    className="font-heading font-bold text-4xl leading-none opacity-10 select-none"
                    style={{ color: isGrass ? "hsl(var(--grass))" : "hsl(var(--sky))" }}
                    aria-hidden="true"
                  >
                    {pillar.number}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

/* ─── Safer Gambling section ─────────────────────────────── */
function SaferGambling() {
  return (
    <section
      className="w-full py-14 px-4"
      style={{ background: "hsl(var(--surface-raised))", borderTop: "1px solid hsl(var(--border))", borderBottom: "1px solid hsl(var(--border))" }}
    >
      <div className="mx-auto max-w-[1100px]">

        {/* Two-column header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:gap-16 mb-10">
          <div className="flex-1 mb-6 lg:mb-0">
            <div className="flex items-center gap-2 mb-3">
              <HeartHandshake className="w-5 h-5 flex-shrink-0" style={{ color: "hsl(var(--coral))" }} />
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--coral))" }}>
                Responsible Gambling
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
              Gambling Should Always Be a Choice
            </h2>
            <p className="font-sans text-sm leading-relaxed mt-3" style={{ color: "hsl(var(--slate-mid))" }}>
              Every bookmaker we list is legally required to provide tools that let you stay in control.
              We encourage every bettor to use deposit limits, session reminders, and self-exclusion if needed.
            </p>
          </div>

          {/* Warning alert */}
          <div
            className="lg:max-w-sm w-full rounded-xl p-5"
            style={{ background: "hsl(var(--coral-light))", border: "1.5px solid hsl(var(--coral) / 0.3)" }}
          >
            <div className="flex items-start gap-3">
              <AlertTriangle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--coral))" }} aria-hidden="true" />
              <div>
                <p className="font-heading font-bold text-sm text-foreground mb-1.5">Important Notice</p>
                <p className="font-sans text-xs leading-relaxed" style={{ color: "hsl(var(--slate-mid))" }}>
                  Betting can be addictive and cause serious harm. Never bet money you cannot afford to lose.
                  Free confidential help is available 24/7 at{" "}
                  <a
                    href="https://www.begambleaware.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-2 font-medium"
                    style={{ color: "hsl(var(--coral))" }}
                  >
                    BeGambleAware.org
                  </a>{" "}
                  or call <strong className="font-semibold text-foreground">0808 8020 133</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Dos and Don'ts cards */}
        <div className="grid md:grid-cols-2 gap-5 mb-8">
          {/* Healthy habits */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
          >
            <div
              className="px-5 py-3 border-b flex items-center gap-2"
              style={{ background: "hsl(var(--grass-light))", borderColor: "hsl(var(--grass) / 0.2)" }}
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--grass))" }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-[10px]">+</span>
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">
                Healthy Betting Habits
              </h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Decide your monthly budget before you place a single bet",
                "Set a deposit limit on every account you open",
                "Treat winnings as a bonus — not expected income",
                "Take regular planned breaks from all betting platforms",
                "Keep a wide variety of other social and leisure interests",
                "Use GAMSTOP if you ever feel you need a longer break",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(var(--slate-mid))" }}>
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--grass))" }} aria-hidden="true">+</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Warning signs */}
          <div
            className="rounded-xl overflow-hidden"
            style={{ background: "hsl(var(--card))", border: "1px solid hsl(var(--border))" }}
          >
            <div
              className="px-5 py-3 border-b flex items-center gap-2"
              style={{ background: "hsl(var(--coral-light))", borderColor: "hsl(var(--coral) / 0.2)" }}
            >
              <div
                className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0"
                style={{ background: "hsl(var(--coral))" }}
                aria-hidden="true"
              >
                <span className="text-white font-bold text-[10px]">!</span>
              </div>
              <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">
                Warning Signs to Watch For
              </h3>
            </div>
            <ul className="p-5 space-y-3" role="list">
              {[
                "Betting with money reserved for rent, bills, or food",
                "Hiding bets, losses, or accounts from family members",
                "Borrowing or using credit to fund gambling activity",
                "Chasing losses with larger bets to recover them",
                "Feeling irritable or anxious when unable to bet",
                "Neglecting work, family, or personal responsibilities",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm" style={{ color: "hsl(var(--slate-mid))" }}>
                  <span className="font-bold flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--coral))" }} aria-hidden="true">!</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* UK support services grid */}
        <div
          className="rounded-xl overflow-hidden"
          style={{ border: "1px solid hsl(var(--border))" }}
        >
          <div
            className="px-5 py-3 border-b flex items-center gap-2"
            style={{ background: "hsl(var(--sky-light))", borderColor: "hsl(var(--sky) / 0.2)" }}
          >
            <BarChart2 className="w-4 h-4 flex-shrink-0" style={{ color: "hsl(var(--sky))" }} aria-hidden="true" />
            <h3 className="font-heading font-bold text-sm text-foreground uppercase tracking-wide">
              Free UK Support Services
            </h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-0">
            {[
              { name: "GambleAware", url: "begambleaware.org", desc: "Free confidential support, treatment referrals, and self-help tools", href: "https://www.begambleaware.org" },
              { name: "GamCare", url: "gamcare.org.uk", desc: "National Gambling Helpline: 0808 8020 133 — free, 24 hours, 7 days", href: "https://www.gamcare.org.uk" },
              { name: "Gambling Therapy", url: "gamblingtherapy.org", desc: "Free international online support forums and live chat therapy", href: "https://www.gamblingtherapy.org" },
              { name: "GAMSTOP", url: "gamstop.co.uk", desc: "UK national self-exclusion — blocks all UKGC-licensed sites instantly", href: "https://www.gamstop.co.uk" },
            ].map((org, i) => (
              <a
                key={i}
                href={org.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-4 block transition-colors hover:bg-sky-50"
                style={{
                  background: "hsl(var(--card))",
                  borderRight: i % 2 === 0 ? "1px solid hsl(var(--border))" : "none",
                  borderBottom: i < 2 ? "1px solid hsl(var(--border))" : "none",
                }}
              >
                <div className="font-heading font-bold text-sm text-foreground">{org.name}</div>
                <div className="font-mono text-[10px] mt-0.5" style={{ color: "hsl(var(--sky))" }}>{org.url}</div>
                <div className="text-xs mt-1 leading-relaxed" style={{ color: "hsl(var(--slate-mid))" }}>{org.desc}</div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ section ─────────────────────────────────────────── */
function FAQSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <section
      className="w-full py-14 px-4"
      style={{ background: "hsl(var(--surface))" }}
    >
      <div className="mx-auto max-w-[1100px]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: "hsl(var(--grass-light))" }}
                aria-hidden="true"
              >
                <Search className="w-4 h-4" style={{ color: "hsl(var(--grass))" }} />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest" style={{ color: "hsl(var(--grass))" }}>
                Common Questions
              </span>
            </div>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-foreground tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>
          <p className="font-sans text-sm max-w-xs" style={{ color: "hsl(var(--slate-mid))" }}>
            Everything you need to know about British Best Betting Sites and placing bets safely online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ border: "1px solid hsl(var(--border))" }}
            >
              <button
                className="w-full flex items-start justify-between px-5 py-4 text-left gap-3 transition-colors"
                style={{
                  background: openFaq === i ? "hsl(var(--sky-light))" : "hsl(var(--card))",
                  borderBottom: openFaq === i ? "1px solid hsl(var(--sky) / 0.2)" : "none",
                }}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                aria-expanded={openFaq === i}
              >
                <span className="font-heading font-semibold text-sm text-foreground leading-snug">
                  {faq.q}
                </span>
                {openFaq === i
                  ? <ChevronUp className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--sky))" }} aria-hidden="true" />
                  : <ChevronDown className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: "hsl(var(--slate-light))" }} aria-hidden="true" />
                }
              </button>
              {openFaq === i && (
                <div
                  className="px-5 py-4"
                  style={{ background: "hsl(var(--sky-pale))" }}
                >
                  <p className="font-sans text-sm leading-relaxed" style={{ color: "hsl(var(--slate-mid))" }}>
                    {faq.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Main export ─────────────────────────────────────────── */
export function InfoSections() {
  return (
    <div className="w-full">
      <OurPickBanner />
      <HowWeReview />
      <SaferGambling />
      <FAQSection />
    </div>
  )
}
