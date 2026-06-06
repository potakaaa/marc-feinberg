import { createFileRoute } from "@tanstack/react-router"
import { IconCheck } from "@tabler/icons-react"

import { site } from "../content"
import { seoHead } from "../seo"
import { CtaButton, FinalCta, PageHero, Section, SiteShell } from "../site-components"

export const Route = createFileRoute("/about")({
  head: () =>
    seoHead({
      title: "About Marc Feinberg | Coach, Author & Speaker",
      description:
        "Meet Marc Feinberg, a Christian high-performance coach, author, speaker, personal advisor, mastermind facilitator, and certified biblical counselor.",
      path: "/about",
    }),
  component: AboutPage,
})

function AboutPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="About Marc"
        title="Meet Marc Feinberg"
        intro="Performance expert, personal advisor, author, speaker, mastermind facilitator, and certified biblical counselor helping leaders unlock purpose, power, and peak performance."
        image={`${site.assets}/marc-portrait.jpeg`}
        alt="Marc Feinberg portrait"
      />
      <Section eyebrow="Mission" title="Building bridges for leaders ready to live and lead with purpose.">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5">
            <img className="w-full rounded-xl border border-border bg-white p-3" src={`${site.assets}/therapytribe-badge.png`} alt="Featured therapist TherapyTribe badge" loading="lazy" />
            <div className="mt-6 grid gap-3">
              {["Lifestyle entrepreneur for over 30 years", "Certified biblical counselor for over 20 years", "High-performance coach and personal advisor", "Author, keynote speaker, and mastermind facilitator"].map((item) => (
                <p key={item} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                  <IconCheck className="mt-0.5 size-4 shrink-0 text-primary" />
                  {item}
                </p>
              ))}
            </div>
          </div>
          <div className="text-base leading-8 text-muted-foreground">
            <p>
              Marc wakes up every day on a mission to stand in the gap and move clients into their highest purpose and possibility. His coaching is direct, personal, faith-grounded, and practical.
            </p>
            <p className="mt-5">
              He works with high-achieving athletes, entrepreneurs, executives, and leaders who have already experienced success but know there is another level of clarity, discipline, leadership, and legacy available.
            </p>
            <p className="mt-5">
              Marc’s approach integrates biblical principles, performance strategy, forgiveness, accountability, and focused execution so clients can release what holds them back and act with greater conviction.
            </p>
            <div className="mt-8">
              <CtaButton />
            </div>
          </div>
        </div>
      </Section>
      <Section dark eyebrow="Coaching philosophy" title="Faith, focus, forgiveness, and execution.">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Faith", "Wisdom and alignment come before sustainable performance."],
            ["Focus", "Clear priorities reduce noise and sharpen decisions."],
            ["Forgiveness", "Freedom starts when leaders release what keeps them stuck."],
            ["Execution", "Accountability turns conviction into measurable movement."],
          ].map(([title, copy]) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <h3 className="text-xl font-semibold text-primary">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/70">{copy}</p>
            </div>
          ))}
        </div>
      </Section>
      <FinalCta />
    </SiteShell>
  )
}
