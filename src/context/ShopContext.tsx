import React, { createContext, useContext, useState, useEffect } from "react";
import { Product, Collection, Announcement, CartItem, Review } from "../types";
import { DEFAULT_ANNOUNCEMENTS, DEFAULT_FB_ORDER_LINK, DEFAULT_COLLECTIONS, DEFAULT_PRODUCTS, DEFAULT_REVIEWS } from "../data";
import { Language, UI_TRANSLATIONS, PRODUCT_TRANSLATIONS, COLLECTION_TRANSLATIONS } from "../lib/translations";

interface ShopContextType {
  announcements: Announcement[];
  fbOrderLink: string;
  collections: Collection[];
  products: Product[];
  reviews: Review[];
  cart: CartItem[];
  cartOpen: boolean;
  menuOpen: boolean;
  searchOpen: boolean;
  searchQuery: string;
  activeProductId: string | null;
  activeCollectionId: string | null;
  activePage: string | null;
  activeCoupon: string;
  appliedCouponDiscount: number; // percentage
  shippingFee: number;
  shippingCountry: string;
  notification: string | null;
  
  // Language Support
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;

  // Actions
  setAnnouncements: (announcements: Announcement[]) => void;
  setFbOrderLink: (link: string) => void;
  setProducts: (products: Product[]) => void;
  setReviews: (reviews: Review[]) => void;
  setCartOpen: (open: boolean) => void;
  setMenuOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  setSearchQuery: (query: string) => void;
  setActiveProductId: (id: string | null) => void;
  setActiveCollectionId: (id: string | null) => void;
  setActivePage: (page: string | null) => void;
  addToCart: (product: Product, size: string, quantity: number) => void;
  removeFromCart: (productId: string, size: string) => void;
  updateCartQuantity: (productId: string, size: string, qty: number) => void;
  clearCart: () => void;
  applyCoupon: (code: string) => boolean;
  calculateShipping: (country: string) => number;
  triggerNotification: (message: string) => void;
  addReview: (productId: string, author: string, rating: number, comment: string) => void;
  resetAllToDefault: () => void;
}

const ShopContext = createContext<ShopContextType | undefined>(undefined);

