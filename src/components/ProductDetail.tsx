import React, { useState, useEffect, useRef } from "react";
import { useShop } from "../context/ShopContext";
import { Product } from "../types";
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  ShoppingBag,
  Star,
  Truck,
  ShieldCheck,
  ChevronDown,
  ArrowLeft,
  User,
  Clock,
  Volume2
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const ProductDetail: React.FC = () => {
  const {
    activeProductId,
    setActiveProductId,
    products,
    reviews,
    addToCart,
    addReview
  } = useShop();

  const product = products.find((p) => p.id === activeProductId);
  
  if (!product) {
    return (
      <div className="py-24 text-center bg-soft-desert-mist text-desert-obsidian" id="product-detail-not-found">
        <p className="font-mono text-xs">ARCHIVE IDENTIFIER CORRUPT</p>
        <button onClick={() => setActiveProductId(null)} className="mt-4 px-6 py-2 bg-desert-obsidian text-white rounded">
          RETURN HOME
        </button>
      </div>
    );
  }

  const [activeImageIdx, setActiveImageIdx] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [selectedSize, setSelectedSize] = useState("");

  const numberWords: Record<number, string> = {
    1: "ONE",
    2: "TWO",
    3: "THREE",
    4: "FOUR",
    5: "FIVE",
    6: "SIX",
    7: "SEVEN",
    8: "EIGHT",
    9: "NINE",
    10: "TEN"
  };
  const getNumWord = (num: number) => numberWords[num] || num.toString();

  // Accordion tabs
  const [activeTab, setActiveTab] = useState<"specs" | "materials" | "care" | "shipping">("specs");

  // Review states
  const [reviewName, setReviewName] = useState("");
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewComment, setReviewComment] = useState("");

  const [recentlyViewed, setRecentlyViewed] = useState<Product[]>([]);
  const [showStickyBar, setShowStickyBar] = useState(false);
  
  const mainBuyBtnRef = useRef<HTMLButtonElement>(null);

  // Default to first size on load
  useEffect(() => {
    const sizes = product.availableSizes || (product.sizeGuide && product.sizeGuide.length > 0 ? product.sizeGuide.map(s => s.size) : []);
    if (sizes.length > 0) {
      setSelectedSize(sizes[0]);
    }
    setActiveImageIdx(0);
  }, [product.id]);

  // Track scroll position for sticky header
  useEffect(() => {
    const handleScroll = () => {
      if (mainBuyBtnRef.current) {
        const rect = mainBuyBtnRef.current.getBoundingClientRect();
        setShowStickyBar(rect.bottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [product.id]);

  // Track recently viewed products
  useEffect(() => {
    try {
      const savedStr = localStorage.getItem("sehra_recent_viewed") || "[]";
      const saved: string[] = JSON.parse(savedStr);
      const updatedList = [product.id, ...saved.filter(id => id !== product.id)].slice(0, 4);
      localStorage.setItem("sehra_recent_viewed", JSON.stringify(updatedList));

      const matches = products.filter(p => updatedList.includes(p.id) && p.id !== product.id);
      setRecentlyViewed(matches);
    } catch (e) {
      console.warn("Storage warning for recent viewed:", e);
    }
  }, [product.id, products]);

  const handleNextImage = () => {
    setActiveImageIdx((prev) => (prev + 1) % product.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIdx((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  const handleAddToCart = () => {
    addToCart(product, selectedSize, 1);
  };

  const submitReviewForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reviewComment.trim()) return;
    addReview(product.id, reviewName, reviewRating, reviewComment);
    setReviewName("");
    setReviewComment("");
    setReviewRating(5);
  };

  const productReviews = reviews.filter((r) => r.verified);
  const relatedProducts = products.filter((p) => p.collectionId === product.collectionId && p.id !== product.id);
  const sizesToSelect = product.availableSizes || ["L", "XL"];

  return (
    <div className="bg-soft-desert-mist min-h-screen text-deep-charcoal pb-24" id="product-detail-page">
      
      {/* Dynamic Nav Header Bar */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6 flex items-center justify-between border-b border-burnished-dune/20" id="detail-nav-header">
        <button
          onClick={() => setActiveProductId(null)}
          className="flex items-center gap-2.5 text-xs font-mono tracking-[0.25em] uppercase text-desert-obsidian hover:text-copper-gold transition-colors focus:outline-none cursor-pointer font-bold"
          id="back-to-archives-btn"
        >
          <ArrowLeft className="w-4 h-4 translate-y-[-1px]" />
          BACK TO HOME
        </button>
      </div>

      {/* Main Split Layout */}
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16" id="detail-grid">
        
        {/* LEFT ASPECT: High-end Cinematic Image Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4" id="gallery-container">
          <div className="relative aspect-[3/4] overflow-hidden bg-[#e0d6c5] border border-burnished-dune/20 rounded shadow-md neon-glow-gold" id="main-active-image-frame">
            {/* Gallery badge */}
            {product.images.length > 1 && (
              <span className="absolute top-4 left-4 z-10 bg-desert-obsidian/95 text-white text-[9px] font-mono tracking-[0.2em] py-1 px-3 uppercase font-medium">
                ANGLE {getNumWord(activeImageIdx + 1)} OF {getNumWord(product.images.length)}
              </span>
            )}

            {/* Animated "ORDER NOW" corner badge */}
            <motion.div
              className="absolute bottom-4 left-4 z-10 bg-gradient-to-r from-copper-gold to-burnished-dune text-white text-[10px] font-mono tracking-[0.25em] py-1.5 px-4 uppercase shadow-lg font-bold rounded border border-white/20"
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

            {/* Full View text with magnifier badge */}
            <button
               onClick={() => setZoomOpen(true)}
               className="absolute top-4 right-4 z-10 bg-desert-obsidian/95 border border-copper-gold/30 text-white py-1 px-3 font-mono text-[9px] tracking-[0.2em] uppercase transition-colors focus:outline-none cursor-pointer flex items-center gap-1.5 rounded"
               aria-label="Maximize image view"
               id="maximize-image-btn"
            >
              <Maximize2 className="w-3 h-3" /> FULL VIEW
            </button>

            {/* Double slash tap to rotate matrix badge */}
            {product.images.length > 1 && (
              <span className="absolute bottom-4 right-4 z-10 bg-desert-obsidian/85 backdrop-blur-sm text-copper-gold text-[8px] font-mono tracking-[0.11em] py-1.5 px-3 uppercase border border-copper-gold/15 rounded select-none pointer-events-none">
                // TAP TO ROTATE THROUGH MATRIX
              </span>
            )}

            {/* Active image cross-fade animate */}
            <AnimatePresence mode="wait">
              <motion.img
                key={activeImageIdx}
                src={product.images[activeImageIdx]}
                alt={`${product.title} Display Angle`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="w-full h-full object-cover filter brightness-[0.98] cursor-pointer"
                onClick={() => setActiveImageIdx((prev) => (prev + 1) % product.images.length)}
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>

            {/* Carousels navigation arrows */}
            {product.images.length > 1 && (
              <>
                <button
                   onClick={handlePrevImage}
                   className="absolute left-3 top-1/2 -translate-y-1/2 bg-desert-obsidian/80 hover:bg-copper-gold text-white hover:text-desert-obsidian p-2 border border-burnished-dune/30 transition-all focus:outline-none cursor-pointer"
                   aria-label="Previous view angle"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                   onClick={handleNextImage}
                   className="absolute right-3 top-1/2 -translate-y-1/2 bg-desert-obsidian/80 hover:bg-copper-gold text-white hover:text-desert-obsidian p-2 border border-burnished-dune/30 transition-all focus:outline-none cursor-pointer"
                   aria-label="Next view angle"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </>
            )}
          </div>

          {/* Thumbnail slider deck below */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto py-1 scrollbar-none" id="thumbnail-strip">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative flex-shrink-0 w-20 md:w-24 aspect-[3/4] border transition-all duration-300 rounded overflow-hidden ${
                    activeImageIdx === idx
                      ? "border-copper-gold ring-[1px] ring-copper-gold/50"
                      : "border-burnished-dune/20 hover:border-copper-gold/40"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.title} slide thumbnail ${idx}`}
                    className="w-full h-full object-cover filter brightness-[0.8] hover:brightness-100"
                    referrerPolicy="no-referrer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* RIGHT ASPECT: Premium Product Narrative & Details */}
        <div className="lg:col-span-5 flex flex-col text-left justify-between gap-6" id="product-meta-block">
          <div className="space-y-4">
            {/* Category and specs header */}
            <div className="flex items-center gap-2 text-[10px] md:text-xs font-mono tracking-[0.25em] text-copper-gold uppercase font-bold">
              <span>{product.category}</span>
              <span>/</span>
              <span>DROP LIMIT SPEC XX</span>
            </div>

            {/* Product Luxury Title */}
            <h1 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-desert-obsidian uppercase leading-tight font-light select-none">
              {product.title}
            </h1>

            {/* Price block */}
            <div className="flex items-baseline gap-4 pt-1">
              <span className="text-xl xs:text-2xl md:text-3xl font-mono text-desert-obsidian font-bold">
                {product.currencySymbol}
                {product.price.toLocaleString()}
              </span>
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#c58b45] uppercase bg-[#c58b45]/10 py-1 px-3 border border-copper-gold/20 font-bold rounded">
                EXCLUSIVE DROP UNITS
              </span>
            </div>

            <div className="w-20 h-[1.5px] bg-copper-gold pt-0.5" />
          </div>

          {/* Narrative description */}
          <div className="border-t border-b border-burnished-dune/20 py-6 space-y-4">
            <p className="text-sm text-deep-charcoal/80 leading-relaxed font-light font-sans tracking-wide">
              {product.description}
            </p>

            {/* Advanced Extra Story support from request */}
            {product.extraStory && (
              <div className="bg-desert-obsidian p-5 rounded border border-copper-gold/20 text-[#e9dfc8] space-y-3">
                <span className="text-[10px] font-mono text-copper-gold tracking-widest uppercase block flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" /> EXTRA STORY // TRANSMISSION CODE
                </span>
                <p className="text-xs font-serif leading-relaxed italic opacity-90">
                  "{product.extraStory}"
                </p>
              </div>
            )}

            {/* Exclusivity indices and units count */}
            <div className="flex flex-col gap-2.5 pt-3 text-xs font-mono text-copper-gold tracking-wider">
              <div className="flex justify-between border-b border-burnished-dune/10 pb-1.5">
                <span>ARCHIVAL HOUSE CODE:</span>
                <span className="text-desert-obsidian font-bold uppercase">SEHRA-E-KHAAS</span>
              </div>
              <div className="flex justify-between pb-1.5">
                <span>DIRECTOR SUPERVISION:</span>
                <span className="text-desert-obsidian font-bold uppercase">SYED MUHAMMAD BILAL</span>
              </div>
            </div>
          </div>

          {/* Sizing Interactive selector block */}
          <div className="space-y-3">
            <div className="flex justify-between items-center text-[10px] font-mono tracking-[0.2em] text-copper-gold uppercase font-bold">
              <span>SELECT DESIRED SIZE SILHOUETTE</span>
              <a href="#size-guide" className="underline hover:text-desert-obsidian transition-colors">
                MEASURINGS GUIDE
              </a>
            </div>

            <div className="grid grid-cols-2 gap-3" id="detail-size-selectors">
              {sizesToSelect.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`py-3.5 px-4 text-xs font-mono tracking-[0.2em] uppercase transition-all duration-300 flex flex-col items-center justify-center border rounded cursor-pointer ${
                      isSelected
                        ? "bg-desert-obsidian border-copper-gold text-white font-bold"
                        : "bg-white border-burnished-dune/20 hover:border-copper-gold text-deep-charcoal"
                    }`}
                  >
                    <span>SIZE {size}</span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main action container */}
          <div className="space-y-4 pt-4">
            <button
              ref={mainBuyBtnRef}
              onClick={handleAddToCart}
              className="w-full py-4.5 bg-gradient-to-r from-copper-gold via-burnished-dune to-copper-gold transition-all duration-300 hover:brightness-110 text-white font-display font-black text-xs tracking-[0.3em] uppercase shadow-[0_8px_30px_rgba(169,130,87,0.3)] flex items-center justify-center gap-2.5 rounded cursor-pointer"
              id="detail-main-add-to-cart-btn"
            >
              <ShoppingBag className="w-5 h-5" />
              ADD TO CART
            </button>
            <p className="text-[10px] font-mono text-center tracking-[0.08em] text-gray-500 uppercase">
              * TRANSACTION ENCRYPTED. EACH SHIPPED PACKAGE CARRIES HAND-STAMPED PACKAGING SERIALS.
            </p>
          </div>

          {/* Dynamic Technical Tabs Panel */}
          <div className="border border-burnished-dune/20 bg-white shadow-sm rounded overflow-hidden mt-2" id="detail-info-tabs">
            <div className="flex border-b border-burnished-dune/10 text-[9px] md:text-[10.5px] font-mono tracking-wider text-desert-obsidian uppercase">
              <button
                onClick={() => setActiveTab("specs")}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === "specs" ? "bg-desert-obsidian text-white font-bold" : "hover:bg-soft-desert-mist/50"
                }`}
              >
                SPECS
              </button>
              <button
                onClick={() => setActiveTab("materials")}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === "materials" ? "bg-desert-obsidian text-white font-bold" : "hover:bg-soft-desert-mist/50"
                }`}
              >
                MATERIALS
              </button>
              <button
                onClick={() => setActiveTab("care")}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === "care" ? "bg-desert-obsidian text-white font-bold" : "hover:bg-soft-desert-mist/50"
                }`}
              >
                CARE
              </button>
              <button
                onClick={() => setActiveTab("shipping")}
                className={`flex-1 py-3 text-center transition-colors cursor-pointer ${
                  activeTab === "shipping" ? "bg-desert-obsidian text-white font-bold" : "hover:bg-soft-desert-mist/50"
                }`}
              >
                SHIPPING
              </button>
            </div>

            <div className="p-5 text-left text-xs text-deep-charcoal/80 font-sans tracking-wide leading-relaxed min-h-[140px]" id="info-tab-content">
              {activeTab === "specs" && (
                <ul className="list-disc pl-4 space-y-2 font-mono text-[11px] text-desert-obsidian">
                  {product.specifications.map((spec, i) => (
                    <li key={i}>{spec}</li>
                  ))}
                </ul>
              )}
              {activeTab === "materials" && (
                <p className="font-light">{product.materials}</p>
              )}
              {activeTab === "care" && (
                <ul className="list-disc pl-4 space-y-1.5 font-light">
                  {product.care.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
              {activeTab === "shipping" && (
                <div className="space-y-3 font-light text-[11px]">
                  <p>
                    <strong className="text-desert-obsidian uppercase font-mono">Domestic Delivery PK:</strong> Complimentary express safe handoff courier. Arrives fully insured within 2 to 3 days.
                  </p>
                  <p>
                    <strong className="text-desert-obsidian uppercase font-mono">DHL Global Courier:</strong> Dynamic live express global transit at a flat surcharge rate of $30. Complete real-time tracking numbers dispatched instantly.
                  </p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>

      {/* COMPONENT: Physical geometry dimensions guide section */}
      <section className="border-t border-burnished-dune/20 py-16 px-4 md:px-8 bg-white" id="size-guide">
        <div className="max-w-4xl mx-auto text-left">
          <span className="text-[10px] font-mono tracking-[0.3em] text-copper-gold uppercase block mb-1 text-center font-bold">
            GEOMERTRY BLUEPRINT
          </span>
          <h3 className="text-2xl font-serif text-desert-obsidian text-center font-light mb-8">
            PHYSICAL DIMENSIONS SCHEMA
          </h3>
          
          <div className="overflow-x-auto border border-burnished-dune/20 rounded">
            <table className="w-full text-left font-mono text-[11px] text-deep-charcoal">
              <thead>
                <tr className="bg-desert-obsidian text-white border-b border-burnished-dune/20 text-[10px] uppercase tracking-wider">
                  <th className="py-4 px-5">SIZE SYMBOL</th>
                  <th className="py-4 px-5">CHEST MATRIX (PIT-TO-PIT / WAIST)</th>
                  <th className="py-4 px-5">FRONT LENGTH ELEMENT</th>
                  <th className="py-4 px-5">SLEEVE / SHOULDER RATIO</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-burnished-dune/10">
                {product.sizeGuide.map((row) => (
                  <tr key={row.size} className="hover:bg-soft-desert-mist/40 transition-colors">
                    <td className="py-4 px-5 font-bold text-desert-obsidian">{row.size}</td>
                    <td className="py-4 px-5 font-light">{row.chest}</td>
                    <td className="py-4 px-5 font-light">{row.length}</td>
                    <td className="py-4 px-5 font-light">{row.shoulder}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[10px] text-gray-400 font-mono text-center mt-4">
            * Measuring parameters are logged flat. Streetwear cuts feature comfortable relaxed silhouette offsets.
          </p>
        </div>
      </section>

      {/* COMPONENT: Client submission testimony */}
      <section className="border-t border-burnished-dune/20 py-20 px-4 md:px-8 bg-[#fbf9f5]" id="product-reviews-section">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            
            {/* Reviews display */}
            <div className="md:col-span-7 flex flex-col gap-6 text-left">
              <h3 className="text-xl font-serif tracking-wide text-desert-obsidian font-light mb-2 uppercase">
                VERIFIED COLLECTOR ESSAYS
              </h3>

              <div className="flex flex-col gap-4">
                {productReviews.length === 0 ? (
                  <p className="text-xs font-mono text-gray-400 italic py-6">
                    No logs or testimonies recorded for this specific piece yet.
                  </p>
                ) : (
                  productReviews.map((rev) => (
                    <div key={rev.id} className="p-5 border border-burnished-dune/10 bg-white rounded shadow-sm flex flex-col gap-3">
                      <div className="flex justify-between items-center bg-soft-desert-mist px-3 py-1.5 text-[9px] font-mono tracking-wider text-desert-obsidian uppercase border-b border-burnished-dune/10">
                        <span className="flex items-center gap-1.5 font-bold">
                          <User className="w-3.5 h-3.5 text-copper-gold" /> {rev.author}
                        </span>
                        <span>{rev.date}</span>
                      </div>
                      
                      <div className="flex gap-1 justify-start">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(rev.rating) ? "text-copper-gold fill-copper-gold" : "text-gray-200"
                            }`}
                          />
                        ))}
                      </div>

                      <p className="text-xs font-light text-deep-charcoal italic tracking-wide">
                        "{rev.comment}"
                      </p>

                      <span className="text-[8px] font-mono text-copper-gold uppercase tracking-widest flex items-center gap-1 justify-end">
                        <ShieldCheck className="w-3 h-3" /> VERIFIED CODE DISPATCH RECORDED
                      </span>
                    </div>
                  ))
                )}
              </div>
            </div>

            {/* Testimonial Form write-up */}
            <div className="md:col-span-5 p-6 border border-burnished-dune/20 bg-white rounded shadow-sm text-left">
              <h4 className="text-xs font-mono tracking-[0.15em] text-copper-gold uppercase mb-5 text-center font-bold">
                RECORDER TESTIMONY Log
              </h4>

              <form onSubmit={submitReviewForm} className="flex flex-col gap-4">
                <div>
                  <label className="text-[9px] font-mono tracking-widest uppercase block text-desert-obsidian mb-1.5 font-bold">
                    ARCHIVIST FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Syed Bilal K."
                    value={reviewName}
                    onChange={(e) => setReviewName(e.target.value)}
                    className="w-full bg-soft-desert-mist border border-burnished-dune/20 text-xs font-mono p-3 focus:outline-none focus:border-copper-gold rounded text-desert-obsidian placeholder-gray-400"
                  />
                </div>

                <div>
                  <label className="text-[9px] font-mono tracking-widest uppercase block text-desert-obsidian mb-1.5 font-bold">
                    GRADE RATINGS
                  </label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((stars) => (
                      <button
                        key={stars}
                        type="button"
                        onClick={() => setReviewRating(stars)}
                        className="p-0.5 focus:outline-none cursor-pointer"
                      >
                        <Star
                          className={`w-5 h-5 ${
                            stars <= reviewRating ? "text-copper-gold fill-copper-gold" : "text-gray-200"
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="text-[9px] font-mono tracking-widest uppercase block text-desert-obsidian mb-1.5 font-bold font-mono">
                    WITNESS LOG STATEMENT
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Elaborate on structural draping, GSM weights, embroidery accuracy, or DHL delivery courier packaging..."
                    value={reviewComment}
                    onChange={(e) => setReviewComment(e.target.value)}
                    className="w-full bg-soft-desert-mist border border-burnished-dune/20 text-xs font-sans p-3 focus:outline-none focus:border-copper-gold rounded text-deep-charcoal placeholder-gray-400 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-copper-gold to-burnished-dune text-white font-mono text-[10px] tracking-[0.25em] font-black uppercase transition-all rounded shadow hover:brightness-110 cursor-pointer"
                >
                  TRANSMIT ENTRY
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

      {/* COMPONENT: Related Products */}
      {relatedProducts.length > 0 && (
        <section className="border-t border-burnished-dune/10 py-20 px-4 md:px-8 bg-white" id="related-products">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-copper-gold uppercase block mb-1 font-bold">
              DESIGN GENEALOGY
            </span>
            <h3 className="text-xl md:text-2xl font-serif text-desert-obsidian uppercase mb-12 font-light">
              CORRELATIVE CONVEYANCES
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.slice(0, 4).map((rel) => (
                <div
                  key={rel.id}
                  onClick={() => {
                    setActiveProductId(rel.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="group cursor-pointer text-left flex flex-col border border-burnished-dune/25 bg-soft-desert-mist/30 p-3 transition-all duration-300 rounded hover:border-copper-gold hover:shadow-md"
                  id={`related-card-${rel.id}`}
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-neutral-100 rounded mb-3.5 relative shadow-sm">
                    <img
                      src={rel.images[0]}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-[1s]"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <span className="text-[9px] font-mono tracking-wider text-copper-gold uppercase font-bold">{rel.category}</span>
                  <h4 className="text-xs font-bold font-display tracking-tight text-desert-obsidian group-hover:text-copper-gold uppercase mt-1 truncate">
                    {rel.title}
                  </h4>
                  <span className="text-xs font-mono text-desert-obsidian mt-2 block font-semibold">{rel.currencySymbol}{rel.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* COMPONENT: Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <section className="border-t border-burnished-dune/15 py-16 px-4 md:px-8 bg-soft-desert-mist" id="recently-viewed-products">
          <div className="max-w-7xl mx-auto text-center">
            <span className="text-[10px] font-mono tracking-[0.3em] text-gray-400 uppercase block mb-1">
              CHRONOLOGY SECURE VAULT
            </span>
            <h3 className="text-xs uppercase font-mono tracking-[0.2em] text-desert-obsidian mb-10 font-bold">
              Your Recently Eyed Archives
            </h3>

            <div className="flex gap-6 overflow-x-auto pb-4 justify-start md:justify-center scrollbar-none animate-fade-in" id="recent-viewed-list">
              {recentlyViewed.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setActiveProductId(item.id);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="flex-shrink-0 w-40 text-left cursor-pointer group"
                >
                  <div className="aspect-[3/4] w-full overflow-hidden bg-white border border-burnished-dune/20 rounded mb-2 group-hover:border-copper-gold transition-colors shadow-sm">
                    <img
                      src={item.images[0]}
                      alt={item.title}
                      className="w-full h-full object-cover filter brightness-[0.9] group-hover:brightness-100 transition-all"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <h4 className="text-xs font-mono font-bold tracking-wider text-desert-obsidian truncate uppercase group-hover:text-copper-gold">
                    {item.title}
                  </h4>
                  <span className="text-[10px] font-mono text-copper-gold font-bold">{item.currencySymbol}{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Fullscreen Magnifier Zoom overlay */}
      <AnimatePresence>
        {zoomOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#000000fb] flex flex-col justify-between p-4"
          >
            <div className="flex justify-between items-center py-3 text-white border-b border-white/10">
              <span className="text-[9px] font-mono tracking-widest text-copper-gold uppercase">
                DETAIL SPECIES {getNumWord(activeImageIdx + 1)} OF {getNumWord(product.images.length)}
              </span>
              <button
                onClick={() => setZoomOpen(false)}
                className="flex items-center gap-2 text-xs font-mono text-copper-gold hover:text-white focus:outline-none cursor-pointer"
              >
                <Minimize2 className="w-4 h-4" />
              </button>
            </div>

            <div 
              className="flex-grow flex items-center justify-center relative cursor-pointer" 
              onClick={() => setActiveImageIdx((prev) => (prev + 1) % product.images.length)}
              title="Click/Tap image to rotate through matrix"
            >
              <img
                src={product.images[activeImageIdx]}
                alt="Detailed vector element"
                className="max-w-full max-h-[75vh] object-contain filter saturate-[0.98]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Dynamic Slide-Up Sticky Bar */}
      <AnimatePresence>
        {showStickyBar && (
          <motion.div
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 80, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed bottom-0 inset-x-0 bg-desert-obsidian text-white py-3.5 px-4 md:px-8 z-30 flex items-center justify-between border-t border-copper-gold/30 shadow-2xl"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-13 bg-neutral-950 border border-copper-gold/20 hidden sm:block rounded overflow-hidden">
                <img
                  src={product.images[0]}
                  alt="small preview sticky"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-left">
                <h4 className="text-xs font-bold tracking-wider text-white uppercase font-display max-w-[130px] md:max-w-xs truncate">
                  {product.title}
                </h4>
                <div className="flex items-center gap-2 text-[10px] font-mono text-copper-gold">
                  <span>{selectedSize}</span>
                  <span>•</span>
                  <span>{product.currencySymbol}{product.price}</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <select
                value={selectedSize}
                onChange={(e) => setSelectedSize(e.target.value)}
                className="bg-[#44382e] border border-copper-gold/40 text-white font-mono text-[10px] py-2 px-3 uppercase text-center focus:outline-none rounded cursor-pointer"
              >
                {sizesToSelect.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>

              <button
                onClick={handleAddToCart}
                className="py-2.5 px-5 md:px-8 bg-gradient-to-r from-copper-gold to-burnished-dune text-white font-mono font-bold text-[10px] tracking-widest uppercase hover:brightness-110 flex items-center gap-2 rounded shadow-md cursor-pointer"
              >
                <ShoppingBag className="w-3.5 h-3.5" />
                ADD TO CART
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};
export default ProductDetail;
