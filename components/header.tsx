import Link from "next/link"

export function Header() {
  return (
    <header
      className="sticky top-0 z-50 w-full border-b"
      style={{ background: "hsl(0 0% 100% / 0.96)", borderColor: "hsl(var(--border))", backdropFilter: "blur(12px)" }}
    >
      {/* Sky accent top bar */}
      <div
        className="w-full h-[3px]"
        style={{ background: "linear-gradient(90deg, hsl(var(--sky)), hsl(207 90% 54%), hsl(var(--grass)))" }}
      />

      <div className="px-4 py-3">
        <div className="flex items-center justify-between max-w-[1100px] mx-auto">

          {/* Logo + Wordmark */}
          <Link href="/" className="flex items-center gap-3 group" aria-label="British Best Betting Sites — Home">
            <div className="relative flex-shrink-0 w-9 h-9" aria-hidden="true">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="36" height="36" rx="8" fill="hsl(207 85% 40%)" />
                <path d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z" fill="white" opacity="0.15" />
                <path d="M10 10 L18 6 L26 10 L26 20 C26 25 18 30 18 30 C18 30 10 25 10 20 Z" stroke="white" strokeWidth="1.5" fill="none" />
                <circle cx="18" cy="18" r="4" fill="white" />
                <path d="M14 18 L22 18 M18 14 L18 22" stroke="hsl(207 85% 40%)" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>

            <div className="flex flex-col leading-none">
              <div className="flex items-baseline gap-1 whitespace-nowrap">
                <span className="font-heading font-extrabold text-base sm:text-lg tracking-tight text-foreground">
                  British
                </span>
                <span
                  className="font-heading font-extrabold text-base sm:text-lg tracking-tight"
                  style={{ color: "hsl(var(--sky))" }}
                >
                  Best
                </span>
              </div>
              <span className="font-sans text-[10px] font-medium tracking-widest uppercase" style={{ color: "hsl(var(--slate-light))" }}>
                Betting Sites
              </span>
            </div>
          </Link>

          {/* Right badges */}
          <div className="flex items-center gap-2.5">
            <div
              className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono px-3 py-1.5 rounded-full border"
              style={{
                background: "hsl(var(--sky-light))",
                borderColor: "hsl(var(--sky) / 0.25)",
                color: "hsl(var(--sky))",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
              UKGC Licensed Only
            </div>
            <span
              className="text-[10px] font-mono font-bold px-2.5 py-1.5 rounded-full border uppercase tracking-widest"
              style={{ borderColor: "hsl(var(--coral) / 0.5)", color: "hsl(var(--coral))", background: "hsl(var(--coral-light))" }}
            >
              18+
            </span>
          </div>

        </div>
      </div>
    </header>
  )
}
