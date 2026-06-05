import { createFileRoute } from "@tanstack/react-router"
import { IconCalendar, IconMapPin } from "@tabler/icons-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@workspace/ui/components/accordion"
import { Button } from "@workspace/ui/components/button"

import { faqs, site } from "../content"
import { ContactStrip, CtaButton, PageHero, Section, SiteShell } from "../site-components"

export const Route = createFileRoute("/contact")({ component: ContactPage })

function ContactPage() {
  return (
    <SiteShell>
      <PageHero
        eyebrow="Start the conversation"
        title="The first step is a free call."
        intro="Use this call to clarify what you want, what may be holding you back, and whether Marc’s coaching, speaking, or mastermind facilitation is the right next step."
      />
      <Section eyebrow="Schedule" title="Book directly or reach out.">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl bg-charcoal p-8 text-white">
            <IconCalendar className="size-10 text-primary" />
            <h2 className="mt-6 text-3xl font-semibold">Schedule a free coaching call.</h2>
            <p className="mt-4 text-sm leading-7 text-white/70">
              The fastest path is Marc’s Calendly. Choose a time, bring the real context, and expect a focused conversation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <CtaButton />
              <Button asChild variant="outline" className="h-11 rounded-full border-primary/35 bg-white/5 text-white hover:bg-primary hover:text-primary-foreground">
                <a href={`mailto:${site.email}`}>Email Marc</a>
              </Button>
            </div>
          </div>
          <div>
            <ContactStrip />
            <div className="mt-4 flex items-center gap-3 rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
              <IconMapPin className="size-5 text-primary" />
              <span>{site.address}</span>
            </div>
            <div className="mt-8 rounded-2xl border border-border bg-card p-6">
              <h2 className="text-2xl font-semibold">Common questions</h2>
              <Accordion type="single" collapsible className="mt-4">
                {faqs.map((faq, index) => (
                  <AccordionItem key={faq.question} value={`faq-${index}`}>
                    <AccordionTrigger>{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </Section>
    </SiteShell>
  )
}
