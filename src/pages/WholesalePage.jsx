import React, { useState } from 'react';
import {
  Package,
  Phone,
  MessageSquare,
  Building,
  CheckCircle2,
  ShieldCheck,
  Send,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO, WHOLESALE_BENEFITS } from '../data/fashionData';

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    contactNumber: '',
    category: 'Festive & Ethnic Suits',
    quantity: '50 - 100 Pieces',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.contactNumber) {
      alert('Please provide your name and contact number.');
      return;
    }

    const text = `*New Wholesale / Bulk Sourcing Enquiry*\n` +
      `--------------------------------------\n` +
      `• *Name:* ${formData.name}\n` +
      `• *Business Name:* ${formData.businessName || 'N/A'}\n` +
      `• *Contact Number:* ${formData.contactNumber}\n` +
      `• *Category:* ${formData.category}\n` +
      `• *Quantity Required:* ${formData.quantity}\n` +
      `• *Message / Requirement:* ${formData.message || 'Please share wholesale pricing & catalog.'}\n` +
      `--------------------------------------\n` +
      `Source: Agarwal Hosiery Silvassa Wholesale Desk`;

    const waUrl = `https://wa.me/917600903749?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Header Banner */}
      <div className="relative py-20 sm:py-28 bg-[#151515] text-[#F8F6F2] overflow-hidden mb-16">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/storefront-hero.jpg"
            alt="Agarwal Hosiery Wholesale"
            className="w-full h-full object-cover object-center brightness-[0.22] filter blur-[1px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C6A576]/20 border border-[#C6A576]/40 text-[#C6A576] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Package className="w-3.5 h-3.5" />
            <span>B2B & Retail Partner Sourcing</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-white max-w-4xl mx-auto">
            YOUR PARTNER FOR EVERYDAY ESSENTIALS
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#EAE7E2]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Agarwal Hosiery Silvassa supplies regional retailers, boutiques, and apparel business partners across Dadra & Nagar Haveli and Gujarat with dependable bulk hosiery, undergarments, and women's ethnic ensembles.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Benefits & Verified Information */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                Direct Supply Hub
              </p>
              <h2 className="font-editorial text-3xl sm:text-4xl text-[#151515] uppercase mt-1">
                Wholesale Categories & Sourcing Pillars
              </h2>
            </div>

            <div className="space-y-4">
              {WHOLESALE_BENEFITS.map((item, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-white border border-[#EAE7E2] shadow-sm flex items-start gap-4"
                >
                  <div className="w-8 h-8 rounded-full bg-[#151515] text-[#C6A576] flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="font-editorial text-xl font-medium text-[#151515] mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#151515]/70 font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Direct Contact Card */}
            <div className="p-6 bg-[#151515] text-white space-y-3">
              <p className="text-xs uppercase tracking-wider text-[#C6A576] font-semibold">
                Direct In-Person Consultation
              </p>
              <p className="text-sm font-light text-white/80">
                Walk in to our showroom at Shop No. 05, Rajshree Tower on Silvassa Ring Road to inspect fabric samples, check size runs, and discuss custom quantity orders.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-[#C6A576] font-bold underline flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
                <span>•</span>
                <span className="text-white/60">GSTIN: {BUSINESS_INFO.gstin}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Bulk Enquiry Form */}
          <div className="lg:col-span-6 bg-white border border-[#EAE7E2] p-8 sm:p-10 shadow-lg">
            <div className="border-b border-[#EAE7E2] pb-6 mb-6">
              <h3 className="font-editorial text-2xl sm:text-3xl font-medium text-[#151515] uppercase">
                Bulk Enquiry Form
              </h3>
              <p className="text-xs text-[#151515]/60 mt-1">
                Fill out the details below to connect immediately with our wholesale desk.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 border border-emerald-200 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="font-editorial text-2xl text-[#151515]">Enquiry Transmitted</h4>
                <p className="text-xs text-[#151515]/70 max-w-sm mx-auto">
                  Thank you! Your wholesale enquiry has been forwarded directly to our desk on WhatsApp. Our team will get back to you promptly with pricing and availability.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#151515] text-[#C6A576] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                      Contact Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Rajesh Agarwal"
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                      Business / Shop Name
                    </label>
                    <input
                      type="text"
                      value={formData.businessName}
                      onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                      placeholder="e.g. Agarwal Retail Store"
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                      Contact Number / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                      Product Category
                    </label>
                    <select
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                    >
                      <option value="Festive & Ethnic Suits">Festive & Ethnic Suits</option>
                      <option value="Hosiery & Undergarments">Hosiery & Undergarments</option>
                      <option value="Cushion Socks">Cushion Socks</option>
                      <option value="Men's Casual Shirts & Tees">Men's Casual Shirts & Tees</option>
                      <option value="Women's Everyday Kurtis">Women's Everyday Kurtis</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                    Estimated Quantity Required
                  </label>
                  <select
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                  >
                    <option value="25 - 50 Pieces">25 - 50 Pieces (Sample Run)</option>
                    <option value="50 - 100 Pieces">50 - 100 Pieces</option>
                    <option value="100 - 500 Pieces">100 - 500 Pieces</option>
                    <option value="500+ Pieces">500+ Pieces (Bulk Distributor)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-[#151515] mb-1">
                    Specific Requirement or Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Provide details on sizes, fabric preferences, or delivery timeline..."
                    className="w-full px-3.5 py-2.5 bg-[#FDFBF7] border border-[#EAE7E2] text-xs text-[#151515] focus:outline-none focus:border-[#C6A576]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2 shadow-md"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Wholesale Enquiry</span>
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
