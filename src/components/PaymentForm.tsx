
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useCart } from "@/context/CartContext";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Lock, CreditCard, ArrowRight } from "lucide-react";

interface PaymentFormProps {
  totalAmount: string;
}

const PaymentForm: React.FC<PaymentFormProps> = ({ totalAmount }) => {
  const [paymentMethod, setPaymentMethod] = useState<string>("card");
  const [mobileNumber, setMobileNumber] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [expiry, setExpiry] = useState<string>("");
  const [cvc, setCvc] = useState<string>("");
  const [name, setName] = useState<string>("");
  
  const navigate = useNavigate();
  const { toast } = useToast();
  const { clearCart } = useCart();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      clearCart();
      navigate("/order-confirmation");
      
      toast({
        title: "Payment Successful",
        description: "Your order has been placed successfully!",
      });
    }, 2000);
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Payment Method</h3>
          <div className="flex items-center gap-1">
            <Lock className="h-3 w-3" />
            <span className="text-xs text-gray-500">Secure Payment</span>
          </div>
        </div>
        
        <RadioGroup 
          value={paymentMethod} 
          onValueChange={setPaymentMethod}
          className="grid grid-cols-2 gap-2"
        >
          <div>
            <RadioGroupItem 
              value="card" 
              id="card" 
              className="peer sr-only" 
            />
            <Label
              htmlFor="card"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-orange [&:has([data-state=checked])]:border-brand-orange"
            >
              <CreditCard className="mb-2 h-5 w-5" />
              Card
            </Label>
          </div>
          
          <div>
            <RadioGroupItem 
              value="bkash" 
              id="bkash" 
              className="peer sr-only" 
            />
            <Label
              htmlFor="bkash"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-orange [&:has([data-state=checked])]:border-brand-orange"
            >
              <img src="https://i.ibb.co/XkpZVct/bkash-logo.png" alt="bKash" className="mb-2 h-5" />
              bKash
            </Label>
          </div>
          
          <div>
            <RadioGroupItem 
              value="nagad" 
              id="nagad" 
              className="peer sr-only" 
            />
            <Label
              htmlFor="nagad"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-orange [&:has([data-state=checked])]:border-brand-orange"
            >
              <img src="https://i.ibb.co/r5JQvqD/nagad-logo.png" alt="Nagad" className="mb-2 h-5" />
              Nagad
            </Label>
          </div>
          
          <div>
            <RadioGroupItem 
              value="cod" 
              id="cod" 
              className="peer sr-only" 
            />
            <Label
              htmlFor="cod"
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-brand-orange [&:has([data-state=checked])]:border-brand-orange"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-2 h-5 w-5">
                <rect width="20" height="16" x="2" y="4" rx="2" />
                <circle cx="12" cy="12" r="4" />
              </svg>
              Cash
            </Label>
          </div>
        </RadioGroup>
      </div>
      
      {paymentMethod === "card" && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="name">Cardholder Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="card-number">Card Number</Label>
            <Input
              id="card-number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, '').slice(0, 16))}
              placeholder="4242 4242 4242 4242"
              required
            />
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Label htmlFor="expiry">Expiry Date</Label>
              <Input
                id="expiry"
                value={expiry}
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, '');
                  if (value.length <= 4) {
                    let formattedValue = value;
                    if (value.length > 2) {
                      formattedValue = value.slice(0, 2) + '/' + value.slice(2);
                    }
                    setExpiry(formattedValue);
                  }
                }}
                placeholder="MM/YY"
                required
              />
            </div>
            
            <div>
              <Label htmlFor="cvc">CVC</Label>
              <Input
                id="cvc"
                value={cvc}
                onChange={(e) => setCvc(e.target.value.replace(/\D/g, '').slice(0, 3))}
                placeholder="123"
                required
              />
            </div>
          </div>
        </div>
      )}
      
      {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
        <div className="space-y-4">
          <div>
            <Label htmlFor="mobile-number">Mobile Number</Label>
            <Input
              id="mobile-number"
              value={mobileNumber}
              onChange={(e) => setMobileNumber(e.target.value.replace(/\D/g, '').slice(0, 11))}
              placeholder="01XXXXXXXXX"
              required
            />
          </div>
          <div className="rounded-md bg-amber-50 p-3 text-sm text-amber-800">
            <p>Once you complete your order, you will receive a payment request on your {paymentMethod === "bkash" ? "bKash" : "Nagad"} app. Please complete the payment to confirm your order.</p>
          </div>
        </div>
      )}
      
      <Button
        type="submit"
        className="w-full bg-brand-orange hover:bg-brand-orange/90"
        disabled={isProcessing}
      >
        {isProcessing ? (
          <div className="flex items-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Processing...
          </div>
        ) : (
          <div className="flex items-center">
            Complete Order
            <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        )}
      </Button>
      
      <p className="text-xs text-gray-500 text-center">
        By completing this order, you agree to our{" "}
        <a href="#" className="text-brand-orange hover:underline">
          Terms of Service
        </a>{" "}
        and{" "}
        <a href="#" className="text-brand-orange hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </form>
  );
};

export default PaymentForm;
