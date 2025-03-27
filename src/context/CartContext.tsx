
import React, { createContext, useContext, useState, useEffect } from "react";
import { MenuItem } from "@/assets/restaurantData";
import { toast } from "sonner";

export interface CartItem extends MenuItem {
  quantity: number;
  restaurantId: number;
  restaurantName: string;
}

interface CartContextType {
  items: CartItem[];
  addToCart: (item: MenuItem, restaurantId: number, restaurantName: string) => void;
  removeFromCart: (itemId: number) => void;
  updateQuantity: (itemId: number, quantity: number) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on initial render
  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Failed to parse cart from localStorage:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(items));
  }, [items]);

  const addToCart = (item: MenuItem, restaurantId: number, restaurantName: string) => {
    setItems((prevItems) => {
      // Check if we're adding from a different restaurant
      const hasItemsFromOtherRestaurant = prevItems.length > 0 && 
        prevItems[0].restaurantId !== restaurantId;
      
      if (hasItemsFromOtherRestaurant) {
        // Ask user if they want to clear cart and add from new restaurant
        if (window.confirm(
          `Your cart contains items from ${prevItems[0].restaurantName}. Would you like to clear your cart and add items from ${restaurantName} instead?`
        )) {
          const newItem: CartItem = {
            ...item,
            quantity: 1,
            restaurantId,
            restaurantName
          };
          toast.success(`Added ${item.name} to your cart`);
          return [newItem];
        } else {
          return prevItems;
        }
      }

      // Check if item is already in cart
      const existingItemIndex = prevItems.findIndex((i) => i.id === item.id);
      
      if (existingItemIndex !== -1) {
        // Update quantity if item is already in cart
        const updatedItems = [...prevItems];
        updatedItems[existingItemIndex].quantity += 1;
        toast.success(`Added another ${item.name} to your cart`);
        return updatedItems;
      } else {
        // Add new item to cart
        const newItem: CartItem = {
          ...item,
          quantity: 1,
          restaurantId,
          restaurantName
        };
        toast.success(`Added ${item.name} to your cart`);
        return [...prevItems, newItem];
      }
    });
  };

  const removeFromCart = (itemId: number) => {
    setItems((prevItems) => {
      const updatedItems = prevItems.filter((item) => item.id !== itemId);
      toast.info("Item removed from cart");
      return updatedItems;
    });
  };

  const updateQuantity = (itemId: number, quantity: number) => {
    if (quantity < 1) return;
    
    setItems((prevItems) => {
      const updatedItems = prevItems.map((item) => 
        item.id === itemId ? { ...item, quantity } : item
      );
      return updatedItems;
    });
  };

  const clearCart = () => {
    setItems([]);
    toast.info("Cart cleared");
  };

  const getCartTotal = () => {
    return items.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getItemCount = () => {
    return items.reduce((count, item) => count + item.quantity, 0);
  };

  return (
    <CartContext.Provider value={{
      items,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal,
      getItemCount
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
