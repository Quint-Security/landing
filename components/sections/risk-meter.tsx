"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const meters = [
  { tool: "read_file", score: 8, level: "lo", verdict: "ALLOW" },
  { tool: "list_directory", score: 5, level: "lo", verdict: "ALLOW" },
  { tool: "write_file", score: 35, level: "md", verdict: "ALLOW" },
  { tool: "write_file /etc/hosts", score: 61, level: "md", verdict: "FLAG" },
  { tool: "execute_command", score: 72, level: "hi", verdict: "FLAG" },
  { tool: "rm -rf /", score: 96, level: "hi", verdict: "DENY" },
]

const levelColors: Record<string, { bar: string; text: string; badge: string }> = {
  lo: { bar: "from-white/20 to-quint-green", text: "text-quint-green", badge: "bg-quint-green/10 text-quint-green border-quint-green/20" },
  md: { bar: "from-quint-amber/20 to-quint-amber", text: "text-quint-amber", badge: "bg-quint-amber/10 text-quint-amber border-quint-amber/20" },
  hi: { bar: "from-quint-red/20 to-quint-red", text: "text-quint-red", badge: "bg-quint-red/10 text-quint-red border-quint-red/20" },
}

function MeterBar({ score, level, delay }: { score: number; level: string; delay: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let timeout: NodeJS.Timeout
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          timeout = setTimeout(() => setVisible(true), delay)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => { observer.disconnect(); clearTimeout(timeout) }
  }, [delay])

  const colors = levelColors[level]
  return (
    <div ref={ref} className="flex-1 h-7 bg-quint-surface-2 rounded-md overflow-hidden border border-quint-line">
      <div
        className={`h-full rounded-md bg-gradient-to-r ${colors.bar} transition-all duration-[1500ms] ease-[cubic-bezier(0.16,1,0.3,1)]`}
        style={{ width: visible ? `${score}%` : "0%" }}
      />
    </div>
  )
}

export function RiskMeter() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 pt-16 pb-8" id="risk-demo">
      <SectionHeader title="Risk scoring in action" label="live demo" />
      <div className="space-y-4">
        {meters.map((m, i) => {
          const colors = levelColors[m.level]
          return (
            <ScrollReveal key={m.tool} delay={i * 0.08}>
              <div className="flex items-center gap-4 font-mono text-sm flex-wrap md:flex-nowrap">
                <span className="w-full md:w-[180px] md:text-right text-muted-foreground shrink-0 text-xs md:text-sm">
                  {m.tool}
                </span>
                <MeterBar score={m.score} level={m.level} delay={i * 200} />
                <span className={`w-[50px] text-sm shrink-0 ${colors.text}`}>
                  {m.score}
                </span>
                <Badge variant="outline" className={`w-[80px] justify-center text-xs shrink-0 ${colors.badge}`}>
                  {m.verdict}
                </Badge>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
