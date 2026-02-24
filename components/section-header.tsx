import { ScrollReveal } from "@/components/scroll-reveal"
import { Separator } from "@/components/ui/separator"

interface SectionHeaderProps {
  title: string
  label: string
}

export function SectionHeader({ title, label }: SectionHeaderProps) {
  return (
    <ScrollReveal variant="fade-blur">
      <div className="flex items-baseline gap-8 mb-6">
        <h2 className="font-sans text-[clamp(2rem,3vw,3rem)] font-light tracking-tight">
          {title}
        </h2>
        <span className="font-mono text-xs text-muted-foreground tracking-widest">
          {label}
        </span>
      </div>
      <Separator className="mb-10 bg-quint-line" />
    </ScrollReveal>
  )
}
