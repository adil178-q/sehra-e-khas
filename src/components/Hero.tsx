import React, { useEffect, useState } from "react";
import { useShop } from "../context/ShopContext";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export const Hero: React.FC = () => {
  const { setActiveCollectionId, setActiveProductId } = useShop();
  
  // High-end state editable from admin (persisted via localStorage)
  const [heroImg, setHeroImg] = useState(() => {
    const saved = localStorage.getItem("sehra_hero_img");
    if (!saved || saved === "https://i.postimg.cc/HsytBT6j/A-dark-moody-202604142309-1-1-1536x857.jpg") {
      localStorage.setItem("sehra_hero_img", "https://i.postimg.cc/g28pdsh9/Chat-GPT-Image-Jun-15-2026-03-09-12-PM.png");
      return "https://i.postimg.cc/g28pdsh9/Chat-GPT-Image-Jun-15-2026-03-09-12-PM.png";
    }
    return saved;
  });
  
  const [heroTitle, setHeroTitle] = useState(() => {
    return localStorage.getItem("sehra_hero_title") || "ARCHIVAL DESERT SHELL";
  });

  const [heroTagline, setHeroTagline] = useState(() => {
    return localStorage.getItem("sehra_hero_tagline") || "Not for Everyone. Exactly Right for the Few.";
  });

  const [heroSub, setHeroSub] = useState(() => {
    return localStorage.getItem("sehra_hero_sub") || "A secret clothing order. Produced in limited numbers, never restocked once dry. Born in Pakistan, shipped across the outer world.";
  });

  // Listen to admin changes in direct localStorage
  useEffect(() => {
    const handleStorageChange = () => {
      setHeroImg(localStorage.getItem("sehra_hero_img") || "https://i.postimg.cc/g28pdsh9/Chat-GPT-Image-Jun-15-2026-03-09-12-PM.png");
      setHeroTitle(localStorage.getItem("sehra_hero_title") || "ARCHIVAL DESERT SHELL");
      setHeroTagline(localStorage.getItem("sehra_hero_tagline") || "Not for Everyone. Exactly Right for the Few.");
      setHeroSub(localStorage.getItem("sehra_hero_sub") || "A secret clothing order. Produced in limited numbers, never restocked once dry. Born in Pakistan, shipped across the outer world.");
    };

    window.addEventListener("storage", handleStorageChange);
    // Interval check as storage events don't trigger on same tab state change
    const interval = setInterval(handleStorageChange, 1500);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
      clearInterval(interval);
    };
  }, []);

  const handleScrollToGrid = () => {
    setActiveCollectionId(null);
    setActiveProductId(null);
    const target = document.getElementById("featured-collections-section");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="relative w-full h-[85vh] min-h-[460px] sm:min-h-[550px] md:min-h-[620px] lg:min-h-[750px] overflow-hidden bg-black flex items-center justify-center py-10 xs:py-12 sm:py-16 md:py-24 px-4 sm:px-8 md:px-12"
      id="hero-banner"
    >
      {/* Dynamic Background Image with Smooth Parallax Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1.02, 1.08, 1.02] }}
          transition={{ duration: 25, ease: "easeInOut", repeat: Infinity }}
          className="w-full h-full bg-cover bg-center opacity-70 filter brightness-[0.4] saturate-[0.8]"
          style={{
            backgroundImage: `url('${heroImg}')`
          }}
        />
      </div>

      {/* Floating Sparkles / Warm Desert Dust Particles */}
      <div className="absolute inset-0 z-1 pointer-events-none overflow-hidden opacity-30 select-none">
        <div className="absolute w-1 h-1 bg-[#dfc393] rounded-full top-1/4 left-1/3 animate-ping" />
        <div className="absolute w-2 h-2 bg-[#ca9851] rounded-full top-2/3 left-1/4 animate-pulse duration-1000" />
        <div className="absolute w-1 h-1 bg-[#fff] rounded-full top-1/3 right-1/4 animate-ping duration-[3000ms]" />
        <div className="absolute w-2 h-2 bg-[#dfc393] rounded-full bottom-1/4 right-1/3 animate-pulse duration-[5000ms]" />
      </div>

      {/* Elegant Radial Outer Glow Ring */}
      <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-[#0a0907] to-transparent z-1 pointer-events-none" />

      {/* Content wrapper with meticulous typography staging */}
      <div className="relative z-10 max-w-4xl text-center flex flex-col items-center justify-center text-white px-2">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex flex-col items-center gap-3 sm:gap-4"
        >
          {/* Subtle Tagline Bracketed Header */}
          <span className="text-[9px] xs:text-[10px] md:text-xs tracking-[0.16em] sm:tracking-[0.3em] font-mono text-[#dfc393] uppercase bg-[#16120e]/80 border border-[#42311e]/50 py-1 px-3 sm:py-1.5 sm:px-4 rounded-full shadow-[0_1px_15px_rgba(202,152,81,0.08)] text-center max-w-[90vw] sm:max-w-lg leading-normal break-words">
            {heroTagline}
          </span>

          {/* Large display cinematic brand identifier */}
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-display tracking-[0.12em] sm:tracking-[0.18em] text-[#f8ebd4] leading-normal sm:leading-tight select-none mt-1 sm:mt-2 text-center">
            {heroTitle}
          </h1>

          {/* Line separator */}
          <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#ca9851] to-transparent my-1" />

          {/* Luxury premium subtitle details */}
          <p className="max-w-xs xs:max-w-md sm:max-w-xl text-[10px] xs:text-xs sm:text-sm md:text-base font-sans tracking-[0.06em] text-[#d6c7b3] leading-relaxed font-light mt-1 text-center">
            {heroSub}
          </p>
        </motion.div>

        {/* Elegant Minimalist CTA Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 items-center justify-center z-10"
        >
          <button
            onClick={handleScrollToGrid}
            className="group relative inline-flex items-center justify-center min-w-[180px] sm:min-w-[200px] py-2.5 px-6 sm:py-4 sm:px-8 border border-[#ca9851] hover:border-[#f8ebd4] bg-[#0c0907]/90 hover:bg-[#16110b] text-[#ca9851] hover:text-[#f8ebd4] font-display font-medium text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase transition-all duration-500 rounded-none shadow-[0_4px_30px_rgba(0,0,0,0.4)] overflow-hidden cursor-pointer"
            id="hero-cta-btn"
          >
            {/* Animated Inner Glow background hover layer */}
            <span className="absolute inset-0 bg-[#ca9851]/5 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out" />
            
            EXPLORE ARCHIVES
          </button>
        </motion.div>
      </div>

      {/* Floating micro-indicators down caret */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60 hover:opacity-100 transition-opacity">
        <span className="text-[9px] tracking-[0.2em] font-mono text-[#ca9851] uppercase">Scroll down</span>
        <button
          onClick={handleScrollToGrid}
          className="animate-bounce p-1 focus:outline-none"
          aria-label="Scroll to collection"
          id="scroll-helper-btn"
        >
          <ChevronDown className="w-5 h-5 text-[#dfc393]" />
        </button>
      </div>
    </div>
  );
};
export default Hero;
