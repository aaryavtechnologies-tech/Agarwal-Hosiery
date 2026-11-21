import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Tag } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
      setQuery('');
    }
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const trimmed = query.trim().toLowerCase();
  const results = trimmed
    ? PRODUCTS.filter((p) => {
        return (
          p.name.toLowerCase().includes(trimmed) ||
          p.categoryLabel.toLowerCase().includes(trimmed) ||
          p.clothingTypeLabel.toLowerCase().includes(trimmed) ||
          p.fabric.toLowerCase().includes(trimmed) ||
          p.description.toLowerCase().includes(trimmed)
        );
      })
    : [];

  const handleSelectProduct = (slug) => {
    onClose();
    navigate(`/product/${slug}`);
  };

  const quickCategories = [
    { label: 'Anarkalis', query: 'anarkali' },
    { label: 'Shararas', query: 'sharara' },
    { label: 'Kurtis', query: 'kurti' },
    { label: 'Linen Shirts', query: 'linen' },
    { label: 'Cotton Tees', query: 'cotton' },
    { label: 'Hosiery', query: 'hosiery' }
  ];

  return (
    <div
      className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 lg:p-12 flex justify-center animate-fade-up"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#181818] border border-white/15 text-[#F8F6F2] shadow-2xl p-6 sm:p-8 flex flex-col max-h-[85vh] my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header */}
        <div className="flex items-center justify-between pb-4 border-b border-white/10">
          <div className="flex items-center gap-3 w-full">
            <Search className="w-5 h-5 text-[#C6A576]" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by outfit, fabric, category (e.g. Anarkali, Linen, Sharara)..."
              className="w-full bg-transparent border-0 text-base sm:text-lg text-white placeholder-white/40 focus:outline-none focus:ring-0"
            />
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-white/50 hover:text-white hover:bg-white/10 rounded-full transition-colors"
            aria-label="Close search"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Suggestion Pills */}
        {!query && (
          <div className="py-6 space-y-3">
            <p className="text-xs uppercase tracking-wider text-[#C6A576]">Quick Searches</p>
            <div className="flex flex-wrap gap-2">
              {quickCategories.map((item) => (
                <button
                  key={item.label}
                  onClick={() => setQuery(item.query)}
                  className="px-3 py-1.5 bg-white/5 hover:bg-[#C6A576] hover:text-[#151515] border border-white/10 text-xs tracking-wider transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Results Container */}
        {query && (
          <div className="flex-1 overflow-y-auto py-4 divide-y divide-white/10">
            <p className="text-xs uppercase tracking-wider text-[#EAE7E2]/60 pb-3">
              {results.length} result{results.length === 1 ? '' : 's'} for "{query}"
            </p>

            {results.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <p className="text-base text-white/80">No matching garments found</p>
                <p className="text-xs text-white/50">
                  Try searching for "Anarkali", "Linen", "Sharara", or "Cotton".
                </p>
              </div>
            ) : (
              <div className="space-y-3 pt-2">
                {results.map((product) => (
                  <div
                    key={product.id}
                    onClick={() => handleSelectProduct(product.slug)}
                    className="flex items-center gap-4 p-2 hover:bg-white/5 transition-colors cursor-pointer group"
                  >
                    <div className="w-14 h-18 bg-black overflow-hidden flex-shrink-0 border border-white/10">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-full object-cover object-top"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[10px] uppercase text-[#C6A576] tracking-wider">
                        <span>{product.categoryLabel}</span>
                        <span>•</span>
                        <span>{product.clothingTypeLabel}</span>
                      </div>
                      <h4 className="text-sm font-medium text-white group-hover:text-[#C6A576] transition-colors truncate">
                        {product.name}
                      </h4>
                    </div>

                    <ArrowRight className="w-4 h-4 text-white/40 group-hover:text-[#C6A576] group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
