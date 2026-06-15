import React, { useState } from "react";
import { useShop } from "../../context/ShopContext";
import { ArrowLeft, Key, Lock, Eye, CheckCircle } from "lucide-react";

export const PrivacyPage: React.FC = () => {
  const { setActivePage } = useShop();
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", label: "01. CONTROLLER & OVERVIEW" },
    { id: "collection", label: "02. CATEGORIES OF PERSONAL DATA" },
    { id: "usage", label: "03. HOW DATA IS UTILIZED" },
    { id: "sharing", label: "04. SHARING & TRANSFERS" },
    { id: "rights", label: "05. USER RIGHTS (GDPR / CCPA)" },
    { id: "cookies", label: "06. COOKIES & COMPLIANCE" },
    { id: "retention", label: "07. DATA RETENTION POLICY" },
    { id: "security", label: "08. ENCRYPTION & SECURITY" },
    { id: "children", label: "09. CHILDREN'S SECURITY" },
    { id: "complaints", label: "10. CONTACT COMPLAINTS INDEX" }
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="bg-[#0b0907] text-[#e9dfc8] min-h-screen py-12 px-4 md:px-12 font-sans selection:bg-[#ca9851] selection:text-[#0b0907]" id="privacy-root">
      <div className="max-w-7xl mx-auto">
        
        {/* Back navigation header */}
        <div className="mb-12 flex justify-between items-center border-b border-[#2a2118]/80 pb-6" id="privacy-header">
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
        <div className="mb-16 text-center md:text-left" id="privacy-title-block">
          <span className="text-[10px] font-mono tracking-[0.3em] text-[#ca9851] uppercase block mb-3 font-semibold">SECURITY AMENDMENT DISCLOSURES</span>
          <h1 className="text-2xl xs:text-3xl md:text-5xl font-serif tracking-tight text-white uppercase font-light leading-none">
            GLOBAL DATA PRIVACY POLICY
          </h1>
          <div className="flex gap-4 mt-4 items-center justify-center md:justify-start text-xs font-mono text-[#ca9851]">
            <span>GDPR, CCPA, PIPEDA DATA FRAMEWORK</span>
          </div>
          <p className="mt-4 text-xs md:text-sm text-[#e9dfc8]/60 font-light max-w-2xl leading-relaxed">
            Sehra-e-Khaas places the preservation of customer privacy at the center of our operational values. Explore the structural documentation regarding our data security protocols below.
          </p>
        </div>

        {/* Dynamic Dual Grid: Left TOC, Right Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12" id="privacy-body-layout">
          
          {/* Table of Contents - Left Rail (Sticky for Desktop) */}
          <aside className="lg:col-span-3 hidden lg:block" id="privacy-left-aside">
            <div className="sticky top-28 bg-[#120f0c] border border-[#2a2118] p-6 rounded" id="toc-container">
              <h2 className="text-[10px] font-mono tracking-[0.25em] text-[#ca9851] uppercase mb-6 border-b border-[#2a2118] pb-3" font-bold="true">
                DATA POLICY INDEX
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
                Data Protection Officer:<br />
                <a href="mailto:support@sehra-e-khaas.com" className="text-[#ca9851] hover:underline">support@sehra-e-khaas.com</a>
              </div>
            </div>
          </aside>

          {/* Privacy Content - Right Column */}
          <main className="lg:col-span-9 space-y-16" id="privacy-main-content">
            
            {/* 01. CONTROLLER INFO */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Lock className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">01. DATA CONTROLLER & CORE SCOPE</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  The primary Data Controller responsible for the processing and storage of personal records is **SEHRA E KHAAS SMC PRIVATE LIMITED**, operating from Pakistan. We manage customer information in compliance with international privacy protocols including the General Data Protection Regulation (GDPR), California Consumer Privacy Act (CCPA), and Canadian PIPEDA structures.
                </p>
                <p>
                  This policy applies directly to all collectors, visitors, and transaction participants interacting with www.sehra-e-khaas.com.
                </p>
              </div>
            </section>

            {/* 02. CATEGORIES OF PERSONAL DATA */}
            <section id="collection" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Eye className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">02. CATEGORIES OF PERSONAL DATA CAPTURED</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  To fulfill high-end distribution logistics, the House gathers specific personal data, classified as:
                </p>
                <ul className="list-disc pl-5 space-y-3 text-[#e9dfc8]/70">
                  <li>
                    <strong>Identify & Account Records:</strong> Legal name, primary password logs, country of origin, and associated email coordinates.
                  </li>
                  <li>
                    <strong>Billing & Shipping Logistics:</strong> Street location details, city indexes, zip codes, and phone parameters required by DHL Express.
                  </li>
                  <li>
                    <strong>Transactional & Financial Logs:</strong> Item purchase logs, sizing preferences, payment channel details. *Note: We never record raw master-pin CVV details locally.*
                  </li>
                  <li>
                    <strong>Automatically Gained Data:</strong> Machine browser profiles, dynamic IP coordinates, system screen ratios, and referral tags tracked during your session.
                  </li>
                </ul>
              </div>
            </section>

            {/* 03. HOW DATA IS UTILIZED */}
            <section id="usage" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Key className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">03. ARCHIVE PROCESSING PURPOSES</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  We utilize your personal records selectively under explicit legal frameworks:
                </p>
                <ul className="list-decimal pl-5 space-y-2 text-[#e9dfc8]/70">
                  <li>Executing the primary retail sales contract (packing your garments, booking cargo space, clearing customs).</li>
                  <li>Inquiries support and dispute mitigation via our email desk.</li>
                  <li>Publishing newsletters and limited-edition drop notification codes (only when explicit user opt-in is granted).</li>
                  <li>Preventing fraudulent script bots or sniper checkouts to keep the drop environment fair.</li>
                </ul>
              </div>
            </section>

            {/* 04. DATA SHARING & TRANSFERS */}
            <section id="sharing" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <CheckCircle className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">04. SECURE SHARING & TRANSFERS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  <strong>No Selling of Records:</strong> Sehra e Khaas strictly does not sell, trade, rent, or lease any customer logs or tracking data pools to secondary marketing brokers under any circumstances.
                </p>
                <p>
                  <strong>Third-Party Processors:</strong> Data is shared only with certified contractors vital to our operations:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#e9dfc8]/70">
                  <li>Logistics partners (DHL and FedEx) to deliver your products.</li>
                  <li>Licensed PCI-compliant billing corridors (Stripe or similar token interfaces).</li>
                  <li>Host servers (Google Cloud Platform, Vercel) keeping website operations responsive.</li>
                </ul>
                <p>
                  <strong>Sovereign Bound Cross-Border Transfers:</strong> To coordinate global shipments, your records travel through servers in Pakistan, the European Union, and the United States, utilizing Standard Contractual Clauses (SCCs) to maintain the highest levels of safety.
                </p>
              </div>
            </section>

            {/* 05. USER RIGHTS */}
            <section id="rights" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Lock className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">05. SOVEREIGN DATA RIGHTS (GDPR / CCPA)</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  Depending on your physical location and territorial statutes, you possess several core rights regarding your personal records:
                </p>
                <ul className="list-disc pl-5 space-y-2 text-[#e9dfc8]/70 font-light text-xs md:text-sm">
                  <li>
                    <strong>GDPR (EU/UK Residents):</strong> Right to view, correct, purge, or extract your data in a structured format. You can also restrict how we process your records.
                  </li>
                  <li>
                    <strong>CCPA (California Residents):</strong> Right to know what data we collect and request its deletion. We officially declare that we do not sell California residents' data.
                  </li>
                  <li>
                    <strong>Australia (Privacy Act 1988) & Canada (PIPEDA):</strong> Enjoy rights to obtain correction and verify fair handling policies.
                  </li>
                </ul>
                <p className="text-xs text-gray-500 font-mono">
                  Submit requests directly to our compliance officer at **support@sehra-e-khaas.com**.
                </p>
              </div>
            </section>

            {/* 06. COOKIES */}
            <section id="cookies" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Eye className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">06. COOKIES & TRACKING CODES</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  We deploy cookieless tracking where possible, but utilize essential cookies to keep items in your shopping cart and provide basic analytics.
                </p>
                <p>
                  You can opt out of non-essential tracking blocks by managing your web browser's local safety settings.
                </p>
              </div>
            </section>

            {/* 07. DATA RETENTION */}
            <section id="retention" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Key className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">07. DATA RETENTION SCHEDULES</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  To satisfy international tax, accounting, and anti-fraud regulations, we retain transactional tax maps and order logs for a standard duration of **7 years** from the order completion date.
                </p>
                <p>
                  General newsletter or account profile credentials can be purged immediately upon user request or account deletion.
                </p>
              </div>
            </section>

            {/* 08. ENCRYPTION & SECURITY */}
            <section id="security" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Lock className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">08. ENCRYPTION & SECURITY CONTROLS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  We utilize AES-256 standard database level encryption paired with transport-layer security (SSL/TLS v1.3).
                </p>
                <p>
                  <strong>Breach Protocols:</strong> In the rare event of a system break or unauthorized database copy, Sehra e Khaas will notify relevant regional authorities (like the UK Information Commissioner's Office) and affected users via email within a strict **72-hour window**.
                </p>
              </div>
            </section>

            {/* 09. CHILDREN'S SECURITY */}
            <section id="children" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Key className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">09. CHILDREN'S SAFETY EXCLUSIONS</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4">
                <p>
                  Our websites are strictly focused on adult high-fashion collections. We do not knowingly record, parse, or track records of children under 16 years of age. If parents find their children have registered billing details on our portal, contact support to initiate immediate data purging.
                </p>
              </div>
            </section>

            {/* 10. COMPLAINTS INDEX */}
            <section id="complaints" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-3 border-b border-[#2a2118] pb-3">
                <Lock className="w-5 h-5 text-[#ca9851]" />
                <h3 className="text-xl md:text-2xl font-serif text-white tracking-widest uppercase">10. COMPLAINTS & AUTHORITY REGISTER</h3>
              </div>
              <div className="text-sm text-[#e9dfc8]/80 leading-relaxed font-light space-y-4 font-mono text-xs">
                <p>
                  If you believe your personal details were mismanaged, dispatch complaints directly to our legal desk at **support@sehra-e-khaas.com**.
                </p>
                <div className="bg-[#12100e] border border-[#2a2118] p-5 rounded space-y-2 text-[10px] text-gray-500 uppercase mt-4">
                  <p><strong>RELEVANT REGULATORY COMPLAINTS REGISTRIES:</strong></p>
                  <p>- European Union: Local National Data Protection Authorities (DPAs).</p>
                  <p>- United Kingdom: Information Commissioner’s Office (ICO).</p>
                  <p>- California: Attorney General's Office - CCPA Division.</p>
                  <p>- Canada: Office of the Privacy Commissioner.</p>
                </div>
              </div>
            </section>

          </main>
        </div>
        
      </div>
    </div>
  );
};
export default PrivacyPage;
