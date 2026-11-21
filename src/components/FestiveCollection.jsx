import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Phone, MessageSquare, Eye, ArrowRight, ShoppingBag } from 'lucide-react';
import { WOMENS_ETHNIC_COLLECTION, BUSINESS_INFO } from '../data/fashionData';
import ImageModal from './ImageModal';

export default function FestiveCollection() {
  const [selectedOutfit, setSelectedOutfit] = useState(null);

  return (
    <section id="ethnic-collection" className="py-24 sm:py-32 bg-[#151515] text-[#F8F6F2] relative overflow-hidden">
      {/* Subtle Ambient Gold Glow Background */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C6A576]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#C6A576]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C6A576]/15 border border-[#C6A576]/30 text-[#C6A576] text-xs font-semibold tracking-[0.25em] uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Store Exclusive • In-Stock Now</span>
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight uppercase leading-[1.1] text-[#F8F6F2]">
            LADIES' ETHNIC & FESTIVE EDIT
          </h2>

          <p className="font-serif italic text-xl sm:text-2xl text-[#C6A576] mt-2">
            "Regal Silhouettes • Handcrafted Resham & Mirror Detailing"
          </p>

          <p className="mt-4 text-sm sm:text-base text-[#EAE7E2]/75 max-w-2xl mx-auto font-light leading-relaxed">
            Discover our latest festive arrival suite featuring floor-length anarkalis, tiered shararas, Chanderi silk straight suits, and contemporary draped dhoti sets. Available for retail and wholesale buyers at Rajshree Tower Silvassa.
          </p>
        </div>

        {/* 6 High-Definition Outfits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {WOMENS_ETHNIC_COLLECTION.map((outfit) => (
            <div
              key={outfit.id}
              className="group bg-[#1C1C1C] border border-white/10 hover:border-[#C6A576]/60 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl hover:shadow-2xl hover:shadow-black/70"
            >
              {/* Image Container with High-Resolution Rendering */}
              <div
                className="relative aspect-[3/4] overflow-hidden bg-black cursor-pointer"
                onClick={() => setSelectedOutfit(outfit)}
              >
                <img
                  src={outfit.image}
                  alt={outfit.title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 bg-black/75 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A576] border border-[#C6A576]/30">
                    {outfit.badge}
                  </span>
                </div>

                {/* Zoom Icon Hover Pill */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-4 py-2 bg-[#151515]/95 backdrop-blur-md border border-[#C6A576] text-[#C6A576] text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform shadow-lg">
                    <Eye className="w-4 h-4" />
                    <span>View Detail</span>
                  </span>
                </div>
              </div>

              {/* Content Block */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div>
                  <div className="flex items-center justify-between text-[11px] uppercase tracking-wider text-[#C6A576] mb-1">
                    <span>{outfit.categoryLabel}</span>
                    <span className="text-[#EAE7E2]/60">{outfit.color}</span>
                  </div>

                  <h3 className="font-editorial text-2xl font-normal text-[#F8F6F2] group-hover:text-[#C6A576] transition-colors leading-snug">
                    {outfit.title}
                  </h3>

                  <p className="text-xs text-[#EAE7E2]/70 font-light mt-2 line-clamp-2 leading-relaxed">
                    {outfit.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/10 space-y-3">
                  <div className="text-[11px] text-[#EAE7E2]/85 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C6A576]" />
                    <span className="font-medium text-[#C6A576]">Fabric:</span>
                    <span className="truncate">{outfit.fabric}</span>
                  </div>

                  {/* Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <a
                      href={`https://wa.me/917600903749?text=${encodeURIComponent(
                        `Hello Agarwal Hosiery Silvassa, I am inquiring about the "${outfit.title}" (${outfit.color}). Is it currently available for in-store trial or order?`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-[11px] font-bold uppercase tracking-wider transition-colors shadow-sm"
                      title="Enquire on WhatsApp"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Inquire</span>
                    </a>

                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 hover:bg-white/20 text-[#F8F6F2] text-[11px] font-semibold uppercase tracking-wider transition-colors border border-white/15"
                      title="Call Store Desk"
                    >
                      <Phone className="w-3.5 h-3.5 text-[#C6A576]" />
                      <span>Call</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* In-Store Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-[#1C1C1C] via-[#222222] to-[#1C1C1C] border border-[#C6A576]/30 p-8 sm:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
              Visit Silvassa Showroom
            </span>
            <h3 className="font-editorial text-2xl sm:text-3xl text-[#F8F6F2]">
              Explore Complete Size Runs & Color Variants In-Store
            </h3>
            <p className="text-xs sm:text-sm text-[#EAE7E2]/70 font-light max-w-xl">
              All styles are physically displayed at Shop No. 05, Rajshree Tower on Silvassa Ring Road. Walk in for custom fitting, bulk retail pricing, and immediate takeaway.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Link
              to="/collections/festive"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Shop All Festive Sets</span>
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-[#F8F6F2] border border-white/20 text-xs font-semibold uppercase tracking-[0.2em] transition-colors"
            >
              <span>Visit Showroom</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Lightbox / Inspector Modal */}
      {selectedOutfit && (
        <ImageModal
          item={selectedOutfit}
          onClose={() => setSelectedOutfit(null)}
        />
      )}
    </section>
  );
}
