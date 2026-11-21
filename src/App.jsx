import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CartPage from './pages/CartPage';
import CollectionPage from './pages/CollectionPage';
import WholesalePage from './pages/WholesalePage';
import GalleryPage from './pages/GalleryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll restoration component for seamless route navigation
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-[#F8F6F2] text-[#151515] relative selection:bg-[#C6A576] selection:text-[#151515]">
          {/* Global Sticky Multi-Page Navigation Bar */}
          <Navbar />

          {/* Main Content Viewport */}
          <main className="flex-grow">
            <Routes>
              {/* 1. Home */}
              <Route path="/" element={<HomePage />} />

              {/* 2. Main Shop Page with Pill Filters & Side Panel */}
              <Route path="/shop" element={<ShopPage />} />

              {/* 3-6. Curated Collection Pages */}
              <Route path="/collections/mens" element={<CollectionPage />} />
              <Route path="/collections/men" element={<CollectionPage />} />
              <Route path="/collections/womens" element={<CollectionPage />} />
              <Route path="/collections/women" element={<CollectionPage />} />
              <Route path="/collections/festive" element={<CollectionPage />} />
              <Route path="/collections/hosiery" element={<CollectionPage />} />
              <Route path="/collections/:category" element={<CollectionPage />} />

              {/* 7. Wholesale & B2B Enquiries */}
              <Route path="/wholesale" element={<WholesalePage />} />

              {/* 8. Gallery / Lookbook Showcase */}
              <Route path="/gallery" element={<GalleryPage />} />

              {/* 9. About Us */}
              <Route path="/about" element={<AboutPage />} />

              {/* 10. Contact / Visit Store */}
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/visit-us" element={<ContactPage />} />

              {/* 11. Individual Product Details */}
              <Route path="/product/:slug" element={<ProductDetailsPage />} />

              {/* 12. Shopping Cart & Direct WhatsApp Enquiry */}
              <Route path="/cart" element={<CartPage />} />

              {/* Fallback to Home */}
              <Route path="*" element={<HomePage />} />
            </Routes>
          </main>

          {/* Global Premium Footer */}
          <Footer />

          {/* Global Floating WhatsApp Direct Chat Button */}
          <FloatingWhatsAppButton />
        </div>
      </Router>
    </CartProvider>
  );
}
