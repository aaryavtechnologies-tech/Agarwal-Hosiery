import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  ArrowLeft,
  ShoppingBag,
  MessageSquare,
  Phone,
  Check,
  ShieldCheck,
  Building,
  RotateCcw,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Copy,
  X
} from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { BUSINESS_INFO } from '../data/fashionData';
import { useCart } from '../context/CartContext';
import ProductCard from '../components/ProductCard';

export default function ProductDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = PRODUCTS.find((p) => p.slug === slug) || PRODUCTS[0];

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState((product.sizes && product.sizes[0]) || 'Standard');
  const [quantity, setQuantity] = useState(1);
  const [addedNotice, setAddedNotice] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const discountPercent =
    product.originalPrice && product.price
      ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
      : null;

  const currentImage = (product.images && (product.images[activeImageIndex] || product.images[0])) || '';

  const handleAddToCart = () => {
    addToCart(product, selectedSize, '', quantity);
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2000);
  };

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && (p.category === product.category || p.clothingType === product.clothingType)
  ).slice(0, 4);

  const whatsappInquiryUrl = `https://wa.me/917600903749?text=${encodeURIComponent(
    `Hello Agarwal Hosiery Silvassa, I am interested in inquiring about "${product.name}" (Size: ${selectedSize}). Is it available in stock at Rajshree Tower?`
  )}`;

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 border-b border-[#EAE7E2]">
        <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#151515]/60">
          <Link to="/" className="hover:text-[#C6A576]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/shop" className="hover:text-[#C6A576]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#151515] font-semibold truncate max-w-xs sm:max-w-md">
            {product.name}
          </span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Left Column: Image Gallery */}
          <div className="lg:col-span-7 flex flex-col-reverse md:flex-row gap-4">
            {/* Thumbnails */}
            {product.images.length > 1 && (
              <div className="flex md:flex-col gap-3 overflow-x-auto md:overflow-y-auto max-h-[580px] no-scrollbar">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-20 h-26 bg-[#F7F5F0] overflow-hidden flex-shrink-0 border-2 transition-all ${
                      activeImageIndex === idx
                        ? 'border-[#C6A576] shadow-md scale-102'
                        : 'border-transparent opacity-70 hover:opacity-100'
                    }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            {/* Main Image View */}
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="flex-1 relative aspect-[3/4] bg-[#F7F5F0] border border-[#EAE7E2] overflow-hidden shadow-sm cursor-zoom-in group"
              title="Click to view full-resolution image"
            >
              <img
                src={currentImage}
                alt={product.name}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-102"
                onError={(e) => {
                  if (e.target.src && !e.target.src.startsWith('http') && !e.target.src.startsWith('/')) {
                    e.target.src = '/' + e.target.src;
                  }
                }}
              />
              {product.badge && (
                <div className="absolute top-4 left-4 z-10 pointer-events-none">
                  <span className="px-3 py-1 bg-[#151515] text-[#C6A576] text-xs font-bold uppercase tracking-[0.2em] border border-[#C6A576]/30 shadow-md">
                    {product.badge}
                  </span>
                </div>
              )}

              {/* Multi-Image Lucide Copy Badge */}
              {product.images && product.images.length > 1 && (
                <div
                  className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 bg-black/80 backdrop-blur-md text-white text-xs font-semibold border border-[#C6A576]/50 shadow-lg pointer-events-none"
                  title="Multi-photo ensemble (slide to view)"
                >
                  <Copy className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>{activeImageIndex + 1} / {product.images.length}</span>
                </div>
              )}

              {/* Slide Controls (Prev / Next) for Multi-Image Details */}
              {product.images && product.images.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
                    }}
                    className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#C6A576] hover:text-[#151515] text-white flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all duration-200 shadow-xl border border-white/20 hover:scale-110"
                    aria-label="Previous photo"
                    title="Previous photo"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
                    }}
                    className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 hover:bg-[#C6A576] hover:text-[#151515] text-white flex items-center justify-center opacity-85 group-hover:opacity-100 transition-all duration-200 shadow-xl border border-white/20 hover:scale-110"
                    aria-label="Next photo"
                    title="Next photo"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>

                  {/* Slide Dots Indicator */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex items-center gap-1.5 pointer-events-none">
                    {product.images.map((_, dotIdx) => (
                      <span
                        key={dotIdx}
                        className={`h-1.5 rounded-full transition-all duration-300 ${activeImageIndex === dotIdx ? "w-5 bg-[#C6A576] shadow-sm" : "w-1.5 bg-white/60"}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Zoom pill indicator */}
              <div className="absolute bottom-4 right-4 z-10 opacity-80 group-hover:opacity-100 transition-opacity">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#151515]/90 text-[#F8F6F2] text-[11px] font-medium uppercase tracking-wider backdrop-blur-md shadow-lg border border-white/10">
                  <ZoomIn className="w-3.5 h-3.5 text-[#C6A576]" />
                  <span>Click to Zoom</span>
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Details & Actions */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-[#C6A576] font-semibold mb-1">
                  {product.categoryLabel} • {product.clothingTypeLabel}
                </p>
                <h1 className="font-editorial text-3xl sm:text-4xl lg:text-5xl font-normal text-[#151515] leading-tight">
                  {product.name}
                </h1>

                {/* Price Display */}
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="text-2xl sm:text-3xl font-bold text-[#151515]">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-base text-[#151515]/40 line-through">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                  {discountPercent && (
                    <span className="px-2.5 py-0.5 bg-[#C6A576]/20 text-[#151515] text-xs font-bold uppercase tracking-wider border border-[#C6A576]/40">
                      Save {discountPercent}%
                    </span>
                  )}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-[#151515]/75 font-light leading-relaxed">
                {product.description}
              </p>

              {/* Size Selection */}
              {product.sizes && product.sizes.length > 0 && (
                <div className="pt-4 border-t border-[#EAE7E2] space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="uppercase tracking-wider font-semibold text-[#151515]">
                      Available Sizes
                    </span>
                    <span className="text-[#C6A576] font-medium">Selected: {selectedSize}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {product.sizes.map((size) => {
                      const isSelected = selectedSize === size;
                      return (
                        <button
                          key={size}
                          onClick={() => setSelectedSize(size)}
                          className={`min-w-11 px-3 py-2 text-xs font-bold uppercase transition-all border ${
                            isSelected
                              ? 'border-[#151515] bg-[#151515] text-[#C6A576] shadow-sm'
                              : 'border-[#EAE7E2] bg-white text-[#151515] hover:border-[#151515]'
                          }`}
                        >
                          {size}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* Quantity Stepper */}
              <div className="pt-4 border-t border-[#EAE7E2] flex items-center gap-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-[#151515]">
                  Quantity
                </span>
                <div className="flex items-center border border-[#151515] bg-white">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1.5 hover:bg-[#151515] hover:text-white transition-colors"
                  >
                    -
                  </button>
                  <span className="px-4 text-xs font-bold">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3 py-1.5 hover:bg-[#151515] hover:text-white transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 space-y-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 px-6 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 shadow-md ${
                    addedNotice
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#C6A576] hover:bg-[#D5B687] text-[#151515]'
                  }`}
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added To Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add To Bag</span>
                    </>
                  )}
                </button>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={whatsappInquiryUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span>WhatsApp Order</span>
                  </a>

                  <a
                    href={`tel:${BUSINESS_INFO.phoneRaw}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 bg-white hover:bg-[#FAF8F5] text-[#151515] text-xs font-semibold uppercase tracking-wider transition-colors border border-[#151515]"
                  >
                    <Phone className="w-3.5 h-3.5 text-[#C6A576]" />
                    <span>Call Store Desk</span>
                  </a>
                </div>
              </div>

              {/* Fabric & Authenticity Highlights */}
              <div className="pt-6 border-t border-[#EAE7E2] space-y-3 text-xs text-[#151515]/80">
                <div className="flex items-start gap-2.5">
                  <Sparkles className="w-4 h-4 text-[#C6A576] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#151515]">Fabric Specification:</span>{' '}
                    {product.fabric}
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Building className="w-4 h-4 text-[#C6A576] mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-[#151515]">In-Store Trial & Pickup:</span>{' '}
                    Shop No. 05, Rajshree Tower, Silvassa Ring Road.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 pt-16 border-t border-[#EAE7E2]">
            <div className="flex items-center justify-between mb-8">
              <div>
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                  Curated For You
                </p>
                <h3 className="font-editorial text-3xl text-[#151515] uppercase mt-1">
                  You May Also Like
                </h3>
              </div>
              <Link
                to="/shop"
                className="text-xs font-semibold uppercase tracking-wider text-[#151515] hover:text-[#C6A576] transition-colors"
              >
                View All Collection →
              </Link>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {relatedProducts.map((rel) => (
                <ProductCard key={rel.id} product={rel} />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Full-Screen Lightbox Modal on Image Click with Multi-Image Slide */}
      {isLightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
        >
          {/* Top Left: Multi-photo Lucide Copy badge */}
          {product.images && product.images.length > 1 && (
            <div className="absolute top-5 left-5 z-50 flex items-center gap-2 px-3 py-1.5 bg-black/75 backdrop-blur-md text-white text-xs font-medium border border-[#C6A576]/40 shadow-lg pointer-events-none">
              <Copy className="w-4 h-4 text-[#C6A576]" />
              <span>{activeImageIndex + 1} / {product.images.length}</span>
            </div>
          )}

          {/* Close button */}
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-5 right-5 p-2.5 bg-white/10 hover:bg-[#C6A576] hover:text-[#151515] text-white rounded-full transition-colors z-50 shadow-lg"
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Lightbox Slider Prev/Next Controls */}
          {product.images && product.images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
                }}
                className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 hover:bg-[#C6A576] hover:text-[#151515] text-white rounded-full transition-all shadow-2xl border border-white/20 hover:scale-110"
                aria-label="Previous photo"
                title="Previous photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveImageIndex((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
                }}
                className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 p-3 bg-black/70 hover:bg-[#C6A576] hover:text-[#151515] text-white rounded-full transition-all shadow-2xl border border-white/20 hover:scale-110"
                aria-label="Next photo"
                title="Next photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="relative max-w-4xl max-h-[90vh] flex flex-col items-center cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage}
              alt={product.name}
              className="max-w-full max-h-[72vh] object-contain shadow-2xl border border-white/10"
            />

            {/* Thumbnail carousel strip in lightbox */}
            {product.images && product.images.length > 1 && (
              <div className="flex items-center justify-center gap-2 mt-3 z-30 overflow-x-auto max-w-full py-1">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`w-12 h-14 overflow-hidden rounded border-2 transition-all flex-shrink-0 ${activeImageIndex === idx ? "border-[#C6A576] scale-105 shadow-md" : "border-white/20 opacity-60 hover:opacity-100"}`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover object-top" />
                  </button>
                ))}
              </div>
            )}

            <div className="mt-3 text-center text-[#F8F6F2]">
              <p className="font-editorial text-xl sm:text-2xl tracking-wide">{product.name}</p>
              <p className="text-xs uppercase tracking-[0.25em] text-[#C6A576] mt-1 font-semibold">{product.fabric}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
