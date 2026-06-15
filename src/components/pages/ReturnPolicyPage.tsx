import React, { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, Mail, RefreshCw, AlertTriangle, Clock, ShieldCheck, HelpCircle } from "lucide-react";

export const ReturnPolicyPage: React.FC = () => {
  const { setActivePage } = useShop();
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "01. POLICY OVERVIEW" },
    { id: "eligibility", label: "02. ELIGIBILITY MATRIX" },
    { id: "process", label: "03. INSPECTION & PROCESS" },
    { id: "resolutions", label: "04. RESOLUTIONS & FEES" },
    { id: "email-template", label: "05. DISPATCH TEMPLATE" },
    { id: "regional-rights", label: "06. REGIONAL RIGHTS" },
    { id: "faq", label: "07. RETURN ARCHIVE FAQ" }
  ];

  const faqs = [
    { q: "What is the standard return window?", a: "We accept return or exchange requests within 14 days of delivery. For orders within the EU, UK, and Australia, this window is fully aligned with national local consumer statutes to extend protective cooling-off frames." },
    { q: "Are custom pieces or made-to-order garments returnable?", a: "No. Any items flagged as bespoke, custom tailored, made-to-order, or exclusive high-tier archives are strictly non-returnable and non-refundable unless verified defective upon delivery." },
    { q: "Who pays for the returning shipping costs?", a: "If the return or exchange is initiated due to a Sehra-e-Khaas error (faulty stitching, incorrect variant shipped, damage), the House absorbs 100% of the return freight. For personal preference, sizing adjustments, or general remorse, the buyer is fully responsible for return shipping costs." },
    { q: "Are my international customs duties and taxes refundable?", a: "No. Customs fees, import duties, and local clearance levies charged by destination border control authorities are paid directly to governments and cannot be refunded by Sehra-e-Khaas." },
    { q: "Can I get a full monetary refund?", a: "Yes. Once an item passes our laboratory quality analysis, you can opt for a full refund back to your original payment card, or choose store credit (valid for 12 months) which we recommend to expedite transactions." },
    { q: "How long does the inspection take?", a: "The inspection procedure takes approximately 7 to 10 business days from the moment the physical parcel lands at our central Pakistan headquarters." },
    { q: "What conditions must the returned garments meet?", a: "The garment must be completely unworn, unwashed, unaltered, free of perfumes/deodorants, with all high-density tag locks attached, and returned in its original dust bags and box packaging." },
    { q: "What is your order cancellation rule?", a: "You can request manual order cancellation within a strict 24-hour window from payment. Once a custom run enters our spinning forge, cancellations are block-locked." },
    { q: "How do I report a damaged item?", a: "Any item arriving damaged or defective must be documented and submitted via email within 48 hours of delivery. Include photos of the packaging and product flaws." },
    { q: "Can I exchange for a different size?", a: "Yes, provided the alternative size is currently available in our highly restricted limited-run archive stock (usually 20-40 units). If unavailable, we offer store credit or product substitutions." },
    { q: "What if my return package gets lost in transit?", a: "We strongly advise utilizing a registered, fully tracked postal method (e.g., DHL or FedEx). Sehra-e-Khaas is not liable for return shipments lost before they reach our headquarters." },
    { q: "Is store credit transferable?", a: "No. The 12-month store credit voucher code is linked to the authorized purchaser email and cannot be transferred or cashed out." },
    { q: "Can I return items purchased during seasonal vault sales?", a: "All seasonal vault sales, special events, and clearance archive items are sold on a strictly final-sale basis and are ineligible for return or exchange." },
    { q: "Do you offer physical drop-off centers?", a: "No. Sehra-e-Khaas operates as a digital-first, online-exclusive luxury house. All returns must be routed through international tracked post." },
    { q: "How is partial refund handled?", a: "A partial refund may be issued at the discretion of the House if items are returned missing components (e.g., tags, matching dust bags, box) but are otherwise in acceptable unworn condition." }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="return-policy-root">
      <div className="max-w-7xl mx-auto">
        
        {/* Back navigation header */}
        <div className="mb-12 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="policy-header">
          <button 
            onClick={() => setActivePage(null)}
            className="flex items-center gap-2 text-xs font-mono tracking-widest text-[#ca9851] hover:text-[#f3dfbf] transition-colors focus:outline-none uppercase"
            id="back-to-archives-btn"
          >
            <ArrowLeft className="w-4 h-4" /> [ RETURN TO CHAMBER ]
          </button>
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851]">POLICY DOCUMENT REF: RL-09A</span>
        </div>

        {/* Hero Title Container */}
        <div className="mb-16 text-center md:text-left" id="policy-title-block">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851] uppercase block mb-3">GLOBAL DISTRIBUTION REGISTRY</span>
          <h1 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-white uppercase font-light leading-none">
            RETURNS, REFUNDS & EXCHANGE WORLDWIDE
          </h1>
          <p className="mt-4 text-xs md:text-sm text-[#e9dfc8]/60 font-light max-w-2xl leading-relaxed">
            Sehra-e-Khaas produces strictly limited-edition artifacts. In keeping with our rigorous standards of exclusivity and design integrity, returns are managed through the legal framework provided below.
          </p>
        </div>

        {/* Dynamic Dual Grid: Left TOC, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative" id="policy-body-layout">
          
          {/* Table of Contents - Left Rail (Sticky for Desktop) */}
          <aside className="lg:col-span-3 hidden lg:block" id="policy-left-aside">
            <div className="sticky top-28 bg-[#120f0c] border border-[#2a2118] p-6 rounded" id="toc-container">
              <h2 className="text-[11px] font-mono tracking-[0.25em] text-[#ca9851] uppercase mb-6 border-b border-[#2a2118] pb-3 font-semibold">
                TABLE OF CONTENTS
              </h2>
              <ul className="space-y-4">
                {sections.map((sec) => (
                  <li key={sec.id}>
                    <button
                      onClick={() => scrollToSection(sec.id)}
                      className={`text-left text-xs font-mono tracking-wider block transition-colors ${
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
              <div className="mt-8 pt-4 border-t border-[#2a2118]/80 text-[10px] font-mono text-gray-500 leading-relaxed uppercase">
                Email assistance:<br />
                <a href="mailto:support@sehra-e-khaas.com" className="text-[#ca9851] hover:underline">support@sehra-e-khaas.com</a>
              </div>
            </div>
          </aside>

          {/* Policy Text & FAQ - Right Body Column */}
          <main className="lg:col-span-9 space-y-16" id="policy-main-content">
            
            {/* 01. OVERVIEW */}
            <section id="overview" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <Clock className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">01. 14-DAY RETURN COOLING WINDOW</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  We offer a standard **14-day return and exchange window** beginning from the absolute moment of parcel delivery. This policy is globally standard and is extended where necessary to integrate seamlessly with statutory local cooling-off and distance-selling acts of the European Union, United Kingdom, and Australian Consumer Laws (ACL).
                </p>
                <p>
                  Any attempts to register a return outside this 14-day framework will be rejected automatically by our warehouse administration, except where mandated otherwise by localized non-waivable customer protection regulations.
                </p>
              </div>
            </section>

            {/* 02. ELIGIBILITY */}
            <section id="eligibility" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">02. ELIGIBILITY MATRIX & EXCEPTIONS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  To preserve the hygienic integrity of high-grade fabrics, returns are subjected to strict gatekeeping. Garments must meet the following criteria:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#e9dfc8]/70">
                  <li>Purely unworn, unwashed, and entirely unaltered from factory specs.</li>
                  <li>Free of any traces of perfumes, chemical agents, cosmetic stains, or body odors.</li>
                  <li>Fully attached high-density plastic tags and labels completely intact.</li>
                  <li>Returned inside the original custom shipping boxes and microfiber protective dust bags.</li>
                  <li>Accompanied by a verifiable proof of purchase / sales invoice receipt.</li>
                </ul>
                <div className="bg-[#1f1711] border-l-2 border-[#ca9851] p-4 text-xs font-mono text-[#f3dfbf] mt-4">
                  <strong>CRITICAL EXCEPTIONS:</strong> Made-to-order garments, personalized tailoring, undergarments, face shields, and custom limited-run vault edition items are cataloged as strictly final-sale and are non-returnable unless received with verifiable manufacturing discrepancies.
                </div>
              </div>
            </section>

            {/* 03. INSPECTION */}
            <section id="process" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <AlertTriangle className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">03. LABORATORY INSPECTION PROTOCOL</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  Every return parcel enters our centralized inspection facility located in Pakistan. Our laboratory team takes **7 to 10 business days** to process, test, and authenticate the garments to guarantee they meet resale standards.
                </p>
                <p>
                  Once approved, a certification notification is dispatched to you. In the event of a returned garment failing authentication (traces of wear, laundering, missing tag locks), the parcel will be re-routed back to the customer's shipping address at their expense, and no refund will be issued.
                </p>
              </div>
            </section>

            {/* 04. RESOLUTIONS */}
            <section id="resolutions" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <RefreshCw className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">04. RESOLUTION FRAMEWORK & DISPATCH FEES</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  Based on customer preference and inventory availability, the following resolution protocols are offered:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                  <div className="bg-[#12100e] border border-[#2a2118] p-4">
                    <h4 className="text-xs font-mono tracking-widest text-[#ca9851] uppercase mb-2">STORE CREDIT (RECOMMENDED)</h4>
                    <p className="text-xs text-[#e9dfc8]/60 leading-relaxed">
                      Issued as an untaxed digital code valid for 12 months. Best for international return requests to bypass delay cycles.
                    </p>
                  </div>
                  <div className="bg-[#12100e] border border-[#2a2118] p-4">
                    <h4 className="text-xs font-mono tracking-widest text-[#ca9851] uppercase mb-2">ORIGINAL MONETARY REFUND</h4>
                    <p className="text-xs text-[#e9dfc8]/60 leading-relaxed">
                      Funds are credited back to the original PCI-compliant visa/mastercard or digital payment channel used. Takes 5 to 10 processing days.
                    </p>
                  </div>
                </div>
                <div className="mt-4 space-y-3">
                  <p>
                    <strong>Shipping Liability Rules:</strong> If the exchange is triggered by a manufacturing defect or wrong packaging dispatch error on our end, Sehra-e-Khaas covers 100% of the courier costs. If triggered by sizing choices or consumer change-of-mind, the buyer handles all package transit, trackable postings, and associated fees.
                  </p>
                  <p>
                    <strong>Destination border taxes & duties:</strong> Customers are reminded that any customs clearance costs, duties, or import tariffs paid to regional custom portals during original dispatch are non-refundable.
                  </p>
                </div>
              </div>
            </section>

            {/* 05. EMAIL TEMPLATE */}
            <section id="email-template" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <Mail className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">05. STEP-BY-STEP EMAIL PROTOCOL</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  To request a return or exchange, compile the following template and dispatch it to our customer desk at **support@sehra-e-khaas.com**. Please copy and fill the template fields precisely to avoid processing lags.
                </p>
                
                <div className="bg-[#12100e] border border-[#2a2118] p-6 font-mono text-xs text-[#e9dfc8]/80 space-y-2 rounded">
                  <p><span className="text-gray-500">To:</span> support@sehra-e-khaas.com</p>
                  <p><span className="text-gray-500">Subject:</span> Return/Exchange Request - Order #xxxxxx</p>
                  <p className="pt-2">Dear Sehra Custodian,</p>
                  <p>I would like to file an official return request under policy guidelines.</p>
                  <p>ORDER REFERENCE NUMBER: [Insert No. here]</p>
                  <p>GARMENT SKU IDENTIFIER: [Insert Product Name & Size]</p>
                  <p>REASON PROTOCOL CODE:</p>
                  <p className="pl-4 text-gray-500">- (A) Manufacturing Flaw (Attach high-res photos)</p>
                  <p className="pl-4 text-gray-500">- (B) Sizing Incompatibility (Requires exchange)</p>
                  <p className="pl-4 text-gray-500">- (C) Aesthetic Dissatisfaction</p>
                  <p>PREFFERED RESOLUTION: [Original Payment Card / Store Credit valid 12 months]</p>
                  <p className="pt-2">Sincerely,</p>
                  <p>[Insert Full Billing Name & Telephone No.]</p>
                </div>
              </div>
            </section>

            {/* 06. REGIONAL RIGHTS */}
            <section id="regional-rights" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <ShieldCheck className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">06. REGIONAL REGULATIVE CONSUMER COMPLIANCE</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  We acknowledge consumer regulations dynamically across sovereign zones to preserve legal compliance:
                </p>
                <ul className="space-y-3">
                  <li>
                    <strong>EU/UK Consumers (Directive 2011/83/EU):</strong> Enjoy a strict unconditional 14-day distance cooling-off window. We will return the base item cost and standard shipping upon confirmation of returned tracking, provided you have registered your request in written format within 14 days.
                  </li>
                  <li>
                    <strong>Australian Consumer Law (ACL):</strong> Our items come with guarantees that cannot be excluded. You are entitled to a replacement or refund for major failures, and compensation for any other reasonably foreseeable loss.
                  </li>
                  <li>
                    <strong>United States Guidelines:</strong> Handled in absolute alignment with federal commerce regulations and individual state fair-trade practices.
                  </li>
                  <li>
                    <strong>Canada (PIPEDA & Quebec Protection Act):</strong> Consumer transparency is integrated into data and product distribution protocols.
                  </li>
                </ul>
              </div>
            </section>

            {/* 07. FAQ */}
            <section id="faq" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <span className="p-2 bg-[#ca9851]/10 text-[#ca9851] rounded-full">
                  <HelpCircle className="w-5 h-5" />
                </span>
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">07. RETURNS ARCHIVE FAQ (15 Q&As)</h3>
              </div>
              
              <div className="space-y-6" id="faq-accordions">
                {faqs.map((f, i) => (
                  <div key={i} className="bg-[#12100e] border border-[#2a2118] p-5 rounded hover:border-[#ca9851]/40 transition-colors">
                    <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-2 flex items-start gap-2">
                      <span className="text-[#ca9851] font-mono">Q{i + 1}.</span> {f.q}
                    </h4>
                    <p className="text-xs md:text-sm text-[#e9dfc8]/70 leading-relaxed font-light pl-6">
                      {f.a}
                    </p>
                  </div>
                ))}
              </div>
            </section>

          </main>
        </div>
        
      </div>
    </div>
  );
};
export default ReturnPolicyPage;
