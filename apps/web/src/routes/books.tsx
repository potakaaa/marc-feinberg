import { createFileRoute } from "@tanstack/react-router"

import { site } from "../content"
import { BookGrid, FinalCta, PageHero, Section, SiteShell } from "../site-components"

export const Route = createFileRoute("/books")({ component: BooksPage })

function BooksPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Books"
        title="Books by Marc Feinberg"
        intro="Wisdom, freedom, power, and purpose in practical resources for faith, family, leadership, business, money, and personal growth."
        image={`${site.assets}/book-31-wise.webp`}
        alt="31 WISE book cover"
      />
      <Section eyebrow="Library" title="Apply Marc’s principles one page at a time.">
        <BookGrid />
      </Section>
      <FinalCta title="Want help applying these principles personally?" intro="Book a free call with Marc and turn insight into practical action, accountability, and breakthrough." />
    </SiteShell>
  )
}
