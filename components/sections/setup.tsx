import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const steps = [
  { num: "1", title: "Install", code: "brew install quint", desc: "Single binary. No runtime. No dependencies. Cross-platform." },
  { num: "2", title: "Init", code: "quint init", desc: "Detects your AI tools. Generates Ed25519 keypair. Wraps your MCP servers automatically." },
  { num: "3", title: "Done", code: "quint dashboard", desc: "Every tool call is now intercepted, policy-checked, risk-scored, signed, and logged." },
]

export function Setup() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 pb-32" id="how">
      <SectionHeader title="Setup" label="3 steps" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * 0.1}>
            <div>
              <div className="font-sans text-6xl font-light italic text-white/20 leading-none mb-4">
                {step.num}
              </div>
              <h3 className="font-sans text-xl font-light mb-3">{step.title}</h3>
              <code className="font-mono text-xs text-white bg-white/[0.05] border border-white/10 px-2.5 py-1 rounded-md inline-block mb-3">
                {step.code}
              </code>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
