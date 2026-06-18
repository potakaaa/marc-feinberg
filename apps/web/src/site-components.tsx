import * as React from "react"
import { Link } from "@tanstack/react-router"
import {
  IconArrowRight,
  IconBrandYoutubeFilled,
  IconCalendar,
  IconCheck,
  IconClock,
  IconFlame,
  IconMail,
  IconMenu2,
  IconMicrophone2,
  IconPhone,
  IconShieldCheck,
  IconSparkles,
  IconTargetArrow,
  IconUsersGroup,
} from "@tabler/icons-react"

import { Badge } from "@workspace/ui/components/badge"
import { Button } from "@workspace/ui/components/button"
import { Card, CardContent } from "@workspace/ui/components/card"
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@workspace/ui/components/sheet"
import { Separator } from "@workspace/ui/components/separator"
import { cn } from "@workspace/ui/lib/utils"

import { books, blogPosts, navItems, services, site, testimonials, trustItems, whyCards } from "./content"

type SectionProps = React.ComponentProps<"section"> & {
  eyebrow?: string
  title?: string
  intro?: string
  dark?: boolean
}

export function ExternalLink({
  href,
  children,
  className,
  newTab = true,
}: {
  href: string
  children: React.ReactNode
  className?: string
  newTab?: boolean
}) {
  return (
    <a className={className} href={href} rel={newTab ? "noreferrer" : undefined} target={newTab ? "_blank" : undefined}>
      {children}
    </a>
  )
}

