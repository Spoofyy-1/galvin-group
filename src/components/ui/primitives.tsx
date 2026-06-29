"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  children,
  className,
  surface = "cream",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
  surface?: "cream" | "navy" | "card";
}) {
  const bg =
    surface === "navy"
      ? "bg-navy text-cream"
      : surface === "card"
      ? "bg-cream-card text-ink"
      : "bg-cream text-ink";
  return (
    <section id={id} className={cn("relative w-full", bg, className)}>
      <div className="relative mx-auto w-full max-w-[1180px] px-5 sm:px-8">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({
  children,
  className,
  tone = "gold",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "gold" | "muted" | "cream";
}) {
  return (
    <span
      className={cn(
        "eyebrow inline-flex items-center gap-2",
        tone === "gold" && "text-gold",
        tone === "muted" && "text-muted",
        tone === "cream" && "text-cream/70",
        className
      )}
    >
      <span className="h-px w-6 bg-current opacity-60" />
      {children}
    </span>
  );
}

export function Button({
  children,
  href,
  onClick,
  variant = "solid",
  external,
  className,
}: {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "solid" | "gold" | "outline" | "outline-cream";
  external?: boolean;
  className?: string;
}) {
  // Squared, structured buttons read institutional/trustworthy — not the
  // consumer-app "pill" look. Crisp 2px radius, confident weight, restrained
  // hover (color shift + subtle press), no bouncy scale.
  const base =
    "group inline-flex items-center justify-center gap-2 rounded-[3px] px-7 py-[15px] text-[13.5px] font-semibold uppercase tracking-[0.07em] transition-colors duration-200 ease-out active:translate-y-px";
  const tones: Record<string, string> = {
    solid: "bg-navy text-cream hover:bg-navy-deep",
    gold: "bg-gold text-cream hover:bg-[#9c4f29]",
    outline:
      "border border-navy/30 text-navy hover:bg-navy hover:text-cream hover:border-navy",
    "outline-cream":
      "border border-cream/35 text-cream hover:bg-cream hover:text-navy",
  };
  const cls = cn(base, tones[variant], className);
  return href ? (
    <a
      href={href}
      onClick={onClick}
      className={cls}
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={cls}>
      {children}
    </button>
  );
}

export function SectionHead({
  eyebrow,
  title,
  intro,
  tone = "ink",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  tone?: "ink" | "cream";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        align === "center" ? "mx-auto max-w-[44ch] text-center" : "max-w-[52ch]",
        className
      )}
    >
      {eyebrow && (
        <Eyebrow tone={tone === "cream" ? "gold" : "gold"} className="mb-5">
          {eyebrow}
        </Eyebrow>
      )}
      <h2
        className={cn(
          "text-h2 font-medium md:text-[44px] md:leading-[1.04]",
          tone === "cream" ? "text-cream" : "text-ink"
        )}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            "mt-5 text-lead",
            tone === "cream" ? "text-cream/70" : "text-muted"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
