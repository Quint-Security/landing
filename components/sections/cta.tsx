"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Terminal } from "@/components/terminal"
import { ScrollReveal } from "@/components/scroll-reveal"

const ctaTerminalLines = [
  { type: "cmd" as const, content: '<span class="text-quint-green">$</span> <span class="text-white">brew install quint-security/tap/quint</span>' },
  { type: "cmd" as const, content: '<span class="text-quint-green">$</span> <span class="text-white">quint init</span>' },
  { type: "out" as const, content: '<span class="text-quint-green">\u2713</span> Quint is protecting your agents.' },
]

export function CTA() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="text-center px-6 md:px-12 pt-24 pb-16 relative" id="cta">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[radial-gradient(ellipse,rgba(255,255,255,0.03),transparent_70%)] pointer-events-none" />

        <ScrollReveal variant="fade-blur">
          <h2 className="font-sans text-[clamp(2.5rem,5vw,4.5rem)] font-light tracking-tight mb-6 relative">
            Secure your agents.<br />
            <em className="italic bg-gradient-to-r from-white via-quint-green to-white bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite]">
              Today.
            </em>
          </h2>
        </ScrollReveal>

        <p className="text-muted-foreground text-base max-w-[400px] mx-auto mb-10 relative">
          One command. Zero config. Data never leaves your machine.
        </p>

        <div className="max-w-[460px] mx-auto">
          <Terminal lines={ctaTerminalLines} />
        </div>
      </section>

      <section className="max-w-[440px] mx-auto px-6 pb-24" id="waitlist">
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="email"
              placeholder="you@company.com"
              required
              className="flex-1 h-12 rounded-xl bg-quint-surface border-white/[0.08] text-white placeholder:text-muted-foreground focus-visible:border-white focus-visible:ring-white/20"
            />
            <Button type="submit" className="h-12 px-6 rounded-xl font-semibold whitespace-nowrap">
              Join waitlist
            </Button>
          </form>
        ) : (
          <p className="text-center text-white text-sm font-medium">
            <span className="text-quint-green">{"\u2713"}</span> You&apos;re on the list.
          </p>
        )}
      </section>
    </>
  )
}
