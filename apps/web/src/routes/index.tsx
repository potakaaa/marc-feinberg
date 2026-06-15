import { createFileRoute } from "@tanstack/react-router"
import { IconArrowRight, IconCross, IconTargetArrow, IconTrendingUp } from "@tabler/icons-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Spotlight } from "@workspace/ui/components/spotlight-new"

import { site } from "../content"
import { seoHead } from "../seo"
import {
  BlogGrid,
  BookGrid,
  CtaButton,
  Divider,
  FinalCta,
  PageHero,
  Section,
  ServiceCards,
  SiteShell,
  TestimonialGrid,
  TrustBar,
  WhyCards,
} from "../site-components"

export const Route = createFileRoute("/")({
  head: () =>
    seoHead({
      title: "Marc Feinberg | Christian High-Performance Coach",
      description:
        "Marc Feinberg is a Christian high-performance coach, author, speaker, and advisor helping athletes, entrepreneurs, and leaders achieve purpose-driven results.",
      path: "/",
    }),
  component: App,
})

function App() {
  return (
    <SiteShell>
      <section className="relative overflow-hidden bg-charcoal px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8">
        <Spotlight duration={10} xOffset={48} />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <Badge className="bg-white/10 text-primary ring-1 ring-white/10" variant="outline">
              Faith-driven performance coaching
            </Badge>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
              Marc Feinberg: High-Performance Coaching for Purpose-Driven Leaders
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/75">
              Marc Feinberg helps professional athletes, entrepreneurs, and world-class leaders break through performance ceilings with faith, focus, accountability, and practical execution.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton />
              <Button asChild className="h-11 rounded-full border-primary/35 bg-white/5 px-5 text-white hover:bg-primary hover:text-primary-foreground" variant="outline">
                <a href="#services">
                  Explore Services
                  <IconArrowRight data-icon="inline-end" />
                </a>
              </Button>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                ["30+", "years as a lifestyle entrepreneur"],
                ["20+", "years as a certified biblical counselor"],
                ["Elite", "athletes, founders, and leaders advised"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                  <p className="text-2xl font-semibold text-primary">{value}</p>
                  <p className="mt-1 text-sm leading-6 text-white/65">{label}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-primary/10 blur-3xl" />
            <img
              className="relative aspect-[4/5] w-full rounded-3xl border border-white/10 object-cover shadow-2xl shadow-black/30"
              src={`${site.assets}/marc-portrait.jpeg`}
              alt="Marc Feinberg in a suit standing by a car"
              width={1024}
              height={1280}
              fetchPriority="high"
            />
          </div>
        </div>
      </section>
      <TrustBar />
      <Section
        eyebrow="The gap"
        title="Successful does not always mean unstuck."
        intro="Many high achievers have the ambition, résumé, and responsibility, but still need clearer direction, stronger accountability, and a faith-aligned framework for the next level."
      >
        <div className="grid gap-5 md:grid-cols-3">
          {[
            ["You are carrying more than people see.", "Pressure, leadership, family, and performance expectations can quietly drain focus and conviction.", IconTargetArrow],
            ["You need structure, not hype.", "Marc helps clients turn ideas and beliefs into weekly action, decision discipline, and measurable progress.", IconTrendingUp],
            ["Your next level needs alignment.", "Faith, purpose, forgiveness, leadership, and execution work together when the inner life is clear.", IconCross],
          ].map(([title, copy, Icon]) => (
            <div key={title as string} className="rounded-2xl border border-border bg-card p-6 shadow-sm shadow-black/5">
              <Icon className="size-8 text-primary" />
              <h3 className="mt-5 text-xl font-semibold">{title as string}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{copy as string}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section
        dark
        eyebrow="Why work with Marc"
        title="Credibility built through real relationships and real results."
        intro="Marc brings a direct, faith-grounded coaching approach to leaders who want to execute at the highest level and build a legacy that lasts."
      >
        <WhyCards />
      </Section>
      <Section
        id="services"
        className="bg-warm"
        eyebrow="Services"
        title="Coaching, speaking, and mastermind experiences built for execution."
        intro="Start with the clearest path: accountability and performance coaching. From there, Marc can support faith-aligned leadership, masterminds, and speaking engagements."
      >
        <ServiceCards limit={4} variant="showcase" />
      </Section>
      <Divider />
      <Section eyebrow="Social proof" title="Trusted by champions, entrepreneurs, pastors, and purpose-driven leaders." intro="Video testimonials and credibility markers help visitors quickly understand the level of people who trust Marc’s guidance.">
        <TestimonialGrid limit={6} />
      </Section>
      <PageHero
        eyebrow="Who is Marc Feinberg?"
        title="Guiding champions to purpose, power, and peak performance."
        intro="Marc is a high-performance coach, certified biblical counselor, author, keynote speaker, mastermind facilitator, sales trainer, and personal advisor to high-achieving athletes and entrepreneurs."
        image={`${site.assets}/evander-holyfield-2.jpg`}
        alt="Marc Feinberg with Evander Holyfield"
        headingLevel="h2"
      />
      <Section eyebrow="Books" title="Wisdom you can apply beyond the call." intro="Marc’s books extend his coaching principles into faith, family, money, leadership, freedom, and personal growth.">
        <BookGrid limit={3} />
      </Section>
      <Section className="bg-warm" eyebrow="Insights" title="Faith, performance, leadership, and purpose." intro="Static blog content supports authority, SEO, and thoughtful next steps for visitors who are still exploring.">
        <BlogGrid limit={3} />
      </Section>
      <FinalCta />
    </SiteShell>
  )
}
