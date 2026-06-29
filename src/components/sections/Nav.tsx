"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Button } from "@/components/ui/primitives";
import { BRAND } from "@/data/galvin";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#strategy", label: "Buy Box" },
  { href: "#club", label: "The Club" },
  { href: "#deal", label: "Active Deal" },
];

export function Nav() {
  const reduce = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300 ease-out",
        scrolled
          ? "bg-cream/95 backdrop-blur border-b border-navy/10"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex h-[68px] w-full max-w-[1180px] items-center justify-between px-5 sm:px-8">
        {/* Wordmark */}
        <a href="#top" className="flex items-center gap-3" aria-label="Galvin Group — home">
          <img
            src={BRAND.logo}
            alt=""
            className="h-9 w-9 rounded object-cover"
          />
          <span
            className={cn(
              "font-display text-[17px] font-semibold tracking-wide transition-colors duration-300",
              scrolled ? "text-navy" : "text-cream"
            )}
          >
            GALVIN GROUP
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={cn(
                "text-[15px] font-medium transition-colors duration-200 hover:text-gold",
                scrolled ? "text-ink" : "text-cream/85"
              )}
            >
              {l.label}
            </a>
          ))}
          <Button variant="gold" href="#contact" className="px-5 py-2.5 text-sm">
            Get in touch
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={cn(
            "inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors lg:hidden",
            scrolled ? "text-ink hover:bg-navy/5" : "text-cream hover:bg-cream/10"
          )}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            animate={reduce ? { opacity: 1 } : { opacity: 1, height: "auto" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden border-b border-navy/10 bg-cream/98 backdrop-blur lg:hidden"
          >
            <div className="mx-auto flex w-full max-w-[1180px] flex-col gap-1 px-5 py-4 sm:px-8">
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-3 py-3 text-[16px] font-medium text-ink transition-colors hover:bg-navy/5 hover:text-gold"
                >
                  {l.label}
                </a>
              ))}
              <Button
                variant="gold"
                href="#contact"
                className="mt-2 w-full"
                onClick={() => setOpen(false)}
              >
                Get in touch
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
