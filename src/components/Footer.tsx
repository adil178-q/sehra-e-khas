import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Mail, Shield, Send, Inbox, Truck } from "lucide-react";

export const Footer: React.FC<{ onOpenAdmin: () => void }> = ({ onOpenAdmin }) => {
  const {
    collections,
    setActiveCollectionId,
    setActiveProductId,
    setActivePage,
    triggerNotification,
    language,
    setLanguage,
    t
  } = useShop();

  const [email, setEmail] = useState("");
  const [trackId, setTrackId] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    triggerNotification(`Subscription synchronized for ${email}. Access codes dispatched.`);
    setEmail("");
  };

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trackId.trim()) return;
    triggerNotification(`Order #${trackId} currently processed by DHL Karachi hub.`);
    setTrackId("");
  };

  const handlePageNavigation = (pageId: string) => {
    setActivePage(pageId);
    setActiveCollectionId(null);
    setActiveProductId(null);
  };

  const handleNavigationToCollection = (collectionId: string) => {
    setActiveCollectionId(collectionId);
    setActiveProductId(null);
    setActivePage(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#110e0b] border-t border-[#a98257]/20 py-16 px-4 md:px-8 text-left relative overflow-hidden" id="main-footer">
      {/* Absolute faint background branding text */}
      <div className="absolute right-0 bottom-4 text-[12vw] font-bold font-serif text-[#a98257]/2 select-none pointer-events-none uppercase tracking-widest leading-none">
        SEHRA
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-[#a98257]/10">
          
          {/* Column 1: About / Our Story (col-span-4) */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xl font-bold tracking-[0.25em] font-display bg-gradient-to-r from-[#e9dfc8] via-[#c58b45] to-[#e9dfc8] bg-clip-text text-transparent">
              SEHRA-E-KHAAS
            </span>
            <span className="text-xs tracking-[0.1em] font-serif text-[#c58b45] block mt-0.5 opacity-80">
              صحراۓ خاص
            </span>
            <p className="text-xs text-[#e9dfc8]/70 tracking-[0.04em] leading-relaxed max-w-sm">
              {language === "ar" ? 
                "مشروع أبحاث لملابس الشارع الأرشيفية مسترشد بالهدوء البارد وحركة الكثبان الرملية الصحراوية. ليس للجميع. مناسب تمامًا للقلة. مصنع من قطن باكستاني ممتاز بوزن ٤٥٠ جرامًا، ويتم إرساله عالميًا عبر DHL." :
               language === "nl" ?
                "Een archiefonderzoeksproject voor streetwear, geleid door de koude rust en de verschuivingen van woestijnzand. Niet voor iedereen. Precies goed voor enkelen. Gemaakt van premium 450 GSM Pakistaans katoen, wereldwijd verzonden via DHL." :
               language === "fr" ?
                "Un projet de recherche de streetwear d'archives guidé par la tranquillité froide et les mouvements des sables du désert. Pas pour tout le monde. Parfait pour quelques privilégiés. Fabriqué en coton pakistanais premium de 450 g/m², expédié dans le monde entier via DHL." :
               language === "pt" ?
                "Um projeto de pesquisa de streetwear de arquivo guiado pela tranquilidade fria e mudanças das areias do deserto. Não para todos. Perfeito para poucos. Construído a partir de algodão paquistanês de 450 GSM premium, enviado globalmente via DHL." :
                "An archival streetwear research project guided by the cold tranquility and shiftings of desert sands. Not for everyone. Exactly right for the few. Built from premium 450 GSM Pakistan cotton, dispatched globally via DHL."
              }
            </p>
            <div className="text-[9px] text-[#a98257] font-mono space-y-1 block max-w-sm uppercase">
              <p>DIRECTOR-IN-CHIEF - SYED MUHAMMAD BILAL</p>
              <p>ENTITY - SEHRA E KHAAS SMC PRIVATE LTD</p>
              <p>SEC REGISTRATION INDEX - NO. 0319046 (PK)</p>
            </div>
          </div>

          {/* Column 2: Shop / Stories (col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#c58b45] uppercase">
              {t("THE ARCHIVE DIRECTORY")}
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#e9dfc8]/70">
              <li>
                <button
                  onClick={() => handlePageNavigation("about")}
                  className="hover:text-[#c58b45] tracking-wide text-left transition-colors focus:outline-none cursor-pointer text-[#ca9851] uppercase text-[10px] font-bold"
                >
                  {t("OUR STORY")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageNavigation("journal")}
                  className="hover:text-[#c58b45] tracking-wide text-left transition-colors focus:outline-none cursor-pointer text-[#ca9851] uppercase text-[10px] font-bold"
                >
                  {t("HOUSE JOURNAL")}
                </button>
              </li>
              {collections.map((col) => (
                <li key={col.id}>
                  <button
                    onClick={() => handleNavigationToCollection(col.id)}
                    className="hover:text-[#c58b45] tracking-wide text-left transition-colors focus:outline-none cursor-pointer uppercase text-[11px]"
                  >
                    {col.title.replace("ARCHIVAL ", "").replace("HAUTS D'ARCHIVES / ", "").replace("قمصان الأرشيف / ", "")}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    setActiveCollectionId(null);
                    setActiveProductId(null);
                    setActivePage(null);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#c58b45] tracking-wide text-left transition-colors focus:outline-none cursor-pointer uppercase"
                >
                  {t("ALL MASTERPIECES")}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: FAQs / Contact & Tracking (col-span-3) */}
          <div className="lg:col-span-3 space-y-6">
            <div className="space-y-4">
              <h4 className="text-xs font-mono tracking-[0.2em] text-[#c58b45] uppercase">
                {t("COMPLIANT SHIPPING FAQ")}
              </h4>
              <ul className="space-y-2.5 text-xs text-[#e9dfc8]/70 font-light">
                <li
                  onClick={() => handlePageNavigation("faq")}
                  className="flex items-center gap-1.5 hover:text-[#c58b45] transition-colors cursor-pointer"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c58b45]" /> {language === "ar" ? "كم عدد قطع الدفعة المعروضة؟ (20-40 قطعة)" : language === "nl" ? "Hoeveel eenheden per drop? (Strict 20-40)" : language === "fr" ? "Combien d'unités de série ? (Créneau de 20-40)" : "How many run units? (Strictly 20-40)"}
                </li>
                <li
                  onClick={() => handlePageNavigation("faq")}
                  className="flex items-center gap-1.5 hover:text-[#c58b45] transition-colors cursor-pointer"
                >
                  <span className="w-1 h-1 rounded-full bg-[#c58b45]" /> {language === "ar" ? "أوقات التوصيل؟ (DHL 3-7 أيام عالمياً)" : language === "nl" ? "Leveringstijden? (DHL 3-7 dagen wereldwijd)" : language === "fr" ? "Délais de livraison ? (DHL 3-7 jours partout)" : "Delivery times? (DHL 3-7 days globally)"}
                </li>
                <li className="flex items-center gap-1.5 text-white font-mono">
                  <Mail className="w-3.5 h-3.5 text-[#c58b45]" /> support@sehra-e-khaas.com
                </li>
              </ul>
            </div>

            {/* TRACK ORDER MINI-FORM */}
            <div className="space-y-2 pt-1 border-t border-[#a98257]/10">
              <h5 className="text-[10px] font-mono tracking-[0.1em] text-[#a98257] uppercase flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-[#c58b45]" /> {t("SECURE DISPATCH TRACKING")}
              </h5>
              <form onSubmit={handleTrackOrder} className="flex gap-1.5">
                <input
                  type="text"
                  placeholder="DHL AIRBILL ID (e.g. 84920)"
                  value={trackId}
                  onChange={(e) => setTrackId(e.target.value)}
                  className="bg-[#2b241e] border border-[#a98257]/30 py-1.5 px-3.5 text-[10.5px] font-mono text-[#e9dfc8] placeholder-gray-600 focus:outline-none focus:border-[#c58b45] flex-grow uppercase"
                />
                <button
                  type="submit"
                  className="bg-[#c58b45] hover:bg-[#a98257] text-[#110e0b] px-3 flex items-center justify-center transition-colors cursor-pointer"
                  aria-label="Track package"
                >
                  <Send className="w-3 h-3" />
                </button>
              </form>
            </div>
          </div>

          {/* Column 4: Policies & Regulations (col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#c58b45] uppercase">
              {t("LEGAL CODES")}
            </h4>
            <ul className="space-y-2 text-xs font-light text-[#e9dfc8]/60 uppercase tracking-widest text-[9px]">
              <li
                onClick={() => handlePageNavigation("faq")}
                className="hover:text-[#c58b45] transition-colors cursor-pointer"
              >
                {t("COMPLIANT SHIPPING FAQ")}
              </li>
              <li
                onClick={() => handlePageNavigation("returns")}
                className="hover:text-[#c58b45] transition-colors cursor-pointer"
              >
                {t("RETURN & EXCHANGE MATRIX")}
              </li>
              <li
                onClick={() => handlePageNavigation("privacy")}
                className="hover:text-[#c58b45] transition-colors cursor-pointer"
              >
                {t("DATA PRIVACY AMENDMENTS")}
              </li>
              <li
                onClick={() => handlePageNavigation("terms")}
                className="hover:text-[#c58b45] transition-colors cursor-pointer"
              >
                {t("COLLECTIVE TERMS & CONDS")}
              </li>
            </ul>

            {/* NEWSLETTER SUBSCRIPTION FORM */}
            <div className="space-y-2.5 pt-4 border-t border-[#a98257]/10">
              <h5 className="text-[10.5px] font-mono text-[#e9dfc8] tracking-widest uppercase flex items-center gap-1.5">
                <Inbox className="w-4 h-4 text-[#c58b45]" /> {t("NEWSLETTER SYNCHRONY")}
              </h5>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="COLLECTOR E-MAIL"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-[#2b241e] border border-[#a98257]/20 py-2 px-3 text-xs text-[#e9dfc8] placeholder-gray-600 focus:outline-none focus:border-[#c58b45] flex-grow"
                  required
                />
                <button
                  type="submit"
                  className="bg-gradient-to-r from-[#c58b45] to-[#a98257] text-[#110e0b] font-mono text-[10px] px-4 font-bold tracking-wider hover:brightness-110 transition-all cursor-pointer"
                >
                  {t("APPLY")}
                </button>
              </form>
            </div>
          </div>

        </div>

        {/* Premium High-Fashion Language Switcher block */}
        <div className="mt-8 pt-6 border-b border-[#a98257]/10 pb-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center sm:justify-start">
            <span className="text-[10px] font-mono text-[#a98257] uppercase tracking-wider">
              {t("Language Selection")} // 
            </span>
            <div className="flex flex-wrap gap-2.5 justify-center">
              {[
                { code: "en", label: "ENGLISH" },
                { code: "ar", label: "العربية" },
                { code: "nl", label: "NEDERLANDS" },
                { code: "fr", label: "FRANÇAIS" },
                { code: "pt", label: "PORTUGUÊS" }
              ].map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code as any);
                    triggerNotification(`Language switched to ${lang.label}`);
                  }}
                  className={`text-[9px] font-mono tracking-widest px-3 py-1.5 border transition-all cursor-pointer rounded ${
                    language === lang.code
                      ? "border-copper-gold text-[#c58b45] bg-[#c58b45]/10 font-bold"
                      : "border-copper-gold/15 text-[#e9dfc8]/50 hover:text-[#c58b45] hover:border-copper-gold/45"
                  }`}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom info panel */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center text-gray-500 text-[10px] font-mono uppercase">
          <p>© {new Date().getFullYear()} SEHRA-E-KHAAS. ALL DEEDS PRESERVED UNDER CODE-PK.</p>
          
          <div className="flex gap-6">
            <a href="https://www.instagram.com/sehraekhaas.official/" target="_blank" rel="noopener noreferrer" className="hover:text-[#c58b45] transition-colors">
              INSTAGRAM
            </a>
            <a href="https://www.tiktok.com/@sehraekhaas.official" target="_blank" rel="noopener noreferrer" className="hover:text-[#c58b45] transition-colors">
              TIKTOK
            </a>
            <a href="https://web.facebook.com/sehraekhaas.official" target="_blank" rel="noopener noreferrer" className="hover:text-[#c58b45] transition-colors">
              FACEBOOK
            </a>
          </div>

          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 text-xs text-[#c58b45] hover:text-[#e9dfc8] transition-colors uppercase cursor-pointer"
            id="owner-badge-btn"
          >
            <Shield className="w-3.5 h-3.5" /> {t("SECURE CONSOLE")}
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
