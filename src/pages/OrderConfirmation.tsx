
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Home, Clock } from "lucide-react";

const OrderConfirmation = () => {
  const [orderNumber, setOrderNumber] = useState("");
  const [estimatedDelivery, setEstimatedDelivery] = useState("");
  
  useEffect(() => {
    // Generate random order number
    const randomOrderNumber = `ORD-${Math.floor(Math.random() * 1000000).toString().padStart(6, '0')}`;
    setOrderNumber(randomOrderNumber);
    
    // Generate estimated delivery time (30-45 minutes from now)
    const now = new Date();
    const deliveryTime = new Date(now.getTime() + (30 + Math.floor(Math.random() * 15)) * 60000);
    const hours = deliveryTime.getHours();
    const minutes = deliveryTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes.toString().padStart(2, '0');
    
    setEstimatedDelivery(`${formattedHours}:${formattedMinutes} ${ampm}`);
  }, []);
  
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center">
      <div className="bg-green-100 rounded-full p-4 mb-6">
        <Check className="h-12 w-12 text-green-600" />
      </div>
      
      <h1 className="text-3xl font-bold mb-3 text-center">Your Order is Confirmed!</h1>
      <p className="text-lg text-gray-600 mb-6 text-center">Thank you for your order. We're preparing your delicious food now.</p>
      
      <div className="bg-white rounded-xl shadow-sm p-6 max-w-md w-full mb-8">
        <div className="mb-4 pb-4 border-b border-gray-100">
          <p className="text-sm text-gray-500 mb-1">Order Number</p>
          <p className="font-semibold">{orderNumber}</p>
        </div>
        
        <div className="mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-2 mb-1">
            <Clock className="w-4 h-4 text-brand-orange" />
            <p className="text-sm text-gray-500">Estimated Delivery Time</p>
          </div>
          <p className="font-semibold">{estimatedDelivery}</p>
        </div>
        
        <div>
          <p className="text-sm text-gray-500 mb-1">Delivery Address</p>
          <p className="font-semibold">123 Main St, Apt 4B</p>
          <p className="text-sm text-gray-600">New York, NY 10001</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-500 mb-6 text-center">
        You will receive an email confirmation at your registered email address.
      </p>
      
      <Link to="/">
        <Button className="bg-brand-orange hover:bg-brand-orange/90 flex items-center gap-2">
          <Home className="w-4 h-4" />
          Back to Home
        </Button>
      </Link>
    </div>
  );
};

export default OrderConfirmation;
