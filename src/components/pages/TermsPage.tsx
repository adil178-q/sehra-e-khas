import React, { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, Scale, Shield, Landmark } from "lucide-react";

export const TermsPage: React.FC = () => {
  const { setActivePage } = useShop();
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "01. LEGAL IDENTITY & PURPOSE" },
    { id: "eligibility", label: "02. ELIGIBILITY & CONDUCT" },
    { id: "products", label: "03. PRODUCT DISPLAY & RARITY" },
    { id: "pricing", label: "04. ORDERS, PRICING & PAYMENT" },
    { id: "shipping", label: "05. SHIPPING & IMPORT DUTIES" },
    { id: "returns-cancellations", label: "06. RETURNS & CANCELLATIONS" },
    { id: "prohibited", label: "07. BOT FILTERS & PROHIBITED CONDUCT" },
    { id: "ip", label: "08. INTELLECTUAL PROPERTY" },
    { id: "liability", label: "09. WARRANTIES & LIABILITY CAPPING" },
    { id: "disputes", label: "10. DISPUTES & GOVERNING LAW" }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="terms-root">
      <div className="max-w-7xl mx-auto">
        
        {/* Back navigation header */}
        <div className="mb-12 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="terms-header">
          <button 
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ca9851] hover:text-[#f3dfbf] transition-colors focus:outline-none uppercase"
            id="back-to-archives-btn"
          >
            <ArrowLeft className="w-4 h-4" /> [ RETURN TO CHAMBER ]
          </button>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851]">LAST EFFECTIVE: JANUARY 17, 2026</span>
        </div>

        {/* Hero Title Container */}
        <div className="mb-16 text-center md:text-left" id="terms-title-block">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851] uppercase block mb-3 font-semibold">SOVEREIGN LEGAL CODE</span>
          <h1 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-white uppercase font-light leading-none">
            TERMS & CONDITIONS (WORLDWIDE)
          </h1>
          <div className="flex gap-4 mt-4 items-center justify-center md:justify-start text-xs font-mono text-[#ca9851]">
            <span>VERSION 1.0</span>
            <span>•</span>
            <span>CODEX: SEC-PK-0319046</span>
          </div>
          <p className="mt-4 text-xs md:text-sm text-[#e9dfc8]/60 font-light max-w-2xl leading-relaxed">
            By accessing www.sehra-e-khaas.com, you enter into a binding covenant with Sehra E Khaas SMC Private Limited. Please review these contractual provisions carefully before executing any transactions.
          </p>
        </div>

        {/* Dynamic Dual Grid: Left TOC, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="terms-body-layout">
          
          {/* Table of Contents - Left Rail (Sticky for Desktop) */}
          <aside className="lg:col-span-3 hidden lg:block" id="terms-left-aside">
            <div className="sticky top-28 bg-[#120f0c] border border-[#2a2118] p-6 rounded" id="toc-container">
              <h2 className="text-[10px] font-mono tracking-[0.25em] text-[#ca9851] uppercase mb-6 border-b border-[#2a2118] pb-3 font-bold">
                LEGAL SECTIONS
              </h2>
              <ul className="space-y-4">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-xs font-mono tracking-wider block transition-colors uppercase ${
                        activeSection === sec.id 
                          ? "text-[#ca9851] font-bold" 
                          : "text-[#e9dfc8]/50 hover:text-white"
                      }`}
                      id={`toc-link-${sec.id}`}
                    >
                      {sec.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="mt-8 pt-4 border-t border-[#2a2118]/80 text-[9px] font-mono text-gray-500 leading-relaxed uppercase">
                Legal Directorate:<br />
                <a href="mailto:support@sehra-e-khaas.com" className="text-[#ca9851] hover:underline">support@sehra-e-khaas.com</a>
              </div>
            </div>
          </aside>

          {/* Terms Content - Right Column */}
          <main className="lg:col-span-9 space-y-16" id="terms-main-content">
            
            {/* 01. LEGAL IDENTITY */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Landmark className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">01. LEGAL ENTITY DEFINITIONS & SCOPE</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  This website (www.sehra-e-khaas.com) and associated digital interfaces are owned and operated by **SEHRA E KHAAS SMC PRIVATE LIMITED**, a single-member private limited company registered in Pakistan under registration number **0319046**, operating under the regulatory supervision of the Securities and Exchange Commission of Pakistan.
                </p>
                <p>
                  These Terms of Service govern all access, navigation, transaction processing, and customer relations between Sehra E Khaas SMC Private Limited (hereafter "the House") and the individual collector/user (hereafter "the Visitor" or "the Buyer").
                </p>
              </div>
            </section>

            {/* 02. ELIGIBILITY */}
            <section id="eligibility" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Scale className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">02. USER ELIGIBILITY & REPRESENTATIONS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  By engaging with this checkout portal, you represent that you are at least 18 years of age (or the age of legal majority in your country of residence), or that you possess verified parental or guardian consent to execute international retail contracts.
                </p>
                <p>
                  You agree to provide true, accurate, and current payment and billing credentials. Any orders placed under fraudulent names, throwaway email accounts, or proxy billing details will be subject to instant termination by our automated risk filters.
                </p>
              </div>
            </section>

            {/* 03. PRODUCTS & EXCLUSIVITY */}
            <section id="products" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Shield className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">03. ARCHIVE AVAILABILITY & IMAGING LIABILITY</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  <strong>Strict Volume Ceilings:</strong> All garments displayed represent extremely limited design chapters (strictly capped at 20 to 40 items). Once stock metrics reach zero, blueprints are permanently archived.
                </p>
                <p>
                  <strong>Color & Texture Representation:</strong> Due to variations in organic fabric dye processing and individual screen calibration, slight deviations in color shade, structural texture, and stitching characteristics are natural and do not constitute physical defects.
                </p>
              </div>
            </section>

            {/* 04. ORDERS & PRICING */}
            <section id="pricing" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Scale className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">04. OFFERS, PRICING & PAYMENT PROTECTION</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  <strong>Order as Legal Offer:</strong> Your submission of an order represents a legal offer to buy. The House reserves the right to accept or decline this offer for any reason, including errors in currency billing charts, custom system failures, or country-specific shipping restrictions. Acceptance of your offer is officially completed only when the House dispatches high-density logistics airbills and shipment tracking emails to your registered address.
                </p>
                <p>
                  <strong>Payment & Currency:</strong> All prices are displayed in United States Dollars (USD). We utilize premium SSL encrypted, PCI DSS Level 1 compliant payment corridors. We strictly do not store, copy, or retain raw card numbers or CVVs on our own local servers.
                </p>
              </div>
            </section>

            {/* 05. SHIPPING & IMPORT DUTIES */}
            <section id="shipping" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Landmark className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">05. SHIPMENT COMPLIANCE & CUSTOM CHANNELS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  All physical dispatches originate from Pakistan. Shipments are processed via top international carriers (principally DHL Express).
                </p>
                <p>
                  <strong>Customs, Tariffs & Duties Responsibility:</strong> The Buyer is the sole recorded Importer of Record and is entirely liable for clearing local customs, paying import taxes, local levies, and handling any clearance hurdles. If a buyer rejects a parcel due to unexpected duty assessments, the return shipping expenses and destruction penalties charged by carriers will be deducted in full from any potential store credit or refund.
                </p>
              </div>
            </section>

            {/* 06. RETURNS & CANCELLATIONS */}
            <section id="returns-cancellations" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Shield className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">06. RETURNS, EXCHANGE CODES & CANCELLATIONS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  All return, refund, or exchange queries are strictly managed under our unified **Return, Refund & Exchange Policy (Worldwide)**. To access the detailed step-by-step resolution codes and email templates, click on Return Policy (Page A).
                </p>
                <p>
                  <strong>Cancellation Limits:</strong> You are granted a strict **24-hour window** from payment to cancel or modify your order details. Bespoke or accelerated made-to-order garments are exempted from cancellation once materials are checked out from our cutting tables.
                </p>
              </div>
            </section>

            {/* 07. PROHIBITED ACTIONS */}
            <section id="prohibited" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Scale className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">07. BOT FILTERING & EXCLUSIVITY INTEGRITY</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  To preserve the core fairness of our ultra-limited drop system, the following automated actions are explicitly prohibited:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#e9dfc8]/70">
                  <li>Deploying web scrapers, automated checkout scripts, or snipers to claim inventory.</li>
                  <li>Registering multiple fake accounts to bypass the 1-item per buyer limit on rare pieces.</li>
                  <li>Undertaking resale or distribution without getting written consent from Sehra e Khaas.</li>
                  <li>Using unauthorized proxy gateways or fraudulent credit profiles.</li>
                </ul>
              </div>
            </section>

            {/* 08. INTELLECTUAL PROPERTY */}
            <section id="ip" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Shield className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">08. INTELLECTUAL PROPERTY & REGISTERED DESIGNS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  All assets, logos, design files, embroidery mockups, typographic patterns, photographic images, and general coding scripts are copyrights of Sehra E Khaas SMC Private Limited. No visitor may reproduce, copy, replicate, or exploit any fragments of the website without receiving prior written approval signed by Syed Muhammad Bilal.
                </p>
              </div>
            </section>

            {/* 09. LIABILITY LIMITS */}
            <section id="liability" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Landmark className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">09. WARRANTY DISCLAIMER & LIMITATION OF LIABILITY</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  This website and all physical and digital services are provided on an "as is" and "as available" basis without any express or implied representations.
                </p>
                <p>
                  <strong>Capping Liability:</strong> To the maximum extent permitted by applicable laws, the total liability of Sehra E Khaas SMC Private Limited for any damage claims whatsoever is strictly capped and will never exceed the absolute amount paid dynamically to our house during the purchase of the contested garment, or a flat-rate maximum of $100 USD (whichever is lower).
                </p>
              </div>
            </section>

            {/* 10. GOVERNING LAW & DISPUTES */}
            <section id="disputes" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Scale className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">10. JURISDICTION & AMENDMENTS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  <strong>Governing Jurisdiction:</strong> These Terms and Conditions shall be governed, interpreted, and resolved under the laws of the Sovereign Republic of Pakistan. However, consumers residing within the European Union, United Kingdom, United States, and Australia are granted default protection of mandatory consumer protective statutes native to their residential lands.
                </p>
                <p>
                  <strong>Alternative Dispute Resolution:</strong> Any disputes must undergo an initial informal amicable resolution phase via our legal desk at support@sehra-e-khaas.com. If unresolved within 30 days, matters may progress to regional non-binding mediation, or voluntary arbitration, subject to a strict waiver of any rights to class-action litigation.
                </p>
                <p>
                  <strong>Amendments:</strong> We reserve the right to modify these Terms and Conditions dynamically without prior notice. Standard changes take effect 30 days after modification.
                </p>
              </div>
            </section>

          </main>
        </div>
        
      </div>
    </div>
  );
};
export default TermsPage;
