import React from "react";
import { Nav } from "@/components/sections/Nav";
import { Hero } from "@/components/sections/Hero";
import { Socials } from "@/components/sections/Socials";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { Pillars } from "@/components/sections/Pillars";
import { BuyBox } from "@/components/sections/BuyBox";
import { Club } from "@/components/sections/Club";
import { Deal } from "@/components/sections/Deal";
import { Media } from "@/components/sections/Media";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-ink antialiased">
      <Nav />
      <main>
        <Hero />
        <Socials />
        <Stats />
        <About />
        <Pillars />
        <BuyBox />
        <Club />
        <Deal />
        <Media />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
