import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, Building, MapPin, Phone, ArrowRight, Package } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Hero Banner */}
      <div className="relative py-20 sm:py-28 bg-[#151515] text-[#F8F6F2] overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/storefront-hero.jpg"
            alt="Agarwal Hosiery Silvassa Heritage"
            className="w-full h-full object-cover object-center brightness-[0.25] filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C6A576]/20 border border-[#C6A576]/40 text-[#C6A576] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Our Heritage & Standards</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-white max-w-4xl mx-auto">
            THE AGARWAL HOSIERY STORY
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#EAE7E2]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Rooted in Silvassa, Dadra and Nagar Haveli. Dedicated to pure combed cotton foundations, dependable everyday clothing, and regal festive ensembles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
              Quality First Philosophy
            </p>
            <h2 className="font-editorial text-3xl sm:text-5xl font-normal text-[#151515] uppercase leading-tight">
              Clothing Engineered for Touch, Longevity & Everyday Grace
            </h2>
            <p className="text-sm sm:text-base text-[#151515]/75 font-light leading-relaxed">
              At Agarwal Hosiery Silvassa, we believe everyday fashion shouldn't compromise on fabric integrity. From breathable 100% natural European linen shirts and 220 GSM combed cotton tees to magnificent festive anarkalis and tiered shararas, our curation balances timeless aesthetics with all-day comfort.
            </p>
            <p className="text-sm sm:text-base text-[#151515]/75 font-light leading-relaxed">
              Conveniently located at Shop No. 05, Rajshree Tower on the main Silvassa Ring Road, we cater to individual shoppers seeking refined daily wear as well as regional businesses looking for reliable wholesale supplies.
            </p>
          </div>

          <div className="lg:col-span-6 overflow-hidden border border-[#EAE7E2] shadow-xl bg-white p-3">
            <img
              src="/images/storefront-hero.jpg"
              alt="Agarwal Hosiery Flagship Showroom"
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="p-4 text-center text-xs text-[#151515]/70">
              <span className="font-semibold text-[#151515]">Agarwal Hosiery Flagship Store</span> • Silvassa Ring Road
            </div>
          </div>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-[#EAE7E2]">
          <div className="p-8 bg-white border border-[#EAE7E2] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#151515] text-[#C6A576] flex items-center justify-center">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#151515]">Pure Cotton Standards</h3>
            <p className="text-xs text-[#151515]/70 font-light leading-relaxed">
              Every innerwear and daily staple uses super-combed, bio-washed cotton yarn engineered for sweat absorption, non-pilling wash durability, and skin-friendly ease.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#EAE7E2] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#151515] text-[#C6A576] flex items-center justify-center">
              <Package className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#151515]">B2B Wholesale Partner</h3>
            <p className="text-xs text-[#151515]/70 font-light leading-relaxed">
              Supplying regional retailers and boutiques with consistent inventory, verified quality checks, and prompt local dispatch across Silvassa, Vapi, and Daman.
            </p>
          </div>

          <div className="p-8 bg-white border border-[#EAE7E2] shadow-sm space-y-3">
            <div className="w-10 h-10 rounded-full bg-[#151515] text-[#C6A576] flex items-center justify-center">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-editorial text-2xl text-[#151515]">Physical Transparency</h3>
            <p className="text-xs text-[#151515]/70 font-light leading-relaxed">
              Registered business with verified GSTIN (26AFEPM7272F1ZD). Customers and partners can physically inspect fabrics, try size runs, and order directly in person.
            </p>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="p-10 bg-[#151515] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-editorial text-2xl sm:text-3xl text-white">Experience Our Outfits in Person</h3>
            <p className="text-xs sm:text-sm text-white/70 font-light mt-1">
              Visit our Rajshree Tower showroom on Silvassa Ring Road or explore our full shopping catalog online.
            </p>
          </div>
          <div className="flex gap-3">
            <Link
              to="/shop"
              className="px-6 py-3 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-wider hover:bg-[#D5B687] transition-colors"
            >
              Explore Shop
            </Link>
            <Link
              to="/contact"
              className="px-6 py-3 bg-white/10 text-white text-xs font-semibold uppercase tracking-wider border border-white/20 hover:bg-white/20 transition-colors"
            >
              Store Location
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
