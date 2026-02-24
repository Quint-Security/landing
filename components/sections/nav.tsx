"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const links = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "GitHub", href: "https://github.com/Quint-Security", external: true },
]

export function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-background/75 border-b border-quint-line">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-[60px]">
        <Link href="/" className="font-mono text-sm font-medium tracking-[0.15em] uppercase text-foreground">
          <span className="font-bold">Q</span>UINT
        </Link>

        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="hidden md:block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
          <Button variant="outline" size="sm" asChild>
            <a href="#cta" className="font-mono text-xs tracking-wide">
              Get Started
            </a>
          </Button>
        </div>
      </div>
    </nav>
  )
}
