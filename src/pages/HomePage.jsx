import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, ShoppingBag, Compass, MapPin } from 'lucide-react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FestiveCollection from '../components/FestiveCollection';
import Lookbook from '../components/Lookbook';
import Wholesale from '../components/Wholesale';
import VisitUs from '../components/VisitUs';
import ProductCard from '../components/ProductCard';
import { PRODUCTS } from '../data/products';

export default function HomePage() {
  const [activeLookbookFilter, setActiveLookbookFilter] = useState('all');

  // Featured 'Best Picks' products
  const featuredProducts = PRODUCTS.filter((p) => p.isFeatured).slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#151515] relative selection:bg-[#C6A576] selection:text-[#151515]">
      {/* 1. Cinematic Hero Section */}
      <Hero />

      {/* 2. Shop by Category: Departments (Points to /shop or /collections) */}
      <Categories onSelectCategory={(key) => setActiveLookbookFilter(key)} />

      {/* 3. Best Picks / New Season Arrivals (Instant E-commerce Showcase) */}
      <section className="py-20 sm:py-28 bg-[#FDFBF7] border-t border-b border-[#EAE7E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[1.5px] bg-[#C6A576]" />
                <span className="text-[11px] uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
                  Curated Catalog Highlights
                </span>
              </div>
              <h2 className="font-editorial text-4xl sm:text-5xl font-normal text-[#151515] uppercase tracking-tight">
                BEST PICKS OF THE SEASON
              </h2>
              <p className="mt-2 text-sm text-[#151515]/70 font-light max-w-lg">
                Hand-selected festive suits, breathable European linens, and super-combed cotton foundations.
              </p>
            </div>

            <Link
              to="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#151515] text-[#C6A576] text-xs font-bold uppercase tracking-[0.18em] hover:bg-black transition-colors self-start md:self-auto"
            >
              <span>Explore All Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Ladies' Ethnic & Festive Edit */}
      <FestiveCollection />

      {/* 5. Featured Lookbook: The Everyday Edit */}
      <Lookbook
        activeFilter={activeLookbookFilter}
        setActiveFilter={setActiveLookbookFilter}
      />

      {/* 6. Wholesale Highlight */}
      <Wholesale />

      {/* 7. Come Find Us (Storefront & Directions) */}
      <VisitUs />
    </div>
  );
}
