"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const withoutQuint = [
  { text: '{"jsonrpc":"2.0","method":"tools/call",', cls: "text-foreground/70" },
  { text: ' "params":{"name":"write_file",', cls: "text-foreground/70" },
  { text: '  "arguments":{"path":"/etc/hosts",', cls: "text-foreground/70" },
  { text: '   "content":"127.0.0.1 evil.com"}}}', cls: "text-foreground/70" },
  { text: "", cls: "" },
  { text: "// No visibility. No control.", cls: "text-quint-red" },
  { text: "// Did it execute? Who knows.", cls: "text-quint-red" },
  { text: "// No audit trail. No proof.", cls: "text-quint-red" },
]

const withQuintLines = [
  { text: "✓ intercepted  write_file /etc/hosts", cls: "text-quint-green" },
  { text: "  agent:     deploy-bot (tools:execute)", cls: "text-muted-foreground" },
  { text: "  policy:    allowed by server rule", cls: "text-quint-green" },
  { text: "  scope:     tools:execute ✓", cls: "text-quint-green" },
  { text: "  risk:      61 (HIGH) — flagged", cls: "text-quint-amber" },
  { text: "⚠ approval required  id: 89bf0394", cls: "text-quint-amber" },
  { text: "  signed:    ed25519:a4f2c8...3b91", cls: "text-muted-foreground" },
  { text: "  chain:     sha256:prev_hash ✓", cls: "text-muted-foreground" },
]

function CodePanel({
  title,
  lines,
  variant,
}: {
  title: string
  lines: { text: string; cls: string }[]
  variant: "before" | "after"
}) {
  return (
    <div
      className={`rounded-xl border overflow-hidden bg-quint-surface flex flex-col ${
        variant === "before" ? "border-quint-red/20" : "border-quint-line-hover"
      }`}
    >
      <div
        className={`px-4 py-3 border-b border-quint-line font-mono text-xs tracking-widest uppercase ${
          variant === "before"
            ? "text-quint-red bg-quint-red/[0.04]"
            : "text-foreground bg-quint-dim"
        }`}
      >
        {title}
      </div>
      <pre className="p-5 font-mono text-xs leading-[1.9] overflow-x-auto whitespace-pre flex-1">
        {lines.map((line, i) => (
          <div key={i} className={line.cls || "text-foreground/70"}>
            {line.text || "\u00A0"}
          </div>
        ))}
      </pre>
    </div>
  )
}

export function BeforeAfter() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-8 pb-24">
      <SectionHeader title="Before & after" label="visibility" />

      {/* Desktop: side by side, equal height */}
      <ScrollReveal variant="scale-up">
        <div className="hidden md:grid grid-cols-2 gap-4 items-stretch">
          <CodePanel title="Without Quint" lines={withoutQuint} variant="before" />
          <CodePanel title="With Quint" lines={withQuintLines} variant="after" />
        </div>
      </ScrollReveal>

      {/* Mobile: tabs */}
      <div className="md:hidden">
        <ScrollReveal variant="scale-up">
          <Tabs defaultValue="after">
            <TabsList className="w-full">
              <TabsTrigger value="before" className="flex-1 font-mono text-xs">Without Quint</TabsTrigger>
              <TabsTrigger value="after" className="flex-1 font-mono text-xs">With Quint</TabsTrigger>
            </TabsList>
            <TabsContent value="before">
              <CodePanel title="Without Quint" lines={withoutQuint} variant="before" />
            </TabsContent>
            <TabsContent value="after">
              <CodePanel title="With Quint" lines={withQuintLines} variant="after" />
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
