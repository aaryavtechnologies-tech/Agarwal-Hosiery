import React from 'react';
import { Link } from 'react-router-dom';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, MessageSquare, Phone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { BUSINESS_INFO } from '../data/fashionData';

export default function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    totalItems,
    generateWhatsAppOrderUrl
  } = useCart();

  if (!isCartOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 overflow-hidden"
      aria-labelledby="slide-over-title"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity duration-500 ease-in-out"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#181818] text-[#F8F6F2] shadow-2xl flex flex-col justify-between border-l border-white/10">
          {/* Header */}
          <div className="p-6 border-b border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#C6A576]" />
              <h2 className="font-editorial text-2xl font-normal text-[#F8F6F2] tracking-wide">
                YOUR BAG ({totalItems})
              </h2>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-[#EAE7E2]/70 hover:text-white hover:bg-white/10 rounded-full transition-colors"
              aria-label="Close cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 divide-y divide-white/10">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#C6A576]">
                  <ShoppingBag className="w-8 h-8 opacity-60" />
                </div>
                <p className="font-editorial text-2xl text-[#F8F6F2]">Your bag is currently empty</p>
                <p className="text-xs text-[#EAE7E2]/60 max-w-xs font-light">
                  Explore our curated men's, women's, and festive essentials collections.
                </p>
                <Link
                  to="/shop"
                  onClick={() => setIsCartOpen(false)}
                  className="mt-4 inline-flex items-center gap-2 px-6 py-3 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-colors"
                >
                  <span>Explore Shop</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {cart.map((item) => (
                  <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-start">
                    {/* Thumbnail */}
                    <div className="w-20 h-24 bg-black overflow-hidden flex-shrink-0 border border-white/10">
                      <img
                        src={item.product.images[0]}
                        alt={item.product.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1 min-w-0 space-y-1">
                      <Link
                        to={`/product/${item.product.slug}`}
                        onClick={() => setIsCartOpen(false)}
                        className="text-sm font-medium text-[#F8F6F2] hover:text-[#C6A576] transition-colors line-clamp-1"
                      >
                        {item.product.name}
                      </Link>

                      <div className="text-[11px] text-[#EAE7E2]/60 flex items-center gap-2">
                        <span>Size: <strong className="text-white">{item.size}</strong></span>
                        <span>•</span>
                        <span>Color: <strong className="text-white">{item.color}</strong></span>
                      </div>

                      <div className="text-xs font-semibold text-[#C6A576] pt-1">
                        ₹{(item.product.price || 0).toLocaleString('en-IN')}
                      </div>

                      {/* Quantity Stepper & Remove */}
                      <div className="flex items-center justify-between pt-2">
                        <div className="flex items-center border border-white/20">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1 hover:bg-white/10 text-white transition-colors"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="px-3 text-xs font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1 hover:bg-white/10 text-white transition-colors"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-white/40 hover:text-red-400 p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer Subtotal & Action */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-white/10 bg-[#141414] space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex items-center justify-between text-[#EAE7E2]/70 text-xs">
                  <span>Subtotal</span>
                  <span className="font-semibold text-white">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-[#EAE7E2]/50">
                  <span>Order Fulfillment</span>
                  <span className="text-[#C6A576]">In-Store Pickup / Local Delivery</span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-white/10 text-base font-medium">
                  <span className="font-editorial text-lg text-[#F8F6F2]">Estimated Total</span>
                  <span className="font-bold text-[#C6A576]">
                    ₹{subtotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-2">
                <a
                  href={generateWhatsAppOrderUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] transition-colors shadow-lg shadow-[#C6A576]/20"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Enquire Order via WhatsApp</span>
                </a>

                <div className="grid grid-cols-2 gap-2">
                  <Link
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="flex items-center justify-center py-2.5 px-3 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                  >
                    <span>View Bag</span>
                  </Link>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-white/10 hover:bg-white/20 text-[#C6A576] text-xs font-semibold uppercase tracking-wider transition-colors border border-white/15"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call Store</span>
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
