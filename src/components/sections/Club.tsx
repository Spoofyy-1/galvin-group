"use client";
import React from "react";
import { Section, SectionHead, Button } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { CLUB } from "@/data/galvin";

export function Club() {
  return (
    <Section id="club" surface="card" className="py-20 md:py-28">
      <SectionHead
        eyebrow="The investment club"
        title="Invest alongside operators."
        intro={CLUB.blurb}
      />

      {/* TERMS */}
      <RevealGroup className="mt-12 grid grid-cols-2 gap-4 md:mt-14 lg:grid-cols-4 lg:gap-6">
        {CLUB.terms.map((t) => (
          <RevealItem key={t.k}>
            <div className="h-full rounded-2xl border border-navy/10 bg-cream p-6">
              <div className="font-display text-[34px] leading-none text-navy md:text-[40px]">
                {t.v}
              </div>
              <div className="mt-3 text-[15px] font-medium text-ink">{t.k}</div>
              <div className="mt-1 text-[13px] text-muted">{t.note}</div>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* STEPS */}
      <Reveal className="mt-16 md:mt-20">
        <h3 className="text-h3 font-medium text-ink">How the club works</h3>
      </Reveal>

      <RevealGroup className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {CLUB.steps.map((s) => (
          <RevealItem key={s.k}>
            <div className="group h-full rounded-2xl border border-navy/10 bg-cream p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(20,42,64,0.35)]">
              <span className="font-display text-[40px] leading-none text-gold">
                {s.k}
              </span>
              <h4 className="mt-5 text-h3 font-medium text-ink">{s.title}</h4>
              <p className="mt-2.5 text-muted">{s.body}</p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>

      {/* CLOSING ROW */}
      <Reveal className="mt-14 md:mt-16">
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="solid" href="#contact">
            Request the deck
          </Button>
          <p className="text-[14px] text-muted">
            Administered via Fractional · $15,000 minimum
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
