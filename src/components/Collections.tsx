import React from "react";
import { useShop } from "../context/ShopContext";
import { motion } from "motion/react";

export const Collections: React.FC = () => {
  const { collections, activeCollectionId, setActiveCollectionId, setActiveProductId } = useShop();

  const handleSelectCollection = (id: string) => {
    setActiveProductId(null);
    setActiveCollectionId(activeCollectionId === id ? null : id);
    
    // Smooth scroll down to products grid
    const target = document.getElementById("catalog-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="py-12 sm:py-16 px-4 md:px-12 bg-soft-desert-mist text-deep-charcoal" id="featured-collections-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Title */}
        <div className="flex flex-col items-center text-center mb-10" id="collections-heading">
          <span className="text-[10px] md:text-xs font-mono tracking-[0.3em] text-copper-gold uppercase mb-3 font-semibold">
            ARCHIVE DIVISION CHANNELS
          </span>
          <h2 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-desert-obsidian uppercase select-none font-light leading-none">
            SELECT INVENTORIES
          </h2>
          <div className="w-16 h-[1.5px] bg-copper-gold mt-4 mb-3" />
          <p className="max-w-md text-xs md:text-sm text-deep-charcoal/70 tracking-wide font-light leading-relaxed">
            Each seasonal drop represents a non-repeatable design iteration. Tap a chapter card below to focus your terminal lens.
          </p>
        </div>

        {/* 3 Column Grid with high spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12" id="collections-grid-container">
          {collections.map((col, index) => {
            const isSelected = activeCollectionId === col.id;
            return (
              <motion.div
                key={col.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex"
              >
                <button
                  onClick={() => handleSelectCollection(col.id)}
                  className={`group relative w-full flex flex-col text-left focus:outline-none border transition-all duration-500 h-[480px] lg:h-[540px] overflow-hidden rounded neon-glow-gold ${
                    isSelected
                      ? "border-copper-gold bg-white shadow-[0_12px_45px_rgba(43,36,30,0.25)] ring-[1px] ring-copper-gold"
                      : "border-burnished-dune/25 bg-white"
                  }`}
                  id={`collection-card-${col.id}`}
                >
                  {/* Top Serial Banner Tag */}
                  <div className="px-5 py-4 border-b border-burnished-dune/10 flex justify-between items-center bg-soft-desert-mist text-[9px] font-mono tracking-[0.25em] text-copper-gold z-10 w-full uppercase font-semibold">
                    <span>{col.subtitle}</span>
                    <span className={isSelected ? "text-copper-gold font-bold" : "text-gray-400"}>
                      {isSelected ? "● FILTER ENGAGED" : "SELECT DIVISION"}
                    </span>
                  </div>

                  {/* Body Image Slot */}
                  <div className="relative flex-grow overflow-hidden bg-neutral-200">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] ease-out scale-100 group-hover:scale-105 group-focus:scale-105 filter brightness-[0.85] contrast-[1.02]"
                      style={{ backgroundImage: `url(${col.image})` }}
                    />
                    
                    {isSelected && (
                      <div className="absolute inset-0 border-2 border-copper-gold pointer-events-none z-10" />
                    )}
                  </div>

                  {/* Footer Context Info */}
                  <div className="p-6 relative bg-white border-t border-burnished-dune/10 flex flex-col transition-colors duration-500 group-hover:bg-soft-desert-mist/30 z-10 w-full min-h-[160px]">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-copper-gold uppercase mb-1.5 font-bold">
                      VOLUME 0{index + 1}
                    </span>
                    <h3 className="text-xl font-bold font-display tracking-[0.05em] text-desert-obsidian uppercase group-hover:text-copper-gold transition-colors duration-300">
                      {col.title}
                    </h3>
                    
                    {/* Golden accent bar */}
                    <div className="w-8 h-[1.5px] bg-copper-gold my-3.5 transition-all duration-500 group-hover:w-16" />

                    <p className="text-xs text-deep-charcoal/75 font-sans tracking-wide leading-relaxed line-clamp-2">
                      {col.description}
                    </p>
                  </div>
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
export default Collections;
