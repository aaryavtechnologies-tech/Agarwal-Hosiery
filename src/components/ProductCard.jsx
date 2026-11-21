import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag, MessageSquare, Check, Sparkles } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [addedNotice, setAddedNotice] = useState(false);
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = (product.sizes && product.sizes[0]) || 'Standard';
    const defaultColor = (product.colors && product.colors[0]?.name) || 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1800);
  };

  // Fixed single product image - never changes when cursor moves over it
  const displayImage = (product.images && product.images[0]) || '';

  return (
    <div
      className="group relative flex flex-col justify-between bg-white border border-[#EAE7E2] hover:border-[#C6A576] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/5"
    >
      {/* Top Image Frame with Softened/Curved Aesthetic */}
      <Link
        to={`/product/${product.slug}`}
        className="relative aspect-[3/4] overflow-hidden bg-[#F7F5F0] block cursor-pointer"
        aria-label={`View ${product.name}`}
      >
        <img
          src={displayImage}
          alt={product.name}
          className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-108"
          loading="lazy"
        />

        {/* Badge: e.g. NEW, FEATURED, BESTSELLER */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2.5 py-1 bg-[#151515] text-[#C6A576] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] border border-[#C6A576]/30 shadow-md">
              {product.badge}
            </span>
          </div>
        )}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <span className="p-2.5 bg-white/90 hover:bg-[#C6A576] hover:text-[#151515] text-[#151515] rounded-full shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0 duration-300">
            <Eye className="w-4 h-4" />
          </span>
        </div>
      </Link>

      {/* Card Info Section */}
      <div className="p-4 sm:p-5 flex flex-col justify-between flex-grow bg-white">
        <div>
          {/* Category Subtext */}
          <p className="text-[10px] uppercase tracking-[0.25em] text-[#C6A576] font-semibold mb-1">
            {product.categoryLabel}
          </p>

          {/* Product Name */}
          <Link
            to={`/product/${product.slug}`}
            className="font-editorial text-lg sm:text-xl font-normal text-[#151515] group-hover:text-[#A98756] transition-colors line-clamp-1 block leading-snug"
            title={product.name}
          >
            {product.name}
          </Link>

          {/* Status Row */}
          <div className="mt-2.5 flex items-center justify-between text-xs">
            <span className="text-[11px] font-medium text-[#C6A576] tracking-wider uppercase">
              {product.clothingTypeLabel || 'Inquire For Rates'}
            </span>
            <span className="text-[10px] text-emerald-700 font-semibold tracking-wider uppercase">
              In Stock
            </span>
          </div>
        </div>

        {/* Action Buttons Row */}
        <div className="mt-4 pt-3 border-t border-[#EAE7E2] grid grid-cols-2 gap-2">
          <Link
            to={`/product/${product.slug}`}
            className="flex items-center justify-center py-2 px-2 border border-[#151515] text-[#151515] hover:bg-[#151515] hover:text-white text-[11px] font-semibold uppercase tracking-wider transition-colors"
          >
            Details
          </Link>

          <button
            onClick={handleQuickAdd}
            className={`flex items-center justify-center gap-1.5 py-2 px-2 text-[11px] font-semibold uppercase tracking-wider transition-colors ${
              addedNotice
                ? 'bg-emerald-700 text-white'
                : 'bg-[#C6A576] hover:bg-[#D5B687] text-[#151515]'
            }`}
          >
            {addedNotice ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
