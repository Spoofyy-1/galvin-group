"use client";
import React, { useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import { Instagram, Play, ArrowUpRight, Youtube } from "lucide-react";
import { Section, SectionHead, Button } from "@/components/ui/primitives";
import { MEDIA, BRAND } from "@/data/galvin";

const TABS = [
  { id: "instagram", label: "Instagram", icon: Instagram },
  { id: "youtube", label: "YouTube", icon: Youtube },
] as const;

type TabId = (typeof TABS)[number]["id"];

export function Media() {
  const [tab, setTab] = useState<TabId>("instagram");
  const reduce = useReducedMotion();

  return (
    <Section id="media" surface="cream" className="py-20 md:py-28">
      <SectionHead
        eyebrow="Watch & follow"
        title="See how Cooper invests."
        intro="Straight from the source — reels and videos breaking down real deals, the buy box, and creative finance."
      />

      {/* Tabs */}
      <div className="mt-9 inline-flex rounded-[4px] border border-navy/12 bg-cream-card p-1">
        {TABS.map((t) => {
          const Icon = t.icon;
          const active = tab === t.id;
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className="relative flex items-center gap-2 rounded-[2px] px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.05em] transition-colors"
            >
              {active && (
                <motion.span
                  layoutId="media-tab"
                  className="absolute inset-0 rounded-[2px] bg-navy"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              )}
              <span
                className={
                  "relative z-10 flex items-center gap-2 " +
                  (active ? "text-cream" : "text-ink/60")
                }
              >
                <Icon size={16} />
                {t.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Content — keyed re-mount per tab (enter animation, always renders) */}
      <div className="mt-9">
        <motion.div
          key={tab}
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.34, ease: [0.23, 1, 0.32, 1] }}
        >
          {tab === "instagram" ? (
            <div className="grid items-center gap-10 md:grid-cols-[auto_1fr] md:gap-14">
              {MEDIA.reelId ? (
                <div className="mx-auto w-[300px] overflow-hidden rounded-xl border border-navy/10 bg-white">
                  <iframe
                    title="Latest Instagram reel"
                    src={`https://www.instagram.com/reel/${MEDIA.reelId}/embed`}
                    className="h-[540px] w-full"
                    loading="lazy"
                    scrolling="no"
                  />
                </div>
              ) : (
                <a
                  href={MEDIA.instagramReels}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative mx-auto block aspect-[9/16] w-[280px] overflow-hidden rounded-xl bg-navy ring-1 ring-navy/10"
                >
                  <img
                    src={BRAND.headshot}
                    alt="Cooper Galvin on Instagram"
                    className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-500 group-hover:scale-105 group-hover:opacity-70"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy/35 to-navy/10" />
                  <div className="absolute left-4 top-4 flex items-center gap-2 text-cream">
                    <Instagram size={20} />
                    <span className="text-[14px] font-medium">
                      {MEDIA.instagramHandle}
                    </span>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-cream/90 text-navy shadow-xl transition group-hover:scale-110">
                      <Play className="ml-0.5 h-6 w-6 fill-navy" />
                    </span>
                  </div>
                  <div className="absolute inset-x-4 bottom-4 text-cream">
                    <p className="font-display text-[19px]">Latest reels</p>
                    <p className="mt-1 text-[13px] text-cream/70">
                      Deals, buy box &amp; creative finance
                    </p>
                  </div>
                </a>
              )}

              <div className="max-w-md">
                <h3 className="font-display text-h3 text-ink">
                  Following along on Instagram
                </h3>
                <p className="mt-4 text-muted">
                  Cooper documents every step on {MEDIA.instagramHandle} —
                  walkthroughs, live underwriting, and the wins and lessons of
                  building a Southeast rental portfolio.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Button variant="solid" href={MEDIA.instagramReels} external>
                    Watch the latest reel
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" href={MEDIA.instagram} external>
                    Follow {MEDIA.instagramHandle}
                  </Button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="overflow-hidden rounded-xl border border-navy/10 bg-navy shadow-sm">
                <div className="relative aspect-video w-full">
                  <iframe
                    className="absolute inset-0 h-full w-full"
                    src={`https://www.youtube-nocookie.com/embed/${MEDIA.youtubeId}`}
                    title="Cooper Galvin on YouTube"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="mt-6">
                <Button variant="outline" href={MEDIA.youtubeUrl} external>
                  Watch on YouTube
                  <ArrowUpRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Section>
  );
}
