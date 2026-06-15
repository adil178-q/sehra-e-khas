import React from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, Library, Anchor, Award, FileText } from "lucide-react";
import { motion } from "motion/react";

export const JournalPage: React.FC = () => {
  const { setActivePage } = useShop();

  const protocols = [
    {
      id: "01",
      title: "Clandestine Sourcing",
      desc: "We develop our own 500GSM French Terry, woven specifically to hold its architectural shape for a lifetime, providing a structural silhouette that refuses to degrade.",
      icon: <Anchor className="w-6 h-6 text-[#ca9851]" />,
      tag: "FABRIC DEV"
    },
    {
      id: "02",
      title: "The Artisan Forge",
      desc: "Our embroidery is a marathon of precision. Each piece spends over 18 hours under the needle of a master artisan, utilizing metallic gilded silk threads.",
      icon: <Library className="w-6 h-6 text-[#ca9851]" />,
      tag: "CRAFT LABOR"
    },
    {
      id: "03",
      title: "Sovereign Limits",
      desc: "Exclusivity is our mandate. We strictly forge 200 units per blueprint. When a run is complete, the design is sunsetted, entering our archive permanently.",
      icon: <Award className="w-6 h-6 text-[#ca9851]" />,
      tag: "SUPPLY CEILING"
    },
    {
      id: "04",
      title: "Physical Registry",
      desc: "Ownership is documented. Every physical artifact carries an individual serial number, connecting the owner to the manufacturing record of the House.",
      icon: <FileText className="w-6 h-6 text-[#ca9851]" />,
      tag: "LEDGER SYNC"
    }
  ];

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-16 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="journal-root">
      <div className="max-w-4xl mx-auto">
        
        {/* Navigation header */}
        <div className="mb-16 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="journal-header">
          <button 
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ca9851] hover:text-[#f3dfbf] transition-colors focus:outline-none uppercase"
            id="back-to-archives-btn"
          >
            <ArrowLeft className="w-4 h-4" /> [ RETURN TO CHAMBER ]
          </button>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851]">JOURNAL ACCESS PROTOCOL: JP-41</span>
        </div>

        {/* Title Heading */}
        <div className="text-center space-y-4 mb-20" id="journal-title-block">
          <span className="text-xs font-mono tracking-[0.4em] text-[#ca9851] uppercase">CHRONICLES & CRAFTSMANSHIP DISPATCHES</span>
          <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-6xl font-serif tracking-tight text-white uppercase font-light leading-none">
            THE HOUSE JOURNAL
          </h1>
          <div className="w-16 h-[1.5px] bg-[#ca9851] mx-auto my-6" />
          <p className="mt-4 text-xs md:text-sm text-[#e9dfc8]/60 font-light max-w-xl mx-auto leading-relaxed">
            Examine the operational procedures, sourcing metrics, and extreme textile discipline and limitations that define the creation of our permanent design editions.
          </p>
        </div>

        {/* Introduction */}
        <div className="p-8 border border-[#2a2118] bg-[#120f0c] text-center space-y-4 mb-16 rounded" id="journal-intro">
          <span className="text-xs font-mono tracking-[0.3em] text-[#ca9851] block uppercase font-bold">EVERY ARTIFACT TELLS A STORY</span>
          <p className="text-xs md:text-sm text-[#e9dfc8]/80 leading-relaxed font-light max-w-2xl mx-auto">
            At Sehra E Khaas, we create more than luxury streetwear — we create lasting artifacts. Every piece is crafted through a meticulous design process, premium materials, and exceptional attention to detail. From the first sketch to the final stitch, each artifact is designed to embody exclusivity, quality, and permanence. We don't simply produce garments — we forge limited-edition pieces that become part of a legacy.
          </p>
          <div className="text-[11px] font-mono text-[#ca9851] uppercase tracking-widest pt-2">
            DESIGNED IN PAKISTAN. MADE FOR THE WORLD.
          </div>
        </div>

        {/* Protocols Steps */}
        <div className="space-y-12" id="journal-protocols">
          <div className="text-center md:text-left border-b border-[#2a2118] pb-4 mb-8">
            <span className="text-[11px] font-mono tracking-widest text-[#ca9851] uppercase block mb-1">CRAFT MANIFESTO</span>
            <h2 className="text-xl md:text-2xl font-serif text-white uppercase tracking-widest">PRODUCTION MANIFESTO & SYSTEM PROTOCOLS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {protocols.map((pt, index) => (
              <motion.div
                key={pt.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#120f0c] border border-[#2a2118] p-6 rounded relative hover:border-[#ca9851]/40 transition-colors flex flex-col justify-between"
                id={`protocol-card-${pt.id}`}
              >
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-[#ca9851] font-bold tracking-widest bg-[#ca9851]/10 px-2 py-1 rounded">
                      PROTOCOL {pt.id}
                    </span>
                    <span className="text-[9px] font-mono tracking-widest text-gray-500 uppercase font-semibold">
                      {pt.tag}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-[#ca9851]/5 border border-[#ca9851]/20 rounded">
                      {pt.icon}
                    </div>
                    <h3 className="text-lg font-serif text-white tracking-wider uppercase font-medium">
                      {pt.title}
                    </h3>
                  </div>

                  <p className="text-xs md:text-sm text-[#e9dfc8]/70 leading-relaxed font-light">
                    {pt.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#2a2118]/60 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>REG SYSTEM STATUS: ACTIVE</span>
                  <span className="text-[#ca9851] font-bold">100% VERIFIED</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Footer closing block */}
        <div className="mt-20 pt-12 border-t border-[#2a2118] text-center" id="journal-footer-signoff">
          <span className="text-2xl font-serif tracking-widest text-white uppercase block mb-1">صحراۓ خاص</span>
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#ca9851] uppercase font-semibold">
            ESTABLISHED MULTI-TERRITORY HERITAGE PRESERVATION
          </span>
        </div>

      </div>
    </div>
  );
};
export default JournalPage;
