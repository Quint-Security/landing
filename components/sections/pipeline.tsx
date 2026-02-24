"use client"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const stages = [
  { name: "Agent", desc: "Claude Code, Cursor, Cline, or any MCP client", active: false },
  { name: "Identity", desc: "Bearer token → agent lookup → scoped identity", active: true },
  { name: "Policy", desc: "Glob-match server + tool rules. First match wins.", active: true },
  { name: "Scope", desc: "Check agent scopes: read, write, execute, admin", active: true },
  { name: "Risk", desc: "Score 0–100. Flag at 60. Deny at 90. Configurable.", active: true },
  { name: "Approval", desc: "Flagged calls pause for human review. Signed decisions.", active: true },
  { name: "MCP Server", desc: "Filesystem, git, APIs — the actual tool execution", active: false },
]

export function Pipeline() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 pb-24">
      <SectionHeader title="The pipeline" label="hover to explore" />

      <ScrollReveal variant="scale-up">
        <TooltipProvider delayDuration={0}>
          <div className="flex items-center justify-center flex-wrap gap-2 md:gap-0 py-8">
            {stages.map((stage, i) => (
              <div key={stage.name} className="flex items-center">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <button
                      className={cn(
                        "px-4 py-3 font-mono text-xs border rounded-lg bg-quint-surface transition-all whitespace-nowrap",
                        "hover:border-white hover:text-white hover:bg-white/[0.05] hover:shadow-[0_0_20px_rgba(255,255,255,0.08)]",
                        stage.active
                          ? "border-white/20 text-white/80"
                          : "border-white/[0.08] text-muted-foreground"
                      )}
                    >
                      {stage.name}
                    </button>
                  </TooltipTrigger>
                  <TooltipContent side="top" className="bg-quint-surface-2 border-white/20 text-muted-foreground font-sans">
                    {stage.desc}
                  </TooltipContent>
                </Tooltip>
                {i < stages.length - 1 && (
                  <span className="text-muted-foreground mx-1 md:mx-2 text-sm hidden md:block">{"→"}</span>
                )}
              </div>
            ))}
          </div>
        </TooltipProvider>
      </ScrollReveal>
    </section>
  )
}
