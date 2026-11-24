import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye, ShoppingBag, MessageSquare, Check, Sparkles, Copy, ChevronLeft, ChevronRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function ProductCard({ product }) {
  const [addedNotice, setAddedNotice] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { addToCart } = useCart();

  const images = (product.images && product.images.length > 0) ? product.images : [(product.image || '')];
  const hasMultipleImages = images.length > 1;
  const displayImage = images[currentImageIndex] || images[0] || '';

  const handlePrev = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const defaultSize = (product.sizes && product.sizes[0]) || 'Standard';
    const defaultColor = (product.colors && product.colors[0]?.name) || 'Default';
    addToCart(product, defaultSize, defaultColor, 1);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 1800);
  };

  const discountPercent =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

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
          className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105"
          loading="lazy"
        />

        {/* Badge: e.g. NEW, FEATURED, BESTSELLER */}
        {product.badge && (
          <div className="absolute top-3 left-3 z-10 pointer-events-none">
            <span className="px-2.5 py-1 bg-[#151515] text-[#C6A576] text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] border border-[#C6A576]/30 shadow-md">
              {product.badge}
            </span>
          </div>
        )}

        {/* Multi-Image Lucide Copy Icon Badge */}
        {hasMultipleImages && (
          <div
            className="absolute top-3 right-3 z-20 flex items-center gap-1.5 px-2 py-1 bg-black/80 backdrop-blur-md text-white text-[10px] font-semibold tracking-wider rounded-sm border border-[#C6A576]/50 shadow-md transition-colors"
            title="Multi-photo post (slide to view)"
          >
            <Copy className="w-3.5 h-3.5 text-[#C6A576]" />
            <span>{currentImageIndex + 1}/{images.length}</span>
          </div>
        )}

        {/* Discount Tag */}
        {discountPercent && (
          <div className={`absolute ${hasMultipleImages ? 'top-10' : 'top-3'} right-3 z-10 pointer-events-none`}>
            <span className="px-2 py-0.5 bg-[#C6A576] text-[#151515] text-[10px] font-bold uppercase tracking-wider shadow-sm">
              {discountPercent}% OFF
            </span>
          </div>
        )}

        {/* Slide Controls (Prev / Next) for Multi-Image Cards */}
        {hasMultipleImages && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/75 hover:bg-[#C6A576] hover:text-[#151515] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg border border-white/20 hover:scale-110"
              aria-label="Previous image"
              title="Previous image"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-7 h-7 rounded-full bg-black/75 hover:bg-[#C6A576] hover:text-[#151515] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-200 shadow-lg border border-white/20 hover:scale-110"
              aria-label="Next image"
              title="Next image"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Slide Dots Indicator */}
            <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
              {images.map((_, dotIdx) => (
                <span
                  key={dotIdx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    currentImageIndex === dotIdx
                      ? 'w-4 bg-[#C6A576] shadow-sm'
                      : 'w-1.5 bg-white/60'
                  }`}
                />
              ))}
            </div>
          </>
        )}

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4 pointer-events-none">
          <span className="p-2.5 bg-white/90 text-[#151515] rounded-full shadow-lg transition-transform transform translate-y-2 group-hover:translate-y-0 duration-300">
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

          {/* Price Row */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-sm sm:text-base font-bold text-[#151515]">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#151515]/40 line-through">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
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
