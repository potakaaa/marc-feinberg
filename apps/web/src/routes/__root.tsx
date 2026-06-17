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
        title: site.title,
      },
      {
        name: "description",
        content: site.description,
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
        sizes: "512x512",
        href: "/logo512.png",
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
                alternateName: "Marc Feinberg Coaching",
                inLanguage: "en-US",
                publisher: { "@id": `${site.url}/#business` },
              },
              {
                "@type": "Person",
                "@id": `${site.url}/#marc-feinberg`,
                name: site.name,
                url: site.url,
                image: `${site.url}${site.assets}/marc-portrait.jpeg`,
                email: site.email,
                telephone: "+1-561-309-1334",
                mainEntityOfPage: site.url,
                jobTitle: [
                  "High-Performance Coach",
                  "Author",
                  "Keynote Speaker",
                  "Certified Biblical Counselor",
                ],
                description: site.description,
                knowsAbout: [
                  "High-performance coaching",
                  "Business coaching",
                  "Life coaching",
                  "Biblical counseling",
                  "Leadership development",
                  "Mastermind facilitation",
                  "Keynote speaking",
                ],
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2007 Cove Lane",
                  addressLocality: site.addressLocality,
                  addressRegion: site.addressRegion,
                  postalCode: site.postalCode,
                  addressCountry: site.addressCountry,
                },
              },
              {
                "@type": ["ProfessionalService", "LocalBusiness"],
                "@id": `${site.url}/#business`,
                name: "Marc Feinberg Coaching",
                alternateName: site.name,
                url: site.url,
                logo: `${site.url}/logo512.png`,
                image: `${site.url}${site.assets}/marc-portrait.jpeg`,
                email: site.email,
                telephone: "+1-561-309-1334",
                founder: { "@id": `${site.url}/#marc-feinberg` },
                areaServed: "Worldwide",
                description: site.description,
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "2007 Cove Lane",
                  addressLocality: site.addressLocality,
                  addressRegion: site.addressRegion,
                  postalCode: site.postalCode,
                  addressCountry: site.addressCountry,
                },
                contactPoint: {
                  "@type": "ContactPoint",
                  telephone: "+1-561-309-1334",
                  email: site.email,
                  contactType: "customer service",
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
