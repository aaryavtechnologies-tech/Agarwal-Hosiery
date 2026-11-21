import React, { createContext, useContext, useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../data/fashionData';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('agarwal_hosiery_cart');
      return saved ? JSON.parse(saved) : [];
    } catch (e) {
      console.error('Error loading cart from storage', e);
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('agarwal_hosiery_cart', JSON.stringify(cart));
    } catch (e) {
      console.error('Error saving cart to storage', e);
    }
  }, [cart]);

  const addToCart = (product, size, color, quantity = 1) => {
    setCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.size === size &&
          item.color === color
      );

      if (existingItemIndex > -1) {
        const updatedCart = [...prevCart];
        updatedCart[existingItemIndex].quantity += quantity;
        return updatedCart;
      } else {
        const newItem = {
          id: `${product.id}-${size || 'std'}-${color || 'std'}-${Date.now()}`,
          product,
          size: size || (product.sizes && product.sizes[0]) || 'Standard',
          color: color || (product.colors && product.colors[0]?.name) || 'Default',
          quantity
        };
        return [...prevCart, newItem];
      }
    });
    setIsCartOpen(true);
  };

  const updateQuantity = (itemId, newQty) => {
    if (newQty <= 0) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQty } : item
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  const generateWhatsAppOrderUrl = () => {
    if (cart.length === 0) return BUSINESS_INFO.whatsappUrl;

    let text = `*New Order Inquiry - Agarwal Hosiery Silvassa*\n`;
    text += `--------------------------------------\n`;
    cart.forEach((item, index) => {
      text += `${index + 1}. *${item.product.name}*\n`;
      text += `   • Size: ${item.size} | Color: ${item.color}\n`;
      text += `   • Quantity: ${item.quantity}\n`;
    });
    text += `--------------------------------------\n`;
    text += `*Total Items:* ${totalItems}\n\n`;
    text += `Please share current rates, wholesale/retail pricing, and stock availability for order confirmation at Rajshree Tower, Silvassa Ring Road.`;

    return `https://wa.me/917600903749?text=${encodeURIComponent(text)}`;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalItems,
        isCartOpen,
        setIsCartOpen,
        generateWhatsAppOrderUrl
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
