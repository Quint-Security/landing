import { Card, CardContent } from "@/components/ui/card"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"

const testimonials = [
  {
    quote: "We had zero visibility into what our coding agents were doing. Quint gave us a full audit trail in under a minute. The RBAC scoping alone saved us from a production incident.",
    name: "Sarah Rodriguez",
    role: "Platform Lead, Series B Startup",
    initials: "SR",
  },
  {
    quote: "The approval flow is the killer feature. Our agents now can\u2019t touch production configs without a human sign-off. Cryptographically signed. That\u2019s what compliance teams want to hear.",
    name: "Marcus Kim",
    role: "Security Engineer, AI Infrastructure Co",
    initials: "MK",
  },
  {
    quote: "I was routing all my MCP calls through a custom logging proxy. Quint replaced 2,000 lines of my code with a single binary. The risk scoring caught things I didn\u2019t even think to check.",
    name: "James Thornton",
    role: "Independent Developer",
    initials: "JT",
  },
  {
    quote: "Local-first is the only approach that works for us. We can\u2019t send tool calls to a third-party cloud. Quint runs entirely on our machines. That\u2019s the whole point.",
    name: "Anika Liu",
    role: "VP Engineering, Defense Contractor",
    initials: "AL",
  },
]

export function Testimonials() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 pb-24">
      <SectionHeader title="Early feedback" label="beta users" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {testimonials.map((t, i) => (
          <ScrollReveal key={t.name} delay={i * 0.08}>
            <Card className="bg-quint-surface border-quint-line hover:border-quint-line-hover transition-colors">
              <CardContent className="pt-6">
                <blockquote className="font-sans text-base italic leading-relaxed text-foreground mb-6">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-quint-surface-2 border border-quint-line flex items-center justify-center font-mono text-xs text-foreground font-medium">
                    {t.initials}
                  </div>
                  <div className="text-sm">
                    <div className="font-semibold text-foreground">{t.name}</div>
                    <div className="text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
