import { useState, useEffect } from "react";

export interface CartItem {
  id: string;
  name: string;
  price: string;
  img: string;
  quantity: number;
}

const STORAGE_KEY = "technova_cart";

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch (err) {
        console.error("Error loading cart:", err);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isLoaded]);

  const addToCart = (item: Omit<CartItem, "quantity">) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((ci) => ci.id === item.id);

      if (existingItem) {
        const newQuantity = existingItem.quantity + 1;

        // If quantity reaches 10, remove the item
        if (newQuantity >= 10) {
          return prevCart.filter((ci) => ci.id !== item.id);
        }

        return prevCart.map((ci) =>
          ci.id === item.id ? { ...ci, quantity: newQuantity } : ci
        );
      }

      return [...prevCart, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(id);
      return;
    }

    if (quantity >= 10) {
      removeFromCart(id);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return {
    cart,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartCount,
    isLoaded,
  };
}
