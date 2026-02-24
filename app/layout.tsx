import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Quint — Security for AI Agents",
  description: "The first RBAC and risk model for autonomous AI agents. Control what they do. Prove what they did.",
  openGraph: {
    title: "Quint Security",
    description: "RBAC, risk scoring, and cryptographic audit trails for AI agents.",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://api.fontshare.com/v2/css?f[]=switzer@1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
