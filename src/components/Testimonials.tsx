import React, { useState, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { motion, AnimatePresence } from "motion/react";
import { Quote, ChevronLeft, ChevronRight, Star, ShieldCheck } from "lucide-react";

export const Testimonials: React.FC = () => {
  const { reviews } = useShop();
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-sliding loop every 5 seconds
  useEffect(() => {
    if (reviews.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [reviews]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  if (reviews.length === 0) return null;

  const currentReview = reviews[activeIndex];

  return (
    <section className="bg-[#211b16] py-12 sm:py-16 px-4 md:px-8 border-t border-[#a98257]/10 relative text-left" id="brand-testimonials">
      {/* Background graphic motif */}
      <div className="absolute right-12 top-4 text-[#a98257]/5 select-none pointer-events-none hidden md:block">
        <Quote className="w-64 h-64 font-serif" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Title */}
        <div className="text-center mb-8">
          <span className="text-[10px] font-mono tracking-[0.25em] text-[#c58b45] uppercase block">
            VERIFIED APPAREL MATRICES
          </span>
          <h2 className="text-2xl md:text-3xl font-serif text-[#e9dfc8] mt-2 font-light">
            VOICES OF THE COLLECTORS
          </h2>
          <div className="w-12 h-[1px] bg-[#c58b45] mx-auto mt-4" />
        </div>

        {/* Carousel wrapper */}
        <div className="relative min-h-[220px] bg-[#2b241e] border border-[#a98257]/20 p-8 md:p-12 shadow-[0_12px_40px_rgba(0,0,0,0.3)] rounded-lg neon-glow-gold">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
            >
              {/* Star Rating & Verified tag */}
              <div className="flex items-center justify-between gap-4 flex-wrap">
                <div className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(currentReview.rating)
                          ? "fill-[#c58b45] text-[#c58b45]"
                          : "text-gray-600"
                      }`}
                    />
                  ))}
                </div>
                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono bg-[#c58b45]/10 text-[#c58b45] py-1 px-2 border border-[#c58b45]/20 uppercase">
                  <ShieldCheck className="w-3.5 h-3.5" /> VERIFIED ORDER INDEX
                </span>
              </div>

              {/* Testimony Comment */}
              <p className="text-[#e9dfc8] text-sm md:text-lg italic font-light leading-relaxed tracking-wide">
                "{currentReview.comment}"
              </p>

              {/* Author and Date Details */}
              <div className="pt-2 flex items-center justify-between border-t border-[#a98257]/10">
                <div>
                  <h4 className="font-display font-medium text-xs tracking-wider text-white uppercase">
                    {currentReview.author}
                  </h4>
                  <span className="text-[10px] text-gray-500 font-mono tracking-wide">
                    COLLECTOR INDEX: #SK-{currentReview.id}
                  </span>
                </div>
                <span className="text-[10px] text-gray-500 font-mono">
                  {currentReview.date}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Action button controls */}
        <div className="flex items-center justify-between mt-8">
          {/* Navigation dots */}
          <div className="flex gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 focus:outline-none cursor-pointer ${
                  idx === activeIndex
                    ? "bg-[#c58b45] w-6"
                    : "bg-[#a98257]/30 hover:bg-[#a98257]/60"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* Arrow controls */}
          <div className="flex gap-3">
            <button
               onClick={handlePrev}
               className="p-2 border border-[#a98257]/30 hover:border-[#c58b45] text-[#e9dfc8] hover:text-[#c58b45] transition-all bg-[#2b241e] focus:outline-none cursor-pointer"
               aria-label="Previous testimony"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
               onClick={handleNext}
               className="p-2 border border-[#a98257]/30 hover:border-[#c58b45] text-[#e9dfc8] hover:text-[#c58b45] transition-all bg-[#2b241e] focus:outline-none cursor-pointer"
               aria-label="Next testimony"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
