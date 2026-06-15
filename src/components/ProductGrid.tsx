import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Product } from "../types";
import { ShoppingBag, Eye, Heart, RotateCcw } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProductGrid: React.FC = () => {
  const {
    products,
    activeCollectionId,
    setActiveCollectionId,
    searchQuery,
    setSearchQuery,
    setActiveProductId,
    addToCart,
    collections
  } = useShop();

  const [activeSizeSelectors, setActiveSizeSelectors] = useState<{ [productId: string]: boolean }>({});
  const [hoveredProduct, setHoveredProduct] = useState<string | null>(null);

  // Filter logic
  const filteredProducts = products.filter((prod) => {
    const matchesCollection = activeCollectionId ? prod.collectionId === activeCollectionId : true;
    const matchesSearch = searchQuery
      ? prod.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.description.toLowerCase().includes(searchQuery.toLowerCase())
      : true;
    return matchesCollection && matchesSearch;
  });

  const handleAddToCart = (e: React.MouseEvent, product: Product, size: string) => {
    e.stopPropagation();
    addToCart(product, size, 1);
    // Hide picker
    setActiveSizeSelectors((prev) => ({ ...prev, [product.id]: false }));
  };

  const toggleSizeSelector = (e: React.MouseEvent, productId: string) => {
    e.stopPropagation();
    setActiveSizeSelectors((prev) => ({
      ...prev,
      [productId]: !prev[productId]
    }));
  };

  const handleCardClick = (productId: string) => {
    setActiveProductId(productId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleClearFilters = () => {
    setActiveCollectionId(null);
    setSearchQuery("");
  };

  const activeCollection = collections.find((c) => c.id === activeCollectionId);

  return (
    <section className="py-12 sm:py-16 px-4 md:px-12 bg-soft-desert-mist border-t border-burnished-dune/20" id="catalog-section">
      <div className="max-w-7xl mx-auto">
        
        {/* Dynamic Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6" id="grid-header">
          <div className="text-left">
            <span className="text-[10px] md:text-xs font-mono tracking-[0.25em] text-copper-gold uppercase mb-2 block">
              {activeCollectionId ? `COLLECTION // ${activeCollection?.subtitle}` : "READY FOR DIRECT CONVEYANCE"}
            </span>
            <h2 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-desert-obsidian uppercase select-none font-light leading-none">
              {activeCollectionId ? `${activeCollection?.title}` : "THE ARCHIVE DIRECTORY"}
            </h2>
            <div className="w-16 h-[1.5px] bg-copper-gold mt-4" />
          </div>

          {/* Filters summary / indicators */}
          {(activeCollectionId || searchQuery) && (
            <button
              onClick={handleClearFilters}
              className="flex items-center gap-2 px-4 py-2 bg-desert-obsidian text-[10px] font-mono tracking-[0.2em] text-moon-sand uppercase hover:bg-burnished-dune transition-all duration-300 rounded cursor-pointer"
              id="clear-filters-btn"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset Filters [{filteredProducts.length} items]
            </button>
          )}
        </div>

        {/* Empty state visual */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-24 border border-burnished-dune/20 bg-white shadow-sm p-8" id="empty-state">
            <span className="inline-block text-burnished-dune text-6xl font-serif mb-4">ø</span>
            <h3 className="text-lg font-mono tracking-[0.2em] text-desert-obsidian uppercase mb-2">No Garments Detected</h3>
            <p className="text-xs text-deep-charcoal/70 max-w-md mx-auto leading-relaxed mb-6 font-light">
              We couldn't cross-reference any items with your current variables. Reset your selectors to browse active vaults.
            </p>
            <button
              onClick={handleClearFilters}
              className="inline-flex items-center justify-center py-3 px-6 bg-gradient-to-r from-copper-gold to-burnished-dune text-white font-mono text-xs tracking-[0.2em] transition-all uppercase rounded font-bold shadow-md hover:scale-[1.02]"
              id="empty-reset-btn"
            >
              RESTORE REGISTRY
            </button>
          </div>
        )}

        {/* Regular Interactive Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16" id="product-grid">
          {filteredProducts.map((prod) => {
            const isSizePickerOpen = !!activeSizeSelectors[prod.id];
            const isHovered = hoveredProduct === prod.id;
            const percentageUsed = Math.round(( (prod.unitsTotal - prod.unitsLeft) / prod.unitsTotal ) * 100);

            const img1 = prod.images[0];
            const img2 = prod.images[1] || prod.images[0];
            const sizesToRender = prod.availableSizes || ["L", "XL"];

            return (
              <motion.div
                key={prod.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5 }}
                onMouseEnter={() => setHoveredProduct(prod.id)}
                onMouseLeave={() => {
                  setHoveredProduct(null);
                  setActiveSizeSelectors((prev) => ({ ...prev, [prod.id]: false }));
                }}
                className="group relative flex flex-col justify-between"
                id={`product-card-${prod.id}`}
              >
                <div onClick={() => handleCardClick(prod.id)} className="cursor-pointer flex flex-col h-full justify-between">
                  {/* Image Holder with dynamic cross-fade */}
                  <div className="relative w-full aspect-[3/4] overflow-hidden bg-[#e0d6c5] border border-burnished-dune/20 transition-all duration-700 rounded neon-glow-gold">
                    
                    {/* Badge flags */}
                    <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
                      {prod.isNewArrival && (
                        <span className="bg-desert-obsidian/95 text-[#f8f5ee] text-[8px] font-mono tracking-[0.25em] py-1 px-2.5 uppercase shadow-md font-bold">
                          NEW DROP
                        </span>
                      )}
                    </div>

                    {/* Animated "ORDER NOW" corner badge */}
                    <motion.div
                      className="absolute top-3 right-3 z-10 bg-gradient-to-r from-copper-gold to-burnished-dune text-white text-[8px] font-mono tracking-[0.2em] py-1 px-2.5 uppercase shadow-lg font-bold rounded border border-white/20"
                      animate={{
                        scale: [1, 1.06, 1],
                        boxShadow: [
                          "0 4px 6px -1px rgba(169, 130, 87, 0.2), 0 2px 4px -1px rgba(169, 130, 87, 0.1)",
                          "0 10px 15px -3px rgba(169, 130, 87, 0.5), 0 4px 6px -2px rgba(169, 130, 87, 0.3)",
                          "0 4px 6px -1px rgba(169, 130, 87, 0.2), 0 2px 4px -1px rgba(169, 130, 87, 0.1)"
                        ]
                      }}
                      transition={{
                        duration: 2.2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      ORDER NOW
                    </motion.div>

                    {/* Image Hover Switcheroo */}
                    <div className="absolute inset-0 z-0">
                      <img
                        src={img1}
                        alt={prod.title}
                        className={`w-full h-full object-cover transition-all duration-[1s] ease-out pointer-events-none ${
                          isHovered ? "opacity-0 scale-102" : "opacity-100 scale-100"
                        } filter brightness-[0.95]`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                      <img
                        src={img2}
                        alt={`${prod.title} Alt view`}
                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1s] ease-out pointer-events-none ${
                          isHovered ? "opacity-100 scale-103" : "opacity-0 scale-98"
                        } filter brightness-100`}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="absolute inset-0 bg-black/5 group-hover:bg-black/15 transition-colors duration-500" />

                    {/* Floating quick eyes action button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                      <div className="bg-desert-obsidian border border-copper-gold text-white p-3 rounded-full shadow-lg transform translate-y-3 group-hover:translate-y-0 transition-transform duration-300">
                        <Eye className="w-5 h-5 stroke-[1.5]" />
                      </div>
                    </div>

                    {/* Overlaid size options drawer inside the image block */}
                    <AnimatePresence>
                      {isSizePickerOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 15 }}
                          transition={{ duration: 0.25 }}
                          className="absolute inset-x-0 bottom-1 bg-desert-obsidian/95 backdrop-blur-md border-t border-burnished-dune/30 py-4 px-3 flex flex-col items-center justify-center z-30"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <span className="text-[9px] font-mono text-copper-gold tracking-[0.25em] uppercase mb-2">
                            IDENTIFY SIZE NEED
                          </span>
                          <div className="flex gap-2 w-full justify-center">
                            {sizesToRender.map((size) => (
                              <button
                                key={size}
                                onClick={(e) => handleAddToCart(e, prod, size)}
                                className="flex-grow py-2 bg-[#44382e] hover:bg-copper-gold text-white hover:text-desert-obsidian transition-colors text-[10px] font-mono tracking-wider font-bold uppercase border border-[#a98257]/30 cursor-pointer"
                                id={`quick-size-${prod.id}-${size.replace(/\s+/g, "-")}`}
                              >
                                {size}
                              </button>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Typography information area */}
                  <div className="mt-5 text-left flex-grow flex flex-col justify-between">
                    <div>
                      {/* Sub specs */}
                      <div className="flex items-center justify-between text-[10px] font-mono tracking-wider text-copper-gold uppercase mb-1.5">
                        <span>{prod.category}</span>
                      </div>

                      {/* Title */}
                      <h3 className="text-md font-bold font-display tracking-[0.05em] text-desert-obsidian group-hover:text-copper-gold uppercase transition-colors duration-300">
                        {prod.title}
                      </h3>
                      
                      {/* Short excerpt description */}
                      <p className="text-[11px] text-deep-charcoal/70 font-sans tracking-[0.02em] line-clamp-2 mt-1 leading-relaxed">
                        {prod.shortDescription}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between pt-3 border-t border-burnished-dune/20">
                      <span className="text-base font-mono tracking-wide text-desert-obsidian font-bold">
                        {prod.currencySymbol}
                        {prod.price.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Add to Cart Button with requested gold gradient style */}
                <div className="mt-4">
                  <button
                    onClick={(e) => toggleSizeSelector(e, prod.id)}
                    className={`w-full py-3 px-4 border text-[10px] font-mono tracking-[0.25em] uppercase transition-all duration-300 flex items-center justify-center gap-2 rounded cursor-pointer ${
                      isSizePickerOpen
                        ? "bg-desert-obsidian border-copper-gold text-white"
                        : "bg-gradient-to-r from-copper-gold to-burnished-dune hover:from-desert-obsidian hover:to-desert-obsidian border-transparent text-white hover:text-[#e9dfc8] shadow-md font-bold"
                    }`}
                    id={`add-to-cart-grid-btn-${prod.id}`}
                  >
                    <ShoppingBag className="w-3.5 h-3.5 stroke-[1.8]" />
                    {isSizePickerOpen ? "CLOSE SELECTION" : "ADD TO CART"}
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default ProductGrid;
