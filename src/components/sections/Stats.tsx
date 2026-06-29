"use client";
import React, { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, animate, useReducedMotion } from "motion/react";
import { Section } from "@/components/ui/primitives";
import { STATS } from "@/data/galvin";

function StatNumber({
  value,
  prefix,
  suffix,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const mv = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;
    const controls = animate(mv, value, {
      duration: 1.4,
      ease: [0.23, 1, 0.32, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, value, mv]);

  return (
    <span
      ref={ref}
      className="block text-h1 font-display font-medium leading-none text-navy md:text-[64px]"
    >
      {prefix && <span className="text-gold">{prefix}</span>}
      {display.toLocaleString("en-US")}
      {suffix && <span className="text-gold">{suffix}</span>}
    </span>
  );
}

export function Stats() {
  return (
    <Section surface="card" className="py-16 md:py-20">
      <div className="grid grid-cols-2 md:grid-cols-4">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={[
              "px-5 py-6 md:px-8",
              // hairline dividers between cells
              i % 2 !== 0 ? "border-l border-navy/10" : "",
              "md:border-l md:border-navy/10",
              i % 4 === 0 ? "md:border-l-0" : "",
              i < 2 ? "" : "border-t border-navy/10 md:border-t-0",
            ].join(" ")}
          >
            <StatNumber value={s.value} prefix={s.prefix} suffix={s.suffix} />
            <p className="mt-3 font-medium text-ink">{s.label}</p>
            <p className="mt-1 text-[13px] text-muted">{s.sub}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
