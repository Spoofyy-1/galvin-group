"use client";
import React, { useState } from "react";
import { BadgeCheck, Check, Linkedin } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { BRAND, PERSON, CONTACT, CREDS } from "@/data/galvin";

export function About() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Section id="about" surface="cream" className="py-20 md:py-28">
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        {/* LEFT — portrait */}
        <Reveal>
          <div className="relative">
            {imgOk ? (
              <div className="relative overflow-hidden rounded-3xl ring-1 ring-gold/40">
                <img
                  src={BRAND.headshot}
                  alt={PERSON.name}
                  onError={() => setImgOk(false)}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
            ) : (
              <div className="flex aspect-[4/5] w-full flex-col items-center justify-center rounded-3xl bg-navy text-cream ring-1 ring-gold/40">
                <span className="font-display text-[88px] leading-none text-gold">CG</span>
                <span className="mt-4 text-h3 font-display">{PERSON.name}</span>
              </div>
            )}

            {/* caption chip */}
            <div className="absolute bottom-4 left-4 rounded-full bg-navy px-4 py-2 text-[12px] font-medium tracking-wide text-cream shadow-[0_12px_30px_-12px_rgba(20,42,64,0.6)]">
              Cooper Galvin · Orlando, FL
            </div>
          </div>
        </Reveal>

        {/* RIGHT — content */}
        <Reveal delay={0.08}>
          <SectionHead eyebrow="Who you're investing with" title={PERSON.name} />

          <p className="mt-3 text-lead font-medium text-gold">{PERSON.title}</p>

          <p className="mt-6 text-lead text-muted">{PERSON.bio}</p>

          {/* creds */}
          <ul className="mt-8 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {CREDS.map((c, i) => {
              const Icon = i % 2 === 0 ? BadgeCheck : Check;
              return (
                <li key={c} className="flex items-start gap-2.5 text-[15px] text-ink">
                  <Icon
                    className="mt-0.5 h-[18px] w-[18px] shrink-0 text-gold"
                    strokeWidth={2}
                  />
                  <span>{c}</span>
                </li>
              );
            })}
          </ul>

          {/* pull-quote */}
          <blockquote className="mt-8 border-l-2 border-gold pl-4 font-display text-lead italic text-ink">
            “{PERSON.mission}”
          </blockquote>

          <p className="mt-6 text-[14px] text-muted">
            Co-led with{" "}
            <span className="font-medium text-ink">{PERSON.partner}</span>.
          </p>

          <div className="mt-7">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-navy/25 px-7 py-3.5 text-[15px] font-semibold text-navy transition-all duration-200 ease-out hover:border-navy hover:bg-navy hover:text-cream active:scale-[0.98]"
            >
              <Linkedin className="h-[18px] w-[18px]" strokeWidth={1.75} />
              Connect on LinkedIn
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
