
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle, Home } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  
  // Generate a random order number
  const orderNumber = Math.floor(10000 + Math.random() * 90000);
  
  // If this page is accessed directly, redirect to home
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (!cartData || JSON.parse(cartData).length === 0) {
      navigate("/");
    }
  }, [navigate]);
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <div className="flex-grow flex items-center justify-center bg-gray-50 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8 max-w-md w-full mx-auto text-center">
          <div className="flex justify-center mb-6">
            <CheckCircle className="h-16 w-16 text-green-500" />
          </div>
          
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-gray-600 mb-6">
            Your order #{orderNumber} has been successfully placed.
          </p>
          
          <div className="bg-gray-50 rounded-lg p-4 mb-6">
            <h3 className="font-medium mb-2">Estimated Delivery Time</h3>
            <p className="text-xl font-bold text-brand-orange">30-45 minutes</p>
          </div>
          
          <p className="text-sm text-gray-500 mb-6">
            We've sent a confirmation email with your order details.
            You'll also receive updates on your order status.
          </p>
          
          <div className="space-y-3">
            <Link to="/">
              <Button className="w-full bg-brand-orange hover:bg-brand-orange/90">
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="#" className="block text-sm text-brand-orange hover:underline">
              Need help with your order?
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default OrderConfirmation;
