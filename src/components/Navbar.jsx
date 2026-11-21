import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  Phone,
  MapPin,
  Menu,
  X,
  Search,
  ShoppingBag,
  ChevronDown,
  ChevronRight,
  Sparkles,
  ArrowRight
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/fashionData';
import { useCart } from '../context/CartContext';
import SearchModal from './SearchModal';
import CartDrawer from './CartDrawer';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [shopMegaOpen, setShopMegaOpen] = useState(false);
  const [mobileShopExpanded, setMobileShopExpanded] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);

  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setShopMegaOpen(false);
    setMobileShopExpanded(false);
  }, [location.pathname]);

  const megaMenuData = {
    mens: {
      title: "Men's Wear",
      path: '/shop?category=men',
      items: [
        { label: "All Men's Wear", path: '/shop?category=men' },
        { label: 'Shirts', path: '/shop?category=men&type=shirts' },
        { label: 'T-Shirts', path: '/shop?category=men&type=t-shirts' },
        { label: 'Trousers & Chinos', path: '/shop?category=men&type=trousers' },
        { label: 'Casual Essentials', path: '/shop?category=men' }
      ]
    },
    womens: {
      title: "Women's Wear",
      path: '/shop?category=women',
      items: [
        { label: "All Women's Wear", path: '/shop?category=women' },
        { label: 'Kurtis & Tunics', path: '/shop?category=women&type=kurtis' },
        { label: 'Kurta & Sharara Sets', path: '/shop?category=women&type=kurta-sets' },
        { label: 'Dresses', path: '/shop?category=women&type=dresses' },
        { label: 'Festive Ensembles', path: '/shop?category=festive' }
      ]
    },
    hosiery: {
      title: 'Hosiery & Essentials',
      path: '/collections/hosiery',
      items: [
        { label: "Men's Essentials", path: '/collections/mens-hosiery' },
        { label: "Women's Essentials", path: '/collections/womens-hosiery' },
        { label: 'Handkerchiefs & Rumal', path: '/shop?category=hosiery' },
        { label: 'Door Mats & Rugs', path: '/collections/mats' },
        { label: 'Cushion Socks', path: '/shop?category=hosiery' }
      ]
    },
    featured: {
      title: 'Special Collections',
      path: '/collections/festive',
      items: [
        { label: 'Festive Collection', path: '/collections/festive' },
        { label: 'New Arrivals', path: '/shop?sort=newest' },
        { label: 'Wholesale Enquiries', path: '/wholesale' },
        { label: 'Flagship Showroom', path: '/contact' }
      ]
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled || !isHome
            ? 'bg-[#151515]/95 backdrop-blur-md shadow-xl shadow-black/20 py-3 border-b border-white/10'
            : 'bg-gradient-to-b from-black/85 via-black/45 to-transparent py-4 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left: Custom Typography Logo */}
            <Link
              to="/"
              className="group flex flex-col items-start focus:outline-none"
              aria-label="Agarwal Hosiery Silvassa Home"
            >
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#C6A576] group-hover:scale-125 transition-transform duration-300" />
                <span className="font-editorial text-lg sm:text-2xl font-bold tracking-[0.2em] text-[#F8F6F2] uppercase transition-colors duration-300 group-hover:text-[#C6A576]">
                  Agarwal Hosiery
                </span>
              </div>
              <span className="text-[10px] tracking-[0.35em] text-[#C6A576] font-medium uppercase pl-4">
                Silvassa
              </span>
            </Link>

            {/* Center: Desktop Navigation with Shop Mega-Menu */}
            <nav className="hidden lg:flex items-center space-x-7" aria-label="Main Navigation">
              <Link
                to="/"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/' ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                }`}
              >
                Home
              </Link>

              {/* Shop Mega Menu Trigger */}
              <div
                className="relative"
                onMouseEnter={() => setShopMegaOpen(true)}
                onMouseLeave={() => setShopMegaOpen(false)}
              >
                <Link
                  to="/shop"
                  className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] flex items-center gap-1.5 py-2 ${
                    location.pathname.startsWith('/shop') ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                  }`}
                >
                  <span>Shop</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-300 ${
                      shopMegaOpen ? 'rotate-180 text-[#C6A576]' : ''
                    }`}
                  />
                </Link>

                {/* Mega Menu Dropdown */}
                {shopMegaOpen && (
                  <div className="absolute top-full -left-20 w-[780px] bg-[#181818] border border-white/15 shadow-2xl p-8 animate-fade-up z-50">
                    <div className="grid grid-cols-4 gap-8">
                      {/* Column 1: Men's */}
                      <div className="space-y-3">
                        <Link
                          to={megaMenuData.mens.path}
                          className="font-editorial text-base uppercase text-[#C6A576] font-medium hover:underline inline-block pb-1 border-b border-white/10 w-full"
                        >
                          {megaMenuData.mens.title}
                        </Link>
                        <ul className="space-y-2 text-xs text-[#EAE7E2]/75">
                          {megaMenuData.mens.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.path}
                                className="hover:text-white transition-colors block py-0.5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 2: Women's */}
                      <div className="space-y-3">
                        <Link
                          to={megaMenuData.womens.path}
                          className="font-editorial text-base uppercase text-[#C6A576] font-medium hover:underline inline-block pb-1 border-b border-white/10 w-full"
                        >
                          {megaMenuData.womens.title}
                        </Link>
                        <ul className="space-y-2 text-xs text-[#EAE7E2]/75">
                          {megaMenuData.womens.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.path}
                                className="hover:text-white transition-colors block py-0.5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 3: Hosiery */}
                      <div className="space-y-3">
                        <Link
                          to={megaMenuData.hosiery.path}
                          className="font-editorial text-base uppercase text-[#C6A576] font-medium hover:underline inline-block pb-1 border-b border-white/10 w-full"
                        >
                          {megaMenuData.hosiery.title}
                        </Link>
                        <ul className="space-y-2 text-xs text-[#EAE7E2]/75">
                          {megaMenuData.hosiery.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.path}
                                className="hover:text-white transition-colors block py-0.5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Column 4: Special */}
                      <div className="space-y-3 bg-white/[0.03] p-4 border border-white/10">
                        <p className="font-editorial text-base uppercase text-[#C6A576] font-medium pb-1 border-b border-white/10">
                          {megaMenuData.featured.title}
                        </p>
                        <ul className="space-y-2 text-xs text-[#EAE7E2]/85">
                          {megaMenuData.featured.items.map((sub) => (
                            <li key={sub.label}>
                              <Link
                                to={sub.path}
                                className="hover:text-[#C6A576] transition-colors block py-0.5"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs text-[#EAE7E2]/60">
                      <span>Store: Shop No. 05, Rajshree Tower, Silvassa Ring Road</span>
                      <Link
                        to="/shop"
                        className="text-[#C6A576] font-semibold uppercase tracking-wider hover:underline flex items-center gap-1"
                      >
                        <span>View All Products</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                to="/collections/festive"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/collections/festive'
                    ? 'text-[#C6A576]'
                    : 'text-[#F8F6F2]/90'
                }`}
              >
                Collections
              </Link>

              <Link
                to="/wholesale"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/wholesale' ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                }`}
              >
                Wholesale
              </Link>

              <Link
                to="/gallery"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/gallery' ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                }`}
              >
                Gallery
              </Link>

              <Link
                to="/about"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/about' ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                }`}
              >
                About
              </Link>

              <Link
                to="/contact"
                className={`text-xs uppercase tracking-[0.22em] font-medium transition-colors hover:text-[#C6A576] ${
                  location.pathname === '/contact' ? 'text-[#C6A576]' : 'text-[#F8F6F2]/90'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* Right: Search, Cart, Call Now */}
            <div className="flex items-center space-x-3 sm:space-x-4">
              {/* Instagram Profile */}
              <a
                href={BUSINESS_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#F8F6F2]/80 hover:text-[#C6A576] transition-colors focus:outline-none"
                aria-label="Agarwal Hosiery Instagram"
                title="Follow us on Instagram"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>

              {/* Product Search Trigger */}
              <button
                onClick={() => setSearchModalOpen(true)}
                className="p-2 text-[#F8F6F2]/80 hover:text-[#C6A576] transition-colors focus:outline-none"
                aria-label="Search clothing"
                title="Search Products"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Shopping Cart Icon with Counter */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 text-[#F8F6F2]/80 hover:text-[#C6A576] transition-colors focus:outline-none"
                aria-label="View shopping bag"
                title="Shopping Bag"
              >
                <ShoppingBag className="w-5 h-5" />
                {totalItems > 0 && (
                  <span className="absolute top-0.5 right-0.5 w-4 h-4 rounded-full bg-[#C6A576] text-[#151515] font-bold text-[10px] flex items-center justify-center shadow-md">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Call Now Button */}
              <a
                href={`tel:${BUSINESS_INFO.phoneRaw}`}
                className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#151515] bg-[#C6A576] hover:bg-[#D5B687] transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm active:translate-y-0 group"
              >
                <Phone className="w-3.5 h-3.5 transition-transform duration-300 group-hover:rotate-12" />
                <span>Call Now</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#F8F6F2] hover:text-[#C6A576] focus:outline-none lg:hidden"
                aria-expanded={mobileMenuOpen}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-white" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu with Accordion */}
      <div
        className={`fixed inset-0 z-50 bg-[#151515]/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between px-6 pt-20 pb-8 overflow-y-auto ${
          mobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="space-y-5">
          <div className="border-b border-white/10 pb-3 flex items-center justify-between">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#C6A576]">Menu</p>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-1 text-white/70 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="flex flex-col space-y-3 font-editorial text-2xl">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              Home
            </Link>

            {/* Shop Accordion */}
            <div className="border-t border-b border-white/10 py-2">
              <button
                onClick={() => setMobileShopExpanded(!mobileShopExpanded)}
                className="w-full flex items-center justify-between text-[#F8F6F2] hover:text-[#C6A576] transition-colors text-left font-editorial text-2xl"
              >
                <span>Shop Catalog</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#C6A576] transition-transform duration-300 ${
                    mobileShopExpanded ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {mobileShopExpanded && (
                <div className="pl-4 pt-3 space-y-4 font-sans text-sm animate-fade-up">
                  <div>
                    <Link
                      to="/shop?category=women"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[#C6A576] font-semibold uppercase text-xs tracking-wider block mb-1"
                    >
                      Women's Wear
                    </Link>
                    <div className="pl-2 space-y-1 text-xs text-[#EAE7E2]/75">
                      <Link to="/shop?category=festive" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Festive Anarkalis & Shararas</Link>
                      <Link to="/shop?category=women&type=kurtis" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Kurtis & Tunics</Link>
                      <Link to="/shop?category=women&type=kurta-sets" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Kurta Sets</Link>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/shop?category=men"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[#C6A576] font-semibold uppercase text-xs tracking-wider block mb-1"
                    >
                      Men's Wear
                    </Link>
                    <div className="pl-2 space-y-1 text-xs text-[#EAE7E2]/75">
                      <Link to="/shop?category=men&type=shirts" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Linen & Casual Shirts</Link>
                      <Link to="/shop?category=men&type=t-shirts" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Cotton Tees & Polos</Link>
                      <Link to="/shop?category=men&type=trousers" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Chino Trousers</Link>
                    </div>
                  </div>

                  <div>
                    <Link
                      to="/shop?category=hosiery"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-[#C6A576] font-semibold uppercase text-xs tracking-wider block mb-1"
                    >
                      Hosiery & Essentials
                    </Link>
                    <div className="pl-2 space-y-1 text-xs text-[#EAE7E2]/75">
                      <Link to="/shop?category=hosiery" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Combed Cotton Vests</Link>
                      <Link to="/shop?category=hosiery" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Cushioned Socks</Link>
                      <Link to="/shop?category=hosiery" onClick={() => setMobileMenuOpen(false)} className="block py-0.5">Women's Camisoles & Leggings</Link>
                    </div>
                  </div>

                  <Link
                    to="/shop"
                    onClick={() => setMobileMenuOpen(false)}
                    className="inline-block pt-2 text-[#C6A576] font-semibold text-xs uppercase tracking-wider underline underline-offset-4"
                  >
                    View Entire Shop (All Items) →
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/collections/festive"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              Collections
            </Link>

            <Link
              to="/wholesale"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              Wholesale Sourcing
            </Link>

            <Link
              to="/gallery"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              Gallery & Lookbook
            </Link>

            <Link
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#F8F6F2] hover:text-[#C6A576] transition-colors py-1"
            >
              Contact / Visit Store
            </Link>
          </nav>
        </div>

        {/* Bottom CTA in Mobile Drawer */}
        <div className="space-y-3 pt-6 border-t border-white/10">
          <div className="grid grid-cols-2 gap-3">
            <a
              href={`tel:${BUSINESS_INFO.phoneRaw}`}
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#C6A576] text-[#151515] text-xs font-bold uppercase tracking-wider"
            >
              <Phone className="w-4 h-4" />
              <span>Call Now</span>
            </a>
            <a
              href={BUSINESS_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 px-4 bg-[#25D366] text-white text-xs font-bold uppercase tracking-wider"
            >
              <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>WhatsApp</span>
            </a>
          </div>

          <Link
            to="/cart"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/10 text-white text-xs font-bold uppercase tracking-wider border border-white/15"
          >
            <ShoppingBag className="w-4 h-4 text-[#C6A576]" />
            <span>View Bag ({totalItems})</span>
          </Link>

          <a
            href={BUSINESS_INFO.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-2.5 px-4 bg-white/5 hover:bg-white/10 text-[#C6A576] text-xs font-semibold uppercase tracking-wider border border-[#C6A576]/30"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
            </svg>
            <span>Instagram {BUSINESS_INFO.instagramHandle}</span>
          </a>
        </div>
      </div>

      {/* Global Modals */}
      <SearchModal isOpen={searchModalOpen} onClose={() => setSearchModalOpen(false)} />
      <CartDrawer />
    </>
  );
}
