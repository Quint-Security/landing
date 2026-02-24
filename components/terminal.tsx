"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface TerminalLine {
  type: "cmd" | "out" | "gap"
  content?: string
  delay?: number
}

interface TerminalProps {
  lines: TerminalLine[]
  title?: string
  animated?: boolean
  className?: string
}

export function Terminal({ lines, title = "quint — terminal", animated = false, className }: TerminalProps) {
  const [visibleCount, setVisibleCount] = useState(animated ? 0 : lines.length)
  const timeoutsRef = useRef<NodeJS.Timeout[]>([])

  useEffect(() => {
    if (!animated) return
    const timeouts: NodeJS.Timeout[] = []
    let totalDelay = 500

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      if (line.type === "gap") {
        totalDelay += 400
        continue
      }
      totalDelay += line.delay || 150
      const capturedI = i + 1
      const t = setTimeout(() => setVisibleCount(capturedI), totalDelay)
      timeouts.push(t)
    }

    timeoutsRef.current = timeouts
    return () => timeouts.forEach(clearTimeout)
  }, [animated, lines])

  const displayLines = lines.slice(0, visibleCount)

  return (
    <div className={cn(
      "rounded-xl border border-quint-dim bg-quint-surface overflow-hidden",
      "shadow-[0_40px_80px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.02)_inset]",
      className
    )}>
      {/* Chrome bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-quint-line bg-quint-dim">
        <div className="w-3 h-3 rounded-full bg-[#ff5f57] opacity-70" />
        <div className="w-3 h-3 rounded-full bg-[#febc2e] opacity-70" />
        <div className="w-3 h-3 rounded-full bg-[#28c840] opacity-70" />
        <span className="flex-1 text-center font-mono text-[0.68rem] text-muted-foreground tracking-wide mr-9">
          {title}
        </span>
      </div>
      {/* Body */}
      <div className="relative p-5 font-mono text-sm leading-relaxed text-muted-foreground">
        {displayLines.map((line, i) => {
          if (line.type === "gap") return null
          return (
            <div key={i} className="animate-in fade-in slide-in-from-bottom-1 duration-300">
              <span dangerouslySetInnerHTML={{ __html: line.content || "" }} />
            </div>
          )
        })}
        {animated && visibleCount >= lines.length && (
          <span className="inline-block w-2 h-4 bg-white align-text-bottom animate-[blink_1s_step-end_infinite]" />
        )}
        {/* Scan line */}
        <div className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent animate-[scanDown_4s_linear_infinite] pointer-events-none" />
      </div>
    </div>
  )
}
