"use client"

import Link from "next/link"

const REGULATORY_ORGS = [
  {
    src: "/gamble-aware.png",
    alt: "BeGambleAware",
    href: "https://www.begambleaware.org/",
    width: 130,
    height: 36,
  },
  {
    src: "/gamcare.png",
    alt: "GamCare",
    href: "https://www.gamcare.org.uk/",
    width: 110,
    height: 36,
  },
  {
    src: "/gordon.png",
    alt: "Gambling Therapy",
    href: "https://www.gamblingtherapy.org/",
    width: 100,
    height: 36,
  },
  {
    src: "/Gambling_Commission_logo.png",
    alt: "UK Gambling Commission",
    href: "https://www.gamblingcommission.gov.uk/",
    width: 120,
    height: 36,
  },
  {
    src: "/gamstop.svg",
    alt: "GamStop",
    href: "https://www.gamstop.co.uk/",
    width: 100,
    height: 36,
  },
]

const NAV_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/responsible-gambling", label: "Responsible Gambling" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/cookie-policy", label: "Cookie Policy" },
]

export function Footer() {
  return (
    <footer
      className="w-full text-foreground border-t"
      style={{ background: "hsl(var(--slate))", borderColor: "hsl(215 35% 22%)" }}
    >
      {/* Sky + Grass gradient top bar */}
      <div
        className="w-full h-[3px]"
        style={{
          background:
            "linear-gradient(90deg, hsl(var(--sky)), hsl(207 90% 54%), hsl(var(--grass)), hsl(var(--sky)))",
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1100px] mx-auto px-4 pt-10 pb-6">

        {/* Top row: Brand + Nav */}
        <div
          className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8 pb-8 border-b"
          style={{ borderColor: "hsl(215 35% 22%)" }}
        >
          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="flex items-center gap-3 mb-4" aria-label="British Best Betting Sites — Home">
              <div
                className="w-9 h-9 flex items-center justify-center flex-shrink-0 rounded-lg"
                style={{ background: "hsl(var(--sky))" }}
                aria-hidden="true"
              >
                <svg width="20" height="20" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z" stroke="white" strokeWidth="1.5" fill="white" fillOpacity="0.15" />
                  <circle cx="18" cy="18" r="4" fill="white" />
                  <path d="M14 18 L22 18 M18 14 L18 22" stroke="hsl(207 85% 40%)" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col leading-none gap-0.5">
                <div className="flex items-baseline gap-1">
                  <span className="font-heading font-extrabold text-base tracking-tight text-white uppercase">British</span>
                  <span className="font-heading font-extrabold text-base tracking-tight uppercase" style={{ color: "hsl(var(--sky) / 0.85)" }}>Best</span>
                </div>
                <span className="font-sans text-[10px] tracking-widest uppercase" style={{ color: "hsl(215 15% 60%)" }}>Betting Sites</span>
              </div>
            </Link>
            <p className="text-xs leading-relaxed" style={{ color: "hsl(215 15% 55%)" }}>
              Independent comparison of UKGC-licensed bookmakers. We do not operate a bookmaker, accept bets, or publish paid placements.
            </p>
            <p className="text-[10px] mt-2 font-mono uppercase tracking-widest" style={{ color: "hsl(var(--sky) / 0.6)" }}>
              britishbestbettingsites.com
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-col gap-2" aria-label="Footer navigation">
            <span className="text-[10px] font-mono uppercase tracking-widest mb-1" style={{ color: "hsl(215 15% 40%)" }}>
              Navigation
            </span>
            {NAV_LINKS.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-sans transition-colors uppercase tracking-wide"
                style={{ color: "hsl(215 15% 55%)" }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "hsl(var(--sky) / 0.9)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLAnchorElement).style.color = "hsl(215 15% 55%)"
                }}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Regulatory logos */}
        <div
          className="py-7 border-b"
          style={{ borderColor: "hsl(215 35% 22%)" }}
        >
          <p className="text-[10px] font-mono uppercase tracking-widest mb-5" style={{ color: "hsl(215 15% 38%)" }}>
            Regulatory Bodies &amp; Safer Gambling
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {REGULATORY_ORGS.map(({ href, src, alt, width, height }) => (
              <a
                key={alt}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={alt}
                className="transition-opacity hover:opacity-80 rounded-lg overflow-hidden"
                
              >
                <img
                  src={src}
                  alt={alt}
                  width={width}
                  height={height}
                  className="h-8 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="pt-6 pb-4">
          <p className="text-xs leading-relaxed" style={{ color: "hsl(215 15% 38%)" }}>
            britishbestbettingsites.com is an independent comparison website. We earn commission when users
            register with operators through our affiliate links — this does not influence editorial rankings in any way.
            All listed operators hold a valid UK Gambling Commission (UKGC) licence.
            Gambling involves risk. Please bet responsibly. <strong className="font-semibold text-white/30">18+ only.</strong>
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] font-mono uppercase tracking-widest pt-4 border-t"
          style={{ color: "hsl(215 15% 28%)", borderColor: "hsl(215 35% 18%)" }}
        >
          <span>&copy; 2026 britishbestbettingsites.com</span>
          <span>British Best Betting Sites &mdash; Independent Comparison</span>
        </div>
      </div>
    </footer>
  )
}
