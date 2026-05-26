import Image from "next/image"
import { ShieldCheck, Star, Clock, Trophy } from "lucide-react"

function getUpdatedLabel() {
  const now = new Date()
  return now.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })
}

export function Hero() {
  const updatedDate = getUpdatedLabel()
  return (
    <section className="relative w-full min-h-[340px] md:min-h-[460px] flex flex-col overflow-hidden">
      {/* Stadium background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/stadium-hero.jpg"
          alt="Premier League football stadium filled with supporters on a bright match day"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Light pastel overlay — sky blue tinted */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, hsl(207 85% 18% / 0.88) 0%, hsl(207 75% 22% / 0.80) 45%, hsl(151 60% 16% / 0.72) 100%)",
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage:
              "repeating-linear-gradient(0deg, transparent, transparent 52px, hsl(0 0% 100% / 0.07) 52px, hsl(0 0% 100% / 0.07) 53px), repeating-linear-gradient(90deg, transparent, transparent 52px, hsl(0 0% 100% / 0.06) 52px, hsl(0 0% 100% / 0.06) 53px)",
          }}
        />
        {/* Left accent bar */}
        <div
          className="absolute inset-y-0 left-0 w-1"
          style={{ background: "linear-gradient(180deg, hsl(var(--sky)), transparent)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex items-center px-4 py-12 md:py-20">
        <div className="mx-auto w-full max-w-[1100px]">

          {/* Editorial label */}
          <div className="flex items-center gap-3 mb-5 md:mb-6">
            <div
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.18em]"
              style={{
                background: "hsl(0 0% 100% / 0.12)",
                border: "1px solid hsl(0 0% 100% / 0.28)",
                color: "hsl(0 0% 100% / 0.9)",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 flex-shrink-0" aria-hidden="true" />
              Independent Editorial &nbsp;&middot;&nbsp; UKGC Licensed Only
            </div>
          </div>

          {/* Headline */}
          <h1
            className="font-heading font-extrabold leading-[1.05] tracking-tight text-balance text-white mb-4 md:mb-5"
            style={{ fontSize: "clamp(2rem, 5vw, 3.6rem)" }}
          >
            <span className="block">Britain&apos;s Most Trusted</span>
            <span
              className="block"
              style={{
                background: "linear-gradient(90deg, hsl(207 100% 82%), hsl(151 80% 72%), hsl(207 90% 72%))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Betting Sites 2025
            </span>
          </h1>

          {/* Standfirst */}
          <p className="font-sans text-white/80 text-sm md:text-base leading-relaxed max-w-2xl mb-8 md:mb-10">
            Every bookmaker on our list holds a current UKGC licence and has passed a rigorous four-week hands-on review.
            We rank on odds quality, payout speed, welcome offers, and player safety — zero paid placements, guaranteed.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-5 md:gap-8">
            {[
              { icon: ShieldCheck, label: "UKGC Licensed" },
              { icon: Trophy, label: "Expert Ranked" },
              { icon: Star, label: "Independently Reviewed" },
              { icon: Clock, label: "Updated Monthly" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2">
                <Icon className="w-4 h-4 flex-shrink-0 text-sky-300" aria-hidden="true" />
                <span className="font-mono text-[11px] text-white/70 uppercase tracking-wider">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Updated date strip */}
      <div
        className="relative z-10 w-full py-2.5 px-4 border-t"
        style={{
          borderColor: "hsl(0 0% 100% / 0.12)",
          background: "hsl(207 85% 14% / 0.65)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="mx-auto w-full max-w-[1100px] flex items-center gap-2">
          <div className="h-px w-5 flex-shrink-0 bg-sky-400" aria-hidden="true" />
          <span className="font-mono text-[10px] text-white/45 uppercase tracking-[0.14em]">
            Rankings last updated:&nbsp;
            <time dateTime={new Date().toISOString().slice(0, 10)} className="text-sky-300">
              {updatedDate}
            </time>
          </span>
        </div>
      </div>
    </section>
  )
}
