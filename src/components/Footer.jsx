import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ArrowUp, Navigation, ShoppingBag, ShieldCheck } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111111] text-[#F8F6F2] border-t border-white/10 pt-16 pb-24 md:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14 pb-12 border-b border-white/10">
          {/* Logo & Philosophy */}
          <div className="md:col-span-4 space-y-4">
            <Link to="/" className="inline-block group">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A576] group-hover:scale-125 transition-transform" />
                <span className="font-editorial text-2xl font-bold tracking-[0.2em] text-[#F8F6F2] uppercase group-hover:text-[#C6A576] transition-colors">
                  Agarwal Hosiery
                </span>
              </div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#C6A576] font-medium pl-4">
                Silvassa
              </p>
            </Link>

            <p className="font-serif italic text-base text-[#EAE7E2]/90 pt-1">
              "Everyday Essentials. Effortlessly Styled."
            </p>
            <p className="text-xs text-[#EAE7E2]/60 font-light leading-relaxed max-w-sm">
              Your destination for festive anarkalis, European linen casuals, super-combed cotton innerwear, and wholesale hosiery in Silvassa.
            </p>
            <p className="text-[11px] font-mono text-[#C6A576] tracking-wider">
              GSTIN: {BUSINESS_INFO.gstin}
            </p>
          </div>

          {/* Quick Shop Links */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A576] font-semibold">
              Explore Collections
            </p>
            <ul className="space-y-2 text-xs text-[#EAE7E2]/75">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  All Collections
                </Link>
              </li>
              <li>
                <Link to="/collections/festive" className="hover:text-white transition-colors">
                  Festive & Ethnic Suits
                </Link>
              </li>
              <li>
                <Link to="/collections/womens" className="hover:text-white transition-colors">
                  Women's Kurtis & Drapes
                </Link>
              </li>
              <li>
                <Link to="/collections/mens" className="hover:text-white transition-colors">
                  Men's Linen & Casuals
                </Link>
              </li>
              <li>
                <Link to="/collections/hosiery" className="hover:text-white transition-colors">
                  Hosiery & Cotton Essentials
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-[#C6A576] transition-colors flex items-center gap-1.5 pt-1">
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>View Shopping Bag</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Wholesale */}
          <div className="md:col-span-2 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A576] font-semibold">
              Company
            </p>
            <ul className="space-y-2 text-xs text-[#EAE7E2]/75">
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wholesale" className="hover:text-white transition-colors">
                  Wholesale Sourcing
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-white transition-colors">
                  Lookbook Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Store Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Address & Direct Inquiries */}
          <div className="md:col-span-3 space-y-3">
            <p className="text-xs uppercase tracking-[0.25em] text-[#C6A576] font-semibold">
              Showroom & Contact
            </p>
            <p className="text-xs text-[#EAE7E2]/80 leading-relaxed font-light">
              Shop No. 05, Rajshree Tower,<br />
              Silvassa Ring Road, near Ekdant Square,<br />
              Silvassa – 396230, India
            </p>
            <div className="pt-1">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="text-xs font-semibold text-white hover:text-[#C6A576] transition-colors block"
              >
                Phone: {BUSINESS_INFO.phone}
              </a>
              <a
                href={BUSINESS_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-[#C6A576] hover:underline block mt-1"
              >
                WhatsApp Desk →
              </a>
            </div>
            <div className="pt-1">
              <a
                href={BUSINESS_INFO.mapsSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-[#EAE7E2]/60 hover:text-white transition-colors"
              >
                <Navigation className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>Google Maps Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#EAE7E2]/50 gap-4">
          <p>© {new Date().getFullYear()} Agarwal Hosiery Silvassa. All rights reserved.</p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#EAE7E2]/70 hover:text-[#C6A576] transition-colors"
            aria-label="Back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
