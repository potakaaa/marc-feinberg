import { createFileRoute } from "@tanstack/react-router"

import { BlogGrid, FinalCta, PageHero, Section, SiteShell } from "../site-components"

export const Route = createFileRoute("/blog")({ component: BlogPage })

function BlogPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Blog"
        title="Insights on Faith, Performance, Leadership, and Purpose"
        intro="Thought leadership for people who want clearer direction, better decisions, stronger discipline, and a purpose-driven life."
      />
      <Section eyebrow="Latest insights" title="Practical ideas for your next level.">
        <div className="mb-8 flex flex-wrap justify-center gap-2">
          {["All", "Performance", "Faith", "Leadership", "Business", "Mindset", "Coaching"].map((category) => (
            <span key={category} className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-muted-foreground">
              {category}
            </span>
          ))}
        </div>
        <BlogGrid />
      </Section>
      <FinalCta title="Want guidance applying this to your life or business?" intro="Schedule a free call and start turning ideas into aligned execution." />
    </SiteShell>
  )
}
