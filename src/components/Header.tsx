import React from "react";
import { useShop } from "../context/ShopContext";
import { Menu, Search, ShoppingBag } from "lucide-react";
import { motion } from "motion/react";

export const Header: React.FC = () => {
  const {
    cart,
    setCartOpen,
    menuOpen,
    setMenuOpen,
    searchOpen,
    setSearchOpen,
    setActiveProductId,
    setActiveCollectionId,
    setActivePage
  } = useShop();

  const totalCartItems = cart.reduce((total, item) => total + item.quantity, 0);

  const handleLogoClick = () => {
    setActiveProductId(null);
    setActiveCollectionId(null);
    setActivePage(null);
  };

  return (
    <header
      className="sticky top-0 z-40 bg-[#110e0c]/95 backdrop-blur-md border-b border-[#2a221a] py-4 px-4 md:px-8 flex items-center justify-between"
      id="main-header"
    >
      {/* LEFT: Premium Animated Hamburger only */}
      <div className="flex items-center w-1/3 justify-start" id="header-left">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#dfc393] hover:text-[#f3dfbf] p-2 -ml-2 rounded-full transition-all hover:bg-[#1c1610] focus:outline-none focus:ring-1 focus:ring-[#ca9851]/40"
          aria-label="Toggle Navigation Drawer"
          id="hamburger-menu-btn"
        >
          <Menu className={`w-6 h-6 transition-transform duration-300 ${menuOpen ? "rotate-90 text-[#ca9851]" : ""}`} />
        </button>
      </div>

      {/* CENTER: Exquisite Brand Calligraphy Logo */}
      <div className="flex flex-col items-center justify-center w-1/3 select-none" id="header-center">
        <button
          onClick={handleLogoClick}
          className="group flex flex-col items-center justify-center focus:outline-none"
          id="logo-brand-btn"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            {/* Latin Premium Custom Brand mark with a sleek gradient */}
            <span className="text-lg md:text-2xl font-bold tracking-[0.25em] font-display bg-gradient-to-r from-[#dfc393] via-[#e5ae67] to-[#dfc393] bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-500 drop-shadow-[0_2px_15px_rgba(202,152,81,0.15)]">
              SEHRA-E-KHAAS
            </span>
            {/* Arabic Calligraphic Signature */}
            <span className="text-xs md:text-md tracking-[0.1em] font-serif text-[#ca9851] mt-0.5 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
              صحراۓ خاص
            </span>
          </motion.div>
        </button>
      </div>

      {/* RIGHT: Search + Cart Buttons (No sign-in) */}
      <div className="flex items-center w-1/3 justify-end gap-1 md:gap-3" id="header-right">
        {/* Search Toggle */}
        <button
          onClick={() => setSearchOpen(!searchOpen)}
          className="text-[#dfc393] hover:text-[#f3dfbf] p-2 rounded-full transition-all hover:bg-[#1c1610] focus:outline-none"
          aria-label="Open Search Overlay"
          id="search-toggle-btn"
        >
          <Search className="w-5 h-5 md:w-6 md:h-6" />
        </button>

        {/* Shopping bag with counts */}
        <button
          onClick={() => setCartOpen(true)}
          className="relative text-[#dfc393] hover:text-[#f3dfbf] p-2 rounded-full transition-all hover:bg-[#1c1610] focus:outline-none group"
          aria-label="Open Shopping Bag"
          id="cart-toggle-btn"
        >
          <ShoppingBag className="w-5 h-5 md:w-6 md:h-6 transition-transform group-hover:scale-110" />
          {totalCartItems > 0 && (
            <span
              id="cart-total-badge"
              className="absolute top-1.5 right-1.5 bg-gradient-to-r from-[#dbad6a] to-[#b58137] text-[#0d0b08] text-[9px] md:text-[10px] font-bold rounded-full w-4 md:w-5 h-4 md:h-5 flex items-center justify-center border border-[#0d0b08] shadow-[0_0_10px_rgba(219,173,106,0.5)] animate-pulse"
            >
              {totalCartItems}
            </span>
          )}
        </button>
      </div>
    </header>
  );
};
export default Header;
