"use client";
import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { Section, Eyebrow } from "@/components/ui/primitives";
import LogoLoop, { type LogoItem } from "@/components/ui/LogoLoop";
import { SOCIALS } from "@/data/galvin";

const ICONS = {
  instagram: Instagram,
  linkedin: Linkedin,
  mail: Mail,
  phone: Phone,
} as const;

export function Socials() {
  const logos: LogoItem[] = SOCIALS.map((s) => {
    const Icon = ICONS[s.icon as keyof typeof ICONS];
    return {
      node: (
        <span className="flex items-center gap-2 text-cream/80">
          <Icon size={26} />
          <span className="text-[15px] font-medium">{s.label}</span>
        </span>
      ),
      href: s.href,
      title: s.name,
      ariaLabel: s.name,
    };
  });

  return (
    <Section surface="navy" className="py-10">
      <div className="flex flex-col items-center">
        <Eyebrow tone="cream" className="mb-5">
          Connect
        </Eyebrow>
        <div className="relative h-16 w-full">
          <LogoLoop
            logos={logos}
            speed={36}
            direction="left"
            logoHeight={28}
            gap={64}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#142a40"
            ariaLabel="Galvin Group — connect"
          />
        </div>
      </div>
    </Section>
  );
}
