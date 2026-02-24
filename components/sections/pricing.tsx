import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { SectionHeader } from "@/components/section-header"
import { ScrollReveal } from "@/components/scroll-reveal"
import { cn } from "@/lib/utils"

const tiers = [
  {
    name: "Developer",
    price: "Free",
    note: "forever, unlimited usage",
    features: [
      "Full local proxy & policy engine",
      "Agent identity & RBAC scopes",
      "Risk scoring with local heuristics",
      "Cryptographic audit trail",
      "Human approval flow",
      "Local web dashboard",
      "OAuth credential store",
    ],
    cta: { label: "Get Started", href: "#cta", variant: "outline" as const },
    highlight: false,
  },
  {
    name: "Team",
    price: "$49",
    priceSuffix: "/seat/mo",
    note: "billed monthly",
    features: [
      "Everything in Developer",
      "Cloud dashboard & centralized policy",
      "Audit aggregation across machines",
      "AI-powered risk scoring (dedicated model)",
      "Push notification approvals",
      "Team RBAC & SSO",
      "Priority support",
    ],
    cta: { label: "Join Waitlist", href: "#waitlist", variant: "default" as const },
    highlight: true,
  },
]

export function Pricing() {
  return (
    <section className="max-w-[1000px] mx-auto px-6 md:px-12 py-16 pb-32" id="pricing">
      <SectionHeader title="Pricing" label="2 tiers" />

      <ScrollReveal variant="scale-up">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className={cn(
                "bg-quint-surface border-white/[0.04]",
                tier.highlight && "border-white/20"
              )}
            >
              <CardHeader>
                <div className={cn(
                  "font-mono text-xs tracking-[0.15em] uppercase mb-4",
                  tier.highlight ? "text-white" : "text-muted-foreground"
                )}>
                  {tier.name}
                </div>
                <CardTitle className="text-5xl font-light">
                  {tier.price}
                  {tier.priceSuffix && (
                    <span className="text-base text-muted-foreground ml-1">{tier.priceSuffix}</span>
                  )}
                </CardTitle>
                <p className="text-sm text-muted-foreground">{tier.note}</p>
              </CardHeader>

              <CardContent>
                <ul className="space-y-0">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-3 text-sm text-muted-foreground py-2.5 border-b border-white/[0.03] last:border-none"
                    >
                      <span className={cn(
                        "w-1.5 h-1.5 rounded-full shrink-0",
                        tier.highlight ? "bg-white" : "bg-white/20"
                      )} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button variant={tier.cta.variant} className="w-full py-5 text-sm font-semibold rounded-xl" asChild>
                  <a href={tier.cta.href}>{tier.cta.label}</a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
