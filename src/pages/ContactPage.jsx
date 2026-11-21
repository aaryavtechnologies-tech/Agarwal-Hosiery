import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Building, Sparkles } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-12 border-b border-[#EAE7E2]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151515] text-[#C6A576] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>Connect With Us</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-[#151515]">
          VISIT OUR SILVASSA STORE
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-light text-[#151515]/70 max-w-xl mx-auto leading-relaxed">
          Experience our fabrics in person, check size fits, and connect with our team for retail and wholesale requirements.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-stretch">
          {/* Left Location Card */}
          <div className="lg:col-span-5 bg-[#151515] text-white p-8 sm:p-10 flex flex-col justify-between shadow-2xl border border-black/10">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                    Flagship Showroom
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white mt-1">
                    {BUSINESS_INFO.name}
                  </h3>
                  <p className="text-[11px] text-[#C6A576] font-mono tracking-wider mt-0.5">
                    GSTIN: {BUSINESS_INFO.gstin}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#C6A576]/15 flex items-center justify-center text-[#C6A576]">
                  <Building className="w-5 h-5" />
                </div>
              </div>

              {/* Storefront Photo Preview */}
              <div className="relative mt-6 overflow-hidden border border-white/10 group">
                <img
                  src="/images/storefront-hero.jpg"
                  alt="Agarwal Hosiery Silvassa Storefront"
                  className="w-full h-44 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                  <span className="font-semibold text-[#C6A576]">Shop No. 05, Rajshree Tower</span>
                  <span className="text-[10px] uppercase tracking-wider bg-black/70 px-2 py-0.5 border border-white/20">Storefront</span>
                </div>
              </div>

              {/* Verified Address */}
              <div className="mt-6 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 text-[#C6A576] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-light leading-relaxed">
                    <p className="font-semibold text-white text-base">{BUSINESS_INFO.address.shop}</p>
                    <p className="text-white/80">{BUSINESS_INFO.address.road}</p>
                    <p className="text-white/70">{BUSINESS_INFO.address.area}</p>
                    <p className="text-[#C6A576] text-xs font-medium mt-1">
                      {BUSINESS_INFO.address.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 text-[#C6A576] mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/50">Direct Calling & Orders</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-medium text-white hover:text-[#C6A576] transition-colors inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-8 border-t border-white/10 mt-8 space-y-3">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-all shadow-md group"
              >
                <Navigation className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>Open Google Profile & Directions</span>
              </a>

              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 py-3 px-4 bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-all border border-white/15 hover:border-[#C6A576]/50 group"
              >
                <svg className="w-4 h-4 text-[#C6A576] transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
                <span>Follow on Instagram {BUSINESS_INFO.instagramHandle}</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>Call Store</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Interactive Google Map */}
          <div className="lg:col-span-7 bg-[#EAE7E2] relative overflow-hidden min-h-[480px] border border-[#D4D0C9] shadow-md flex flex-col">
            <iframe
              title="Agarwal Hosiery Silvassa Location Map"
              src={BUSINESS_INFO.mapsEmbedUrl}
              className="w-full h-full min-h-[480px] border-0 filter contrast-[1.05] grayscale-[15%]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 border border-[#C6A576]/30 shadow-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                  Agarwal Hosiery Silvassa
                </p>
                <p className="text-[11px] text-[#151515]/70">
                  Shop No. 05, Rajshree Tower, Silvassa Ring Road
                </p>
              </div>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#151515] text-[#C6A576] text-xs font-semibold uppercase tracking-wider hover:bg-[#C6A576] hover:text-[#151515] transition-colors"
              >
                <span>Navigate</span>
                <Navigation className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
