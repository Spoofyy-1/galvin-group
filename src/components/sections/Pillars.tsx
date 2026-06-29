"use client";
import React from "react";
import { ShieldCheck, HardHat, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section, SectionHead } from "@/components/ui/primitives";
import { RevealGroup, RevealItem } from "@/components/ui/reveal";
import { PILLARS } from "@/data/galvin";

const ICONS: LucideIcon[] = [ShieldCheck, HardHat, TrendingUp];

export function Pillars() {
  return (
    <Section surface="cream" className="py-20 md:py-28">
      <SectionHead
        eyebrow="Why Galvin Group"
        title="An unfair advantage, by design."
        intro="Military discipline, first-hand construction expertise, and an operator's long-term mindset — combined into one underwriting standard."
      />

      <RevealGroup className="mt-14 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-3">
        {PILLARS.map((p, i) => {
          const Icon = ICONS[i] ?? ShieldCheck;
          return (
            <RevealItem key={p.k}>
              <div className="group h-full rounded-3xl border border-navy/10 bg-cream-card p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(20,42,64,0.35)]">
                <div className="flex items-center justify-between">
                  <span className="font-display text-[40px] leading-none text-gold">
                    {p.k}
                  </span>
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-navy/10 bg-navy/[0.04] text-navy/70 transition-colors group-hover:text-gold">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                </div>
                <h3 className="mt-6 text-h3 font-medium text-ink">{p.title}</h3>
                <p className="mt-3 text-muted">{p.body}</p>
              </div>
            </RevealItem>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
