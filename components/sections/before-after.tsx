"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const withoutQuint = [
  { text: '{"jsonrpc":"2.0","method":"tools/call",', cls: "text-white/70" },
  { text: ' "params":{"name":"write_file",', cls: "text-white/70" },
  { text: '  "arguments":{"path":"/etc/hosts",', cls: "text-white/70" },
  { text: '   "content":"127.0.0.1 evil.com"}}}', cls: "text-white/70" },
  { text: "", cls: "" },
  { text: "// No visibility. No control.", cls: "text-quint-red" },
  { text: "// Did it execute? Who knows.", cls: "text-quint-red" },
  { text: "// No audit trail. No proof.", cls: "text-quint-red" },
]

const withQuintLines = [
  { text: "\u2713 intercepted  write_file /etc/hosts", cls: "text-quint-green" },
  { text: "  agent:     deploy-bot (tools:execute)", cls: "text-muted-foreground" },
  { text: "  policy:    allowed by server rule", cls: "text-quint-green" },
  { text: "  scope:     tools:execute \u2713", cls: "text-quint-green" },
  { text: "  risk:      61 (HIGH) \u2014 flagged", cls: "text-quint-amber" },
  { text: "\u26A0 approval required  id: 89bf0394", cls: "text-quint-amber" },
  { text: "  signed:    ed25519:a4f2c8...3b91", cls: "text-muted-foreground" },
  { text: "  chain:     sha256:prev_hash \u2713", cls: "text-muted-foreground" },
]

function CodeBlock({ lines }: { lines: { text: string; cls: string }[] }) {
  return (
    <pre className="p-5 font-mono text-xs leading-[1.9] overflow-x-auto whitespace-pre-wrap">
      {lines.map((line, i) => (
        <div key={i} className={line.cls || "text-white/70"}>
          {line.text || "\u00A0"}
        </div>
      ))}
    </pre>
  )
}

export function BeforeAfter() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-8 pb-24">
      <SectionHeader title="Before & after" label="visibility" />

      {/* Desktop: side by side */}
      <div className="hidden md:grid grid-cols-2 gap-4">
        <ScrollReveal variant="scale-up">
          <Card className="border-quint-red/20 bg-quint-surface">
            <CardHeader className="border-b border-white/[0.04] bg-quint-red/[0.04]">
              <CardTitle className="font-mono text-xs tracking-widest uppercase text-quint-red font-normal">
                Without Quint
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CodeBlock lines={withoutQuint} />
            </CardContent>
          </Card>
        </ScrollReveal>

        <ScrollReveal variant="scale-up" delay={0.1}>
          <Card className="border-white/10 bg-quint-surface">
            <CardHeader className="border-b border-white/[0.04] bg-white/[0.04]">
              <CardTitle className="font-mono text-xs tracking-widest uppercase text-white font-normal">
                With Quint
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CodeBlock lines={withQuintLines} />
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      {/* Mobile: tabs */}
      <div className="md:hidden">
        <ScrollReveal variant="scale-up">
          <Tabs defaultValue="after">
            <TabsList className="w-full">
              <TabsTrigger value="before" className="flex-1 font-mono text-xs">Without Quint</TabsTrigger>
              <TabsTrigger value="after" className="flex-1 font-mono text-xs">With Quint</TabsTrigger>
            </TabsList>
            <TabsContent value="before">
              <Card className="border-quint-red/20 bg-quint-surface">
                <CardContent className="p-0">
                  <CodeBlock lines={withoutQuint} />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="after">
              <Card className="border-white/10 bg-quint-surface">
                <CardContent className="p-0">
                  <CodeBlock lines={withQuintLines} />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </ScrollReveal>
      </div>
    </section>
  )
}
