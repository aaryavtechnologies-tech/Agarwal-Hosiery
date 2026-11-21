import React from 'react';
import { ArrowUpRight, Sparkles, MessageSquare, Play, Video } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function InstagramReelSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#151515] text-[#F8F6F2] relative overflow-hidden border-t border-b border-white/10">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#C6A576]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Reel Video Player Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-[380px] sm:max-w-[420px] bg-black/60 rounded-2xl p-2 sm:p-3 border border-[#C6A576]/30 shadow-2xl shadow-black/80">
              {/* Instagram Reel Iframe */}
              <div className="relative w-full aspect-[9/16] max-h-[620px] rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <iframe
                  src={BUSINESS_INFO.featuredReelEmbedUrl}
                  title="Agarwal Hosiery Silvassa Official Instagram Reel"
                  className="w-full h-full border-0 rounded-xl"
                  scrolling="no"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-3 px-2 flex items-center justify-between text-xs text-[#EAE7E2]/70">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
                  <span className="font-semibold text-white">{BUSINESS_INFO.instagramHandle}</span>
                </div>
                <a
                  href={BUSINESS_INFO.featuredReelUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#C6A576] hover:underline text-[11px] font-semibold flex items-center gap-1"
                >
                  <span>Open Reel</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Narrative & Direct CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-[#C6A576]/30 text-[#C6A576] text-[10px] font-bold uppercase tracking-[0.25em]">
              <Video className="w-3 h-3" />
              <span>Official Instagram Reel</span>
            </div>

            <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-white uppercase tracking-tight leading-tight">
              SEE US IN MOTION
            </h2>

            <p className="text-sm sm:text-base text-[#EAE7E2]/75 font-light leading-relaxed max-w-xl mx-auto lg:mx-0">
              Take a virtual walkthrough of Agarwal Hosiery at Rajshree Tower, Silvassa. 
              Watch our latest festive collections, flowing draped silhouettes, and authentic combed 
              cotton foundations styled in real-time.
            </p>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-left">
              <div className="p-4 bg-white/5 border border-white/10 rounded-none space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C6A576] font-semibold block">
                  Collection Walk
                </span>
                <p className="text-xs text-white/90 font-medium">Festive Anarkalis & Shararas</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-none space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C6A576] font-semibold block">
                  Fabric Quality
                </span>
                <p className="text-xs text-white/90 font-medium">100% Combed Cotton Hosiery</p>
              </div>

              <div className="p-4 bg-white/5 border border-white/10 rounded-none space-y-1">
                <span className="text-[10px] uppercase tracking-wider text-[#C6A576] font-semibold block">
                  Storefront
                </span>
                <p className="text-xs text-white/90 font-medium">Shop 05, Rajshree Tower</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-center gap-3 justify-center lg:justify-start">
              <a
                href={BUSINESS_INFO.featuredReelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-all duration-300 shadow-lg shadow-[#C6A576]/20 group"
              >
                <span>Watch On Instagram</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors border border-white/15"
              >
                <svg className="w-4 h-4 text-[#C6A576]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Follow {BUSINESS_INFO.instagramHandle}</span>
              </a>

              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-[0.18em] transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Ask on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
