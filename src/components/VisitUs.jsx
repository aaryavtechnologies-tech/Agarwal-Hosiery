import React from 'react';
import { MapPin, Phone, MessageSquare, Navigation, Clock, Building, Compass } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 sm:py-32 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C6A576]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
              Store Location & Directions
            </span>
            <span className="w-8 h-[1px] bg-[#C6A576]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#151515] uppercase">
            COME FIND US
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#151515]/70 max-w-xl mx-auto font-light leading-relaxed">
            Experience our fabrics in person or speak directly with our team for retail and wholesale requirements.
          </p>
        </div>

        {/* Store Grid: Location Card on Left, Interactive Map on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Location Card */}
          <div className="lg:col-span-5 bg-[#151515] text-[#F8F6F2] p-8 sm:p-10 flex flex-col justify-between shadow-xl border border-black/10">
            <div>
              {/* Store Title & Badge */}
              <div className="flex items-center justify-between pb-6 border-b border-white/10">
                <div>
                  <span className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                    Flagship Destination
                  </span>
                  <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#F8F6F2] mt-1">
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
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-[#F8F6F2]">
                  <span className="font-semibold text-[#C6A576]">Shop No. 05, Rajshree Tower</span>
                  <span className="text-[10px] uppercase tracking-wider bg-black/70 px-2 py-0.5 border border-white/20">Storefront</span>
                </div>
              </div>

              {/* Verified Address Block */}
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 rounded-none text-[#C6A576] mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-sm font-light leading-relaxed">
                    <p className="font-semibold text-[#F8F6F2] text-base">{BUSINESS_INFO.address.shop}</p>
                    <p className="text-[#EAE7E2]/90">{BUSINESS_INFO.address.road}</p>
                    <p className="text-[#EAE7E2]/80">{BUSINESS_INFO.address.area}</p>
                    <p className="text-[#C6A576] text-xs font-medium mt-1">
                      {BUSINESS_INFO.address.state}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 rounded-none text-[#C6A576] mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-wider text-[#EAE7E2]/60">Direct Inquiries & Orders</p>
                    <a
                      href={`tel:${BUSINESS_INFO.phoneRaw}`}
                      className="text-base sm:text-lg font-medium text-[#F8F6F2] hover:text-[#C6A576] transition-colors inline-block mt-0.5"
                    >
                      {BUSINESS_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-2.5 bg-white/5 rounded-none text-[#C6A576] mt-0.5">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div className="text-xs text-[#EAE7E2]/80 leading-relaxed">
                    <span className="font-semibold text-[#F8F6F2]">Prominent Landmark:</span> Near Ekdant Square Sky Heights on the main Silvassa Ring Road. Easy parking and convenient vehicle access.
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-8 border-t border-white/10 mt-8 space-y-3">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 py-3.5 px-6 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-all duration-300 shadow-md group"
              >
                <Navigation className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                <span>Get Directions (Google Maps)</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-[#F8F6F2] text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                >
                  <Phone className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>Call Store</span>
                </a>
                <a
                  href={BUSINESS_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-[#F8F6F2] text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps Integration */}
          <div className="lg:col-span-7 bg-[#EAE7E2] relative overflow-hidden min-h-[420px] sm:min-h-[500px] border border-[#D4D0C9] shadow-md flex flex-col">
            <iframe
              title="Agarwal Hosiery Silvassa Location Map"
              src={BUSINESS_INFO.mapsEmbedUrl}
              className="w-full h-full min-h-[420px] border-0 filter contrast-[1.05] grayscale-[20%]"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            {/* Overlay Banner */}
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 border border-[#C6A576]/30 shadow-lg flex items-center justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#151515]">
                  Agarwal Hosiery Silvassa
                </p>
                <p className="text-[11px] text-[#151515]/70 line-clamp-1">
                  Shop No. 05, Rajshree Tower, Silvassa Ring Road
                </p>
              </div>
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#151515] text-[#C6A576] text-[11px] font-semibold uppercase tracking-wider hover:bg-[#C6A576] hover:text-[#151515] transition-colors"
              >
                <span>Navigate</span>
                <Navigation className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
