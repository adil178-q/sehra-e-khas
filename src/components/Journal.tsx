import React from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, CornerRightDown } from "lucide-react";

export const Journal: React.FC = () => {
  return (
    <section className="bg-desert-obsidian py-12 sm:py-16 px-4 md:px-8 overflow-hidden text-left relative" id="brand-journal">
      {/* Visual background atmospheric lights */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 rounded-full bg-[#c58b45]/10 blur-[120px] -translate-y-1/2 pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#a98257]/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-[10px] sm:text-xs font-mono tracking-[0.3em] text-[#c58b45] uppercase flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#c58b45]" />
            THE JOURNAL // LOG 009
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-[#e9dfc8] mt-2 max-w-2xl font-light leading-tight">
            The Cold Tranquility & Shifting Dunes of Pakistan
          </h2>
          <div className="w-20 h-[1px] bg-[#a98257]/30 mt-6" />
        </div>

        {/* Editorial Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Large Cover Image Column */}
          <div className="lg:col-span-6 relative group">
            <div className="absolute -inset-1.5 bg-gradient-to-r from-[#c58b45]/20 to-[#a98257]/20 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-1000" />
            <div className="relative overflow-hidden aspect-[4/5] bg-neutral-900 border border-[#a98257]/30 rounded neon-glow-gold">
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                src="https://i.postimg.cc/qRjHg8PT/High-end-fashion-editorial-202604161054-scaled.jpg"
                alt="Sehra-e-Khaas Raw Editorial Desert Shoot"
                className="w-full h-full object-cover grayscale brightness-90 contrast-105"
                referrerPolicy="no-referrer"
              />
              {/* Image floating badge */}
              <div className="absolute bottom-6 left-6 bg-[#2b241e]/90 backdrop-blur-md py-3 px-5 border border-[#a98257]/30 text-left">
                <span className="font-mono text-[9px] tracking-[0.2em] text-[#c58b45] uppercase block">
                  COORDINATE
                </span>
                <span className="font-display font-medium text-xs tracking-widest text-[#e9dfc8] uppercase">
                  THAR DESERT // ARCHIVE 26
                </span>
              </div>
            </div>
          </div>

          {/* Right Narrative Text Column */}
          <div className="lg:col-span-6 space-y-8 flex flex-col justify-center">
            <div className="space-y-4">
              <span className="text-[10px] font-mono text-[#a98257] tracking-[0.15em] uppercase flex items-center gap-1.5">
                <CornerRightDown className="w-3.5 h-3.5 text-[#c58b45]" />
                FOUNDER DIRECTIVE // SYED MUHAMMAD BILAL
              </span>
              <h3 className="text-2xl font-serif text-[#e9dfc8] tracking-wide font-normal">
                "Not for everyone. Exactly right for the few."
              </h3>
            </div>

            <div className="text-sm md:text-base text-[#e9dfc8]/80 space-y-5 leading-relaxed font-light tracking-wide">
              <p>
                Sehra-e-Khaas (صحراۓ خاص) is not an apparel manufacturer. It is a research project dedicated to documenting the spatial textures of Pakistan’s grand deserts. Within the heavy folds of 450 GSM organic loopback cotton, we preserve the weight of the night sand.
              </p>
              <p>
                Each silhouette undergoes manual physical adjustments across multiple sample iterations until achieving the ultimate architectural drape. We use zero-tension industrial weaving mechanisms that permit raw cotton fibers to breathe, establishing a structural chassis that naturally conforms to your movement.
              </p>
              <p className="italic border-l border-[#c58b45] pl-4 text-[#e9dfc8] leading-relaxed">
                "We destroy our embroidery plates, pigment matrices, and fabric formulas the moment a drop reaches its threshold of 20 to 100 units. To create clothing that lasts means treating each run like an irreplaceable artifact."
              </p>
            </div>

            {/* Micro stats banner */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#a98257]/20">
              <div>
                <span className="block font-mono text-[#c58b45] text-lg font-semibold tracking-tight">
                  100%
                </span>
                <span className="text-[10px] font-mono text-[#e9dfc8]/60 uppercase tracking-widest">
                  Pakistan Sourced
                </span>
              </div>
              <div>
                <span className="block font-mono text-[#c58b45] text-lg font-semibold tracking-tight">
                  450 GSM
                </span>
                <span className="text-[10px] font-mono text-[#e9dfc8]/60 uppercase tracking-widest">
                  Heavyweight Cotton
                </span>
              </div>
              <div>
                <span className="block font-mono text-[#c58b45] text-lg font-semibold tracking-tight">
                  CAPPED
                </span>
                <span className="text-[10px] font-mono text-[#e9dfc8]/60 uppercase tracking-widest">
                  Destroyed Plates
                </span>
              </div>
            </div>

          </div>

        </div>

        {/* Cinematic horizontal highlight quote */}
        <div className="mt-24 pt-12 border-t border-[#a98257]/20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex gap-4 items-center">
            <span className="w-12 h-[1px] bg-[#c58b45] hidden md:block" />
            <p className="font-mono text-xs text-[#e9dfc8]/60 tracking-wider">
              RECIRCULATIONS // DISPATCHED GLOBALLY VIA PREMIUM DHL EXPRESS INTEGRATION
            </p>
          </div>
          <motion.div
            whileHover={{ x: 6 }}
            className="flex items-center gap-2 text-xs font-mono text-[#c58b45] hover:text-[#e9dfc8] transition-colors cursor-pointer"
            onClick={() => {
              const target = document.getElementById("catalog-section");
              if (target) target.scrollIntoView({ behavior: "smooth" });
            }}
          >
            ENTER THE DESERT CATALOGUE <ArrowRight className="w-4 h-4" />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default Journal;
