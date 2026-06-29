"use client";
import React, { useState } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button, Eyebrow } from "@/components/ui/primitives";
import { PERSON, BRAND } from "@/data/galvin";

export function Hero() {
  const reduce = useReducedMotion();
  const [imgOk, setImgOk] = useState(true);

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: 0.08 },
    },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="top"
      className="relative min-h-screen w-full overflow-hidden bg-navy text-cream"
    >
      <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-20 pt-32 sm:px-8 md:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          {/* LEFT — copy */}
          <motion.div variants={container} initial="hidden" animate="visible">
            <motion.div variants={item}>
              <Eyebrow tone="gold">Galvin Group — Real Estate Investment</Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-h1 font-medium md:text-display"
            >
              Cash flow, built
              <br />
              with discipline.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-lead text-cream/75"
            >
              {PERSON.market}. We acquire and operate cash-flowing real estate —
              relentless, disciplined, and built to compound.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="gold" href="#club">
                Join the investment club
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Button>
              <Button variant="outline-cream" href="#strategy">
                See the buy box
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-10 border-t border-cream/12 pt-6"
            >
              <p className="text-[13px] uppercase tracking-[0.06em] text-cream/45">
                Army National Guard&nbsp;&middot;&nbsp; Norwich University&nbsp;&middot;&nbsp;
                Creative Finance
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT — editorial portrait + caption */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
            className="mx-auto w-full max-w-[360px] lg:ml-auto"
          >
            <figure>
              <div className="overflow-hidden rounded-[10px] border border-cream/15 bg-navy-700">
                {imgOk ? (
                  <img
                    src={BRAND.headshot}
                    alt="Cooper Galvin, founder of Galvin Group"
                    className="aspect-[4/5] w-full object-cover object-center"
                    loading="eager"
                    onError={() => setImgOk(false)}
                  />
                ) : (
                  <div className="flex aspect-[4/5] w-full items-center justify-center font-display text-[64px] text-cream/70">
                    CG
                  </div>
                )}
              </div>
              <figcaption className="mt-4 flex items-end justify-between gap-4 border-b border-cream/12 pb-4">
                <div>
                  <p className="font-display text-[21px] text-cream">
                    Cooper Galvin
                  </p>
                  <p className="mt-0.5 text-[13.5px] text-gold">
                    Owner &amp; Investor · Galvin Group
                  </p>
                </div>
                <p className="flex shrink-0 items-center gap-1.5 text-[13px] text-cream/55">
                  <MapPin className="h-3.5 w-3.5" /> Orlando, FL
                </p>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
