"use client";
import React from "react";
import { Building2, Warehouse, Home, Check } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHead, Eyebrow } from "@/components/ui/primitives";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/reveal";
import { BUYBOX, DEAL_PREFS } from "@/data/galvin";

const ICONS: Record<string, LucideIcon> = {
  buildings: Building2,
  warehouse: Warehouse,
  home: Home,
};

export function BuyBox() {
  return (
    <Section id="strategy" surface="navy" className="py-20 md:py-28 text-cream">
      <SectionHead
        tone="cream"
        eyebrow="The buy box"
        title="What we acquire."
        intro="Disciplined, cash-flow-first criteria — assets are acquired only when they pencil from day one."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
        {BUYBOX.map((b) => {
          const Icon = ICONS[b.icon] ?? Building2;
          return (
            <RevealItem key={b.type}>
              <div className="group h-full rounded-xl border border-cream/15 bg-navy-700/40 p-7 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-cream/25 hover:shadow-[0_24px_60px_-30px_rgba(0,0,0,0.55)]">
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <h3 className="text-h3 font-medium text-cream">{b.type}</h3>
                </div>

                <ul className="mt-6 space-y-2.5">
                  {b.criteria.map((c) => (
                    <li key={c} className="flex items-start gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-gold"
                        strokeWidth={2.25}
                      />
                      <span className="text-[15px] text-cream/80">{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>

      <Reveal className="mt-12">
        <Eyebrow tone="cream" className="mb-5">
          Deal preferences
        </Eyebrow>
        <div className="flex flex-wrap gap-3">
          {DEAL_PREFS.map((pref) => (
            <span
              key={pref}
              className="rounded-full border border-cream/20 px-4 py-2 text-sm text-cream/75"
            >
              {pref}
            </span>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
