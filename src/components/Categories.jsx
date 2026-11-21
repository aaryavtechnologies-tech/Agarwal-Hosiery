import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { CATEGORIES } from '../data/fashionData';

export default function Categories({ onSelectCategory }) {
  const navigate = useNavigate();

  const handleCategoryClick = (filterKey) => {
    if (filterKey === 'ethnic-festive') {
      navigate('/collections/festive');
    } else if (filterKey === 'indo-western') {
      navigate('/shop?category=women');
    } else if (filterKey === 'mens') {
      navigate('/collections/mens');
    } else {
      navigate('/shop');
    }
  };

  return (
    <section id="categories" className="py-24 sm:py-32 bg-[#F8F6F2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="w-8 h-[1px] bg-[#C6A576]" />
            <span className="text-xs uppercase tracking-[0.3em] text-[#C6A576] font-semibold">
              Curated Departments
            </span>
            <span className="w-8 h-[1px] bg-[#C6A576]" />
          </div>

          <h2 className="font-editorial text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-[#151515] uppercase">
            FIND YOUR STYLE
          </h2>

          <p className="mt-4 text-sm sm:text-base text-[#151515]/70 max-w-xl mx-auto font-light leading-relaxed">
            Thoughtfully sourced garments focused on touch, breathability, and timeless versatility for every hour of your routine.
          </p>
        </div>

        {/* 3 Large Vertical Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {CATEGORIES.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.filterKey)}
              className="group relative cursor-pointer overflow-hidden bg-[#151515] transition-all duration-500 shadow-sm hover:shadow-xl hover:shadow-black/10 flex flex-col justify-end min-h-[520px] sm:min-h-[580px] lg:min-h-[620px]"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  handleCategoryClick(category.filterKey);
                }
              }}
              aria-label={`View ${category.title} collection`}
            >
              {/* Background Image with Hover Zoom */}
              <div className="absolute inset-0 overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108 brightness-[0.9] group-hover:brightness-[0.98]"
                  loading="lazy"
                  decoding="async"
                />
                {/* Editorial Vignette & Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#151515]/35 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
              </div>

              {/* Top Accent Pill */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-block px-3 py-1 bg-black/40 backdrop-blur-md border border-white/20 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#F8F6F2]">
                  0{index + 1} // Collection
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-8 sm:p-10 text-left transition-transform duration-300">
                {/* Badges */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-white/10 backdrop-blur-sm text-[#F8F6F2]/80 border border-white/10"
                    >
                      {badge}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-editorial text-3xl sm:text-4xl text-[#F8F6F2] uppercase tracking-wide group-hover:text-[#C6A576] transition-colors duration-300">
                  {category.title}
                </h3>

                {/* Tagline */}
                <p className="font-serif italic text-lg sm:text-xl text-[#C6A576] mt-1 mb-3">
                  "{category.tagline}"
                </p>

                {/* Minimal Description */}
                <p className="text-xs sm:text-sm text-[#EAE7E2]/85 font-light leading-relaxed line-clamp-2 mb-6">
                  {category.description}
                </p>

                {/* Explore Link Indicator */}
                <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8F6F2] group-hover:text-[#C6A576] transition-colors border-b border-transparent group-hover:border-[#C6A576] pb-1">
                  <span>Shop This Category</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#C6A576]" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
