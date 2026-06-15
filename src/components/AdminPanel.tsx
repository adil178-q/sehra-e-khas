import React, { useState } from "react";
import { useShop } from "../context/ShopContext";
import { Product, Announcement } from "../types";
import { X, Save, RefreshCw, Plus, Trash2, Edit, Sliders, Volume2, ShieldCheck, Database, Image } from "lucide-react";

interface AdminPanelProps {
  open: boolean;
  onClose: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ open, onClose }) => {
  const {
    announcements,
    setAnnouncements,
    fbOrderLink,
    setFbOrderLink,
    products,
    setProducts,
    resetAllToDefault,
    triggerNotification
  } = useShop();

  const [activeTab, setActiveTab] = useState<"general" | "announcements" | "products">("general");

  // GENERAL STATE EDITORS
  const [fbLinkState, setFbLinkState] = useState(fbOrderLink);
  
  const [heroImgState, setHeroImgState] = useState(() => {
    return localStorage.getItem("sehra_hero_img") || "https://i.postimg.cc/g28pdsh9/Chat-GPT-Image-Jun-15-2026-03-09-12-PM.png";
  });
  const [heroTitleState, setHeroTitleState] = useState(() => {
    return localStorage.getItem("sehra_hero_title") || "ARCHIVAL DESERT SHELL";
  });
  const [heroTaglineState, setHeroTaglineState] = useState(() => {
    return localStorage.getItem("sehra_hero_tagline") || "Not for Everyone. Exactly Right for the Few.";
  });
  const [heroSubState, setHeroSubState] = useState(() => {
    return localStorage.getItem("sehra_hero_sub") || "A secret clothing order. Produced in limited numbers, never restocked once dry. Born in Pakistan, shipped across the outer world.";
  });

  // ANNOUNCEMENTS EDITORS
  const [announcementList, setAnnouncementList] = useState<Announcement[]>([...announcements]);
  const [newAnnouncementText, setNewAnnouncementText] = useState("");

  // PRODUCT EDITORS
  const [editingProductId, setEditingProductId] = useState<string | null>(null);
  const [editProdTitle, setEditProdTitle] = useState("");
  const [editProdPrice, setEditProdPrice] = useState(0);
  const [editProdLeft, setEditProdLeft] = useState(0);
  const [editProdTotal, setEditProdTotal] = useState(0);
  const [editProdDesc, setEditProdDesc] = useState("");
  const [editProdImg1, setEditProdImg1] = useState("");
  const [editProdImg2, setEditProdImg2] = useState("");

  if (!open) return null;

  // Save General settings
  const handleSaveGeneral = () => {
    setFbOrderLink(fbLinkState);
    localStorage.setItem("sehra_hero_img", heroImgState);
    localStorage.setItem("sehra_hero_title", heroTitleState);
    localStorage.setItem("sehra_hero_tagline", heroTaglineState);
    localStorage.setItem("sehra_hero_sub", heroSubState);
    triggerNotification("General brand matrices saved to central cloud node.");
  };

  // Add / Edit Announcements
  const handleAddAnnouncement = () => {
    if (!newAnnouncementText.trim()) return;
    const newAnn: Announcement = {
      id: "ann_" + Date.now(),
      text: newAnnouncementText.toUpperCase().trim()
    };
    const updated = [...announcementList, newAnn];
    setAnnouncementList(updated);
    setAnnouncements(updated);
    setNewAnnouncementText("");
    triggerNotification("Announcement string appended to terminal ledger.");
  };

  const handleDeleteAnnouncement = (id: string) => {
    const updated = announcementList.filter((a) => a.id !== id);
    setAnnouncementList(updated);
    setAnnouncements(updated);
    triggerNotification("Announcement deleted.");
  };

  // Product edits toggle
  const handleStartEditProduct = (prod: Product) => {
    setEditingProductId(prod.id);
    setEditProdTitle(prod.title);
    setEditProdPrice(prod.price);
    setEditProdLeft(prod.unitsLeft);
    setEditProdTotal(prod.unitsTotal);
    setEditProdDesc(prod.shortDescription);
    setEditProdImg1(prod.images[0] || "");
    setEditProdImg2(prod.images[1] || "");
  };

  const handleSaveProductEdit = () => {
    if (!editingProductId) return;
    const updated = products.map((prod) => {
      if (prod.id === editingProductId) {
        const copyImgs = [...prod.images];
        copyImgs[0] = editProdImg1;
        copyImgs[1] = editProdImg2;
        return {
          ...prod,
          title: editProdTitle,
          price: Number(editProdPrice),
          unitsLeft: Number(editProdLeft),
          unitsTotal: Number(editProdTotal),
          shortDescription: editProdDesc,
          images: copyImgs
        };
      }
      return prod;
    });

    setProducts(updated);
    setEditingProductId(null);
    triggerNotification(`Archival item ${editProdTitle} inventory metrics updated.`);
  };

  const handleSystemRestore = () => {
    if (confirm("Are you sure you want to reset all inventories, Facebook parameters, and custom banners to initial factory standards? This cannot be undone.")) {
      resetAllToDefault();
      setFbLinkState("https://www.facebook.com/sehraekhaas/");
      setHeroImgState("https://i.postimg.cc/g28pdsh9/Chat-GPT-Image-Jun-15-2026-03-09-12-PM.png");
      setHeroTitleState("ARCHIVAL DESERT SHELL");
      setHeroTaglineState("Not for Everyone. Exactly Right for the Few.");
      setHeroSubState("A secret clothing order. Produced in limited numbers, never restocked once dry. Born in Pakistan, shipped across the outer world.");
      // Force refresh tabs
      setAnnouncementList([
        { id: "1", text: "NOT FOR EVERYONE. EXACTLY RIGHT FOR THE FEW." },
        { id: "2", text: "ARCHIVE DROP '26 // STRICTLY LIMITED TO 40 PIECES PER STYLE" },
        { id: "3", text: "EXPRESS INTERNATIONAL COURIER DISPATCH WITHIN 48 HOURS" }
      ]);
    }
  };

  return (
    <div className="fixed inset-0 z-100 bg-[#070504f7] backdrop-blur-md overflow-y-auto py-12 px-4 flex items-center justify-center text-[#f8ebd4] font-mono text-xs text-left" id="admin-panel-overlay">
      <div className="w-full max-w-4xl bg-[#0e0a08] border-2 border-[#ca9851] p-6 shadow-[0_0_50px_rgba(202,152,81,0.25)] relative" id="admin-panel-inner">
        
        {/* Absolute Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-[#1b140e] hover:bg-[#ca9851] text-[#dfc393] hover:text-black transition-colors border border-[#ca9851]/30 focus:outline-none"
          id="close-admin-panel-btn"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Console Header layout */}
        <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-[#2d2217]">
          <Sliders className="w-6 h-6 text-[#ca9851]" />
          <div>
            <h2 className="text-sm md:text-lg font-bold tracking-[0.3em] uppercase text-[#ca9851]">
              REGISTRY CONTROL BOARD
            </h2>
            <span className="text-[9px] text-gray-500 uppercase block tracking-wider mt-0.5">
              SEHRA E KHAAS SMC PRIVATE LIMITS — SECURE OPERATOR CONSOLE
            </span>
          </div>
        </div>

        {/* Dashboard Tabs buttons selection */}
        <div className="flex border-b border-[#231b12] mb-6 text-[10px] tracking-widest text-[#ca9851] uppercase bg-black/40">
          <button
            onClick={() => setActiveTab("general")}
            className={`py-3.5 px-6 border-r border-[#231b12] flex items-center gap-2 transition-colors ${
              activeTab === "general" ? "bg-[#1f1710] text-[#dfc393] font-bold" : "hover:bg-black/20"
            }`}
          >
            <Image className="w-3.5 h-3.5" /> BRAND DECK
          </button>
          <button
            onClick={() => setActiveTab("announcements")}
            className={`py-3.5 px-6 border-r border-[#231b12] flex items-center gap-2 transition-colors ${
              activeTab === "announcements" ? "bg-[#1f1710] text-[#dfc393] font-bold" : "hover:bg-black/20"
            }`}
          >
            <Volume2 className="w-3.5 h-3.5" /> LEDGER STRIPS
          </button>
          <button
            onClick={() => setActiveTab("products")}
            className={`py-3.5 px-6 flex items-center gap-2 transition-colors ${
              activeTab === "products" ? "bg-[#1f1710] text-[#dfc393] font-bold" : "hover:bg-black/20"
            }`}
          >
            <Database className="w-3.5 h-3.5" /> GARMENT MANIFESTS
          </button>
        </div>

        {/* TAB 1: General Brand & Facebook Order Dispatch link settings */}
        {activeTab === "general" && (
          <div className="space-y-5" id="admin-tab-general">
            {/* FB order Link input block */}
            <div>
              <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-1.5 font-bold">
                FACEBOOK ORDER DISPATCH URL:
              </label>
              <input
                type="text"
                value={fbLinkState}
                onChange={(e) => setFbLinkState(e.target.value)}
                className="w-full bg-[#070504] border border-[#2f2215] p-3 text-[#dfc393] focus:outline-none focus:border-[#ca9851]"
              />
              <p className="text-[9px] text-gray-500 mt-1 leading-relaxed">
                * When buyers choose checkout, they will copy order details and click to open this direct FB page link to complete order fulfillment.
              </p>
            </div>

            {/* Split sliders blocks */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-[#1f1710]/40">
              {/* Hero Image */}
              <div>
                <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-1.5">
                  HERO BANNER BACKDROP IMAGE:
                </label>
                <input
                  type="text"
                  value={heroImgState}
                  onChange={(e) => setHeroImgState(e.target.value)}
                  className="w-full bg-[#070504] border border-[#2f2215] p-3 text-xs focus:outline-none"
                />
              </div>

              {/* Hero title */}
              <div>
                <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-1.5">
                  HERO DISPLAY HEADER TITLE:
                </label>
                <input
                  type="text"
                  value={heroTitleState}
                  onChange={(e) => setHeroTitleState(e.target.value)}
                  className="w-full bg-[#070504] border border-[#2f2215] p-3 text-xs focus:outline-none uppercase"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Hero tagline bracket */}
              <div>
                <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-1.5">
                  HERO TAG BRACKET SUBTITLE:
                </label>
                <input
                  type="text"
                  value={heroTaglineState}
                  onChange={(e) => setHeroTaglineState(e.target.value)}
                  className="w-full bg-[#070504] border border-[#2f2215] p-3 text-xs focus:outline-none"
                />
              </div>

              {/* Hero paragraph */}
              <div>
                <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-1.5">
                  HERO DESCRIPTION SYNOPSIS:
                </label>
                <textarea
                  rows={2}
                  value={heroSubState}
                  onChange={(e) => setHeroSubState(e.target.value)}
                  className="w-full bg-[#070504] border border-[#2f2215] p-3 text-xs focus:outline-none resize-none"
                />
              </div>
            </div>

            {/* Save Buttons */}
            <div className="pt-4 border-t border-[#231b12] flex justify-between items-center bg-[#130f0c] p-4 border border-[#2d2217]">
              <button
                onClick={handleSaveGeneral}
                className="py-3 px-6 bg-[#ca9851] hover:bg-[#ca9851]/95 text-black font-black uppercase tracking-wider flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" /> RECOMMIT DECK MATRIX
              </button>

              <button
                onClick={handleSystemRestore}
                className="py-2.5 px-4 border border-red-500/30 hover:border-red-500 bg-red-950/20 text-red-400 hover:text-white transition-all uppercase flex items-center gap-2 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" /> SYSTEM HARD RESTORE
              </button>
            </div>
          </div>
        )}

        {/* TAB 2: Multiple rotate Announcement Bar additions */}
        {activeTab === "announcements" && (
          <div className="space-y-6" id="admin-tab-announcements">
            {/* Field additions list */}
            <div className="p-4 border border-[#2a2016] bg-[#110e0b]/50">
              <label className="text-[10px] tracking-[0.2em] text-[#ca9851] uppercase block mb-2 font-bold">
                APPEND NEW BILLBOARD Announcement TEXT:
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  required
                  placeholder="e.g. MONOLITH DESERT ANORAK SOLD OUT..."
                  value={newAnnouncementText}
                  onChange={(e) => setNewAnnouncementText(e.target.value)}
                  className="bg-[#070504] border border-[#2f2215] p-3 text-[#dfc393] flex-grow focus:outline-none uppercase"
                />
                <button
                  onClick={handleAddAnnouncement}
                  className="py-3 px-6 bg-[#ca9851] text-black font-bold flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-4 h-4" /> APPEND
                </button>
              </div>
            </div>

            {/* Current announcements list with trash */}
            <div className="space-y-3">
              <span className="text-[10px] tracking-[0.20em] text-gray-400 block pb-1.5 border-b border-[#201811]">
                ACTIVE SLIDING BILLBOARD STRIPS ({announcementList.length})
              </span>
              {announcementList.length === 0 ? (
                <p className="text-gray-600 py-3 italic">Empty ledger strips. Announcement top bar is hidden.</p>
              ) : (
                <div className="divide-y divide-[#201710] bg-[#140f0c] border border-[#261e15]">
                  {announcementList.map((ann) => (
                    <div key={ann.id} className="p-4 flex justify-between items-center gap-4 hover:bg-[#1b140e] transition-colors">
                      <span className="text-white hover:text-[#ca9851] tracking-wider transition-colors">
                        {ann.text}
                      </span>
                      <button
                        onClick={() => handleDeleteAnnouncement(ann.id)}
                        className="text-red-400 hover:text-red-500 font-bold p-1 hover:bg-black/40 rounded focus:outline-none"
                        aria-label="Delete announcement"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: Products manifested and edited */}
        {activeTab === "products" && (
          <div className="space-y-6" id="admin-tab-products">
            {editingProductId ? (
              /* Inline Edit form */
              <div className="p-5 border border-[#ca9851]/60 bg-[#140f0c] space-y-4 text-left" id="edit-product-form">
                <div className="flex justify-between items-center pb-2.5 border-b border-[#2d2114]">
                  <span className="text-[10px] tracking-[0.2em] text-[#ca9851] font-bold">
                    EDITION VAULT // ID: {editingProductId}
                  </span>
                  <button
                    onClick={() => setEditingProductId(null)}
                    className="text-gray-500 hover:text-white"
                  >
                    CANCEL ED_M
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">GARMENT TITLE:</label>
                    <input
                      type="text"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2.5 text-[#dfc393]"
                      value={editProdTitle}
                      onChange={(e) => setEditProdTitle(e.target.value)}
                    />
                  </div>

                  {/* Price */}
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">RECONCILDED STATED PRICE ($):</label>
                    <input
                      type="number"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2.5 text-[#dfc393]"
                      value={editProdPrice}
                      onChange={(e) => setEditProdPrice(Number(e.target.value))}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Total Drop Stock */}
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">TOTAL DROP MANIFESTED:</label>
                    <input
                      type="number"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2.5 text-white"
                      value={editProdTotal}
                      onChange={(e) => setEditProdTotal(Number(e.target.value))}
                    />
                  </div>

                  {/* Left Drop Stock */}
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">PIECES REMAINING (UNCLAIMED):</label>
                    <input
                      type="number"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2.5 text-white"
                      value={editProdLeft}
                      onChange={(e) => setEditProdLeft(Number(e.target.value))}
                    />
                  </div>

                  {/* Description excerpts */}
                  <div className="md:col-span-1">
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">BRIEF DESCRIPTOR EXCERPT:</label>
                    <input
                      type="text"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2.5 text-white"
                      value={editProdDesc}
                      onChange={(e) => setEditProdDesc(e.target.value)}
                    />
                  </div>
                </div>

                {/* Imagery overrides */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">PRIMARY SPEC ANGLE IMG LINK:</label>
                    <input
                      type="text"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2 text-xs text-paragraph"
                      value={editProdImg1}
                      onChange={(e) => setEditProdImg1(e.target.value)}
                    />
                  </div>
                  <div>
                    <label className="text-[9px] text-[#ca9851] uppercase block mb-1">HOVER ALTERNATE ANGLE IMG LINK:</label>
                    <input
                      type="text"
                      className="w-full bg-[#070504] border border-[#2f2215] p-2 text-xs text-paragraph"
                      value={editProdImg2}
                      onChange={(e) => setEditProdImg2(e.target.value)}
                    />
                  </div>
                </div>

                <button
                  onClick={handleSaveProductEdit}
                  className="w-full py-3 bg-[#ca9851] text-black font-black uppercase tracking-wider flex items-center justify-center gap-2 mt-4 cursor-pointer"
                >
                  <Save className="w-4 h-4" /> COMMIT ARCHIVE CHANGE
                </button>
              </div>
            ) : (
              /* Manifest Table registry */
              <div className="overflow-x-auto border border-[#241a0e] bg-black/40">
                <table className="w-full text-left font-mono text-[10px]">
                  <thead>
                    <tr className="bg-[#19130d] border-b border-[#241a0e] text-[#ca9851] uppercase">
                      <th className="py-3.5 px-4">IDENTIFIER TYPE</th>
                      <th className="py-3.5 px-4">PRICE</th>
                      <th className="py-3.5 px-4">DROP STOCK LIMIT</th>
                      <th className="py-3.5 px-4">REMAINING</th>
                      <th className="py-3.5 px-4 text-center">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#201710] text-[#dfc393]">
                    {products.map((p) => (
                      <tr key={p.id} className="hover:bg-white/5 transition-colors">
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-10 bg-gray-900 border border-gray-800 flex-shrink-0">
                              <img src={p.images[0]} className="w-full h-full object-cover" />
                            </div>
                            <div>
                              <span className="text-white font-bold block">{p.title}</span>
                              <span className="text-[8px] text-gray-500 uppercase">{p.category}</span>
                            </div>
                          </div>
                        </td>
                        <td className="py-3.5 px-4">${p.price}</td>
                        <td className="py-3.5 px-4">{p.unitsTotal} units</td>
                        <td className="py-3.5 px-4">
                          <span className={p.unitsLeft <= 5 ? "text-red-400 font-bold" : ""}>
                            {p.unitsLeft} units
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => handleStartEditProduct(p)}
                            className="bg-[#1b140e] hover:bg-[#ca9851] text-[#ca9851] hover:text-black border border-[#ca9851]/40 hover:border-transparent py-1 px-3 transition-colors uppercase text-[9px] flex items-center gap-1 mx-auto focus:outline-none"
                          >
                            <Edit className="w-3 h-3" /> MODIFY
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        <div className="mt-8 pt-4 border-t border-[#2d2217] text-center text-gray-600 text-[8px] flex items-center justify-center gap-1.5 uppercase select-none">
          <ShieldCheck className="w-4.5 h-4.5 text-emerald-500" /> SECURED ENCRYPTED SHA256 TRANSACTION PORTAL // SEHRA OPERATIONAL PROTOCOL
        </div>

      </div>
    </div>
  );
};
export default AdminPanel;
