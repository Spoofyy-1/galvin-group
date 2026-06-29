"use client";
import React from "react";
import { Instagram, Linkedin, Mail, Phone } from "lucide-react";
import { PERSON, CONTACT } from "@/data/galvin";

const QUICK_LINKS = [
  { label: "About", href: "#about" },
  { label: "Strategy", href: "#strategy" },
  { label: "The Club", href: "#club" },
  { label: "Active Deal", href: "#deal" },
  { label: "Contact", href: "#contact" },
];

const SOCIAL_LINKS = [
  { icon: Instagram, href: CONTACT.instagram, label: "Instagram" },
  { icon: Linkedin, href: CONTACT.linkedin, label: "LinkedIn" },
  { icon: Mail, href: CONTACT.emailHref, label: "Email" },
  { icon: Phone, href: CONTACT.phoneHref, label: "Phone" },
];

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream">
      <div className="mx-auto max-w-[1180px] px-5 py-14 sm:px-8">
        {/* TOP — brand */}
        <div className="flex flex-col gap-5 border-b border-cream/12 pb-10 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Galvin Group" className="h-9 w-9" />
            <span className="font-display text-[20px] tracking-tight text-cream">
              GALVIN GROUP
            </span>
          </div>
          <p className="max-w-[44ch] text-[14px] text-cream/60 md:text-right">
            {PERSON.mission}
          </p>
        </div>

        {/* MIDDLE — links + socials */}
        <div className="flex flex-col gap-8 py-10 md:flex-row md:items-center md:justify-between">
          <nav className="flex flex-wrap gap-x-7 gap-y-3">
            {QUICK_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[14px] font-medium text-cream/70 transition-colors hover:text-gold"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-cream/15 text-cream/70 transition-colors hover:border-gold hover:text-gold"
                >
                  <Icon size={18} strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </div>

        {/* BOTTOM — copyright + disclaimer */}
        <div className="flex flex-col gap-3 border-t border-cream/12 pt-8 text-[12px] text-cream/50 md:flex-row md:items-start md:justify-between">
          <p>© 2026 Galvin Group</p>
          <p className="max-w-[60ch] md:text-right">
            Educational only — not investment advice. Real estate involves risk.
            Investment club administered via Fractional Homes Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
