import React from "react";
import { motion } from "motion/react";
import { Instagram, Facebook, Link2, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export const SocialHub: React.FC = () => {
  const channels = [
    {
      name: "Official Site",
      handle: "Sehra-e-Khaas Direct",
      link: "#",
      icon: ShieldCheck,
      labelText: "LAUNCH PORTAL SECURE",
      description: "Our core immersive digital database, catalog index, & archival order vault.",
      bgImage: "https://i.postimg.cc/pdgMjWrL/6F-scaled.jpg"
    },
    {
      name: "Instagram",
      handle: "@sehraekhaas.official",
      link: "https://www.instagram.com/sehraekhaas.official/",
      icon: Instagram,
      labelText: "CONNECT INSTAGRAM",
      description: "Visual index of editorial desert campaigns & prototype logs.",
      bgImage: "https://i.postimg.cc/6P0YpP6G/High-end-luxury-fashion-202604161059-scaled.jpg"
    },
    {
      name: "TikTok",
      handle: "@sehraekhaas.official",
      link: "https://www.tiktok.com/@sehraekhaas.official",
      icon: Sparkles,
      labelText: "LAUNCH TIKTOK REELS",
      description: "Cinematic movement studies of ergonomic drape fabrics under desert action.",
      bgImage: "https://i.postimg.cc/WzgKggKF/4F-scaled-(1).jpg"
    },
    {
      name: "Facebook Messenger",
      handle: "m.me/sehraekhaas.official",
      link: "https://m.me/sehraekhaas.official",
      icon: Facebook,
      labelText: "COMMENCE CONCIERGE",
      description: "Collector communication dispatch network. Order allocations processed instantly.",
      bgImage: "https://i.postimg.cc/CxqZD1LY/detail-2-1-scaled.jpg"
    }
  ];

  return (
    <section className="bg-desert-obsidian py-12 sm:py-16 px-4 md:px-8 border-t border-[#a98257]/10 text-left" id="social-hub-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#c58b45] uppercase block">
              SECURE CHANNELS
            </span>
            <h2 className="text-2xl md:text-3xl font-serif text-[#e9dfc8] mt-2 font-light">
              ARCHIVE BROADCAST SYNDICATE
            </h2>
          </div>
          <p className="text-xs font-mono text-gray-500 max-w-xs uppercase">
            - ALL DEDICATED CHANNEL HYPERLINKS ARE ENCLOSED WITHIN THEIR DESIGNATED CARD CARRIERS
          </p>
        </div>

        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {channels.map((chan, idx) => {
            const IconComponent = chan.icon;
            return (
              <motion.a
                key={chan.name}
                href={chan.link}
                target={chan.link === "#" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative overflow-hidden group border border-[#a98257]/20 p-6 flex flex-col justify-between h-72 bg-[#120f0d] transition-all duration-300 hover:border-[#ca9851] shadow-lg rounded-none text-left"
                id={`social-card-${idx}`}
                onClick={(e) => {
                  if (chan.link === "#") {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
              >
                {/* Background asset vignette */}
                <div className="absolute inset-0 opacity-15 group-hover:opacity-25 transition-opacity duration-500 pointer-events-none">
                  <img
                    src={chan.bgImage}
                    alt={chan.name}
                    className="w-full h-full object-cover grayscale brightness-50"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=400";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0907] via-transparent to-[#0a0907]/90" />
                </div>

                {/* Top Corner link indicator */}
                <div className="flex justify-between items-center relative z-10 pointer-events-none">
                  <div className="p-2.5 bg-[#201811] border border-[#a98257]/30 text-[#c58b45] group-hover:text-white group-hover:bg-[#c58b45] transition-all rounded-full">
                    <IconComponent className="w-4 h-4" />
                  </div>
                  <Link2 className="w-3.5 h-3.5 text-gray-600 group-hover:text-[#c58b45] transition-colors" />
                </div>

                {/* Bottom Details & Integrated Inner Button */}
                <div className="relative z-10 space-y-2 pt-6 pointer-events-none">
                  <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block font-bold">
                    {chan.name.toUpperCase()}
                  </span>
                  <h3 className="font-display font-black text-sm text-[#e9dfc8] group-hover:text-white tracking-widest uppercase truncate">
                    {chan.handle}
                  </h3>
                  <p className="text-[11px] text-gray-400 font-light leading-snug">
                    {chan.description}
                  </p>
                  
                  {/* Embedded Inner Button - Ensures Link Is Inside The Box */}
                  <div className="mt-4 pt-3 border-t border-[#ca9851]/10 flex justify-between items-center text-[9px] font-mono tracking-widest text-[#ca9851] group-hover:text-white transition-colors uppercase font-bold">
                    <span>{chan.labelText}</span>
                    <ArrowRight className="w-3 h-3 translate-x-0 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialHub;
