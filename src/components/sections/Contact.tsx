"use client";
import React, { useState } from "react";
import { Phone, Mail, Instagram, Linkedin, MapPin } from "lucide-react";
import { Section, SectionHead, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { PERSON, CONTACT } from "@/data/galvin";

const ROWS = [
  {
    icon: Phone,
    label: "Call",
    value: CONTACT.phone,
    href: CONTACT.phoneHref,
    external: false,
  },
  {
    icon: Mail,
    label: "Email",
    value: CONTACT.email,
    href: CONTACT.emailHref,
    external: false,
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: CONTACT.instagramHandle,
    href: CONTACT.instagram,
    external: true,
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: PERSON.name,
    href: CONTACT.linkedin,
    external: true,
  },
  {
    icon: MapPin,
    label: "Location",
    value: PERSON.location,
    href: undefined,
    external: false,
  },
];

export function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  const inputCls =
    "w-full rounded-xl border border-navy/15 bg-cream px-4 py-3 text-ink outline-none transition-colors focus:border-gold";

  return (
    <Section id="contact" surface="navy" className="py-20 md:py-28">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* LEFT — intro + contact list */}
        <Reveal>
          <SectionHead
            tone="cream"
            eyebrow="Get in touch"
            title="Let's talk about your next deal."
          />

          <p className="mt-5 max-w-[46ch] text-lead text-cream/70">
            Whether you're an investor looking to join the club or a wholesaler
            with a deal that fits the buy box, reach out. Send it over and
            Cooper will take a look.
          </p>

          <ul className="mt-9 space-y-3">
            {ROWS.map((row) => {
              const Icon = row.icon;
              const inner = (
                <>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gold/15 text-gold">
                    <Icon size={20} strokeWidth={1.75} />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-[12px] font-medium uppercase tracking-wide text-cream/50">
                      {row.label}
                    </span>
                    <span className="text-[15px] font-medium text-cream transition-colors group-hover:text-gold">
                      {row.value}
                    </span>
                  </span>
                </>
              );

              return (
                <li key={row.label}>
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? "_blank" : undefined}
                      rel={row.external ? "noopener noreferrer" : undefined}
                      className="group flex items-center gap-4"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div className="group flex items-center gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </Reveal>

        {/* RIGHT — contact form card */}
        <Reveal delay={0.08}>
          <div className="rounded-3xl border border-cream/10 bg-cream-card p-7 text-ink">
            {sent ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/15 text-gold">
                  <Mail size={26} strokeWidth={1.75} />
                </span>
                <h3 className="mt-6 text-h3 font-display text-ink">
                  Thanks — Cooper will be in touch.
                </h3>
                <p className="mt-3 max-w-[34ch] text-body text-muted">
                  Your message is on its way. Expect a reply shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-1.5 block text-[13px] font-medium text-ink"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-1.5 block text-[13px] font-medium text-ink"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@email.com"
                    className={inputCls}
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-interest"
                    className="mb-1.5 block text-[13px] font-medium text-ink"
                  >
                    I'm interested in…
                  </label>
                  <select
                    id="contact-interest"
                    name="interest"
                    defaultValue="Investing in the club"
                    className={inputCls}
                  >
                    <option>Investing in the club</option>
                    <option>Bringing a deal</option>
                    <option>Just connecting</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-1.5 block text-[13px] font-medium text-ink"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    placeholder="Tell us a bit about what you're looking for…"
                    className={`${inputCls} resize-none`}
                  />
                </div>

                <Button variant="gold" className="mt-2 w-full">
                  Send it over
                </Button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
