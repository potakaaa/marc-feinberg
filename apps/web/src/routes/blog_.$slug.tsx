import { createFileRoute, notFound } from "@tanstack/react-router"
import { IconArrowLeft } from "@tabler/icons-react"

import { Button } from "@workspace/ui/components/button"

import { blogPosts, site } from "../content"
import { JsonLd, seoHead } from "../seo"
import { CtaButton, Section, SiteShell } from "../site-components"

function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug)
}

export const Route = createFileRoute("/blog_/$slug")({
  beforeLoad: ({ params }) => {
    if (!getBlogPost(params.slug)) {
      throw notFound()
    }
  },
  head: ({ params }) => {
    const post = getBlogPost(params.slug)

    return seoHead({
      title: post ? `${post.title} | Marc Feinberg` : "Article Not Found | Marc Feinberg",
      description: post?.excerpt ?? "Read faith, leadership, coaching, and performance insights from Marc Feinberg.",
      path: post ? `/blog/${post.slug}` : "/blog",
      image: post?.image,
      type: "article",
    })
  },
  component: BlogPostPage,
})

function BlogPostPage() {
  const { slug } = Route.useParams()
  const post = getBlogPost(slug)

  if (!post) {
    return null
  }

  const articleUrl = `${site.url}/blog/${post.slug}`
  const imageUrl = new URL(post.image, site.url).toString()

  return (
    <SiteShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          "@id": `${articleUrl}#article`,
          mainEntityOfPage: articleUrl,
          headline: post.title,
          description: post.excerpt,
          image: imageUrl,
          datePublished: post.isoDate,
          dateModified: post.isoDate,
          author: { "@id": `${site.url}/#marc-feinberg` },
          publisher: { "@id": `${site.url}/#business` },
        }}
      />
      <article>
        <section className="bg-warm px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.72fr]">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-primary">{post.category}</p>
              <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{post.title}</h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-5 text-sm font-medium text-muted-foreground">{post.date}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild variant="outline" className="h-11 rounded-full px-5">
                  <a href="/blog">
                    <IconArrowLeft data-icon="inline-start" />
                    Back to Insights
                  </a>
                </Button>
                <CtaButton />
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/5">
              <img
                className="aspect-[4/3] w-full object-cover"
                src={post.image}
                alt={`${post.title} article image`}
                width={1200}
                height={900}
                style={{ objectPosition: post.imagePosition }}
              />
            </div>
          </div>
        </section>
        <Section>
          <div className="mx-auto max-w-3xl text-lg leading-9 text-muted-foreground">
            {post.content.map((paragraph) => (
              <p key={paragraph} className="mt-6 first:mt-0">
                {paragraph}
              </p>
            ))}
          </div>
        </Section>
      </article>
    </SiteShell>
  )
}
