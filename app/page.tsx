import { Nav } from "@/components/sections/nav"
import { Hero } from "@/components/sections/hero"
import { Marquee } from "@/components/sections/marquee"
import { Stats } from "@/components/sections/stats"
import { RiskMeter } from "@/components/sections/risk-meter"
import { BeforeAfter } from "@/components/sections/before-after"
import { Capabilities } from "@/components/sections/capabilities"
import { Pipeline } from "@/components/sections/pipeline"
import { Testimonials } from "@/components/sections/testimonials"
import { Setup } from "@/components/sections/setup"
import { Pricing } from "@/components/sections/pricing"
import { CTA } from "@/components/sections/cta"
import { Footer } from "@/components/sections/footer"

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Marquee />
      <Stats />
      <RiskMeter />
      <BeforeAfter />
      <Capabilities />
      <Pipeline />
      <Testimonials />
      <Setup />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  )
}
