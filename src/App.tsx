import React, { useState } from "react";
import { ShopProvider, useShop } from "./context/ShopContext";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Collections from "./components/Collections";
import ProductGrid from "./components/ProductGrid";
import ProductDetail from "./components/ProductDetail";
import PageContainer from "./components/PageContainer";
import CartDrawer from "./components/CartDrawer";
import MenuDrawer from "./components/MenuDrawer";
import SearchOverlay from "./components/SearchOverlay";
import AdminPanel from "./components/AdminPanel";
import Journal from "./components/Journal";
import Testimonials from "./components/Testimonials";
import SocialHub from "./components/SocialHub";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight } from "lucide-react";

const AppContent: React.FC = () => {
  const {
    activeProductId,
    activePage,
    notification,
    setActiveProductId,
    setActiveCollectionId
  } = useShop();

  const [adminOpen, setAdminOpen] = useState(false);

  // Cinematic pre-roll state
  const [showPreroll, setShowPreroll] = useState(() => {
    if (typeof window !== "undefined") {
      return !sessionStorage.getItem("sehra_preroll_viewed");
    }
    return true;
  });

  const handleEnterChamber = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("sehra_preroll_viewed", "true");
    }
    setShowPreroll(false);
  };

  return (
    <div className="min-h-screen bg-soft-desert-mist text-deep-charcoal flex flex-col justify-between selection:bg-copper-gold selection:text-white">
      
      {/* 1. Global Announcement scrolling bar */}
      <AnnouncementBar />

      {/* 2. Global header navigation (Desert Obsidian dark backdrop segment) */}
      <Header />

      {/* Main Container */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {activePage ? (
            /* Immersive dynamic sub-pages router */
            <motion.div
              key="active-page-route"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <PageContainer />
            </motion.div>
          ) : activeProductId ? (
            /* Immersive Detailed Product page template is open */
            <motion.div
              key="product-detail"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <ProductDetail />
            </motion.div>
          ) : (
            /* Standard index landing page with bento structures */
            <motion.div
              key="catalog-index"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-soft-desert-mist w-full"
            >
              {/* Parallax Hero section */}
              <div className="w-full">
                <Hero />
              </div>
              
              {/* Collection categories selector deck */}
              <div className="w-full">
                <Collections />
              </div>
              
              {/* Limited drop Grid Catalogue */}
              <div className="w-full">
                <ProductGrid />
              </div>

              {/* 11. Brand Story / "The Journal" Section */}
              <div className="w-full">
                <Journal />
              </div>

              {/* 12. Verified Luxury Testimonials Slider */}
              <div className="w-full">
                <Testimonials />
              </div>

              {/* 13. Social Broadcast Syndicate Hub */}
              <div className="w-full">
                <SocialHub />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* 14. Luxury Archival Brand Multi-Column Footer */}
      <Footer onOpenAdmin={() => setAdminOpen(true)} />

      {/* Sliding cart drawer menu panel */}
      <CartDrawer />

      {/* Left navigation sliding drawer */}
      <MenuDrawer onOpenAdmin={() => setAdminOpen(true)} />

      {/* Expandable live search query overlay */}
      <SearchOverlay />

      {/* Administrator customization dashboard board */}
      <AdminPanel open={adminOpen} onClose={() => setAdminOpen(false)} />

      {/* Global real-time animated status notification alerts */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="fixed bottom-6 right-6 z-100 bg-[#2b241e] border border-[#c58b45] text-[#e9dfc8] py-4 px-6 shadow-[0_12px_45px_rgba(43,36,30,0.4)] flex items-center gap-3.5 rounded"
            id="status-flash-alert"
          >
            <div className="w-2.5 h-2.5 rounded-full bg-[#c58b45] animate-ping" />
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase font-bold text-left">
              {notification}
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Cinematic Couture pre-roll introductory overlay */}
      <AnimatePresence>
        {showPreroll && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[9999] bg-[#070504] text-white flex flex-col justify-between p-8 md:p-16 select-none overflow-hidden"
            id="sehra-cinematic-preroll"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(202,152,81,0.06)_0%,transparent_70%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.8),rgba(7,5,4,0.95))] pointer-events-none" />
            
            <div className="relative z-10 flex justify-between items-center w-full text-xs font-mono text-[#ca9851]/60 uppercase tracking-[0.2em] font-light">
              <span>DESIGN HOUSE BROADCAST REGION // ALIGN_0.1</span>
              <span>AUTHENTIC ORIGINAL TRILOGY</span>
            </div>

            <div className="relative z-10 my-auto text-center flex flex-col items-center justify-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="space-y-4 text-center"
              >
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-medium tracking-[0.4em] text-[#dfc393] uppercase pl-[0.4em]">
                  SEHRA-E-KHAAS
                </h1>
                <div className="text-xl sm:text-2xl font-serif text-[#ca9851] py-2 md:py-3 block font-bold">
                  صحراۓ خاص
                </div>
                <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#ca9851] to-transparent mx-auto my-4" />
                <p className="text-[10px] sm:text-xs font-mono text-gray-400 tracking-[0.3em] uppercase max-w-md mx-auto leading-relaxed">
                  LTD RUNS // ARCHIVAL COUTURE RESEARCH PROJECT
                </p>
              </motion.div>

              <motion.button
                onClick={handleEnterChamber}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="py-3.5 px-10 border border-[#ca9851] text-[#ca9851] font-mono text-xs tracking-[0.3em] hover:bg-[#ca9851] hover:text-black transition-all group duration-300 uppercase cursor-pointer rounded-none relative overflow-hidden mt-8 focus:outline-none"
                id="enter-chamber-btn"
              >
                <span className="relative z-10 flex items-center gap-2">
                  ENTER ARCHIVE CHAMBER
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-[#ca9851] -translate-x-full group-hover:translate-x-0 transition-transform duration-300 pointer-events-none" />
              </motion.button>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center w-full gap-4 text-[9px] font-mono text-gray-500 uppercase tracking-widest text-center sm:text-left">
              <div className="space-y-1">
                <p>STATUS: SYSTEM COLD ALIGNED</p>
                <p>PORTAL DIRECTORY: ACTIVE_SMC_PK</p>
              </div>
              <div className="space-y-1 sm:text-right">
                <p>LIMITED UNITS ALLOCATED WITH EXTREME DISCIPLINE</p>
                <p>© {new Date().getFullYear()} RECONSTRUCTED COUTURE ALL RES. TO SEHRA-E-KHAAS</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
};

export default function App() {
  return (
    <ShopProvider>
      <AppContent />
    </ShopProvider>
  );
}
