"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface PageLayoutProps {
  title: string
  subtitle?: string
  badge?: { text: string; className?: string; danger?: boolean }
  children: React.ReactNode
}

export function PageLayout({ title, subtitle, badge, children }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      {/* Inner page hero bar */}
      <div
        className="w-full px-4 py-10 border-b"
        style={{
          background: "hsl(var(--sky-light))",
          borderColor: "hsl(var(--sky) / 0.2)",
        }}
      >
        {/* Sky accent line */}
        <div
          className="w-full h-[3px] mb-6 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, hsl(var(--sky)), hsl(207 90% 54%), hsl(var(--grass)))",
          }}
          aria-hidden="true"
        />
        <div className="mx-auto max-w-[1100px]">
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-widest mb-5 transition-colors"
            style={{ color: "hsl(var(--slate-light))" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsl(var(--sky))")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = "hsl(var(--slate-light))")}
          >
            <ArrowLeft className="w-3 h-3" aria-hidden="true" />
            Back to Rankings
          </Link>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h1
                className="font-heading font-bold text-3xl md:text-4xl text-foreground tracking-tight leading-tight"
              >
                {title}
              </h1>
              {subtitle && (
                <p className="font-mono text-[10px] mt-2 uppercase tracking-widest" style={{ color: "hsl(var(--sky))" }}>
                  {subtitle}
                </p>
              )}
            </div>
            {badge && (
              <span
                className="flex-shrink-0 font-mono text-xs px-3 py-1.5 rounded-full uppercase tracking-widest"
                style={
                  badge.danger
                    ? { border: "1px solid hsl(var(--coral) / 0.5)", color: "hsl(var(--coral))", background: "hsl(var(--coral-light))" }
                    : { border: "1px solid hsl(var(--sky) / 0.4)", color: "hsl(var(--sky))", background: "hsl(var(--sky-light))" }
                }
              >
                {badge.text}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Page content */}
      <div className="mx-auto max-w-[1100px] px-4 py-10 space-y-5">
        {children}
      </div>
    </div>
  )
}

interface ContentBlockProps {
  title: string
  children: React.ReactNode
  accent?: "sky" | "grass" | "coral"
}

export function ContentBlock({ title, children, accent = "sky" }: ContentBlockProps) {
  const accentColor =
    accent === "coral"
      ? "hsl(var(--coral))"
      : accent === "grass"
        ? "hsl(var(--grass))"
        : "hsl(var(--sky))"

  const accentBg =
    accent === "coral"
      ? "hsl(var(--coral-light))"
      : accent === "grass"
        ? "hsl(var(--grass-light))"
        : "hsl(var(--sky-light))"

  return (
    <div
      className="rounded-xl overflow-hidden"
      style={{
        background: "hsl(var(--card))",
        border: "1px solid hsl(var(--border))",
      }}
    >
      <div
        className="px-5 py-3.5 border-b"
        style={{
          background: accentBg,
          borderColor: "hsl(var(--border))",
          borderLeft: `3px solid ${accentColor}`,
        }}
      >
        <h2 className="font-heading font-bold text-sm md:text-base text-foreground tracking-tight">
          {title}
        </h2>
      </div>
      <div className="px-5 py-5">{children}</div>
    </div>
  )
}
