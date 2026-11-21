import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import {
  SlidersHorizontal,
  X,
  ChevronDown,
  RotateCcw,
  Sparkles,
  ShoppingBag,
  ArrowRight
} from 'lucide-react';
import { PRODUCTS, CATEGORY_PILLS } from '../data/products';
import ProductCard from '../components/ProductCard';

export default function ShopPage() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Active Filters state driven by URL search params
  const activeCategoryPill = searchParams.get('pill') || 'all';
  const categoryParam = searchParams.get('category') || '';
  const typeParam = searchParams.get('type') || '';
  const sizeParam = searchParams.get('size') || '';
  const colorParam = searchParams.get('color') || '';
  const sortParam = searchParams.get('sort') || 'featured';

  // Mobile & Desktop Filter Panel state
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);

  // Available unique filter values from product data
  const availableCategories = [
    { label: "Women's Wear", value: 'women' },
    { label: "Men's Wear", value: 'men' },
    { label: 'Festive & Ethnic', value: 'festive' },
    { label: 'Hosiery & Rumals', value: 'hosiery' },
    { label: 'Door Mats & Rugs', value: 'mats' }
  ];

  const availableTypes = [
    { label: 'Kurtis & Tunics', value: 'kurtis' },
    { label: 'Kurta & Sharara Sets', value: 'kurta-sets' },
    { label: 'Lehenga Choli', value: 'lehengas' },
    { label: 'T-Shirts & Polos', value: 't-shirts' },
    { label: 'Joggers & Track Pants', value: 'trousers' },
    { label: 'Dresses & Gowns', value: 'dresses' },
    { label: 'Socks & Footwear Hosiery', value: 'socks' },
    { label: 'Handkerchiefs & Rumals', value: 'essentials' },
    { label: 'Entrance & Door Mats', value: 'doormats' }
  ];

  const availableSizes = ['S', 'M', 'L', 'XL', 'XXL', 'Free Size'];

  // Helper to update URL params
  const updateFilter = (key, value) => {
    const nextParams = new URLSearchParams(searchParams);
    if (!value || value === 'all') {
      nextParams.delete(key);
    } else {
      nextParams.set(key, value);
    }
    setSearchParams(nextParams, { replace: true });
  };

  // Handler for category pill clicks (exact reference interaction)
  const handlePillClick = (pill) => {
    const nextParams = new URLSearchParams();
    if (pill.id !== 'all') {
      nextParams.set('pill', pill.id);
      if (pill.filterType === 'category') {
        nextParams.set('category', pill.filterValue);
      } else if (pill.filterType === 'clothingType') {
        nextParams.set('type', pill.filterValue);
      }
    }
    if (sortParam && sortParam !== 'featured') {
      nextParams.set('sort', sortParam);
    }
    setSearchParams(nextParams, { replace: true });
  };

  const clearAllFilters = () => {
    setSearchParams(new URLSearchParams(), { replace: true });
  };

  // Active filter count calculation
  const activeFiltersCount = [
    categoryParam,
    typeParam,
    sizeParam
  ].filter(Boolean).length;

  // Filtered and Sorted products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((product) => {
      // 1. Category Pill Filter
      if (activeCategoryPill !== 'all') {
        const pill = CATEGORY_PILLS.find((p) => p.id === activeCategoryPill);
        if (pill) {
          if (pill.filterType === 'category' && product.category !== pill.filterValue) {
            return false;
          }
          if (pill.filterType === 'clothingType' && product.clothingType !== pill.filterValue) {
            return false;
          }
        }
      }

      // 2. Specific Category filter
      if (categoryParam && product.category !== categoryParam) {
        return false;
      }

      // 3. Clothing Type filter
      if (typeParam && product.clothingType !== typeParam) {
        return false;
      }

      // 4. Size filter
      if (sizeParam && product.sizes && !product.sizes.some((s) => s.includes(sizeParam))) {
        return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortParam === 'newest') return b.id.localeCompare(a.id);
      if (sortParam === 'name-asc') return a.name.localeCompare(b.name);
      // 'featured' default:
      return (b.isFeatured ? 1 : 0) - (a.isFeatured ? 1 : 0);
    });
  }, [
    activeCategoryPill,
    categoryParam,
    typeParam,
    sizeParam,
    colorParam,
    sortParam
  ]);

  return (
    <div className="min-h-screen bg-[#FDFBF7] pt-24 sm:pt-28 pb-24 text-[#151515]">
      {/* 1. Shop Header - Editorial, Generous White Space */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-8 pb-10 sm:pb-12 border-b border-[#EAE7E2]">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#151515] text-[#C6A576] text-[10px] font-bold uppercase tracking-[0.3em] mb-4 shadow-sm">
          <Sparkles className="w-3 h-3" />
          <span>The Collection</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight uppercase text-[#151515]">
          EXPLORE OUR COLLECTIONS
        </h1>

        <p className="mt-3 sm:mt-4 text-sm sm:text-base font-light text-[#151515]/70 max-w-xl mx-auto leading-relaxed">
          Discover everyday style and timeless essentials crafted with breathability, comfort, and refined tailoring.
        </p>

        {/* 2. Rounded Pill Category Filter Buttons (Exact Reference Styling) */}
        <div className="mt-10 overflow-x-auto no-scrollbar py-2">
          <div className="inline-flex items-center gap-2.5 sm:gap-3 px-2 min-w-max mx-auto">
            {CATEGORY_PILLS.map((pill) => {
              const isActive = activeCategoryPill === pill.id;
              return (
                <button
                  key={pill.id}
                  onClick={() => handlePillClick(pill)}
                  className={`px-5 sm:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-[0.16em] transition-all duration-300 shadow-sm border ${
                    isActive
                      ? 'bg-[#151515] text-[#F8F6F2] border-[#151515] shadow-md shadow-black/15 scale-102'
                      : 'bg-[#F8F6F2] text-[#151515]/80 border-[#C6A576]/50 hover:border-[#151515] hover:bg-white'
                  }`}
                >
                  {pill.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content Area: Controls Bar & Product Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Controls Bar: Filter Toggle, Active Pills, Product Count, Sort Dropdown */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pb-6 border-b border-[#EAE7E2]">
          {/* Left: Filter Button & Product Count */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsFilterDrawerOpen(true)}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white border border-[#151515] text-[#151515] text-xs font-semibold uppercase tracking-wider hover:bg-[#151515] hover:text-white transition-colors"
            >
              <SlidersHorizontal className="w-4 h-4 text-[#C6A576]" />
              <span>Filters</span>
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 rounded-full bg-[#C6A576] text-[#151515] text-[10px] font-bold flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {activeFiltersCount > 0 && (
              <button
                onClick={clearAllFilters}
                className="inline-flex items-center gap-1.5 text-xs text-[#151515]/60 hover:text-red-600 transition-colors uppercase tracking-wider font-medium"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}

            <span className="text-xs text-[#151515]/60 tracking-wider hidden md:inline-block pl-2">
              Showing <strong>{filteredProducts.length}</strong> styles
            </span>
          </div>

          {/* Right: Sort By Dropdown */}
          <div className="flex items-center justify-end gap-2 text-xs">
            <span className="text-[#151515]/60 uppercase tracking-wider font-medium">Sort By:</span>
            <select
              value={sortParam}
              onChange={(e) => updateFilter('sort', e.target.value)}
              className="bg-white border border-[#EAE7E2] px-3 py-2 text-xs font-medium text-[#151515] uppercase tracking-wider focus:outline-none focus:border-[#C6A576]"
            >
              <option value="featured">Featured First</option>
              <option value="newest">Newest Arrivals</option>
              <option value="name-asc">Name: A to Z</option>
            </select>
          </div>
        </div>

        {/* 4. Responsive Product Grid (4 columns desktop, 2-3 tablet, 2 mobile) */}
        {filteredProducts.length === 0 ? (
          <div className="py-24 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-white border border-[#EAE7E2] mx-auto flex items-center justify-center text-[#C6A576]">
              <ShoppingBag className="w-8 h-8 opacity-50" />
            </div>
            <h3 className="font-editorial text-3xl text-[#151515]">No Matching Outfits Found</h3>
            <p className="text-sm text-[#151515]/60 font-light max-w-md mx-auto">
              We couldn't find any products matching your active filter criteria. Try clearing some filters to explore our complete collection.
            </p>
            <button
              onClick={clearAllFilters}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#151515] text-[#C6A576] text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Reset All Filters</span>
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

      {/* 5. Slide-In Filter Drawer / Panel */}
      {isFilterDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
            onClick={() => setIsFilterDrawerOpen(false)}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <div className="w-screen max-w-md bg-[#181818] text-[#F8F6F2] p-6 sm:p-8 flex flex-col justify-between overflow-y-auto border-l border-white/10 shadow-2xl">
              <div>
                {/* Header */}
                <div className="flex items-center justify-between pb-6 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <SlidersHorizontal className="w-5 h-5 text-[#C6A576]" />
                    <h3 className="font-editorial text-2xl font-normal text-white uppercase tracking-wider">
                      Filter Collection
                    </h3>
                  </div>
                  <button
                    onClick={() => setIsFilterDrawerOpen(false)}
                    className="p-1.5 text-white/60 hover:text-white rounded-full hover:bg-white/10"
                    aria-label="Close filters"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Filter Options */}
                <div className="py-6 space-y-8 divide-y divide-white/10">
                  {/* Category Filter */}
                  <div>
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A576] font-semibold mb-3">
                      Category
                    </h4>
                    <div className="grid grid-cols-2 gap-2">
                      {availableCategories.map((cat) => {
                        const isSelected = categoryParam === cat.value;
                        return (
                          <button
                            key={cat.value}
                            onClick={() => updateFilter('category', isSelected ? '' : cat.value)}
                            className={`px-3 py-2 text-xs text-left transition-colors border ${
                              isSelected
                                ? 'bg-[#C6A576] text-[#151515] border-[#C6A576] font-bold'
                                : 'bg-white/5 text-[#EAE7E2]/80 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {cat.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Clothing Type Filter */}
                  <div className="pt-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A576] font-semibold mb-3">
                      Clothing Type
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {availableTypes.map((t) => {
                        const isSelected = typeParam === t.value;
                        return (
                          <button
                            key={t.value}
                            onClick={() => updateFilter('type', isSelected ? '' : t.value)}
                            className={`px-3 py-1.5 text-xs transition-colors border ${
                              isSelected
                                ? 'bg-[#C6A576] text-[#151515] border-[#C6A576] font-bold'
                                : 'bg-white/5 text-[#EAE7E2]/80 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {t.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Size Filter */}
                  <div className="pt-6">
                    <h4 className="text-xs uppercase tracking-[0.2em] text-[#C6A576] font-semibold mb-3">
                      Size
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {availableSizes.map((s) => {
                        const isSelected = sizeParam === s;
                        return (
                          <button
                            key={s}
                            onClick={() => updateFilter('size', isSelected ? '' : s)}
                            className={`px-3.5 py-1.5 text-xs font-semibold uppercase transition-colors border ${
                              isSelected
                                ? 'bg-[#C6A576] text-[#151515] border-[#C6A576]'
                                : 'bg-white/5 text-white/80 border-white/10 hover:border-white/30'
                            }`}
                          >
                            {s}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="pt-6 border-t border-white/10 space-y-3">
                <button
                  onClick={() => setIsFilterDrawerOpen(false)}
                  className="w-full py-3.5 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#D5B687] transition-colors"
                >
                  Show Results ({filteredProducts.length})
                </button>

                {activeFiltersCount > 0 && (
                  <button
                    onClick={() => {
                      clearAllFilters();
                      setIsFilterDrawerOpen(false);
                    }}
                    className="w-full py-2.5 text-xs uppercase tracking-wider text-white/60 hover:text-red-400 transition-colors"
                  >
                    Clear All Filters
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