export function CtaButton({ className, label = "Schedule Free Call" }: { className?: string; label?: string }) {
  return (
    <Button asChild className={cn("h-11 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 hover:bg-primary/90", className)}>
      <ExternalLink href={site.calendly}>
        <IconCalendar data-icon="inline-start" />
        {label}
      </ExternalLink>
    </Button>
  )
}

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center">
          <img className="h-12 w-auto sm:h-14" src={`${site.assets}/logo.png`} alt="Marc Feinberg" width={1024} height={341} />
        </Link>
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground [&.active]:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button asChild variant="ghost" className="h-10 rounded-full px-4 text-sm">
            <Link to="/contact">Contact</Link>
          </Button>
          <CtaButton />
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="lg:hidden" variant="outline" size="icon-lg" aria-label="Open navigation">
              <IconMenu2 />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-background">
            <SheetHeader>
              <SheetTitle>Marc Feinberg</SheetTitle>
            </SheetHeader>
            <nav className="flex flex-col gap-2 px-4" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <SheetClose key={item.href} asChild>
                  <Link to={item.href} className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted">
                    {item.label}
                  </Link>
                </SheetClose>
              ))}
              <SheetClose asChild>
                <Link to="/contact" className="rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted">
                  Contact
                </Link>
              </SheetClose>
            </nav>
            <div className="mt-auto p-4">
              <CtaButton className="w-full" />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-charcoal text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <img className="h-14 w-auto rounded bg-white px-3 py-2" src={`${site.assets}/logo.png`} alt="Marc Feinberg" width={1024} height={341} />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/70">
            High-performance coaching, biblical wisdom, and practical accountability for purpose-driven leaders who are ready to execute.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <CtaButton />
            <Button asChild variant="outline" className="h-11 rounded-full border-primary/35 bg-white/5 text-white hover:bg-primary hover:text-primary-foreground">
              <a href={`mailto:${site.email}`}>
                <IconMail data-icon="inline-start" />
                Email Marc
              </a>
            </Button>
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Explore</h2>
          <div className="mt-4 grid gap-3">
            {[...navItems, { label: "Contact", href: "/contact" }].map((item) => (
              <Link key={item.href} to={item.href} className="text-sm text-white/70 hover:text-white">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</h2>
          <div className="mt-4 grid gap-3 text-sm text-white/70">
            <a className="hover:text-white" href={site.phoneHref}>{site.phoneDisplay}</a>
            <a className="hover:text-white" href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.address}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-5 text-center text-xs text-white/50">
        Copyright © 2026 Marc Feinberg. All rights reserved.
      </div>
    </footer>
  )
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export function Section({ eyebrow, title, intro, dark, className, children, ...props }: SectionProps) {
  return (
    <section className={cn("px-4 py-16 sm:px-6 sm:py-20 lg:px-8", dark && "bg-charcoal text-white", className)} {...props}>
      <div className="mx-auto max-w-7xl">
        {(eyebrow || title || intro) && (
          <div className="mx-auto mb-10 max-w-3xl text-center">
            {eyebrow && <p className={cn("text-sm font-bold uppercase tracking-[0.22em] text-primary", dark && "text-primary")}>{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{title}</h2>}
            {intro && <p className={cn("mt-4 text-base leading-8 text-muted-foreground sm:text-lg", dark && "text-white/70")}>{intro}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  )
}

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  headingLevel = "h1",
}: {
  eyebrow: string
  title: string
  intro: string
  image?: string
  alt?: string
  headingLevel?: "h1" | "h2"
}) {
  const Heading = headingLevel

  return (
    <section className="bg-warm px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1fr_0.8fr]">
        <div>
          <Badge variant="outline" className="border-primary/25 bg-primary/10 text-bronze">{eyebrow}</Badge>
          <Heading className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">{title}</Heading>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">{intro}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CtaButton />
            <Button asChild variant="outline" className="h-11 rounded-full px-5">
              <a href={`mailto:${site.email}`}>Start a Conversation</a>
            </Button>
          </div>
        </div>
        {image && (
          <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-xl shadow-black/5">
            <img className="aspect-[4/3] w-full object-cover" src={image} alt={alt ?? ""} width={1200} height={900} />
          </div>
        )}
      </div>
    </section>
  )
}

export function TrustBar() {
  return (
    <div className="border-y border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-6 gap-y-3 px-4 py-5 sm:px-6 lg:px-8">
        {trustItems.map((item) => (
          <div key={item} className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
            <IconCheck className="size-4 text-primary" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const serviceIcons = [
  IconTargetArrow,
  IconShieldCheck,
  IconUsersGroup,
  IconMicrophone2,
  IconClock,
  IconFlame,
]

function ServiceCard({
  service,
  index,
  compact = false,
}: {
  service: (typeof services)[number]
  index: number
  compact?: boolean
}) {
  const Icon = serviceIcons[index % serviceIcons.length] ?? IconSparkles

  return (
    <Card className="card-glow border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
      <CardContent className={cn("flex h-full flex-col", compact ? "p-5" : "p-6")}>
        <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/12 text-bronze">
          <Icon className="size-5" />
        </div>
        <h3 className={cn("font-semibold tracking-tight", compact ? "text-lg" : "text-xl")}>{service.shortTitle}</h3>
        <p className={cn("mt-3 flex-1 text-sm text-muted-foreground", compact ? "leading-6" : "leading-7")}>{service.description}</p>
        <div className="mt-5 grid gap-2">
          {service.outcomes.map((outcome) => (
            <span key={outcome} className="flex items-center gap-2 text-sm text-foreground/80">
              <IconCheck className="size-4 text-primary" />
              {outcome}
            </span>
          ))}
        </div>
        <Button asChild variant="outline" className="mt-6 h-10 rounded-full">
          <Link to="/contact">
            Book a Call
            <IconArrowRight data-icon="inline-end" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  )
}

export function ServiceCards({ limit, variant = "grid" }: { limit?: number; variant?: "grid" | "showcase" }) {
  const visibleServices = services.slice(0, limit)

  if (variant === "showcase") {
    const [featured, ...supporting] = visibleServices

    return (
      <div className="grid gap-5 lg:grid-cols-[1.05fr_1.25fr]">
        <Card className="relative overflow-hidden border-charcoal bg-charcoal text-white ring-charcoal">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklch,var(--primary),transparent_68%),transparent_38%)]" />
            <CardContent className="relative flex h-full min-h-[460px] flex-col p-7 sm:p-8">
              <div className="flex items-center justify-between gap-4">
                <span className="rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  Signature Path
                </span>
                <span className="flex size-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                  <IconTargetArrow className="size-6" />
                </span>
              </div>
              <div className="mt-auto pt-20">
                <h3 className="max-w-md text-3xl font-semibold tracking-tight sm:text-4xl">{featured.title}</h3>
                <p className="mt-5 max-w-xl text-base leading-8 text-white/72">{featured.description}</p>
                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {featured.outcomes.map((outcome) => (
                    <span key={outcome} className="rounded-2xl border border-white/10 bg-white/[0.06] px-4 py-3 text-sm font-medium text-white/82">
                      {outcome}
                    </span>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <CtaButton />
                  <Button asChild className="h-11 rounded-full border-primary/35 bg-white/5 px-5 text-white hover:bg-primary hover:text-primary-foreground" variant="outline">
                    <Link to="/services">
                      See All Services
                      <IconArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
        </Card>
        <div className="grid gap-5">
          {supporting.map((service, index) => {
            const Icon = serviceIcons[(index + 1) % serviceIcons.length] ?? IconSparkles

            return (
              <Card key={service.title} className="card-glow border border-border bg-card transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5">
                <CardContent className="grid gap-5 p-5 sm:grid-cols-[auto_1fr_auto] sm:items-center">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/12 text-bronze">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{service.shortTitle}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{service.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {service.outcomes.slice(0, 2).map((outcome) => (
                        <span key={outcome} className="rounded-full bg-warm px-3 py-1 text-xs font-medium text-bronze">
                          {outcome}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button asChild variant="outline" className="h-10 rounded-full px-4 sm:self-end">
                    <Link to="/contact">
                      Book
                      <IconArrowRight data-icon="inline-end" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            )
          })}
          <div className="rounded-2xl border border-primary/20 bg-primary/10 p-5">
            <div className="grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
              <div>
                <h3 className="text-lg font-semibold">Not sure which service fits?</h3>
                <p className="mt-1 text-sm leading-6 text-muted-foreground">Start with a free call and identify the highest-leverage path for your next season.</p>
              </div>
              <CtaButton label="Find My Path" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {visibleServices.map((service, index) => (
        <ServiceCard key={service.title} service={service} index={index} />
      ))}
    </div>
  )
}

export function WhyCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {whyCards.map((card) => (
        <Card key={card.title} className="overflow-hidden border-white/10 bg-white/[0.04] text-white ring-white/10">
          <img className="aspect-[4/3] w-full object-cover" src={card.image} alt={card.alt} loading="lazy" />
          <CardContent className="p-6">
            <h3 className="text-2xl font-semibold">{card.title}</h3>
            <p className="mt-3 text-sm font-medium italic text-primary">{card.caption}</p>
            <p className="mt-4 text-sm leading-7 text-white/72">{card.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function TestimonialGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {testimonials.slice(0, limit).map((testimonial) => (
        <ExternalLink key={testimonial.name} href={testimonial.url} className="group rounded-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50">
          <Card className="h-full border border-border bg-card transition group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/5">
            <CardContent className="p-5">
              <div className="relative overflow-hidden rounded-xl bg-charcoal">
                <img className="aspect-video w-full object-cover opacity-90 transition group-hover:scale-105" src={testimonial.image} alt={`${testimonial.name} testimonial video thumbnail`} loading="lazy" />
                <div className="absolute inset-0 grid place-items-center bg-black/12">
                  <span className="grid size-14 place-items-center rounded-full bg-red-600 text-white shadow-lg">
                    <IconBrandYoutubeFilled className="size-8" />
                  </span>
                </div>
              </div>
              <h3 className="mt-5 text-xl font-semibold">{testimonial.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{testimonial.role}</p>
              {testimonial.quote && (
                <blockquote className="mt-3 border-l-2 border-primary/40 pl-3 text-sm italic text-foreground/80">
                  “{testimonial.quote}”
                </blockquote>
              )}
            </CardContent>
          </Card>
        </ExternalLink>
      ))}
    </div>
  )
}

export function BookGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {books.slice(0, limit).map((book) => (
        <Card key={book.title} className="border border-border bg-card">
          <CardContent className="grid h-full grid-rows-[auto_1fr] gap-5 p-5">
            <div className="mx-auto flex h-72 w-full max-w-48 items-center justify-center rounded-xl bg-warm p-4">
              <img className="max-h-full w-auto rounded-md object-contain shadow-lg shadow-black/10" src={book.image} alt={`${book.title} book cover`} loading="lazy" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-semibold">{book.title}</h3>
              <p className="mt-1 text-sm font-medium text-bronze">{book.subtitle}</p>
              <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground">{book.description}</p>
              <Button asChild variant="outline" className="mt-5 h-10 rounded-full">
                <ExternalLink href={book.url}>
                  View Book
                  <IconArrowRight data-icon="inline-end" />
                </ExternalLink>
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

export function BlogGrid({ limit }: { limit?: number }) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {blogPosts.slice(0, limit).map((post) => (
        <Link key={post.title} to="/blog/$slug" params={{ slug: post.slug }} className="group rounded-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/50">
          <Card className="h-full overflow-hidden border border-border bg-card transition group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/5">
            <img
              className="aspect-[16/10] w-full object-cover transition group-hover:scale-105"
              src={post.image}
              alt={`${post.title} article image`}
              loading="lazy"
              width={960}
              height={600}
              style={{ objectPosition: post.imagePosition }}
            />
            <CardContent className="p-5">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wider text-bronze">
                <span>{post.category}</span>
                <span className="text-muted-foreground">{post.date}</span>
              </div>
              <h3 className="mt-3 text-xl font-semibold leading-snug">{post.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{post.excerpt}</p>
              <p className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-bronze">
                Read Article
                <IconArrowRight data-icon="inline-end" />
              </p>
            </CardContent>
          </Card>
        </Link>
      ))}
    </div>
  )
}

export function FinalCta({
  title = "Ready to Activate Your Full Potential?",
  intro = "Book a free call and discover what may be keeping you from your next level in life, leadership, business, or performance.",
}: {
  title?: string
  intro?: string
}) {
  return (
    <Section className="bg-warm">
      <div className="rounded-3xl bg-charcoal px-6 py-12 text-center text-white sm:px-10 lg:px-16">
        <h2 className="mx-auto max-w-3xl text-3xl font-semibold tracking-tight sm:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/70">{intro}</p>
        <div className="mt-8 flex justify-center">
          <CtaButton />
        </div>
      </div>
    </Section>
  )
}

export function ContactStrip() {
  return (
    <div className="grid gap-4 md:grid-cols-2">
      <a className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium hover:bg-muted" href={site.phoneHref}>
        <IconPhone className="size-5 text-primary" />
        {site.phoneDisplay}
      </a>
      <a className="flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm font-medium hover:bg-muted" href={`mailto:${site.email}`}>
        <IconMail className="size-5 text-primary" />
        {site.email}
      </a>
    </div>
  )
}

export function Divider() {
  return <Separator className="bg-border/80" />
}
