import { createFileRoute } from "@tanstack/react-router"

import { books, site } from "../content"
import { JsonLd, seoHead } from "../seo"
import { BookGrid, FinalCta, PageHero, Section, SiteShell } from "../site-components"

export const Route = createFileRoute("/books")({
  head: () =>
    seoHead({
      title: "Books by Marc Feinberg | Faith, Wisdom & Growth",
      description:
        "Browse books by Marc Feinberg about biblical wisdom, family, leadership, business, money, freedom, addiction recovery, and personal growth.",
      path: "/books",
      image: `${site.assets}/book-31-wise.webp`,
    }),
  component: BooksPage,
})

function BooksPage() {
  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Books by Marc Feinberg",
          itemListElement: books.map((book, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Book",
              name: book.title,
              description: book.description,
              image: `${site.url}${book.image}`,
              url: book.url,
              author: { "@id": `${site.url}/#marc-feinberg` },
            },
          })),
        }}
      />
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
