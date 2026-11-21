import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShoppingBag, SlidersHorizontal } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function CollectionPage() {
  const { category } = useParams();

  const collectionInfo = {
    festive: {
      label: 'Special Edition',
      title: 'LADIES\' ETHNIC & FESTIVE SUITS',
      subtitle: 'Regal flared anarkalis, tiered shararas, Chanderi silks, and Indo-Western coordinates.',
      filter: (p) => p.category === 'festive',
      image: '/images/womens-collection/outfit-2-champagne-anarkali.jpg'
    },
    womens: {
      label: 'Curated Collection',
      title: "WOMEN'S WEAR COLLECTION",
      subtitle: 'Graceful everyday kurtis, festive coordinates, elegant drapes, and breathable ensembles.',
      filter: (p) => p.targetGender === 'women' || p.category === 'women' || p.category === 'festive',
      image: '/images/womens-collection/outfit-1-orange-dhoti.jpg'
    },
    mens: {
      label: 'Everyday Essentials',
      title: "MEN'S WEAR COLLECTION",
      subtitle: 'Color-block pique polo t-shirts, tricolor streetwear crewnecks, athletic tees, and everyday casuals.',
      filter: (p) => p.targetGender === 'men' || p.category === 'men',
      image: '/images/mens-collection/mens-tshirt-01-mustard-navy-polo.jpg'
    },
    'womens-hosiery': {
      label: 'Ladies Essentials',
      title: "WOMEN'S HOSIERY, SOCKS & HANDKERCHIEFS",
      subtitle: 'Floral lace handkerchiefs, split-toe tabi ankle socks, pointelle knits, and daily essentials.',
      filter: (p) => p.category === 'hosiery' && p.targetGender === 'women',
      image: '/images/hosiery/womens-pastel-scalloped-floral-handkerchiefs.jpg'
    },
    'mens-hosiery': {
      label: 'Men Essentials',
      title: "MEN'S HOSIERY, SOCKS & HANDKERCHIEFS",
      subtitle: 'Executive combed cotton pocket rumals, athletic low-cut socks, ribbed crew socks, and gift sets.',
      filter: (p) => p.category === 'hosiery' && (p.targetGender === 'men' || p.targetGender === 'unisex'),
      image: '/images/hosiery/mens-athletic-tricolor-tab-ankle-socks-5pack.jpg'
    },
    hosiery: {
      label: 'Pure Combed Cotton',
      title: 'HOSIERY, SOCKS & HANDKERCHIEFS',
      subtitle: 'Authentic combed cotton athletic ankle socks, crew socks, ladies floral rumals, and executive gift box sets.',
      filter: (p) => p.category === 'hosiery',
      image: '/images/hosiery/unisex-cushion-performance-running-socks-6pack.jpg'
    },
    mats: {
      label: 'Home Textiles',
      title: 'DOOR MATS & FLOOR RUGS',
      subtitle: 'High-absorption tufted welcome mats, geometric loop-pile runners, and heavy-duty anti-skid floor mats.',
      filter: (p) => p.category === 'mats' || p.clothingType === 'doormats',
      image: '/images/mats/welcome-crimson-floral-door-mat.jpg'
    }
  };

  // Support route aliases
  collectionInfo.women = collectionInfo.womens;
  collectionInfo.men = collectionInfo.mens;
  collectionInfo['ladies-hosiery'] = collectionInfo['womens-hosiery'];
  collectionInfo['men-hosiery'] = collectionInfo['mens-hosiery'];
  collectionInfo.doormats = collectionInfo.mats;
  collectionInfo.rugs = collectionInfo.mats;

  const current = collectionInfo[category] || collectionInfo.festive;
  const filteredProducts = PRODUCTS.filter(current.filter);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* Collection Hero Banner */}
      <div className="relative py-16 sm:py-24 bg-[#151515] text-[#F8F6F2] overflow-hidden mb-12">
        <div className="absolute inset-0 z-0">
          <img
            src={current.image}
            alt={current.title}
            className="w-full h-full object-cover object-center brightness-[0.28] filter blur-[0.5px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-black/60 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C6A576]/20 border border-[#C6A576]/40 text-[#C6A576] text-xs font-semibold uppercase tracking-[0.25em] mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{current.label}</span>
          </div>

          <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal uppercase tracking-tight text-white max-w-4xl mx-auto">
            {current.title}
          </h1>

          <p className="mt-4 text-sm sm:text-base text-[#EAE7E2]/80 font-light max-w-xl mx-auto leading-relaxed">
            {current.subtitle}
          </p>

          <div className="mt-8 flex justify-center gap-3">
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#C6A576] hover:bg-[#D5B687] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] transition-colors"
            >
              <span>Explore All Shop</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sub-department switcher for hosiery */}
        {category && category.includes('hosiery') && (
          <div className="flex flex-wrap items-center gap-2 mb-8 pb-6 border-b border-[#EAE7E2]">
            <span className="text-xs uppercase tracking-wider text-[#151515]/60 mr-2 font-medium">Department:</span>
            <Link
              to="/collections/hosiery"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                category === 'hosiery'
                  ? 'bg-[#151515] text-[#C6A576] border-[#151515]'
                  : 'bg-white text-[#151515] border-[#EAE7E2] hover:border-[#151515]'
              }`}
            >
              All Essentials
            </Link>
            <Link
              to="/collections/womens-hosiery"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                category === 'womens-hosiery' || category === 'ladies-hosiery'
                  ? 'bg-[#151515] text-[#C6A576] border-[#151515]'
                  : 'bg-white text-[#151515] border-[#EAE7E2] hover:border-[#151515]'
              }`}
            >
              Ladies' Hosiery
            </Link>
            <Link
              to="/collections/mens-hosiery"
              className={`px-4 py-2 text-xs font-bold uppercase tracking-wider transition-all border ${
                category === 'mens-hosiery' || category === 'men-hosiery'
                  ? 'bg-[#151515] text-[#C6A576] border-[#151515]'
                  : 'bg-white text-[#151515] border-[#EAE7E2] hover:border-[#151515]'
              }`}
            >
              Men's Hosiery
            </Link>
          </div>
        )}

        <div className="flex items-center justify-between pb-6 border-b border-[#EAE7E2] mb-8">
          <p className="text-xs uppercase tracking-wider text-[#151515]/70">
            Displaying <strong>{filteredProducts.length}</strong> styles in this collection
          </p>
          <Link
            to="/shop"
            className="text-xs uppercase tracking-wider font-semibold text-[#151515] hover:text-[#C6A576] transition-colors flex items-center gap-1.5"
          >
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C6A576]" />
            <span>Advanced Filters</span>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