export const ShopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Load initial settings from localStorage or defaults
  const [announcements, setAnnouncementsState] = useState<Announcement[]>(() => {
    const saved = localStorage.getItem("sehra_announcements");
    return saved ? JSON.parse(saved) : DEFAULT_ANNOUNCEMENTS;
  });

  const [fbOrderLink, setFbOrderLinkState] = useState<string>(() => {
    const saved = localStorage.getItem("sehra_fb_link");
    return saved ? saved : DEFAULT_FB_ORDER_LINK;
  });

  const [products, setProductsState] = useState<Product[]>(DEFAULT_PRODUCTS);

  const [reviews, setReviewsState] = useState<Review[]>(() => {
    const saved = localStorage.getItem("sehra_reviews");
    return saved ? JSON.parse(saved) : DEFAULT_REVIEWS;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("sehra_cart");
    return saved ? JSON.parse(saved) : [];
  });

  // Basic layout states
  const [cartOpen, setCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const [activeCollectionId, setActiveCollectionId] = useState<string | null>(null);
  const [activePage, setActivePageState] = useState<string | null>(null);

  const setActivePage = (page: string | null) => {
    setActivePageState(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
    if (page !== null) {
      setActiveProductId(null);
    }
  };
  
  // Shopping logic states
  const [activeCoupon, setActiveCoupon] = useState("");
  const [appliedCouponDiscount, setAppliedCouponDiscount] = useState(0);
  const [shippingFee, setShippingFee] = useState(0); // 0 = not calculated yet, or free
  const [shippingCountry, setShippingCountry] = useState("");
  
  // Flash notifications
  const [notification, setNotification] = useState<string | null>(null);

  // Language state & settings
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem("sehra_lang");
    return (saved as Language) || "en";
  });

  const setLanguage = (newLang: Language) => {
    setLanguageState(newLang);
    localStorage.setItem("sehra_lang", newLang);
  };

  useEffect(() => {
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    const term = UI_TRANSLATIONS[key];
    if (!term) return key;
    return term[language] || term["en"] || key;
  };

  // Sync state to localStorage on modification
  useEffect(() => {
    localStorage.setItem("sehra_announcements", JSON.stringify(announcements));
  }, [announcements]);

  useEffect(() => {
    localStorage.setItem("sehra_fb_link", fbOrderLink);
  }, [fbOrderLink]);

  useEffect(() => {
    localStorage.setItem("sehra_products", JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem("sehra_reviews", JSON.stringify(reviews));
  }, [reviews]);

  useEffect(() => {
    localStorage.setItem("sehra_cart", JSON.stringify(cart));
  }, [cart]);

  // Notifications helper
  const triggerNotification = (message: string) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 4000);
  };

  // Actions
  const setAnnouncements = (newAnnouncements: Announcement[]) => {
    setAnnouncementsState(newAnnouncements);
  };

  const setFbOrderLink = (link: string) => {
    setFbOrderLinkState(link);
  };

  const setProducts = (newProducts: Product[]) => {
    setProductsState(newProducts);
  };

  const setReviews = (newReviews: Review[]) => {
    setReviewsState(newReviews);
  };

  const addToCart = (product: Product, size: string, quantity: number) => {
    const cleanSize = size || "Size I";
    
    // Check stock limit
    const totalCurrentQtyInCart = cart
      .filter((item) => item.product.id === product.id)
      .reduce((total, item) => total + item.quantity, 0);

    if (totalCurrentQtyInCart + quantity > product.unitsLeft) {
      triggerNotification(`Only ${product.unitsLeft} units left in the Sehra archive.`);
      return;
    }

    setCart((prev) => {
      const existingIdx = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === cleanSize
      );

      if (existingIdx > -1) {
        const updated = [...prev];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prev, { product, selectedSize: cleanSize, quantity }];
      }
    });

    triggerNotification(`Archived entry [${product.title}] added to your order chest.`);
    setCartOpen(true);
  };

  const removeFromCart = (productId: string, size: string) => {
    setCart((prev) => prev.filter((item) => !(item.product.id === productId && item.selectedSize === size)));
    triggerNotification("Item removed from your order chest.");
  };

  const updateCartQuantity = (productId: string, size: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId, size);
      return;
    }
    
    // Check stock limit
    const prod = products.find((p) => p.id === productId);
    if (prod && qty > prod.unitsLeft) {
      triggerNotification(`Strict drop rules: only ${prod.unitsLeft} items left.`);
      return;
    }

    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId && item.selectedSize === size
          ? { ...item, quantity: qty }
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const applyCoupon = (code: string): boolean => {
    const uppercaseCode = code.toUpperCase().trim();
    if (uppercaseCode === "KHAAS26" || uppercaseCode === "SEHRA10") {
      setActiveCoupon(uppercaseCode);
      setAppliedCouponDiscount(uppercaseCode === "KHAAS26" ? 15 : 10);
      triggerNotification(`Coupon applied: ${uppercaseCode === "KHAAS26" ? "15" : "10"}% off custom premium order.`);
      return true;
    }
    triggerNotification("Invalid archive code. Check spelling.");
    return false;
  };

  const calculateShipping = (country: string): number => {
    const lowerCountry = country.toLowerCase().trim();
    setShippingCountry(country);
    
    if (lowerCountry === "pakistan" || lowerCountry === "pk") {
      setShippingFee(0); // Free premium shipping in Pakistan
      triggerNotification("Complimentary heritage delivery applied for Pakistan shipping address.");
      return 0;
    } else if (lowerCountry !== "") {
      const fee = 30; // 30 USD international delivery
      setShippingFee(fee);
      triggerNotification("Premium flat-rate express global courier ($30) applied.");
      return fee;
    }
    return 0;
  };

  const addReview = (productId: string, author: string, rating: number, comment: string) => {
    const newReview: Review = {
      id: "rev_" + Date.now(),
      author: author || "Archivist Explorer",
      rating,
      date: new Date().toISOString().split("T")[0],
      comment,
      verified: true
    };
    setReviewsState((prev) => [newReview, ...prev]);
    triggerNotification("Your premium testimony has been added to the archives.");
  };

  const resetAllToDefault = () => {
    localStorage.removeItem("sehra_announcements");
    localStorage.removeItem("sehra_fb_link");
    localStorage.removeItem("sehra_products");
    localStorage.removeItem("sehra_reviews");
    localStorage.removeItem("sehra_cart");
    
    setAnnouncementsState(DEFAULT_ANNOUNCEMENTS);
    setFbOrderLinkState(DEFAULT_FB_ORDER_LINK);
    setProductsState(DEFAULT_PRODUCTS);
    setReviewsState(DEFAULT_REVIEWS);
    setCart([]);
    setActiveCoupon("");
    setAppliedCouponDiscount(0);
    setShippingFee(0);
    setShippingCountry("");
    triggerNotification("All parameters and inventory restored back to factory standards.");
  };

  const translatedProducts = products.map((p) => {
    const trans = PRODUCT_TRANSLATIONS[p.id]?.[language];
    if (!trans) return p;
    return {
      ...p,
      title: trans.title,
      category: trans.category,
      shortDescription: trans.shortDescription,
      description: trans.description,
      specifications: trans.specifications,
    };
  });

  const translatedCollections = DEFAULT_COLLECTIONS.map((c) => {
    const trans = COLLECTION_TRANSLATIONS[c.id]?.[language];
    if (!trans) return c;
    return {
      ...c,
      title: trans.title,
      subtitle: trans.subtitle,
      description: trans.description,
    };
  });

  const translatedAnnouncements = announcements.map((a) => {
    const transText = UI_TRANSLATIONS[a.text]?.[language] || a.text;
    return {
      ...a,
      text: transText,
    };
  });

  return (
    <ShopContext.Provider
      value={{
        announcements: translatedAnnouncements,
        fbOrderLink,
        collections: translatedCollections,
        products: translatedProducts,
        reviews,
        cart,
        cartOpen,
        menuOpen,
        searchOpen,
        searchQuery,
        activeProductId,
        activeCollectionId,
        activePage,
        activeCoupon,
        appliedCouponDiscount,
        shippingFee,
        shippingCountry,
        notification,
        
        language,
        setLanguage,
        t,
        
        setAnnouncements,
        setFbOrderLink,
        setProducts,
        setReviews,
        setCartOpen,
        setMenuOpen,
        setSearchOpen,
        setSearchQuery,
        setActiveProductId,
        setActiveCollectionId,
        setActivePage,
        addToCart,
        removeFromCart,
        updateCartQuantity,
        clearCart,
        applyCoupon,
        calculateShipping,
        triggerNotification,
        addReview,
        resetAllToDefault,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};
