import React from "react";
import { useShop } from "../context/ShopContext";

export const AnnouncementBar: React.FC = () => {
  const { announcements } = useShop();

  if (!announcements || announcements.length === 0) return null;

  return (
    <div 
      className="relative w-full bg-[#050403] border-b border-[#ff9d24]/40 py-2 sm:py-3 select-none overflow-hidden shadow-[0_4px_30px_rgba(255,157,36,0.3)] z-50 transition-all duration-300"
      id="announcement-bar"
    >
      {/* Top and Bottom Electric Neon Accent Lines */}
      <div className="absolute inset-x-0 bottom-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff9d24] to-transparent shadow-[0_0_12px_#ff9d24] opacity-80" />
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#ff9d24] to-transparent shadow-[0_0_12px_#ff9d24] opacity-80" />

      {/* Atmospheric Neon Golden Ambient Backdrop Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,157,36,0.06)_0%,transparent_100%)] pointer-events-none" />

      {/* Endless Marquee Stream */}
      <div className="flex w-max flex-nowrap" style={{ touchAction: "pan-y" }}>
        
        {/* Track 1 - Standard Speed */}
        <div className="animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] flex flex-nowrap items-center shrink-0 pr-12 sm:pr-24 gap-12 sm:gap-24 font-mono tracking-[0.15em] sm:tracking-[0.25em] text-[10px] md:text-xs">
          {announcements.map((ann, idx) => (
            <div key={`marquee-1-${ann.id || idx}`} className="flex items-center gap-2.5 sm:gap-4 shrink-0 whitespace-nowrap">
              {/* Neon Beacon Filament Dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9d24]/60 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffaa33] shadow-[0_0_10px_#ff9d24,0_0_20px_#ff9d24]"></span>
              </span>
              
              {/* Beautiful Luminous Text */}
              <span 
                className="cursor-default uppercase font-black text-[#fffbee] hover:text-[#ffd688] transition-all duration-300 transform hover:scale-[1.02]"
                style={{ 
                  textShadow: "0 0 4px rgba(255,157,36,0.95), 0 0 10px rgba(255,157,36,0.6), 0 0 18px rgba(255,157,36,0.2)" 
                }}
              >
                {ann.text}
              </span>
            </div>
          ))}
        </div>

        {/* Track 2 - Perfect Seamless Duplicate */}
        <div className="animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] flex flex-nowrap items-center shrink-0 pr-12 sm:pr-24 gap-12 sm:gap-24 font-mono tracking-[0.15em] sm:tracking-[0.25em] text-[10px] md:text-xs" aria-hidden="true">
          {announcements.map((ann, idx) => (
            <div key={`marquee-2-${ann.id || idx}`} className="flex items-center gap-2.5 sm:gap-4 shrink-0 whitespace-nowrap">
              {/* Neon Beacon Filament Dot */}
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff9d24]/60 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ffaa33] shadow-[0_0_10px_#ff9d24,0_0_20px_#ff9d24]"></span>
              </span>
              
              {/* Beautiful Luminous Text */}
              <span 
                className="cursor-default uppercase font-black text-[#fffbee] hover:text-[#ffd688] transition-all duration-300 transform hover:scale-[1.02]"
                style={{ 
                  textShadow: "0 0 4px rgba(255,157,36,0.95), 0 0 10px rgba(255,157,36,0.6), 0 0 18px rgba(255,157,36,0.2)" 
                }}
              >
                {ann.text}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default AnnouncementBar;
