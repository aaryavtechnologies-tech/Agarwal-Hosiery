import React, { useEffect } from 'react';
import { X, Phone, MessageSquare, Sparkles, CheckCircle2 } from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';

export default function ImageModal({ item, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-black/85 backdrop-blur-md animate-fade-up"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative bg-[#151515] border border-white/15 max-w-5xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-black/60 hover:bg-[#C6A576] text-[#F8F6F2] hover:text-[#151515] rounded-full transition-colors focus:outline-none"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Side */}
        <div className="w-full md:w-3/5 bg-black/95 relative flex items-center justify-center p-3 sm:p-5 min-h-[320px] md:min-h-[520px]">
          <img
            src={item.image}
            alt={item.title}
            className="max-w-full max-h-[75vh] w-auto h-auto object-contain mx-auto"
          />
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 bg-black/70 backdrop-blur-md text-[10px] font-semibold uppercase tracking-[0.2em] text-[#C6A576] border border-[#C6A576]/30">
              {item.badge || item.categoryLabel}
            </span>
          </div>
        </div>

        {/* Details Side */}
        <div className="w-full md:w-2/5 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto bg-[#181818] text-[#F8F6F2]">
          <div className="space-y-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                {item.categoryLabel}
              </p>
              <h3 className="font-editorial text-2xl sm:text-3xl font-normal text-[#F8F6F2] mt-1">
                {item.title}
              </h3>
            </div>

            <p className="text-xs sm:text-sm text-[#EAE7E2]/80 font-light leading-relaxed">
              {item.caption}
            </p>

            <div className="pt-3 border-t border-white/10 space-y-2">
              <div className="flex items-center gap-2 text-xs text-[#C6A576]">
                <Sparkles className="w-3.5 h-3.5" />
                <span className="font-semibold uppercase tracking-wider">Fabric Specification</span>
              </div>
              <p className="text-xs text-[#EAE7E2]/90 pl-5">
                {item.fabric}
              </p>
            </div>

            <div className="space-y-1.5 pt-2 text-xs text-[#EAE7E2]/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>Available at Agarwal Hosiery Silvassa</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>In-store trial & wholesale queries welcome</span>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/10 space-y-3 mt-6">
            <p className="text-[10px] uppercase tracking-[0.2em] text-[#EAE7E2]/60 text-center">
              Interested in this style? Contact our team
            </p>
            <div className="grid grid-cols-2 gap-2">
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="flex items-center justify-center gap-2 py-3 px-3 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-wider hover:bg-[#D5B687] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Store</span>
              </a>
              <a
                href={`https://wa.me/917600903749?text=${encodeURIComponent(
                  `Hello Agarwal Hosiery Silvassa, I am inquiring about the "${item.title}" (${item.categoryLabel}) featured in your lookbook.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-3 bg-white/10 hover:bg-white/20 text-[#F8F6F2] text-xs font-bold uppercase tracking-wider transition-colors border border-white/15"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
