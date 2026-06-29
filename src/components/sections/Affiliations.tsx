"use client";
import React from "react";
import { Section, Eyebrow } from "@/components/ui/primitives";
import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import { AFFILIATIONS } from "@/data/galvin";

export function Affiliations() {
  const logos: LogoItem[] = AFFILIATIONS.map((name) => ({
    node: (
      <span className="font-display text-[26px] tracking-tight text-navy/70 md:text-[30px]">
        {name}
      </span>
    ),
    title: name,
  }));

  return (
    <Section surface="card" className="py-14">
      <div className="flex flex-col items-center">
        <Eyebrow className="mb-6 justify-center">
          Communities &amp; background
        </Eyebrow>
        <div className="relative h-16 w-full">
          <LogoLoop
            logos={logos}
            speed={28}
            direction="left"
            logoHeight={34}
            gap={72}
            fadeOut
            fadeOutColor="#fbf9f4"
            ariaLabel="Communities and affiliations"
          />
        </div>
      </div>
    </Section>
  );
}
