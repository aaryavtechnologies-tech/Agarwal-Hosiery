import React from 'react';
import { Phone, Navigation, MessageSquare } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function FloatingMobileBar() {
  return (
    <aside
      aria-label="Quick Contact Actions"
      className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-[#151515]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl"
    >
      <div className="grid grid-cols-2 gap-3 max-w-md mx-auto">
        <a
          href={`tel:${BUSINESS_INFO.phoneRaw}`}
          className="flex items-center justify-center gap-2 py-3 px-4 bg-[#C6A576] active:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-wider rounded-none shadow-md transition-transform active:scale-98"
          aria-label="Call Agarwal Hosiery Silvassa"
        >
          <Phone className="w-4 h-4" />
          <span>Call Now</span>
        </a>

        <a
          href={BUSINESS_INFO.mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 active:bg-white/20 text-[#F8F6F2] border border-white/15 text-xs font-bold uppercase tracking-wider rounded-none transition-transform active:scale-98"
          aria-label="Get Directions to Agarwal Hosiery Silvassa"
        >
          <Navigation className="w-4 h-4 text-[#C6A576]" />
          <span>Directions</span>
        </a>
      </div>
    </aside>
  );
}
