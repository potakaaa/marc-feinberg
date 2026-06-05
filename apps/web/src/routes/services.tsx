import { createFileRoute } from "@tanstack/react-router"

import { site } from "../content"
import { FinalCta, PageHero, Section, ServiceCards, SiteShell, WhyCards } from "../site-components"

export const Route = createFileRoute("/services")({ component: ServicesPage })

function ServicesPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Services"
        title="Coaching, Speaking, and Mastermind Experiences Built for Leaders Who Are Ready to Execute"
        intro="Marc combines performance strategy, biblical wisdom, and direct accountability for athletes, entrepreneurs, executives, teams, and faith-driven leaders."
        image={`${site.assets}/mastermind.gif`}
        alt="Marc Feinberg mastermind facilitation session"
      />
      <Section eyebrow="Work with Marc" title="Choose the path that fits your next breakthrough.">
        <ServiceCards />
      </Section>
      <Section className="bg-warm" eyebrow="Who it is for" title="Built for serious leaders, not casual interest.">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {["Professional athletes", "Entrepreneurs", "Executives", "Faith-driven leaders", "Teams and organizations"].map((item) => (
            <div key={item} className="rounded-2xl border border-border bg-card p-5 text-center text-sm font-semibold shadow-sm shadow-black/5">
              {item}
            </div>
          ))}
        </div>
      </Section>
      <Section dark eyebrow="Expected outcomes" title="Clarity, accountability, focus, and purpose-aligned growth.">
        <WhyCards />
      </Section>
      <FinalCta title="Ready for a focused coaching conversation?" intro="The first step is a free call to clarify where you are, where you want to go, and what may be blocking your next level." />
    </SiteShell>
  )
}
