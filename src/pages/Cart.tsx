
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";
import { Minus, Plus, Trash2, ArrowLeft, ShoppingBag, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import PaymentForm from "@/components/PaymentForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Cart = () => {
  const { items, removeFromCart, updateQuantity, clearCart, getCartTotal, getTotalWithFees } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  
  if (items.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center flex-grow">
          <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold mb-2">Your cart is empty</h2>
          <p className="text-gray-500 mb-6">Looks like you haven't added anything to your cart yet.</p>
          <Link to="/#restaurants">
            <Button className="flex items-center gap-2 bg-brand-orange hover:bg-brand-orange/90">
              <ArrowLeft className="w-4 h-4" />
              Browse Restaurants
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex-grow">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <button 
            onClick={clearCart}
            className="text-red-500 text-sm font-medium flex items-center gap-1 hover:text-red-600"
          >
            <Trash2 className="w-4 h-4" />
            Clear Cart
          </button>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-6">
              <h3 className="text-lg font-semibold mb-2">
                From {items[0]?.restaurantName}
              </h3>
              
              {items.map((item) => (
                <div key={item.id} className="border-b border-gray-100 py-4 last:border-b-0">
                  <div className="flex items-center gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500 line-clamp-1">{item.description}</p>
                      <div className="flex justify-between items-center mt-2">
                        <div className="font-semibold">${(item.price * item.quantity).toFixed(2)}</div>
                        
                        <div className="flex items-center gap-3">
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                            aria-label="Decrease quantity"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          
                          <span className="text-sm font-medium w-5 text-center">
                            {item.quantity}
                          </span>
                          
                          <button 
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 hover:bg-gray-50"
                            aria-label="Increase quantity"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                          
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full text-red-500 hover:bg-red-50 ml-2"
                            aria-label="Remove item"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <Link to="/" className="text-sm font-medium text-brand-orange flex items-center gap-1 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Add more items
            </Link>
          </div>
          
          <div className="lg:w-1/3">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-20">
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Subtotal</span>
                  <span>${getCartTotal().toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Delivery Fee</span>
                  <span>${items[0]?.restaurantId ? '3.99' : '0.00'}</span>
                </div>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Service Fee</span>
                  <span>$1.99</span>
                </div>
                
                <div className="border-t border-gray-100 pt-3 mt-3">
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${getTotalWithFees().toFixed(2)}</span>
                  </div>
                </div>
              </div>
              
              {!isCheckingOut ? (
                <Button 
                  onClick={() => setIsCheckingOut(true)}
                  className="w-full bg-brand-orange hover:bg-brand-orange/90"
                >
                  Proceed to Checkout
                </Button>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-600 mb-3">
                    <Lock className="w-4 h-4" />
                    <span>Secure Checkout</span>
                  </div>
                  <PaymentForm totalAmount={getTotalWithFees().toFixed(2)} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Cart;
