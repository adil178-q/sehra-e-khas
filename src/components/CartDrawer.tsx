import React, { useState, useEffect } from "react";
import { useShop } from "../context/ShopContext";
import { X, Trash2, Tag, Truck, Copy, Check, ArrowRight, ArrowLeft, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartOpen,
    setCartOpen,
    updateCartQuantity,
    removeFromCart,
    fbOrderLink,
    activeCoupon,
    appliedCouponDiscount,
    shippingFee,
    shippingCountry,
    applyCoupon,
    calculateShipping,
    triggerNotification
  } = useShop();

  const [couponInput, setCouponInput] = useState("");
  const [countryInput, setCountryInput] = useState("");
  
  // Checkout flow states
  const [checkoutStep, setCheckoutStep] = useState<"cart" | "form" | "success">("cart");
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    address: "",
    city: "",
    country: shippingCountry || "Pakistan",
    zip: "",
    email: ""
  });

  const [checkoutManifest, setCheckoutManifest] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  // Sync country input when state's shipping country changes
  useEffect(() => {
    if (shippingCountry) {
      setFormData((prev) => ({ ...prev, country: shippingCountry }));
    }
  }, [shippingCountry]);

  // Reset checkout step when drawer is toggled open or close
  useEffect(() => {
    if (cartOpen) {
      setCheckoutStep("cart");
    }
  }, [cartOpen]);

  if (!cartOpen) return null;

  // Calculators
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const discountAmount = subtotal * (appliedCouponDiscount / 100);
  const total = subtotal - discountAmount + shippingFee;

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!couponInput) return;
    applyCoupon(couponInput);
  };

  const handleCalculateShipping = (e: React.FormEvent) => {
    e.preventDefault();
    if (!countryInput) return;
    calculateShipping(countryInput);
  };

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.city.trim()) {
      triggerNotification("Please fill in all required fields.");
      return;
    }

    // Build the aesthetic text transcript for copying
    let itemsText = cart
      .map(
        (item) =>
          `• ${item.product.title} (${item.selectedSize}) x${item.quantity} — ${item.product.currencySymbol}${(
            item.product.price * item.quantity
          ).toLocaleString()}`
      )
      .join("\n");

    const divider = "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━";
    const manifest = `SEHRA-E-KHAAS ARCHIVE ORDER DETAILS
${divider}
DATE: ${new Date().toLocaleDateString()}
CLIENT INITIATED INQUIRE

CLIENT LOGISTICS DETAILS:
• NAME: ${formData.name.toUpperCase()}
• PHONE: ${formData.phone}
• EMAIL: ${formData.email ? formData.email.toUpperCase() : "N/A"}
• ADDRESS: ${formData.address.toUpperCase()}
• CITY/PROVINCE: ${formData.city.toUpperCase()}
• COUNTRY: ${formData.country.toUpperCase()}
• POSTCODE: ${formData.zip ? formData.zip.toUpperCase() : "N/A"}

ITEMS SELECTED:
${itemsText}

FINANCIAL RECAP:
Subtotal: $${subtotal.toLocaleString()}
${activeCoupon ? `Promo Applied: ${activeCoupon} (-${appliedCouponDiscount}%)` : "Promo Applied: None"}
Rate: ${shippingFee === 0 ? "Complimentary Heritage" : `$${shippingFee.toLocaleString()} Priority Express`}

GRAND TOTAL CONVEYED: $${total.toLocaleString()}
${divider}
INSTRUCTIONS: Please forward this copied ledger directly in our Facebook Messenger chat. The design house will confirm stock allocation and dispatch airbill immediately.`;

    setCheckoutManifest(manifest);
    
    // Auto-copy to clipboard
    try {
      navigator.clipboard.writeText(manifest);
      setCopied(true);
      triggerNotification("Order dispatch contract copied successfully.");
    } catch (err) {
      console.error("Clipboard copy failed", err);
    }

    setCheckoutStep("success");

    // Initiate Redirect
    const directMessengerUrl = "https://m.me/sehraekhaas.official";
    setTimeout(() => {
      window.open(directMessengerUrl, "_blank", "noopener,noreferrer");
    }, 2500);
  };

  const handleManualCopy = () => {
    if (!checkoutManifest) return;
    navigator.clipboard.writeText(checkoutManifest);
    setCopied(true);
    triggerNotification("Order transmission token copied to your device clipper.");
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" id="cart-drawer-container">
      {/* Dark backdrop overlay */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={() => setCartOpen(false)}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10" id="cart-drawer-inner">
        {/* Slideout drawer pane */}
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "tween", duration: 0.35 }}
          className="w-screen max-w-md bg-[#0a0907] border-l border-[#2e2316] shadow-2xl flex flex-col justify-between"
          id="cart-drawer-pane"
        >
          {/* Main Title Header (Shared) */}
          <div className="p-5 border-b border-[#241c14] flex items-center justify-between bg-[#110d0a]" id="cart-drawer-header">
            <div className="text-left">
              <h3 className="text-sm font-bold font-mono tracking-[0.25em] text-[#ca9851] uppercase flex items-center gap-2">
                ORDER DISPATCH CENTRE
              </h3>
              <span className="text-[10px] text-gray-400 font-mono tracking-wider uppercase block mt-1">
                {checkoutStep === "cart" ? `${cart.length} ARCHIVAL DESIGN CATEGORIES` : checkoutStep === "form" ? "CONVEYANCE REGISTRY" : "CONVEYANCE SENT"}
              </span>
            </div>
            <button
              onClick={() => {
                setCartOpen(false);
                setCheckoutStep("cart");
              }}
              className="p-1.5 hover:bg-[#201811] border border-transparent hover:border-[#ca9851]/20 text-[#dfc393] hover:text-white transition-all focus:outline-none cursor-pointer"
              aria-label="Close cart"
              id="close-cart-btn"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            {/* STEP 1: CART LISTING VIEW */}
            {checkoutStep === "cart" && (
              <motion.div
                key="cart-step"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex-grow flex flex-col justify-between overflow-hidden"
              >
                {/* Body List Container */}
                <div className="flex-grow overflow-y-auto p-5 space-y-6 scrollbar-none" id="cart-body-items">
                  {cart.length === 0 ? (
                    <div className="text-center py-20 flex flex-col items-center justify-center h-full" id="cart-empty-message">
                      <span className="text-gray-700 text-5xl mb-4 font-serif">†</span>
                      <h4 className="text-xs font-mono tracking-[0.2em] text-[#dfc393] uppercase">ORDER CHEST BARREN</h4>
                      <p className="text-[11px] text-[#af9f8a] max-w-[250px] mx-auto mt-2 leading-relaxed font-light">
                        Your current session holds zero selected artifacts. Browse collections and add them to your cart.
                      </p>
                      <button
                        onClick={() => setCartOpen(false)}
                        className="mt-6 py-2.5 px-5 border border-[#ca9851] text-[#ca9851] font-mono text-[10px] tracking-widest hover:bg-[#ca9851] hover:text-black transition-colors uppercase cursor-pointer"
                      >
                        DISCOVER GARMENTS
                      </button>
                    </div>
                  ) : (
                    <>
                      {/* Scrollable list of items */}
                      <div className="space-y-4" id="cart-items-scroller">
                        {cart.map((item) => (
                          <div
                            key={`${item.product.id}-${item.selectedSize}`}
                            className="border-b border-[#2d2114]/40 pb-4 flex gap-4"
                            id={`cart-item-${item.product.id}`}
                          >
                            {/* Image preview */}
                            <div className="w-18 h-24 flex-shrink-0 bg-gray-950 border border-[#2d2217]/50 overflow-hidden">
                              <img
                                src={item.product.images[0]}
                                alt={item.product.title}
                                className="w-full h-full object-cover filter brightness-[0.8]"
                                referrerPolicy="no-referrer"
                              />
                            </div>

                            {/* Text and control metrics */}
                            <div className="flex-grow flex flex-col justify-between text-left">
                              <div>
                                <div className="flex justify-between items-start gap-2">
                                  <h4 className="text-xs font-bold font-display tracking-wide text-white uppercase line-clamp-1">
                                    {item.product.title}
                                  </h4>
                                  <button
                                    onClick={() => removeFromCart(item.product.id, item.selectedSize)}
                                    className="text-gray-500 hover:text-red-400 p-0.5 transition-colors focus:outline-none cursor-pointer"
                                    aria-label="Remove item"
                                  >
                                    <Trash2 className="w-3.5 h-3.5" />
                                  </button>
                                </div>
                                <span className="text-[10px] font-mono text-[#ca9851] uppercase tracking-wider block mt-0.5">
                                  SIZE: {item.selectedSize}
                                </span>
                              </div>

                              <div className="flex justify-between items-center mt-2">
                                {/* Quantity buttons */}
                                <div className="flex items-center border border-[#201811] bg-[#0c0907] text-[10px] font-mono">
                                  <button
                                    onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity - 1)}
                                    className="px-2.5 py-1 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
                                  >
                                    -
                                  </button>
                                  <span className="px-2 text-white font-bold">{item.quantity}</span>
                                  <button
                                    onClick={() => updateCartQuantity(item.product.id, item.selectedSize, item.quantity + 1)}
                                    className="px-2.5 py-1 text-gray-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
                                  >
                                    +
                                  </button>
                                </div>

                                <span className="text-[11px] font-mono font-medium text-[#dfc393]">
                                  {item.product.currencySymbol}
                                  {(item.product.price * item.quantity).toLocaleString()}
                                </span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Promo and simulated rates */}
                      <div className="pt-4 border-t border-[#2e2316]/60 flex flex-col gap-4 text-left" id="cart-utility-panels">
                        {/* Promo field panel input */}
                        <div>
                          <h5 className="text-[9px] font-mono text-[#ca9851] tracking-[0.25em] uppercase mb-1.5 flex items-center gap-1.5">
                            <Tag className="w-3 h-3" /> PROMO ARCHIVE Voucher
                          </h5>
                          <form onSubmit={handleApplyCoupon} className="flex gap-2">
                            <input
                              type="text"
                              placeholder="e.g. KHAAS26 or SEHRA10"
                              value={couponInput}
                              onChange={(e) => setCouponInput(e.target.value)}
                              className="bg-[#0b0907] border border-[#231b12] text-xs font-mono p-2.5 flex-grow focus:outline-none focus:border-[#ca9851] text-white tracking-widest uppercase placeholder-gray-800 rounded-none"
                            />
                            <button
                              type="submit"
                              className="py-2.5 px-4 bg-[#1e1710] hover:bg-[#ca9851] text-[#dfc393] hover:text-black border border-[#ca9851]/40 hover:border-transparent transition-colors text-[10px] font-mono tracking-widest uppercase rounded-none cursor-pointer"
                            >
                              REDEEM
                            </button>
                          </form>
                          {activeCoupon && (
                            <span className="text-[9px] font-mono text-emerald-400 block mt-1 uppercase tracking-wide">
                              ✓ ACTIVE PROMO CODE: [{activeCoupon}] GIVES {appliedCouponDiscount}% SAVING
                            </span>
                          )}
                        </div>

                        {/* Shipping calculator field */}
                        <div>
                          <h5 className="text-[9px] font-mono text-[#ca9851] tracking-[0.25em] uppercase mb-1.5 flex items-center gap-1.5">
                            <Truck className="w-3 h-3" /> CARRIER RATE SIMULATOR
                          </h5>
                          <form onSubmit={handleCalculateShipping} className="flex gap-2">
                            <input
                              type="text"
                              placeholder="e.g. Pakistan, UK, Canada"
                              value={countryInput}
                              onChange={(e) => setCountryInput(e.target.value)}
                              className="bg-[#0b0907] border border-[#231b12] text-xs font-mono p-2.5 flex-grow focus:outline-none focus:border-[#ca9851] text-white tracking-widest placeholder-gray-800 rounded-none"
                            />
                            <button
                              type="submit"
                              className="py-2.5 px-4 bg-[#1e1710] hover:bg-[#ca9851] text-[#dfc393] hover:text-black border border-[#ca9851]/40 hover:border-transparent transition-colors text-[10px] font-mono tracking-widest uppercase rounded-none cursor-pointer"
                            >
                              RESOLVE
                            </button>
                          </form>
                          {shippingCountry && (
                            <span className="text-[9px] font-mono text-[#dfc393] block mt-1 uppercase tracking-wide">
                              COUNTRY: {shippingCountry.toUpperCase()} — DELIVERY RATE:{" "}
                              {shippingFee === 0 ? "FREE HERITAGE SHIPPING" : `$${shippingFee}`}
                            </span>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>

                {/* Bottom Recap Panel */}
                {cart.length > 0 && (
                  <div className="bg-[#110d0a] border-t border-[#2e2316] p-5 space-y-4" id="cart-footer-recap">
                    <div className="space-y-2 text-xs font-mono text-gray-400">
                      <div className="flex justify-between">
                        <span>UNADJUSTED PRICE:</span>
                        <span className="text-white">${subtotal.toLocaleString()}</span>
                      </div>
                      {appliedCouponDiscount > 0 && (
                        <div className="flex justify-between text-emerald-400">
                          <span>PROMISED VALUE CUT:</span>
                          <span>-${discountAmount.toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>PRIORITY SHIPPING:</span>
                        <span className="text-white">
                          {shippingCountry ? (shippingFee === 0 ? "FREE" : `$${shippingFee}`) : "TBD (Verify Address)"}
                        </span>
                      </div>
                      <div className="flex justify-between border-t border-[#1f1710] pt-2.5 text-sm font-bold text-white">
                        <span>GRAND FINAL ACCRUAL:</span>
                        <span className="text-[#dfc393] font-display">${total.toLocaleString()}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => setCheckoutStep("form")}
                        className="w-full py-4 bg-gradient-to-r from-[#dfc393] to-[#b58137] hover:brightness-[1.1] text-black font-display font-black text-xs tracking-[0.35em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-[0_4px_20px_rgba(202,152,81,0.15)]"
                        id="checkout-manifest-trigger-btn"
                      >
                        PROCEED TO CHECKOUT DETAILS
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* STEP 2: BILLING & SHIPPING FORM VIEW */}
            {checkoutStep === "form" && (
              <motion.div
                key="form-step"
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="flex-grow flex flex-col justify-between overflow-hidden"
              >
                <form onSubmit={handleSubmitForm} className="flex-grow flex flex-col justify-between h-full text-left" id="checkout-order-form">
                  <div className="flex-grow overflow-y-auto p-5 space-y-4 scrollbar-none">
                    {/* Header info */}
                    <div className="border-b border-[#241c14] pb-3 mb-4 text-left">
                      <button
                        type="button"
                        onClick={() => setCheckoutStep("cart")}
                        className="text-[10px] font-mono tracking-widest text-[#ca9851] flex items-center gap-1 hover:text-white uppercase mb-2 focus:outline-none cursor-pointer"
                      >
                        <ArrowLeft className="w-3.5 h-3.5" /> [ BACK TO BASKET ]
                      </button>
                      <h4 className="text-xs font-mono tracking-[0.2em] text-[#ca9851] uppercase font-bold">DELIVERY REGISTRY FORM</h4>
                      <span className="text-[9px] text-gray-500 uppercase block mt-1">Input your correct billing & shipping matrices to secure allocations</span>
                    </div>

                    {/* Form inputs */}
                    <div className="space-y-3.5">
                      <div>
                        <label className="text-[9px] font-mono tracking-wider text-[#ca9851] uppercase block mb-1 font-bold">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. SYED MUHAMMAD BILAL"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] font-mono tracking-wider text-[#ca9851] uppercase block mb-1 font-bold">
                          WhatsApp or Phone <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g. +92 301 2345678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                        />
                      </div>

                      <div>
                        <label className="text-[9px] font-mono tracking-wider text-[#ca9851] uppercase block mb-1 font-bold">
                          Street Shipping Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. House 41-C, Street 12, DHA Phase 6"
                          value={formData.address}
                          onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                          className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <label className="text-[9px] font-mono tracking-wider text-[#ca9851] uppercase block mb-1 font-bold">
                            City / Province <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Karachi"
                            value={formData.city}
                            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                            className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-wider text-[#ca9851] uppercase block mb-1 font-bold">
                            Country <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. Pakistan"
                            value={formData.country}
                            onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                            className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3.5">
                        <div>
                          <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block mb-1">
                            Postal / ZIP Code
                          </label>
                          <input
                            type="text"
                            placeholder="e.g. 75500"
                            value={formData.zip}
                            onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                            className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                          />
                        </div>
                        <div>
                          <label className="text-[9px] font-mono tracking-wider text-gray-500 uppercase block mb-1">
                            Email Address
                          </label>
                          <input
                            type="email"
                            placeholder="e.g. collector@sehra.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-[#0c0907] border border-[#201811] text-xs font-mono p-2.5 text-white placeholder-gray-800 focus:outline-none focus:border-[#ca9851] rounded-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Form Submit Footer */}
                  <div className="bg-[#110d0a] border-t border-[#2e2316] p-5">
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-3 block">
                      <span>GRAND FINAL ACCRUAL:</span>
                      <span className="text-[#dfc393] font-bold text-sm font-display">${total.toLocaleString()}</span>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-[#dfc393] via-[#b58137] to-[#dfc393] hover:brightness-[1.1] text-black font-display font-black text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg rounded-none"
                      id="submit-order-checkout-btn"
                    >
                      PLACE ORDER VIA MESSENGER
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              </motion.div>
            )}

            {/* STEP 3: SUCCESS REDIRECTION COMPILATION VIEW */}
            {checkoutStep === "success" && (
              <motion.div
                key="success-step"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="flex-grow flex flex-col justify-between overflow-hidden"
              >
                <div className="flex-grow overflow-y-auto p-5 space-y-6 text-center flex flex-col items-center justify-center" id="checkout-success-view">
                  <div className="w-12 h-12 rounded-full bg-[#ca9851]/10 border border-[#ca9851] flex items-center justify-center text-[#ca9851] text-xl mb-1 font-serif">
                    ✓
                  </div>
                  <h3 className="text-sm font-bold font-mono tracking-[0.25em] text-[#ca9851] uppercase">
                    ORDER CONVEYANCE PREPARED
                  </h3>
                  
                  <div className="text-xs text-[#dfc393] font-mono border border-[#ca9851]/30 bg-[#060504] p-4 text-left rounded w-full space-y-2">
                    <div className="flex justify-between items-center border-b border-[#2e2316] pb-2 mb-1.5">
                      <span className="font-bold text-white uppercase text-[9px] tracking-widest">📋 COPIED COUTURE CONTRACT</span>
                      <button
                        type="button"
                        onClick={handleManualCopy}
                        className="text-[9px] font-mono text-[#ca9851] hover:text-white px-2 py-0.5 border border-[#ca9851]/40 hover:border-white uppercase flex items-center gap-1.5 transition-colors focus:outline-none cursor-pointer"
                        id="copy-text-btn"
                      >
                        {copied ? "COPIED" : "RE-COPY"}
                      </button>
                    </div>
                    <pre className="text-[9px] leading-relaxed max-h-36 overflow-y-auto whitespace-pre-wrap select-all text-gray-400">
                      {checkoutManifest}
                    </pre>
                  </div>

                  <p className="text-[11px] text-[#af9f8a] leading-relaxed font-light max-w-sm">
                    Your unique order docket is now safely saved to your clipboard. 
                    Redirection to Facebook Messenger has been initiated.
                  </p>

                  <div className="space-y-2.5 w-full pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        const directFBMessengerUrl = "https://m.me/sehraekhaas.official";
                        window.open(directFBMessengerUrl, "_blank", "noopener,noreferrer");
                      }}
                      className="w-full py-3.5 bg-gradient-to-r from-[#dfc393] via-[#b58137] to-[#dfc393] text-black font-display font-black text-xs tracking-[0.25em] uppercase flex items-center justify-center gap-2 shadow-lg hover:brightness-110 transition-all cursor-pointer rounded-none"
                      id="success-messenger-btn"
                    >
                      OPEN FACEBOOK MESSENGER
                      <ExternalLink className="w-4 h-4" />
                    </button>

                    <button
                      type="button"
                      onClick={() => {
                        setCheckoutStep("cart");
                        setCartOpen(false);
                      }}
                      className="text-[9px] font-mono tracking-widest text-gray-500 hover:text-[#ca9851] transition-colors uppercase block mx-auto py-1 focus:outline-none cursor-pointer"
                    >
                      [ RETURN TO VAULT CHAMBER ]
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default CartDrawer;
