import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const capabilities = [
  { num: "01", label: "Policy", title: "Deterministic policy enforcement", desc: "Allow/deny rules per server, per tool, with glob matching. First-match wins. No match means deny. No ambiguity, no exceptions." },
  { num: "02", label: "Identity", title: "Agent identity and RBAC scopes", desc: "Every agent gets its own API key and scoped permissions. Reader, writer, admin, executor. Enforce least-privilege on every single tool call." },
  { num: "03", label: "Risk", title: "Real-time risk scoring", desc: "Every call scored 0\u2013100, weighted on action type, target sensitivity, and behavioral anomaly. Configurable thresholds for flag and deny." },
  { num: "04", label: "Audit", title: "Cryptographic audit chain", desc: "Ed25519 signatures on every entry. SHA-256 hash chain links them together. Tamper-evident by construction. Export the log \u2014 anyone can verify independently." },
  { num: "05", label: "Approval", title: "Human-in-the-loop approvals", desc: "High-risk calls pause and wait for human review. Approve or deny from the dashboard or CLI. Decisions are cryptographically signed into the audit trail." },
  { num: "06", label: "Local", title: "Everything stays on your machine", desc: "Single Go binary. No cloud. No account. No telemetry. The agent doesn\u2019t even know Quint is there. Your data is yours." },
]

export function Capabilities() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 pb-32 relative overflow-visible" id="capabilities">
      {/* Aurora glow */}
      <div className="absolute -top-[200px] -left-[200px] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(0,100,200,0.03)_40%,transparent_70%)] rounded-full blur-[80px] animate-[aurora_25s_ease-in-out_infinite] pointer-events-none z-0" />

      <div className="relative z-10">
        <SectionHeader title="Capabilities" label="01 / 06" />

        <div className="space-y-0">
          {capabilities.map((cap, i) => (
            <ScrollReveal key={cap.num} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-2 md:gap-8 py-10 border-b border-quint-line last:border-none">
                <div className="font-mono text-xs text-foreground tracking-[0.12em] uppercase pt-1">
                  {cap.num} — {cap.label}
                </div>
                <div>
                  <h3 className="font-sans text-xl font-light mb-3 leading-snug">{cap.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[520px]">{cap.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
