import React from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, Compass, Shield, Award, Landmark } from "lucide-react";
import { motion } from "motion/react";

export const AboutUsPage: React.FC = () => {
  const { setActivePage } = useShop();

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-16 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="about-us-root">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation header */}
        <div className="mb-16 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="about-header">
          <button 
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ca9851] hover:text-[#f3dfbf] transition-colors focus:outline-none uppercase"
            id="back-to-archives-btn"
          >
            <ArrowLeft className="w-4 h-4" /> [ RETURN TO CHAMBER ]
          </button>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851]">SEHRA STORY INDEX // VOL. 01</span>
        </div>

        {/* Brand visual header */}
        <div className="text-center space-y-4 mb-20" id="about-brand-header">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-2"
          >
            <span className="text-xs font-mono tracking-[0.4em] text-[#ca9851] uppercase">Born in the Desert · Made for the World · Est. 2024/2025</span>
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-serif tracking-[0.05em] text-white uppercase font-light leading-tight">
              SEHRA E KHAAS
            </h1>
            <h2 className="text-xs md:text-sm tracking-[0.2em] font-serif text-[#ca9851] uppercase">
              صحراۓ خاص — HERITAGE STREETWEAR. BUILT ON RESTRAINT.
            </h2>
          </motion.div>
          <div className="w-20 h-[1.5px] bg-[#ca9851] mx-auto my-6" />
        </div>

        {/* Narrative Flow */}
        <div className="space-y-16 text-center md:text-left leading-relaxed text-[#e9dfc8]/90 font-light" id="about-story-narrative">
          
          <section className="space-y-4">
            <p className="text-sm md:text-base leading-relaxed tracking-wider">
              Sehra E Khaas is a luxury streetwear brand founded on the belief that true luxury is defined by craftsmanship, exclusivity, and timeless design. We create limited-edition streetwear that blends heritage-inspired artistry with modern fashion — pieces designed to remain relevant beyond seasonal trends.
            </p>
            <p className="text-sm md:text-base leading-relaxed tracking-wider">
              Our collections are crafted with premium materials, meticulous attention to detail, and a commitment to quality over quantity. Every artifact is intentionally created in limited numbers, ensuring rarity, authenticity, and lasting value. Sehra E Khaas is not built for the masses — it is built for individuals who appreciate exceptional craftsmanship, exclusive designs, and luxury streetwear with purpose.
            </p>
            <div className="pt-6 font-serif italic text-white text-lg tracking-wider text-center py-6 border-y border-[#2a2118]/60 my-8">
              "We were never created to follow trends. We were created to leave a legacy."
            </div>
            <div className="text-center text-xs font-mono tracking-[0.25em] text-[#ca9851] pt-1">
              DESIGNED IN PAKISTAN. MADE FOR THE WORLD.
            </div>
          </section>

          {/* THE PHILOSOPHY */}
          <section className="space-y-6 pt-6 border-t border-[#2a2118]/40">
            <h3 className="text-xs font-mono tracking-[0.3em] text-[#ca9851] uppercase text-center block mb-2 font-bold">
              THE PHILOSOPHY — Purpose over excess.
            </h3>
            <p className="text-sm leading-relaxed tracking-wide text-center max-w-2xl mx-auto text-[#e9dfc8]/80">
              In a world driven by fast fashion and endless trends, Sehra E Khaas follows a different path. True luxury is not measured by quantity but by intention, craftsmanship, and permanence. Every collection begins with a simple question: Does this piece deserve to exist? If the answer isn't absolute, it never moves forward. Our commitment is to quality over quantity, exclusivity over mass production, and artifacts over inventory.
            </p>
          </section>

          {/* THE MODEL */}
          <section className="space-y-8 pt-8 border-t border-[#2a2118]/40">
            <h3 className="text-xs font-mono tracking-[0.3em] text-[#ca9851] uppercase text-center block mb-6 font-bold">
              THE MODEL — HOW WE OPERATE
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="bg-[#120f0c] border border-[#2a2118] p-6 rounded hover:border-[#ca9851]/40 transition-colors">
                <span className="text-[10px] font-mono text-[#ca9851] block mb-2 font-bold">i. TWENTY TO FORTY UNITS. NOTHING MORE.</span>
                <p className="text-xs font-sans text-[#e9dfc8]/70 leading-relaxed">
                  This is not a marketing tactic — it is our constitution. The house rule that will never change regardless of demand or how large the house becomes.
                </p>
              </div>

              <div className="bg-[#120f0c] border border-[#2a2118] p-6 rounded hover:border-[#ca9851]/40 transition-colors">
                <span className="text-[10px] font-mono text-[#ca9851] block mb-2 font-bold">ii. NO RESTOCK. NO REVIVAL.</span>
                <p className="text-xs font-sans text-[#e9dfc8]/70 leading-relaxed">
                  When a collection drops, it is available. When it sells, it is archived permanently. No second runs, no "by popular demand" revivals. The story of that collection is sealed the moment the last piece finds its owner.
                </p>
              </div>

              <div className="bg-[#120f0c] border border-[#2a2118] p-6 rounded hover:border-[#ca9851]/40 transition-colors">
                <span className="text-[10px] font-mono text-[#ca9851] block mb-2 font-bold">iii. THE ARCHIVE MODEL.</span>
                <p className="text-xs font-sans text-[#e9dfc8]/70 leading-relaxed">
                  Every drop is a chapter. Every chapter is closed forever once it ends. The archive grows not in volume but in weight — this is fashion to collect, not consume.
                </p>
              </div>

              <div className="bg-[#120f0c] border border-[#2a2118] p-6 rounded hover:border-[#ca9851]/40 transition-colors">
                <span className="text-[10px] font-mono text-[#ca9851] block mb-2 font-bold">iv. ONE OF TWENTY IN THE WORLD.</span>
                <p className="text-xs font-sans text-[#e9dfc8]/70 leading-relaxed">
                  You're not buying a product thousands of others own. You're owning a fragment of a moment that will never repeat itself.
                </p>
              </div>
            </div>
          </section>

          {/* WHAT WE BUILD */}
          <section className="space-y-6 pt-8 border-t border-[#2a2118]/40">
            <h3 className="text-xs font-mono tracking-[0.3em] text-[#ca9851] uppercase text-center block mb-2 font-bold">
              WHAT WE BUILD — LUXURY CRAFT. STREET LANGUAGE.
            </h3>
            <p className="text-sm leading-relaxed tracking-wide text-center">
              Sehra e Khaas lives at the intersection of luxury construction and streetwear culture — premium 500GSM cottons, silk-blend embroideries, and considered silhouettes that speak the raw, expressive, intentional language of the street.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-center">
              <div className="p-4 border border-[#2a2118]/40">
                <span className="text-xs font-mono text-[#ca9851] block mb-2 font-bold">// HERITAGE TEXTURES</span>
                <p className="text-xs text-[#e9dfc8]/60 leading-relaxed"> Fabrics and construction methods from old-world traditions predating fast fashion by centuries.</p>
              </div>
              <div className="p-4 border border-[#2a2118]/40">
                <span className="text-xs font-mono text-[#ca9851] block mb-2 font-bold">// MODERN SILHOUETTES</span>
                <p className="text-xs text-[#e9dfc8]/60 leading-relaxed">Translated into a design language entirely our own.</p>
              </div>
              <div className="p-4 border border-[#2a2118]/40">
                <span className="text-xs font-mono text-[#ca9851] block mb-2 font-bold">// DELIBERATE RESTRAINT</span>
                <p className="text-xs text-[#e9dfc8]/60 leading-relaxed">No excess, no unnecessary noise; every stitch must earn its place or it is removed.</p>
              </div>
            </div>
          </section>

          {/* THE COLLECTOR'S MINDSET */}
          <section className="space-y-4 pt-8 border-t border-[#2a2118]/40 text-center">
            <h3 className="text-xs font-mono tracking-[0.3em] text-[#ca9851] uppercase block mb-2 font-bold">
              THE COLLECTOR'S MINDSET — Crafted for the few. Never for the masses.
            </h3>
            <p className="text-sm text-[#e9dfc8]/80 leading-relaxed max-w-2xl mx-auto">
              Sehra E Khaas is designed for individuals who value exclusivity, craftsmanship, and timeless luxury — collectors who see fashion as an expression of identity, not a passing trend. If you appreciate authentic craftsmanship, exclusive designs, and garments created to endure beyond seasons, you're already part of the philosophy that defines Sehra E Khaas.
            </p>
          </section>

          {/* THE FOUNDER */}
          <section className="space-y-6 pt-10 border-t border-[#2a2118]/40 text-center" id="founder-quote-block">
            <div className="relative inline-block py-2 px-6 bg-[#16120e] border border-[#2a2118] rounded">
              <p className="font-serif italic text-white tracking-widest text-[15px] md:text-lg mb-2">
                "The fashion world had too much noise and not enough discipline."
              </p>
              <span className="text-[10px] font-mono tracking-widest text-[#ca9851] uppercase">
                — Syed Muhammad Bilal, Founder, Sehra e Khaas
              </span>
            </div>
            <p className="text-xs text-[#e9dfc8]/60 font-sans leading-relaxed max-w-md mx-auto">
              Sehra e Khaas was founded by Syed Muhammad Bilal — born from the conviction that luxury needed to return to its roots of meaning and rarity. Every decision within this house, from the strict unit counts to the archive model, reflects a single-minded commitment to building something that deserves to exist.
            </p>
          </section>

          {/* OPENING CHAPTER */}
          <section className="space-y-4 pt-10 border-t border-[#ca9851]/20 text-center bg-[#130f0c] p-8 border rounded">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851] block uppercase font-bold">THE OPENING CHAPTER</span>
            <p className="text-xs md:text-sm text-[#e9dfc8]/80 leading-relaxed max-w-lg mx-auto">
              You are here at the beginning. The pieces available right now are the first this house has ever released into the world. They will never be produced again. When this drop closes, this chapter is sealed.
            </p>
            <div className="pt-4 flex justify-center flex-col items-center gap-1.5 font-serif">
              <span className="text-base text-[#dfc393]">صحراۓ خاص — Sehra e Khaas</span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase">Not for Everyone. Exactly Right for the Few.</span>
            </div>
          </section>

        </div>
        
      </div>
    </div>
  );
};
export default AboutUsPage;
