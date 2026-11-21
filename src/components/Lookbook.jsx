import React, { useState } from 'react';
import { Eye, Sparkles, Filter } from 'lucide-react';
import { LOOKBOOK_ITEMS } from '../data/fashionData';
import ImageModal from './ImageModal';

export default function Lookbook({ activeFilter, setActiveFilter }) {
  const [selectedItem, setSelectedItem] = useState(null);

  const filterTabs = [
    { label: 'All Editions', key: 'all' },
    { label: 'Ethnic & Festive', key: 'ethnic-festive' },
    { label: 'Indo-Western & Kurtis', key: 'indo-western' },
    { label: 'Festive Gowns', key: 'festive' }
  ];

  const filteredItems =
    activeFilter === 'all'
      ? LOOKBOOK_ITEMS
      : LOOKBOOK_ITEMS.filter((item) => item.category === activeFilter);

  return (
    <section id="lookbook" className="py-24 sm:py-32 bg-[#FAF8F5] relative border-t border-[#EAE7E2]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-6 h-[1.5px] bg-[#C6A576]" />
              <span className="text-[11px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                Lookbook & Gallery
              </span>
            </div>
            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#151515] uppercase">
              THE EVERYDAY EDIT
            </h2>
            <p className="mt-3 text-sm sm:text-base text-[#151515]/70 font-light max-w-xl">
              An editorial glimpse into our everyday essentials—combining organic textures, clean construction, and dependable hosiery.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.key;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveFilter(tab.key)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.18em] transition-all duration-300 font-medium ${
                    isActive
                      ? 'bg-[#151515] text-[#C6A576] shadow-sm'
                      : 'bg-white/80 text-[#151515]/80 hover:bg-[#151515]/10 border border-[#EAE7E2]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setSelectedItem(item)}
              className={`group relative overflow-hidden bg-[#151515] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 min-h-[380px] sm:min-h-[440px] flex flex-col justify-end ${item.span}`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setSelectedItem(item);
                }
              }}
              aria-label={`View details for ${item.title}`}
            >
              {/* Image */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.92] group-hover:brightness-[1]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Top Badge */}
              <div className="absolute top-5 left-5 z-10 flex items-center gap-2">
                <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-[#F8F6F2] border border-white/10">
                  {item.badge}
                </span>
              </div>

              {/* Hover View Button */}
              <div className="absolute top-5 right-5 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="w-9 h-9 rounded-full bg-[#C6A576] text-[#151515] flex items-center justify-center shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <Eye className="w-4 h-4" />
                </span>
              </div>

              {/* Bottom Details */}
              <div className="relative z-10 p-6 sm:p-8 text-left transition-transform duration-300">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#C6A576] font-semibold mb-1">
                  {item.categoryLabel}
                </p>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#F8F6F2] group-hover:text-[#C6A576] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EAE7E2]/80 mt-1 line-clamp-1 font-light">
                  {item.caption}
                </p>
                <div className="mt-3 flex items-center gap-2 text-[11px] text-[#C6A576] font-medium tracking-wider">
                  <span>{item.fabric}</span>
                  <span>•</span>
                  <span className="underline underline-offset-4 group-hover:text-white transition-colors">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note Below Gallery */}
        <div className="mt-12 text-center text-xs text-[#151515]/60 tracking-wider uppercase">
          Curated lifestyle display • Visit in store at Rajshree Tower Silvassa to explore full sizes and fabrics
        </div>
      </div>

      {/* Lightbox / Inspector Modal */}
      {selectedItem && (
        <ImageModal item={selectedItem} onClose={() => setSelectedItem(null)} />
      )}
    </section>
  );
}
