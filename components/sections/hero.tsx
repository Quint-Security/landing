"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/terminal"

const heroWords: { text: string; em: boolean }[] = [
  { text: "Security", em: false },
  { text: "for", em: false },
  { text: "\n", em: false },
  { text: "AI", em: true },
  { text: "agents", em: true },
]

const terminalLines = [
  { type: "cmd" as const, content: '<span class="text-quint-green">$</span> <span class="text-white">brew install quint-security/tap/quint</span>' },
  { type: "cmd" as const, content: '<span class="text-quint-green">$</span> <span class="text-white">quint init</span>', delay: 700 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> Detected Claude Code with 3 MCP servers', delay: 400 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> Generated Ed25519 signing keypair', delay: 250 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> Created policy (role: balanced)', delay: 250 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> Wrapped 3 servers — Quint is active', delay: 250 },
  { type: "gap" as const },
  { type: "cmd" as const, content: '<span class="text-quint-green">$</span> <span class="text-white">quint status</span>', delay: 900 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> <span class="text-white">read_file</span> <span class="text-muted-foreground">→ allowed</span> <span class="text-xs px-2 py-0.5 rounded bg-white/10 text-quint-green">risk 8</span>', delay: 350 },
  { type: "out" as const, content: '<span class="text-quint-green">✓</span> <span class="text-white">list_directory</span> <span class="text-muted-foreground">→ allowed</span> <span class="text-xs px-2 py-0.5 rounded bg-white/10 text-quint-green">risk 5</span>', delay: 200 },
  { type: "out" as const, content: '<span class="text-quint-red">✗</span> <span class="text-white">execute_command</span> <span class="text-muted-foreground">→ scope denied</span> <span class="text-xs px-2 py-0.5 rounded bg-quint-red/10 text-quint-red">risk 72</span>', delay: 200 },
  { type: "out" as const, content: '<span class="text-quint-amber">⚠</span> <span class="text-white">write_file /etc/hosts</span> <span class="text-muted-foreground">→ approval pending</span> <span class="text-xs px-2 py-0.5 rounded bg-quint-amber/10 text-quint-amber">risk 61</span>', delay: 200 },
]

export function Hero() {
  let wordIndex = 0

  return (
    <section className="min-h-screen grid grid-cols-1 lg:grid-cols-2 max-w-[1400px] mx-auto px-6 md:px-12 items-center gap-10 lg:gap-16 pt-24 lg:pt-0 relative">
      {/* Subtle glow */}
      <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.04),transparent_70%)] animate-[drift_20s_ease-in-out_infinite] pointer-events-none" />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Badge variant="outline" className="mb-8 font-mono text-xs tracking-widest uppercase border-quint-line-hover text-muted-foreground">
            Public Beta
          </Badge>
        </motion.div>

        <h1 className="text-[clamp(3rem,5.5vw,5.5rem)] font-light leading-[1.08] tracking-tight mb-8" style={{ perspective: "600px" }}>
          {heroWords.map((word, i) => {
            if (word.text === "\n") return <br key={i} />
            const idx = wordIndex++
            return (
              <motion.span
                key={i}
                className="inline-block mr-[0.25em]"
                initial={{ opacity: 0, y: "100%", rotateX: -80 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 + idx * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                style={{ transformOrigin: "bottom center" }}
              >
                {word.em ? (
                  <em className="italic bg-gradient-to-r from-white via-quint-green to-quint-blue bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_4s_linear_infinite]">
                    {word.text}
                  </em>
                ) : (
                  word.text
                )}
              </motion.span>
            )
          })}
        </h1>

        <motion.p
          className="text-base text-muted-foreground max-w-[420px] leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.25 }}
        >
          RBAC, risk scoring, and tamper-proof audit trails for autonomous agents.
          Every tool call intercepted, every action signed. Your data never leaves your machine.
        </motion.p>

        <motion.div
          className="flex gap-4 flex-wrap"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Button size="lg" className="text-base font-semibold px-8 py-6 rounded-xl" asChild>
            <a href="#cta">Get Started</a>
          </Button>
          <Button variant="outline" size="lg" className="text-base px-8 py-6 rounded-xl" asChild>
            <a href="https://github.com/Quint-Security/proxy" target="_blank" rel="noopener noreferrer">
              View Source
            </a>
          </Button>
        </motion.div>
      </div>

      <motion.div
        className="relative z-10 lg:order-none order-first"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Terminal lines={terminalLines} animated className="rotate-[0.5deg]" />
      </motion.div>
    </section>
  )
}
