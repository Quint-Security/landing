"use client"

import { useEffect, useRef, useState } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"

const stats = [
  { value: 5, label: "Enforcement stages" },
  { value: 100, label: "Risk score range" },
  { value: 0, suffix: "ms", label: "Cloud dependency" },
  { value: 1, label: "Binary to install" },
]

function CountUp({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const start = performance.now()
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.round(target * eased))
            if (progress < 1) requestAnimationFrame(animate)
          }
          requestAnimationFrame(animate)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <div ref={ref} className="font-sans text-5xl font-light italic text-foreground leading-none mb-2">
      {count}{suffix}
    </div>
  )
}

export function Stats() {
  return (
    <div className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 border-y border-quint-line">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * 0.1}>
            <div className="text-center">
              <CountUp target={stat.value} suffix={stat.suffix} />
              <div className="font-mono text-[0.68rem] tracking-[0.15em] uppercase text-muted-foreground">
                {stat.label}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </div>
  )
}
