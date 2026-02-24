import { Separator } from "@/components/ui/separator"

export function Footer() {
  return (
    <footer className="max-w-[1400px] mx-auto">
      <Separator className="bg-quint-line" />
      <div className="px-6 md:px-12 py-6 flex flex-col md:flex-row justify-between items-center gap-4 font-mono text-xs text-muted-foreground tracking-wide">
        <span>&copy; 2026 Quint Security</span>
        <div className="flex gap-8">
          <a href="https://github.com/Quint-Security" target="_blank" rel="noopener noreferrer" className="hover:text-foreground/60 transition-colors">
            GitHub
          </a>
          <a href="mailto:hello@quint.security" className="hover:text-foreground/60 transition-colors">
            Contact
          </a>
        </div>
      </div>
    </footer>
  )
}
