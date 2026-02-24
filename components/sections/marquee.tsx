const items = [
  "Claude Code", "Cursor", "Cline", "OpenClaw", "Any MCP Agent",
  "Ed25519 Signatures", "Hash-Chained Audit", "Zero Cloud Dependency",
]

export function Marquee() {
  const repeated = [...items, ...items]

  return (
    <div className="border-y border-quint-line py-5 overflow-hidden hidden md:block">
      <div className="inline-flex animate-[marquee_30s_linear_infinite] whitespace-nowrap">
        {repeated.map((item, i) => (
          <span key={i} className="font-mono text-xs tracking-[0.15em] uppercase text-muted-foreground">
            <span className="mx-6">{item}</span>
            {i < repeated.length - 1 && (
              <span className="text-foreground">•</span>
            )}
          </span>
        ))}
      </div>
    </div>
  )
}
