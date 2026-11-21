import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, Sparkles, MapPin, Compass, ShoppingBag } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#151515]"
    >
      {/* Background Image Container with Ambient Slow Zoom and Luxury Vignette */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=2200&q=88"
          alt="Agarwal Hosiery Silvassa Editorial Fashion"
          className="w-full h-full object-cover object-center animate-ambient-zoom scale-100 will-change-transform brightness-[0.78]"
          loading="eager"
          decoding="async"
        />
        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/45 to-black/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/60 pointer-events-none" />
      </div>

      {/* Decorative Gold Border Lines - Editorial Framing */}
      <div className="absolute inset-6 sm:inset-10 border border-white/10 pointer-events-none z-10 hidden sm:block">
        <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C6A576]/60" />
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C6A576]/60" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C6A576]/60" />
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C6A576]/60" />
      </div>

      {/* Hero Content */}
      <div className="relative z-20 max-w-5xl mx-auto px-6 sm:px-12 text-center py-24 sm:py-32 flex flex-col items-center">
        {/* Subtle Brand Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-6 sm:mb-8 animate-fade-up">
          <Sparkles className="w-3.5 h-3.5 text-[#C6A576] animate-pulse" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.3em] uppercase text-[#F8F6F2]">
            Agarwal Hosiery • Silvassa
          </span>
        </div>

        {/* Major Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F8F6F2] uppercase leading-[1.08] max-w-4xl drop-shadow-sm">
          <span className="block tracking-[0.02em] font-light">EVERYDAY ESSENTIALS.</span>
          <span className="block tracking-[0.04em] font-serif italic text-[#C6A576] mt-1 sm:mt-2">
            EFFORTLESSLY STYLED.
          </span>
        </h1>

        {/* Small Subtitle */}
        <p className="mt-6 sm:mt-8 text-sm sm:text-base md:text-lg font-light tracking-[0.28em] uppercase text-[#EAE7E2]/90 max-w-2xl border-t border-b border-white/15 py-3 sm:py-3.5 px-6">
          Women's Wear • Ethnic & Festive • Ladies' Hosiery
        </p>

        {/* Action Buttons */}
        <div className="mt-10 sm:mt-12 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <Link
            to="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-[#C6A576] text-[#151515] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-[#D5B687] hover:shadow-lg hover:shadow-[#C6A576]/25 transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <ShoppingBag className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
            <span>Explore Shop</span>
          </Link>

          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-black/40 hover:bg-white/10 text-[#F8F6F2] border border-[#F8F6F2]/30 hover:border-[#C6A576] text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] backdrop-blur-sm transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <MapPin className="w-4 h-4 text-[#C6A576] transition-transform duration-300 group-hover:scale-110" />
            <span>Visit Our Store</span>
          </Link>
        </div>

        {/* Micro Store Badge */}
        <div className="mt-10 sm:mt-12 text-center text-xs tracking-[0.2em] text-[#C6A576]/90 uppercase font-medium">
          Rajshree Tower • Silvassa Ring Road • GSTIN: 26AFEPM7272F1ZD
        </div>
      </div>

      {/* Smooth Scroll Down Indicator */}
      <a
        href="#categories"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-[#F8F6F2]/70 hover:text-[#C6A576] transition-colors group cursor-pointer"
        aria-label="Scroll to Categories"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] font-medium opacity-80">Scroll</span>
        <div className="w-5 h-8 rounded-full border border-white/30 flex items-start justify-center p-1 group-hover:border-[#C6A576] transition-colors">
          <div className="w-1 h-2 bg-[#C6A576] rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}
