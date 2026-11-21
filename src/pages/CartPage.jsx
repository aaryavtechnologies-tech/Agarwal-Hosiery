import React from 'react';
import { Link } from 'react-router-dom';
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  MessageSquare,
  Phone,
  ShieldCheck,
  Building,
  RotateCcw
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/fashionData';

export default function CartPage() {
  const {
    cart,
    updateQuantity,
    removeFromCart,
    clearCart,
    totalItems,
    generateWhatsAppOrderUrl
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 text-[#151515] flex items-center justify-center">
        <div className="max-w-md mx-auto px-6 text-center space-y-6">
          <div className="w-20 h-20 rounded-full bg-white border border-[#EAE7E2] mx-auto flex items-center justify-center text-[#C6A576] shadow-sm">
            <ShoppingBag className="w-10 h-10 opacity-60" />
          </div>

          <h1 className="font-editorial text-4xl text-[#151515] uppercase tracking-wide">
            Your Bag is Empty
          </h1>

          <p className="text-sm text-[#151515]/70 font-light leading-relaxed">
            You haven't added any clothing or hosiery items to your shopping bag yet. Explore our latest arrivals to begin.
          </p>

          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#151515] hover:bg-black text-[#C6A576] text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-lg"
          >
            <span>Start Shopping</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-28 pb-24 text-[#151515]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between pb-6 border-b border-[#EAE7E2] mb-10">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
              Shopping Bag
            </p>
            <h1 className="font-editorial text-3xl sm:text-5xl font-normal text-[#151515] uppercase mt-1">
              REVIEW YOUR ORDER ({totalItems})
            </h1>
          </div>

          <button
            onClick={clearCart}
            className="inline-flex items-center gap-1.5 text-xs text-[#151515]/60 hover:text-red-600 transition-colors uppercase tracking-wider font-medium"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Empty Bag</span>
          </button>
        </div>

        {/* Cart Layout: Items Table on Left, Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Items List */}
          <div className="lg:col-span-8 divide-y divide-[#EAE7E2] bg-white border border-[#EAE7E2] p-6 sm:p-8 shadow-sm">
            {cart.map((item) => (
              <div key={item.id} className="py-6 first:pt-0 last:pb-0 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
                <div className="flex gap-4 items-center min-w-0">
                  <Link
                    to={`/product/${item.product.slug}`}
                    className="w-20 h-28 bg-[#F7F5F0] overflow-hidden flex-shrink-0 border border-[#EAE7E2]"
                  >
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </Link>

                  <div className="space-y-1 min-w-0">
                    <p className="text-[10px] uppercase tracking-wider text-[#C6A576]">
                      {item.product.categoryLabel}
                    </p>
                    <Link
                      to={`/product/${item.product.slug}`}
                      className="font-editorial text-xl text-[#151515] hover:text-[#C6A576] transition-colors block line-clamp-1"
                    >
                      {item.product.name}
                    </Link>
                    <div className="text-xs text-[#151515]/70 flex items-center gap-3">
                      <span>Size: <strong>{item.size}</strong></span>
                      <span>•</span>
                      <span>Color: <strong>{item.color}</strong></span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between w-full sm:w-auto gap-6 sm:justify-end">
                  {/* Quantity Stepper */}
                  <div className="flex items-center border border-[#151515] bg-[#FDFBF7]">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="p-1.5 hover:bg-[#151515] hover:text-white transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-4 text-xs font-bold">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-1.5 hover:bg-[#151515] hover:text-white transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-[#151515]/40 hover:text-red-600 transition-colors p-1"
                    aria-label="Remove item from bag"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary & Enquiry Checkout */}
          <div className="lg:col-span-4 bg-[#151515] text-[#F8F6F2] p-8 shadow-xl border border-black/10 space-y-6">
            <h2 className="font-editorial text-2xl uppercase tracking-wider text-white pb-4 border-b border-white/10">
              Order Inquiry
            </h2>

            <div className="space-y-3 text-xs text-[#EAE7E2]/80">
              <div className="flex items-center justify-between">
                <span>Selected Items</span>
                <span className="font-semibold text-white">{totalItems} items</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pricing & Rates</span>
                <span className="text-[#C6A576]">Available on Inquiry</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Order Type</span>
                <span className="text-white">Retail & Wholesale Supply</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Fulfilment</span>
                <span>Rajshree Tower Pickup / Silvassa Delivery</span>
              </div>
            </div>

            {/* Direct WhatsApp Order Submission */}
            <div className="pt-2 space-y-3">
              <a
                href={generateWhatsAppOrderUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-4 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-center gap-2.5 shadow-lg shadow-[#C6A576]/20"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Submit Order via WhatsApp</span>
              </a>

              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="w-full py-3.5 px-4 bg-white/10 hover:bg-white/20 text-[#F8F6F2] text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-white/15"
              >
                <Phone className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>Call Store Desk ({BUSINESS_INFO.phone})</span>
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-[11px] text-[#EAE7E2]/60 space-y-2">
              <div className="flex items-center gap-2">
                <Building className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>Agarwal Hosiery, Shop No. 05, Rajshree Tower</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C6A576]" />
                <span>GST Registered: 26AFEPM7272F1ZD</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
