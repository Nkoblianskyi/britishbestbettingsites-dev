"use client"

import { Star, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import type { BettingSite } from "@/lib/mock-data"

interface BettingSiteCardProps {
  site: BettingSite
  rank: number
}

export function BettingSiteCard({ site, rank }: BettingSiteCardProps) {
  const getPrimaryBadge = () => {
    if (site.isTopRating) return { text: "Top Pick", type: "primary" }
    if (site.isTopLine) return { text: "Best Value", type: "grass" }
    if (site.isPopular) return { text: "Popular", type: "neutral" }
    if (site.isTrending) return { text: "Trending", type: "neutral" }
    return null
  }

  const renderStars = (count: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className="w-3 h-3"
        style={{
          fill: i < Math.floor(count) ? "hsl(var(--sky))" : "hsl(var(--border))",
          color: i < Math.floor(count) ? "hsl(var(--sky))" : "hsl(var(--border))",
        }}
        aria-hidden="true"
      />
    ))

  const primaryBadge = getPrimaryBadge()
  const isFirst = rank === 1

  return (
    <div
      className="relative rounded-xl overflow-hidden card-lift"
      style={{
        background: "hsl(var(--card))",
        border: isFirst
          ? "1.5px solid hsl(var(--sky) / 0.45)"
          : "1px solid hsl(var(--border))",
        boxShadow: isFirst
          ? "0 4px 20px hsl(var(--sky) / 0.1), 0 1px 4px hsl(215 35% 14% / 0.04)"
          : "0 1px 4px hsl(215 35% 14% / 0.04)",
      }}
    >
      {/* Top badge strip */}
      {primaryBadge && (
        <div
          className="px-4 py-1.5 flex items-center gap-2 border-b"
          style={{
            background:
              primaryBadge.type === "primary"
                ? "hsl(var(--sky-light))"
                : primaryBadge.type === "grass"
                ? "hsl(var(--grass-light))"
                : "hsl(var(--surface-raised))",
            borderColor: "hsl(var(--border))",
          }}
        >
          <CheckCircle2
            className="w-3 h-3 flex-shrink-0"
            style={{
              color:
                primaryBadge.type === "primary"
                  ? "hsl(var(--sky))"
                  : primaryBadge.type === "grass"
                  ? "hsl(var(--grass))"
                  : "hsl(var(--slate-light))",
            }}
            aria-hidden="true"
          />
          <span
            className="font-mono text-[9px] uppercase tracking-[0.2em] font-bold"
            style={{
              color:
                primaryBadge.type === "primary"
                  ? "hsl(var(--sky))"
                  : primaryBadge.type === "grass"
                  ? "hsl(var(--grass))"
                  : "hsl(var(--slate-mid))",
            }}
          >
            {primaryBadge.text}
          </span>
        </div>
      )}

      {/* Desktop layout */}
      <div className="hidden md:grid md:grid-cols-[52px_190px_1fr_120px_160px] md:items-center md:gap-0 px-4 py-5">
        {/* Rank */}
        <div
          className="w-9 h-9 flex items-center justify-center font-heading font-bold text-base flex-shrink-0 rounded-lg"
          style={{
            background: isFirst ? "hsl(var(--sky))" : "hsl(var(--secondary))",
            color: isFirst ? "hsl(var(--white))" : "hsl(var(--slate-mid))",
          }}
          aria-label={`Rank ${rank}`}
        >
          {rank}
        </div>

        {/* Logo */}
        <div className="flex-shrink-0 h-16 flex items-center justify-center px-4 overflow-hidden">
          <div
            className="flex items-center justify-center rounded-lg overflow-hidden"
            style={{ background: "hsl(var(--surface-raised))", padding: "6px 12px", maxWidth: 150, border: "1px solid hsl(var(--border))" }}
          >
            <img
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              className="max-h-10 max-w-[130px] object-contain"
            />
          </div>
        </div>

        {/* Bonus */}
        <div className="flex flex-col items-center justify-center text-center px-4">
          <p
            className="font-heading font-bold text-xl md:text-2xl leading-tight text-foreground"
          >
            {site.bonus}
          </p>
          <div className="flex gap-3 mt-2 flex-wrap justify-center">
            {site.features.slice(0, 2).map((f, i) => (
              <span
                key={i}
                className="font-mono text-[9px] uppercase tracking-wide px-2 py-0.5 rounded-full"
                style={{ background: "hsl(var(--sky-light))", color: "hsl(var(--sky))" }}
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Rating */}
        <div className="text-center flex-shrink-0">
          <div
            className="font-heading font-bold text-3xl leading-none"
            style={{ color: "hsl(var(--sky))" }}
          >
            {site.rating.toFixed(1)}
          </div>
          <div className="font-mono text-[9px] mt-0.5" style={{ color: "hsl(var(--slate-light))" }}>/ 10</div>
          <div className="flex items-center justify-center gap-0.5 mt-1.5" aria-label={`${site.stars} out of 5 stars`}>
            {renderStars(site.stars)}
          </div>
        </div>

        {/* CTA */}
        <div className="flex-shrink-0 text-center pl-4">
          <a
            href={site.url}
            target="_blank"
            rel="noopener noreferrer nofollow sponsored"
            aria-label={`Claim offer at ${site.name}`}
          >
            <button
              className="w-full font-mono uppercase tracking-widest text-[10px] font-bold px-4 py-2.5 rounded-lg transition-all"
              style={{
                background: isFirst ? "hsl(var(--sky))" : "hsl(var(--sky))",
                color: "hsl(var(--white))",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.88"
                e.currentTarget.style.transform = "translateY(-1px)"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1"
                e.currentTarget.style.transform = "translateY(0)"
              }}
            >
              Claim Offer
            </button>
          </a>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden px-4 py-4">
        <div className="flex items-center gap-3 mb-3">
          <div
            className="w-8 h-8 flex items-center justify-center font-heading font-bold text-sm flex-shrink-0 rounded-lg"
            style={{
              background: isFirst ? "hsl(var(--sky))" : "hsl(var(--secondary))",
              color: isFirst ? "hsl(var(--white))" : "hsl(var(--slate-mid))",
            }}
          >
            {rank}
          </div>
          <div
            className="flex-shrink-0 flex items-center justify-center rounded-lg overflow-hidden"
            style={{ background: "hsl(var(--surface-raised))", padding: "5px 10px", border: "1px solid hsl(var(--border))" }}
          >
            <Image
              src={site.logo || "/placeholder.svg"}
              alt={`${site.name} logo`}
              width={110}
              height={40}
              className="h-8 w-auto object-contain"
            />
          </div>
          <div className="flex-1 text-right">
            <div
              className="font-heading font-bold text-2xl leading-none"
              style={{ color: "hsl(var(--sky))" }}
            >
              {site.rating.toFixed(1)}
            </div>
            <div className="flex justify-end gap-0.5 mt-0.5" aria-label={`${site.stars} out of 5 stars`}>
              {renderStars(site.stars)}
            </div>
          </div>
        </div>

        <div
          className="text-center py-3 mb-3 rounded-lg"
          style={{ background: "hsl(var(--sky-pale))", border: "1px solid hsl(var(--sky) / 0.15)" }}
        >
          <p className="font-heading font-bold text-lg leading-tight text-foreground">
            {site.bonus}
          </p>
        </div>

        <a
          href={site.url}
          target="_blank"
          rel="noopener noreferrer nofollow sponsored"
          aria-label={`Claim offer at ${site.name}`}
          className="block"
        >
          <button
            className="w-full font-mono uppercase tracking-widest text-[10px] font-bold h-10 rounded-lg transition-all"
            style={{
              background: "hsl(var(--sky))",
              color: "hsl(var(--white))",
            }}
          >
            Claim Offer
          </button>
        </a>
      </div>

      {/* Disclaimer */}
      <div
        className="px-4 pb-2 pt-2 border-t"
        style={{ borderColor: "hsl(var(--border))" }}
      >
        <p className="text-[9px] font-mono" style={{ color: "hsl(var(--slate-light))" }}>
          <span style={{ color: "hsl(var(--coral))", fontWeight: 600 }}>18+</span> | {site.terms}
        </p>
      </div>
    </div>
  )
}
