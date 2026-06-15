import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { X, ArrowRight, ShieldAlert, Award, FileText, Compass, Home } from "lucide-react";
import { motion } from "motion/react";

interface MenuDrawerProps {
  onOpenAdmin: () => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({ onOpenAdmin }) => {
  const {
    menuOpen,
    setMenuOpen,
    collections,
    activeCollectionId,
    setActiveCollectionId,
    setActiveProductId,
    setSearchQuery,
    setActivePage,
    t
  } = useShop();

  if (!menuOpen) return null;

  const handleSelectCollection = (colId: string | null) => {
    setActiveProductId(null);
    setActiveCollectionId(colId);
    setActivePage(null);
    setSearchQuery("");
    setMenuOpen(false);

    // Scroll to products
    const target = document.getElementById("catalog-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReturnHome = () => {
    setActiveProductId(null);
    setActiveCollectionId(null);
    setActivePage(null);
    setSearchQuery("");
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="menu-drawer-overlay">
      {/* Dark background backing */}
      <div
        className="absolute inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={() => setMenuOpen(false)}
      />

      <div className="absolute inset-y-0 left-0 max-w-full flex pr-10" id="side-drawer">
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "tween", duration: 0.35 }}
          className="w-screen max-w-sm bg-[#0d0a08] border-r border-[#261d13] flex flex-col justify-between"
        >
          {/* Menu top bar */}
          <div className="p-6 border-b border-[#1f1710] flex justify-between items-center bg-[#070504]">
            <span className="text-[10px] font-mono tracking-[0.25em] text-[#ca9851] uppercase">
              ARCHIVE MENU TERMINAL
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-1 text-gray-500 hover:text-white focus:outline-none"
              aria-label="Close menu navigation"
              id="close-menu-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Menu contents */}
          <div className="flex-grow overflow-y-auto py-8 px-6 space-y-10 text-left scrollbar-none" id="menu-drawer-body">
            
            {/* Core Destinations links */}
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase block mb-1">
                DISPATCH LOCATIONS
              </span>

              <button
                onClick={handleReturnHome}
                className="group flex items-center justify-between w-full text-left font-display font-medium text-lg text-white hover:text-[#dfc393] uppercase tracking-widest focus:outline-none"
                id="menu-home-btn"
              >
                <span className="flex items-center gap-3">
                  <Home className="w-4 h-4 text-[#ca9851]" />
                  HOME
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0 transition-transform duration-300" />
              </button>

              <button
                onClick={() => handleSelectCollection(null)}
                className="group flex items-center justify-between w-full text-left font-display font-medium text-lg text-white hover:text-[#dfc393] uppercase tracking-widest focus:outline-none"
                id="menu-all-products-btn"
              >
                <span className="flex items-center gap-3">
                  <Compass className="w-4 h-4 text-[#ca9851]" />
                  ALL INVENTORIES
                </span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity translate-x-[-5px] group-hover:translate-x-0 transition-transform duration-300" />
              </button>
            </div>

            {/* Chapters Collections section */}
            <div className="space-y-4">
              <span className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase block mb-1">
                VAULT CHAPTERS
              </span>
              <div className="space-y-2.5">
                {collections.map((col) => {
                  const isCurActive = activeCollectionId === col.id;
                  return (
                    <button
                      key={col.id}
                      onClick={() => handleSelectCollection(col.id)}
                      className={`text-sm tracking-[0.15em] hover:text-white uppercase block w-full text-left py-1 pl-2 border-l transition-all ${
                        isCurActive
                          ? "border-[#ca9851] text-[#ca9851] font-bold"
                          : "border-[#1e1710] text-[#af9f8a] hover:border-gray-500"
                      }`}
                      id={`menu-collection-item-${col.id}`}
                    >
                      {col.title}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Archive Documents section */}
            <div className="space-y-4 pt-4 border-t border-[#1f1710]/40">
              <span className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase block mb-1">
                ARCHIVAL JOURNAL & CODES
              </span>
              <div className="space-y-2">
                <button
                  onClick={() => { setActivePage("about"); setMenuOpen(false); }}
                  className="text-xs tracking-[0.15em] hover:text-[#dfc393] uppercase block w-full text-left py-1 text-[#af9f8a]"
                  id="menu-about-btn"
                >
                  ABOUT THE DESIGN HOUSE
                </button>
                <button
                  onClick={() => { setActivePage("journal"); setMenuOpen(false); }}
                  className="text-xs tracking-[0.15em] hover:text-[#dfc393] uppercase block w-full text-left py-1 text-[#af9f8a]"
                  id="menu-journal-btn"
                >
                  THE HOUSE JOURNAL
                </button>
                <button
                  onClick={() => { setActivePage("faq"); setMenuOpen(false); }}
                  className="text-xs tracking-[0.15em] hover:text-[#dfc393] uppercase block w-full text-left py-1 text-[#af9f8a]"
                  id="menu-faq-btn"
                >
                  ARCHIVE DIALOGUES (FAQ)
                </button>
                <button
                  onClick={() => { setActivePage("returns"); setMenuOpen(false); }}
                  className="text-xs tracking-[0.15em] hover:text-[#dfc393] uppercase block w-full text-left py-1 text-[#af9f8a]"
                  id="menu-returns-btn"
                >
                  RETURNS & EXCHANGE MATRIX
                </button>
              </div>
            </div>

            {/* Designer Storyboard & Legal Credential */}
            <div className="space-y-4 pt-4 border-t border-[#1f1710]/60">
              <span className="text-[9px] font-mono tracking-[0.3em] text-gray-500 uppercase block mb-1">
                DESIGN DIRECTORATE
              </span>
              <div className="flex gap-3 bg-[#130f0c] border border-[#231a10]/50 p-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full border border-[#ca9851]/40 bg-[#2d2216] flex items-center justify-center font-display font-bold text-xs text-[#dfc393]">
                  SB
                </div>
                <div>
                  <p className="text-xs font-bold text-white tracking-wide uppercase">Syed Muhammad Bilal</p>
                  <p className="text-[10px] text-[#af9f8a] font-sans mt-0.5 leading-normal">
                    "Crafting strict geometric apparel for selected souls. A search for silent desert serenity."
                  </p>
                </div>
              </div>
            </div>

            {/* Legal regulatory banner */}
            <div className="bg-[#121110] border border-gray-900/60 p-4 space-y-2 text-left">
              <span className="text-[8px] font-mono tracking-widest text-orange-400 block uppercase">
                ✓ REGULATORY PROTOCOL CERTIFIED
              </span>
              <p className="text-[9px] font-mono text-gray-400 font-light leading-normal">
                REGISTERED ENTITY:<br />
                <strong className="text-[#dfc393]">SEHRA E KHAAS SMC PRIVATE LIMITED</strong><br />
                REGISTRATION NO. 0319046<br />
                GOVERNED UNDER SECURITIES EXCHANGE LAWS OF PAKISTAN. SHIPS EXCLUSIVELY WORLDWIDE VIA DHL CORRIDORS.
              </p>
            </div>
          </div>

          {/* Secure access dashboard trigger */}
          <div className="p-6 border-t border-[#1f1710] bg-[#070504]">
            <button
              onClick={() => {
                setMenuOpen(false);
                onOpenAdmin();
              }}
              className="w-full py-3 border border-dashed border-[#ca9851]/40 hover:border-[#ca9851] text-xs font-mono tracking-[0.2em] text-[#ca9851] hover:text-[#f8ebd4] bg-[#16110b]/50 hover:bg-[#1a140d]/40 transition-colors uppercase flex items-center justify-center gap-2 cursor-pointer"
              id="admin-dashboard-access-btn"
            >
              <ShieldAlert className="w-4 h-4 text-[#ca9851] animate-pulse" />
              REGISTRY CONTROL BOARD
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default MenuDrawer;
