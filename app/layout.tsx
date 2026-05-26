import type React from "react"
import type { Metadata } from "next"
import { Sora, Plus_Jakarta_Sans, DM_Mono } from "next/font/google"
import "./globals.css"

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sora",
})

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-plus-jakarta",
})

const dmMono = DM_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-mono",
})

export const metadata: Metadata = {
  title: "British Best Betting Sites Top UK Bookmakers 2026",
  description:
    "Find the UK's best betting sites ranked by independent experts. UKGC-licensed bookmakers reviewed for odds, bonuses, safety, and payouts. britishbestbettingsites.com — unbiased, transparent, updated monthly.",
  keywords: "best betting sites UK, UK bookmakers, UKGC licensed, sports betting, free bets, betting offers 2026",
  robots: "index, follow",
  referrer: "strict-origin-when-cross-origin",
  authors: [{ name: "British Best Betting Sites Editorial Team" }],
  openGraph: {
    title: "British Best Betting Sites Top UK Bookmakers 2026",
    description:
      "Independent expert rankings of the best UK betting sites. UKGC-licensed only. Updated monthly.",
    url: "https://britishbestbettingsites.com",
    siteName: "British Best Betting Sites",
    locale: "en_GB",
    type: "website",
  },
  other: {
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
    "X-XSS-Protection": "1; mode=block",
  },
}

export const viewport = {
  themeColor: "#f0f5fa",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${plusJakarta.variable} ${dmMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <div className="min-h-screen w-full">
          {children}
        </div>
      </body>
    </html>
  )
}
