import React, { useEffect, useRef } from "react";
import { useShop } from "../context/ShopContext";
import { Search, X, Compass, CornerDownLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const SearchOverlay: React.FC = () => {
  const {
    products,
    searchOpen,
    setSearchOpen,
    searchQuery,
    setSearchQuery,
    setActiveProductId,
    setActiveCollectionId
  } = useShop();

  const inputRef = useRef<HTMLInputElement>(null);

  // Autofocus the input on opening
  useEffect(() => {
    if (searchOpen && inputRef.current) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 300);
    }
  }, [searchOpen]);

  // Filter products for live preview
  const liveResults = searchQuery
    ? products.filter(
        (p) =>
          p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
          p.description.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];

  const handleResultClick = (productId: string) => {
    setActiveProductId(productId);
    setSearchOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickTagClick = (tag: string, type: "category" | "collection") => {
    setSearchQuery(tag);
    if (type === "collection") {
      setActiveCollectionId(tag);
    }
    
    // Auto scroll down to catalog if tagging
    const target = document.getElementById("catalog-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClear = () => {
    setSearchQuery("");
  };

  return (
    <AnimatePresence>
      {searchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="fixed inset-0 z-50 bg-[#2b241e]/95 backdrop-blur-xl flex flex-col pt-16 px-4 md:px-12 overflow-y-auto"
          id="search-overlay"
        >
          {/* Top Bar Header controls */}
          <div className="max-w-4xl mx-auto w-full flex justify-between items-center pb-6 border-b border-[#a98257]/30">
            <span className="text-[10px] font-mono tracking-[0.3em] text-[#c58b45] uppercase">
              DESERT VAULT QUERY ENGINE
            </span>
            <button
              onClick={() => setSearchOpen(false)}
              className="flex items-center gap-2 text-xs font-mono text-[#e9dfc8] hover:text-[#c58b45] transition-all focus:outline-none cursor-pointer"
              id="close-search-overlay-btn"
            >
              <X className="w-5 h-5" /> CLOSE INDEX
            </button>
          </div>

          {/* Centered Large Input */}
          <div className="max-w-4xl mx-auto w-full mt-12 text-left" id="search-input-section">
            <div className="relative flex items-center border-b-2 border-[#a98257]/40 focus-within:border-[#c58b45] py-4 transition-colors">
              <Search className="w-7 h-7 text-[#c58b45] mr-4 flex-shrink-0" />
              <input
                ref={inputRef}
                type="text"
                placeholder="TYPE TO SCAN VAULTS... (e.g. Sovereign, Ascendant, Pants)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent font-display font-medium text-xl md:text-3xl text-[#e9dfc8] placeholder-gray-600 tracking-wider focus:outline-none uppercase"
                id="search-input-field"
              />
              {searchQuery && (
                <button
                  onClick={handleClear}
                  className="p-1 text-[#e9dfc8] hover:text-[#c58b45] font-mono text-[10px] uppercase border border-[#c58b45]/20 py-1.5 px-3 focus:outline-none cursor-pointer"
                  id="clear-search-btn"
                >
                  CLEAR
                </button>
              )}
            </div>
            <p className="text-[10px] font-mono text-[#a98257]/60 tracking-wider mt-3 flex items-center gap-1.5 justify-end">
              <CornerDownLeft className="w-3.5 h-3.5" /> RESULTS STREAM AUTOMATICALLY ON TERMINAL MATCH
            </p>
          </div>

          {/* Quick suggest tags for user reference */}
          <div className="max-w-4xl mx-auto w-full mt-8 text-left" id="search-suggestions-section">
            <span className="block text-[9px] font-mono tracking-[0.25em] text-gray-500 uppercase mb-3">
              POPULAR DISPATCH SEQUENCES
            </span>
            <div className="flex flex-wrap gap-2.5">
              <button
                onClick={() => handleQuickTagClick("Sovereign", "category")}
                className="px-4 py-2 border border-[#a98257]/20 hover:border-[#c58b45] bg-[#2b241e] text-xs font-mono text-[#e9dfc8] uppercase transition-all duration-300 rounded hover:scale-105 cursor-pointer"
              >
                #Sovereign
              </button>
              <button
                onClick={() => handleQuickTagClick("Ascendant", "category")}
                className="px-4 py-2 border border-[#a98257]/20 hover:border-[#c58b45] bg-[#2b241e] text-xs font-mono text-[#e9dfc8] uppercase transition-all duration-300 rounded hover:scale-105 cursor-pointer"
              >
                #Ascendant
              </button>
              <button
                onClick={() => handleQuickTagClick("Pants", "category")}
                className="px-4 py-2 border border-[#a98257]/20 hover:border-[#c58b45] bg-[#2b241e] text-xs font-mono text-[#e9dfc8] uppercase transition-all duration-300 rounded hover:scale-105 cursor-pointer"
              >
                #Pants
              </button>
              <button
                onClick={() => handleQuickTagClick("Sweater", "category")}
                className="px-4 py-2 border border-[#a98257]/20 hover:border-[#c58b45] bg-[#2b241e] text-xs font-mono text-[#e9dfc8] uppercase transition-all duration-300 rounded hover:scale-105 cursor-pointer"
              >
                #Sweaters
              </button>
              <button
                onClick={() => handleQuickTagClick("archival-tops", "collection")}
                className="px-4 py-2 border border-[#a98257]/20 hover:border-[#c58b45] bg-[#2b241e] text-xs font-mono text-[#c58b45] uppercase transition-all duration-300 rounded hover:scale-105 cursor-pointer"
              >
                #Archival-Tops
              </button>
            </div>
          </div>

          {/* Search results catalog previews */}
          <div className="max-w-4xl mx-auto w-full mt-10 pb-24 text-left text-[#e9dfc8] scrollbar-none" id="search-results-viewport">
            {searchQuery ? (
              <div>
                <span className="block text-[10px] font-mono tracking-[0.2em] text-gray-500 uppercase mb-4">
                  SCAN COMPILATION // {liveResults.length} GARMENTS MATCHED
                </span>
                
                {liveResults.length === 0 ? (
                  <p className="text-sm font-mono text-gray-400 py-4 italic">
                    Zero matching apparel found in the database. Try "Sovereign" or "Flux".
                  </p>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="search-results">
                    {liveResults.map((res) => (
                      <button
                        key={res.id}
                        onClick={() => handleResultClick(res.id)}
                        className="flex gap-4 p-3 bg-[#2b241e] hover:bg-[#2b241e]/50 border border-[#a98257]/20 hover:border-[#c58b45] transition-all text-left w-full focus:outline-none cursor-pointer"
                        id={`search-item-${res.id}`}
                      >
                        <div className="w-12 h-16 bg-[#1a1a1a] border border-[#a98257]/20 flex-shrink-0">
                          <img
                            src={res.images[0]}
                            alt="result cover"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <div className="flex-grow flex flex-col justify-center">
                          <span className="text-[9px] font-mono text-[#c58b45] uppercase block tracking-wider">
                            {res.category}
                          </span>
                          <h4 className="text-xs font-bold font-display uppercase tracking-wider text-white">
                            {res.title}
                          </h4>
                          <p className="text-[10px] text-gray-400 line-clamp-1 mt-0.5">
                            {res.shortDescription}
                          </p>
                        </div>
                        <span className="font-mono text-xs text-[#c58b45] flex-shrink-0 self-center">
                          {res.currencySymbol}{res.price}
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <div className="py-12 text-center text-gray-500 font-mono text-xs" id="no-active-query">
                <Compass className="w-10 h-10 text-[#a98257]/50 mx-auto mb-3 animate-spin" style={{ animationDuration: '6s' }} />
                STANDBY FOR TERMINAL INPUT SEQUENCE...
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
export default SearchOverlay;
