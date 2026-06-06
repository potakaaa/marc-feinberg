import { HeadContent, Scripts, createRootRoute } from "@tanstack/react-router"

import appCss from "@workspace/ui/globals.css?url"

import { site } from "../content"
import { JsonLd } from "../seo"

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "Marc Feinberg | Christian High-Performance Coach",
      },
      {
        name: "description",
        content:
          "Christian high-performance coaching, business and life coaching, books, speaking, and mastermind facilitation for athletes, entrepreneurs, and purpose-driven leaders.",
      },
      { name: "author", content: "Marc Feinberg" },
      { name: "theme-color", content: "#171717" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "/favicon-32x32.png",
      },
      {
        rel: "shortcut icon",
        href: "/favicon.ico",
      },
      {
        rel: "apple-touch-icon",
        sizes: "192x192",
        href: "/logo192.png",
      },
      {
        rel: "manifest",
        href: "/manifest.json",
      },
    ],
    headScripts: [
      {
        src: site.analytics.script,
        defer: true,
        "data-domain": site.analytics.domain,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="container mx-auto p-4 pt-16">
      <h1>404</h1>
      <p>The requested page could not be found.</p>
    </main>
  ),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": `${site.url}/#website`,
                url: site.url,
                name: site.name,
                inLanguage: "en-US",
              },
              {
                "@type": "Person",
                "@id": `${site.url}/#marc-feinberg`,
                name: site.name,
                url: site.url,
                image: `${site.url}${site.assets}/marc-portrait.jpeg`,
                email: site.email,
                telephone: "+1-561-309-1334",
                jobTitle: [
                  "Christian High-Performance Coach",
                  "Author",
                  "Keynote Speaker",
                  "Certified Biblical Counselor",
                ],
                description:
                  "Christian high-performance coach, author, speaker, mastermind facilitator, and certified biblical counselor.",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "North Palm Beach",
                  addressRegion: "FL",
                  postalCode: "33408",
                  addressCountry: "US",
                },
              },
              {
                "@type": "ProfessionalService",
                "@id": `${site.url}/#business`,
                name: "Marc Feinberg Coaching",
                url: site.url,
                image: `${site.url}${site.assets}/marc-portrait.jpeg`,
                email: site.email,
                telephone: "+1-561-309-1334",
                founder: { "@id": `${site.url}/#marc-feinberg` },
                areaServed: "Worldwide",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "North Palm Beach",
                  addressRegion: "FL",
                  postalCode: "33408",
                  addressCountry: "US",
                },
              },
            ],
          }}
        />
        {children}
        <Scripts />
      </body>
    </html>
  )
}
