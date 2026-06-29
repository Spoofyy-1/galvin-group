"use client";
import React from "react";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Section, SectionHead, Button } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { DEAL, fmtUSD } from "@/data/galvin";

export function Deal() {
  const reduce = useReducedMotion();
  const pct = Math.min(100, Math.round((DEAL.raised / DEAL.goal) * 100));

  return (
    <Section id="deal" surface="navy" className="py-20 text-cream md:py-28">
      <SectionHead
        tone="cream"
        eyebrow="Active opportunity"
        title="The Panama City Portfolio."
      />

      <Reveal className="mt-12 md:mt-14">
        <div className="grid grid-cols-1 overflow-hidden rounded-xl border border-cream/15 bg-navy-700/40 lg:grid-cols-2">
          {/* LEFT — branded portfolio panel (no stock imagery) */}
          <div className="relative flex min-h-[300px] flex-col justify-between bg-gradient-to-br from-navy-700 to-navy-deep p-8 lg:min-h-full lg:p-10">
            <div className="eyebrow text-gold">The Portfolio</div>
            <div>
              <div className="flex items-end gap-3">
                <span className="font-display text-[76px] leading-none text-cream">
                  {DEAL.doors}
                </span>
                <span className="mb-2 text-cream/70">doors</span>
              </div>
              <div className="mt-2 text-cream/70">
                across {DEAL.properties} properties in {DEAL.location}
              </div>
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-cream/20 px-3 py-1 text-[13px] text-cream/70">
                <MapPin className="h-3.5 w-3.5 text-gold" /> Gulf Coast · workforce &amp; tourism housing
              </div>
            </div>
          </div>

          {/* RIGHT — content */}
          <div className="p-8 md:p-10">
            <div className="flex items-center gap-2 text-cream/70">
              <MapPin className="h-[18px] w-[18px] text-gold" strokeWidth={1.75} />
              <span className="text-[15px]">{DEAL.location}</span>
            </div>

            <div className="eyebrow mt-7 text-cream/50">Asset mix</div>
            <p className="mt-3 text-lead text-cream/85">{DEAL.mix}</p>

            {/* funding bar */}
            <div className="mt-8">
              <div className="flex items-end justify-between gap-3">
                <span className="text-[13px] uppercase tracking-wide text-cream/60">
                  Club raise
                </span>
                <span className="text-[13px] text-cream/75">
                  {fmtUSD(DEAL.raised * 1000)} of {fmtUSD(DEAL.goal * 1000)} · {pct}%
                </span>
              </div>
              <div className="mt-3 h-2.5 w-full overflow-hidden rounded-full bg-cream/10">
                <motion.div
                  className="h-full rounded-full bg-gold"
                  initial={reduce ? false : { width: 0 }}
                  whileInView={{ width: `${pct}%` }}
                  viewport={{ once: true, margin: "-70px" }}
                  transition={{ duration: 1.1, ease: [0.23, 1, 0.32, 1] }}
                  style={reduce ? { width: `${pct}%` } : undefined}
                />
              </div>
            </div>

            <p className="mt-5 text-[12px] text-cream/45">{DEAL.note}</p>

            <div className="mt-7">
              <Button variant="gold" href="#contact">
                Get the full underwriting
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
