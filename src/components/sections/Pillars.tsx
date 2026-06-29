"use client";
import React from "react";
import { Section, SectionHead } from "@/components/ui/primitives";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PILLARS } from "@/data/galvin";

export function Pillars() {
  return (
    <Section surface="cream" className="py-20 md:py-28">
      <SectionHead
        eyebrow="Why Galvin Group"
        title="An unfair advantage, by design."
        intro="Military discipline, first-hand construction expertise, and an operator's long-term mindset — combined into one underwriting standard."
      />

      <RevealGroup className="mt-14 border-t border-ink/12 md:mt-16">
        {PILLARS.map((p) => (
          <RevealItem key={p.k}>
            <div className="grid grid-cols-1 items-baseline gap-3 border-b border-ink/12 py-9 md:grid-cols-12 md:gap-8 md:py-12">
              <div className="font-display text-[20px] text-gold md:col-span-1">
                {p.k}
              </div>
              <h3 className="font-display text-[26px] leading-[1.08] text-ink md:col-span-4 md:text-[30px]">
                {p.title}
              </h3>
              <p className="text-lead leading-relaxed text-muted md:col-span-7 md:max-w-[54ch]">
                {p.body}
              </p>
            </div>
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
