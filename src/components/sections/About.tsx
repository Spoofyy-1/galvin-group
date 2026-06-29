"use client";
import React, { useState } from "react";
import {
  MapPin,
  Users,
  Shield,
  GraduationCap,
  Network,
  ArrowUpRight,
} from "lucide-react";
import { Section, Eyebrow, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { PERSON, CONTACT, EXPERIENCE, BRAND } from "@/data/galvin";

const ICONS = {
  club: Users,
  military: Shield,
  education: GraduationCap,
  community: Network,
} as const;

export function About() {
  const [imgOk, setImgOk] = useState(true);

  return (
    <Section id="about" surface="cream" className="py-20 md:py-28">
      <Reveal>
        <Eyebrow className="mb-7">Who you&apos;re investing with</Eyebrow>
      </Reveal>

      {/* Profile header — LinkedIn style */}
      <Reveal>
        <div className="flex flex-col gap-6 border-b border-ink/12 pb-10 sm:flex-row sm:items-center sm:gap-7">
          <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl ring-1 ring-ink/10">
            {imgOk ? (
              <img
                src={BRAND.headshot}
                alt="Cooper Galvin"
                className="h-full w-full object-cover"
                onError={() => setImgOk(false)}
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-navy font-display text-[34px] text-cream">
                CG
              </div>
            )}
          </div>
          <div>
            <h2 className="font-display text-[34px] leading-[1.05] text-ink md:text-[42px]">
              Cooper Galvin
            </h2>
            <p className="mt-1.5 text-[16px] text-gold">{PERSON.title}</p>
            <p className="mt-2 flex items-center gap-1.5 text-[14px] text-muted">
              <MapPin className="h-4 w-4" /> {PERSON.location} · co-led with{" "}
              {PERSON.partner}
            </p>
          </div>
          <div className="sm:ml-auto">
            <Button variant="outline" href={CONTACT.linkedin} external>
              View LinkedIn <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Reveal>

      {/* Bio + experience timeline */}
      <div className="mt-11 grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <p className="text-lead leading-relaxed text-ink/85">{PERSON.bio}</p>
          <blockquote className="mt-8 border-l-2 border-gold pl-5 font-display text-[21px] italic leading-snug text-ink">
            &ldquo;{PERSON.mission}&rdquo;
          </blockquote>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mb-7 flex items-center gap-4">
            <h3 className="font-display text-[22px] text-ink">Experience</h3>
            <span className="h-px flex-1 bg-ink/12" />
          </div>

          <ol className="relative ml-[18px] border-l border-ink/15">
            {EXPERIENCE.map((e, i) => {
              const Icon = e.icon !== "logo" ? ICONS[e.icon] : null;
              return (
                <li key={i} className="relative pb-9 pl-9 last:pb-0">
                  <span className="absolute -left-[18px] top-0 flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-cream-card text-gold ring-1 ring-ink/12">
                    {e.icon === "logo" ? (
                      <img
                        src={BRAND.logo}
                        alt=""
                        className="h-6 w-6 object-contain"
                      />
                    ) : Icon ? (
                      <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
                    ) : null}
                  </span>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h4 className="text-[17px] font-semibold text-ink">
                      {e.role}
                    </h4>
                    <span className="shrink-0 text-[12px] uppercase tracking-wide text-muted">
                      {e.period}
                    </span>
                  </div>
                  <div className="text-[15px] font-medium text-ink/85">
                    {e.org}
                  </div>
                  <div className="text-[13px] text-muted">{e.meta}</div>
                  <p className="mt-2 text-[14px] leading-relaxed text-muted">
                    {e.desc}
                  </p>
                </li>
              );
            })}
          </ol>
        </Reveal>
      </div>
    </Section>
  );
}
