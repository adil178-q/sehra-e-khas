import React, { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, BookOpen, Compass, Shield, Award, Mail } from "lucide-react";

export const BrandFAQPage: React.FC = () => {
  const { setActivePage } = useShop();
  const [activeSection, setActiveSection] = useState("about");

  const sections = [
    { id: "about", label: "01. ABOUT THE BRAND" },
    { id: "archive", label: "02. THE ARCHIVE MODEL" },
    { id: "quality", label: "03. PRODUCTS & QUALITY" },
    { id: "shipping", label: "04. ORDERS & SHIPPING" },
    { id: "returns", label: "05. RETURNS & EXCHANGES" },
    { id: "sizing", label: "06. SIZING & FIT" },
    { id: "pricing", label: "07. PAYMENT & PRICING" },
    { id: "care", label: "08. CARE & MAINTENANCE" },
    { id: "resale", label: "09. AUTHENTICITY & RESALE" },
    { id: "philosophy", label: "10. PHILOSOPHY & FUTURE" }
  ];

  const faqData = {
    about: [
      { q: "What does 'Sehra e Khaas' mean?", a: "Sehra e Khaas (صحراۓ خاص) translates from Urdu as 'The Special Desert' or 'The Royal Wilderness'. It represents an architectural clothing sanctuary birthed in dry, shifting landscapes, focusing on severe aesthetic discipline and quiet design restraint." },
      { q: "Who founded the brand, and where is it located?", a: "Sehra e Khaas was founded by Syed Muhammad Bilal to establish an alternative to trend-chasing fashion. Our executive headquarters, atelier, and crafting looms are entirely based in Pakistan, routing historic South Asian textile mastery directly to a worldwide high-fashion audience." },
      { q: "Is this a typical hype streetwear brand?", a: "Absolutely not. We actively reject the 'hype' taxonomy. We do not manufacture synthetic FOMO, collaborate for trend clout, or market extensively. Rather, we practice deliberate restraint, offering extremely limited physical artifacts to selected collectors who share our design philosophy." },
    ],
    archive: [
      { q: "What is your strict unit limit?", a: "Our constitution dictates that we strictly forge between 20 to 40 units per design. This is an unbreakable house rule. We will never duplicate, expand, or restock a model, regardless of market demand or commercial scaling potential." },
      { q: "Will you ever restock or revive an archived item?", a: "Never. No second runs, no 'by popular demand' revivals. When a drop finds its designated owners, the blueprint is incinerated and the collection is stored in our physical lockbox forever. Each item represents a non-repeatable design iteration." },
      { q: "What is the Archive Drop Model?", a: "Every drop represents a chronological chapter. Once a chapter is fully acquired, it is sealed. The archive grows not in industrial mass-inventory, but in chronological collector weight." }
    ],
    quality: [
      { q: "Where do we build our clothes?", a: "All construction takes place under master craft supervision in Pakistan, using old-world traditions of hand-finishing paired with heavy-engineered weaving machines. Our loopback cottons are custom-knitted for our house." },
      { q: "Do you have any physical storefronts?", a: "No. Sehra e Khaas operates exclusively online at www.sehra-e-khaas.com. We bypassed the physical retail footprint entirely to devote 100% of our resources directly to raw materials and artisan sewing wages." },
      { q: "How is sustainability integrated into our production?", a: "By refusing to produce mass-inventories, we boast a literal 0% raw-fabric landfill footprint. Our anti-waste model matches supply perfectly with demand, crafting only what will be permanently gathered into collectors' chests." }
    ],
    shipping: [
      { q: "Where do you ship from, and does it go worldwide?", a: "We ship directly from our central depot in Pakistan. We deliver globally to virtually all major countries through our express DHL cargo courier lanes." },
      { q: "What is the order processing and delivery schedule?", a: "We require 2 to 5 business days to verify, handle, and securely wrap your purchase in double-box custom packaging. Once DHL claims the parcel, global delivery typically sweeps across intermediate networks to land at your doorstep in 3 to 7 business days." },
      { q: "Who handles international customs duties and tariffs?", a: "All regional import taxes, customs, or border clearance fees are determined by the laws of the importing country. These are the absolute legal responsibility of the purchasing collector." }
    ],
    returns: [
      { q: "What are your rules for returns and exchanges?", a: "We maintain a final-sale policy to verify authenticity. Returns are strictly accommodated for defective items, wrong shipments, or where local statutory rights (such as EU Distance Selling rules) override house rules. Please refer to our full Return Policy (Page A) for a step-by-step breakdown." },
      { q: "How do I report a manufacturing defect?", a: "If an item arrives with a stitching, embroidery, or fabric blemish, notify customer care within 48 hours of delivery at support@sehra-e-khaas.com with high-res photographs for prompt resolution." }
    ],
    sizing: [
      { q: "How do Sehra-e-Khaas garments fit?", a: "Our silhouettes feature an intentional, architectural, oversized drape. They are tailored with broad shoulders and structured body proportions to hold a geometric form. We recommend purchasing your standard sizing to achieve the designer's intended oversized look, or sizing down once if you prefer a standard fitted cut." },
      { q: "Do you have a sizing chart?", a: "Yes. Sizing charts are integrated directly into our product pages, highlighting exact chest width, length, and drop-shoulder dimensions for Size I, Size II, Size III, and Size IV." }
    ],
    pricing: [
      { q: "What currency do you transact in?", a: "All pricing and calculations on www.sehra-e-khaas.com are processed in United States Dollars (USD). Payment is encrypted securely via PCI DSS compliant gateways." },
      { q: "Do you offer sale periods, promo codes, or loyalty discount cards?", a: "No. True luxury materials demand fixed cost structures. We do not offer seasonal discounts, black friday sales, or membership point structures. Our prices reflect the direct raw cost of artisan manufacturing and premium packaging. The value of our pieces only appreciates once archived." }
    ],
    care: [
      { q: "How should I clean and preserve my 500GSM garment?", a: "To conserve the high-density print and metallic silk-blend embroidery, wash the garment inside out in cold water using delicate settings. Do not tumble dry under any circumstance—always lay flat on a drying rack away from harsh sunlight to prevent architectural warping." }
    ],
    resale: [
      { q: "Can I resell my Sehra e Khaas piece?", a: "Yes. Each item carries an individual serial number linked to our global ledger, allowing verifying collectors on secondary markets to confirm its genuine heritage. We do not host a proprietary buyback program, keeping transactions purely peer-to-peer." }
    ],
    philosophy: [
      { q: "What is the future of Sehra e Khaas?", a: "We believe fashion can regain its sacred rarity. Our future is rooted in keeping our strict limits on production volumes. No matter how large the house becomes, we will never exceed 40 units per item. Restraint is our legacy." }
    ]
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="brand-faq-root">
      <div className="max-w-7xl mx-auto">
        
        {/* Back navigation header */}
        <div className="mb-12 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="faq-header">
          <button 
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ca9851] hover:text-[#f3dfbf] transition-colors focus:outline-none uppercase"
            id="back-to-archives-btn"
          >
            <ArrowLeft className="w-4 h-4" /> [ RETURN TO CHAMBER ]
          </button>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851]">BRAND FAQ DOCUMENT // v2.6.FA</span>
        </div>

        {/* Hero Title Container */}
        <div className="mb-16 text-center md:text-left" id="faq-title-block">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851] uppercase block mb-3 font-semibold">HOUSE ENQUIRIES CENTRAL</span>
          <h1 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-white uppercase font-light leading-none">
            THE ARCHIVE DIALOGUES / FAQ
          </h1>
          <div className="w-16 h-[1.5px] bg-[#ca9851] my-4 inline-block md:block" />
          <p className="text-xs md:text-sm text-[#e9dfc8]/60 font-light max-w-xl leading-relaxed">
            The house rules, operating structures, and philosophical core of Sehra e Khaas. Explore our structured matrix to understand the mechanics of a true archive model.
          </p>
        </div>

        {/* Dynamic Dual Grid: Left TOC, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="faq-body-layout">
          
          {/* Table of Contents - Left Rail (Sticky for Desktop) */}
          <aside className="lg:col-span-3 hidden lg:block" id="faq-left-aside">
            <div className="sticky top-28 bg-[#120f0c] border border-[#2a2118] p-6 rounded" id="toc-container">
              <h2 className="text-[10px] font-mono tracking-[0.25em] text-[#ca9851] uppercase mb-6 border-b border-[#2a2118] pb-3 font-bold">
                FAQ SECTIONS
              </h2>
              <ul className="space-y-4">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-xs font-mono tracking-wider block transition-colors uppercase ${
                        activeSection === sec.id 
                          ? "text-[#ca9851] font-bold" 
                          : "text-[#e9dfc8]/50 hover:text-white"
                      }`}
                      id={`toc-link-${sec.id}`}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4 border-t border-[#2a2118]/80 text-[9px] font-mono text-gray-500 leading-relaxed uppercase">
                Support Desk access:<br />
                <a href="mailto:support@sehra-e-khaas.com" className="text-[#ca9851] hover:underline">support@sehra-e-khaas.com</a>
              </div>
            </div>
          </aside>

          {/* FAQ Text Block - Right Column */}
          <main className="lg:col-span-9 space-y-16" id="faq-main-content">
            
            {/* Render each section dynamically with beautiful styling */}
            {sections.map((sec, index) => {
              const faqsFromSec = faqData[sec.id as keyof typeof faqData] || [];
              return (
                <section key={sec.id} id={sec.id} className="scroll-mt-28 space-y-6">
                  <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                    <span className="text-xs font-mono font-bold text-[#ca9851] bg-[#ca9851]/10 px-3 py-1.5 rounded">
                      VOLUME 0{index + 1}
                    </span>
                    <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">{sec.label.replace(/^\d+\.\s*/, "")}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {faqsFromSec.map((faq, i) => (
                      <div key={i} className="bg-[#120f0c] border border-[#2a2118]/70 p-6 rounded hover:border-[#ca9851]/30 transition-all duration-300">
                        <h4 className="text-sm md:text-base font-semibold text-white uppercase tracking-wider mb-2.5 flex items-start gap-2">
                          <span className="text-[#ca9851] font-mono">Q.</span> {faq.q}
                        </h4>
                        <p className="text-xs md:text-sm text-[#e9dfc8]/70 leading-relaxed font-light pl-5 border-l border-[#2a2118]">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                    {faqsFromSec.length === 0 && (
                      <p className="text-xs text-[#e9dfc8]/40 italic">Section update in progress by House Archivists...</p>
                    )}
                  </div>
                </section>
              );
            })}

          </main>
        </div>
        
      </div>
    </div>
  );
};
export default BrandFAQPage;
