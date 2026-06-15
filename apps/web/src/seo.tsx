import { site } from "./content"

const defaultImage = `${site.url}${site.assets}/marc-portrait.jpeg`

export function seoHead({
  title,
  description,
  path,
  image = defaultImage,
  type = "website",
}: {
  title: string
  description: string
  path: string
  image?: string
  type?: "website" | "article"
}) {
  const url = new URL(path, site.url).toString()
  const absoluteImage = image.startsWith("http") ? image : new URL(image, site.url).toString()

  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow, max-image-preview:large" },
      { property: "og:type", content: type },
      { property: "og:site_name", content: "Marc Feinberg" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: absoluteImage },
      { property: "og:image:alt", content: "Marc Feinberg, Christian high-performance coach" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "1200" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: absoluteImage },
    ],
    links: [{ rel: "canonical", href: url }],
  }
}

export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}
