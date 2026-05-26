"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    try {
      if (typeof window !== "undefined" && window.localStorage) {
        const consent = localStorage.getItem("cookieConsent_bbbs")
        if (!consent) setIsVisible(true)
      }
    } catch {
      setIsVisible(true)
    }
  }, [])

  const handleChoice = (choice: "accepted" | "declined") => {
    try {
      localStorage.setItem("cookieConsent_bbbs", choice)
      localStorage.setItem("cookieConsentDate_bbbs", new Date().toISOString())
    } catch {
      // silent
    }
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-50"
      role="dialog"
      aria-modal="true"
      aria-label="Cookie preferences"
    >
      <div
        className="w-full"
        style={{
          background: "hsl(var(--card))",
          borderTop: "1px solid hsl(var(--border))",
          boxShadow: "0 -4px 24px hsl(215 35% 14% / 0.08)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-sm leading-relaxed flex-1" style={{ color: "hsl(var(--slate-mid))" }}>
              We use cookies to improve your experience and track affiliate referrals to licensed bookmakers. Read our{" "}
              <Link
                href="/cookie-policy"
                className="underline underline-offset-2 transition-colors"
                style={{ color: "hsl(var(--sky))" }}
              >
                Cookie Policy
              </Link>
              .
            </p>

            <div className="flex items-center gap-2 flex-shrink-0">
              <button
                onClick={() => handleChoice("declined")}
                className="py-2 px-5 rounded-lg font-mono text-xs font-bold uppercase tracking-widest transition-all"
                style={{
                  background: "hsl(var(--secondary))",
                  color: "hsl(var(--slate-mid))",
                  border: "1px solid hsl(var(--border))",
                }}
              >
                Decline
              </button>
              <button
                onClick={() => handleChoice("accepted")}
                className="py-2 px-5 rounded-lg font-mono text-xs font-bold uppercase tracking-widest transition-all"
                style={{
                  background: "hsl(var(--sky))",
                  color: "hsl(var(--white))",
                }}
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
