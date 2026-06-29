"use client";
import { MapPin } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { Button, Eyebrow } from "@/components/ui/primitives";
import { PERSON, CREDS, IMAGES } from "@/data/galvin";

export function Hero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.1 },
    },
  };
  const item: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="top"
      className="paper relative min-h-screen w-full overflow-hidden bg-navy text-cream"
    >
      {/* Soft gold radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-24 h-[520px] w-[520px] rounded-full bg-gold/10 blur-[120px]"
      />

      <div className="relative mx-auto w-full max-w-[1180px] px-5 pb-20 pt-32 sm:px-8 md:pt-36 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* LEFT — copy */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="max-w-xl"
          >
            <motion.div variants={item}>
              <Eyebrow tone="gold">Galvin Group — Real Estate Investment</Eyebrow>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-6 font-display text-h1 font-medium md:text-display"
            >
              Cash flow, built with discipline.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-md text-lead text-cream/75"
            >
              {PERSON.market}. Building financial freedom through cash-flowing
              real estate — relentless, disciplined, and built to compound.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button variant="gold" href="#club">
                Join the investment club
              </Button>
              <Button variant="outline-cream" href="#strategy">
                See the buy box
              </Button>
            </motion.div>

            <motion.div
              variants={item}
              className="mt-9 flex flex-wrap gap-2"
            >
              {CREDS.map((c) => (
                <span
                  key={c}
                  className="rounded-full border border-cream/20 px-3 py-1 text-[13px] text-cream/70"
                >
                  {c}
                </span>
              ))}
            </motion.div>

            <motion.div
              variants={item}
              className="mt-7 flex items-center gap-2 text-sm text-cream/60"
            >
              <MapPin className="h-4 w-4 text-gold" />
              <span>Orlando, FL · investing across the Southeast</span>
            </motion.div>
          </motion.div>

          {/* RIGHT — property image */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.25 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl ring-1 ring-gold/40">
              <img
                src={IMAGES.heroProperty}
                alt="Galvin Group investment property"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-deep/40 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-5 -left-4 max-w-[230px] rounded-xl bg-cream-card px-4 py-3 text-ink shadow-xl sm:-left-6">
              <p className="text-[15px] font-semibold leading-snug">
                19 doors under contract
              </p>
              <p className="mt-0.5 text-[13px] text-muted">Bay County, FL</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
