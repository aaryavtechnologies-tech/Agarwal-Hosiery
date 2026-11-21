import React from 'react';
import { Phone, MessageSquare, ShieldCheck, ArrowRight, Building2, Package } from 'lucide-react';
import { BUSINESS_INFO, WHOLESALE_BENEFITS } from '../data/fashionData';

export default function Wholesale() {
  return (
    <section id="wholesale" className="relative py-24 sm:py-32 bg-[#151515] overflow-hidden text-[#F8F6F2]">
      {/* Background Image with Dark Vignette Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/storefront-hero.jpg"
          alt="Agarwal Hosiery Wholesale Textiles"
          className="w-full h-full object-cover object-center brightness-[0.25]"
          loading="lazy"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] via-[#151515]/90 to-[#151515]/95" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#C6A576]/15 border border-[#C6A576]/30 text-[#C6A576] text-xs font-semibold tracking-[0.25em] uppercase">
              <Package className="w-3.5 h-3.5" />
              <span>B2B & Retailer Sourcing</span>
            </div>

            <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight uppercase leading-[1.1] text-[#F8F6F2]">
              WHOLESALE MADE SIMPLE.
            </h2>

            <p className="font-serif italic text-xl sm:text-2xl text-[#C6A576]">
              "Hosiery and clothing essentials for your business."
            </p>

            <p className="text-sm sm:text-base text-[#EAE7E2]/80 font-light leading-relaxed max-w-xl">
              Agarwal Hosiery Silvassa supplies retailers, boutiques, and business partners with dependable women's ethnic wear, festive suits, combed cotton undergarments, and ladies' hosiery essentials. Connect directly with our Silvassa store desk for authentic quality and personalized supply arrangements.
            </p>

            {/* CTAs */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#C6A576] text-[#151515] text-xs sm:text-sm font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-[#C6A576]/20 active:translate-y-0 group"
              >
                <Phone className="w-4 h-4 transition-transform duration-300 group-hover:rotate-12" />
                <span>Enquire Now</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 hover:bg-white/20 text-[#F8F6F2] border border-white/20 text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
              >
                <MessageSquare className="w-4 h-4 text-[#C6A576]" />
                <span>WhatsApp Desk</span>
              </a>
            </div>

            {/* Direct Contact Reference */}
            <div className="pt-2 text-xs tracking-wider text-[#EAE7E2]/60">
              Direct Phone: <span className="text-[#C6A576] font-medium">{BUSINESS_INFO.phone}</span> • Walk-ins welcome at Rajshree Tower
            </div>
          </div>

          {/* Right Column: Wholesale Benefit Cards */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHOLESALE_BENEFITS.map((item, idx) => (
              <div
                key={idx}
                className="p-6 bg-white/[0.04] border border-white/10 hover:border-[#C6A576]/50 transition-all duration-300 group"
              >
                <div className="w-8 h-8 rounded-full bg-[#C6A576]/20 flex items-center justify-center mb-4 text-[#C6A576] group-hover:scale-110 transition-transform">
                  <span className="text-xs font-bold">0{idx + 1}</span>
                </div>
                <h3 className="font-editorial text-xl text-[#F8F6F2] mb-2 group-hover:text-[#C6A576] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-[#EAE7E2]/70 font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
