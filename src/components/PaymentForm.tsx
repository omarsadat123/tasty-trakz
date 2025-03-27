
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { CreditCard, Check, Smartphone } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";

interface PaymentFormProps {
  totalAmount: string;
}

const PaymentForm = ({ totalAmount }: PaymentFormProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "bkash" | "nagad">("card");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { clearCart } = useCart();
  const navigate = useNavigate();

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];

    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }

    if (parts.length) {
      return parts.join(" ");
    } else {
      return value;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    
    if (v.length >= 3) {
      return `${v.substring(0, 2)}/${v.substring(2, 4)}`;
    }
    
    return value;
  };

  const formatMobileNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    if (v.length > 11) return v.substring(0, 11);
    return v;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (paymentMethod === "card") {
      if (cardNumber.length < 16 || !cardName || expiryDate.length < 5 || cvv.length < 3) {
        toast.error("Please fill in all card payment fields correctly");
        return;
      }
    } else if (paymentMethod === "bkash" || paymentMethod === "nagad") {
      if (mobileNumber.length < 11 || !transactionId) {
        toast.error(`Please provide a valid mobile number and ${paymentMethod} transaction ID`);
        return;
      }
    }
    
    setIsProcessing(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      clearCart();
      
      // Show success toast
      toast.success(`Payment successful via ${paymentMethod === "card" ? "card" : paymentMethod.toUpperCase()}! Your order has been placed.`);
      
      // Redirect to order confirmation or home page
      navigate("/order-confirmation");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Payment Method Selector */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Payment Method
        </label>
        <div className="grid grid-cols-3 gap-2">
          <div
            className={`border rounded-md p-3 flex flex-col items-center cursor-pointer transition-colors ${
              paymentMethod === "card" ? "border-brand-orange bg-orange-50" : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setPaymentMethod("card")}
          >
            <CreditCard className={`h-6 w-6 mb-1 ${paymentMethod === "card" ? "text-brand-orange" : "text-gray-400"}`} />
            <span className="text-sm font-medium">Card</span>
          </div>
          <div
            className={`border rounded-md p-3 flex flex-col items-center cursor-pointer transition-colors ${
              paymentMethod === "bkash" ? "border-brand-orange bg-orange-50" : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setPaymentMethod("bkash")}
          >
            <div className="h-6 w-6 mb-1 flex items-center justify-center">
              <span className="text-pink-500 font-bold text-sm">bKash</span>
            </div>
            <span className="text-sm font-medium">bKash</span>
          </div>
          <div
            className={`border rounded-md p-3 flex flex-col items-center cursor-pointer transition-colors ${
              paymentMethod === "nagad" ? "border-brand-orange bg-orange-50" : "border-gray-200 hover:bg-gray-50"
            }`}
            onClick={() => setPaymentMethod("nagad")}
          >
            <div className="h-6 w-6 mb-1 flex items-center justify-center">
              <span className="text-orange-500 font-bold text-sm">Nagad</span>
            </div>
            <span className="text-sm font-medium">Nagad</span>
          </div>
        </div>
      </div>

      {/* Card Payment Form */}
      {paymentMethod === "card" && (
        <>
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Card Number
            </label>
            <div className="relative">
              <input
                id="cardNumber"
                type="text"
                value={cardNumber}
                onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
                required
              />
              <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
          <div>
            <label htmlFor="cardName" className="block text-sm font-medium text-gray-700 mb-1">
              Cardholder Name
            </label>
            <input
              id="cardName"
              type="text"
              value={cardName}
              onChange={(e) => setCardName(e.target.value)}
              placeholder="John Smith"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
              required
            />
          </div>
          
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-1">
                Expiry Date
              </label>
              <input
                id="expiryDate"
                type="text"
                value={expiryDate}
                onChange={(e) => setExpiryDate(formatExpiryDate(e.target.value))}
                placeholder="MM/YY"
                maxLength={5}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
                required
              />
            </div>
            
            <div className="w-1/2">
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                CVV
              </label>
              <input
                id="cvv"
                type="text"
                value={cvv}
                onChange={(e) => {
                  const v = e.target.value.replace(/\D/g, '');
                  setCvv(v);
                }}
                placeholder="123"
                maxLength={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
                required
              />
            </div>
          </div>
        </>
      )}

      {/* Mobile Payment Form (bKash or Nagad) */}
      {(paymentMethod === "bkash" || paymentMethod === "nagad") && (
        <>
          <div className="bg-gray-50 p-4 rounded-md mb-4">
            <h3 className="font-medium text-gray-700 mb-2">{paymentMethod === "bkash" ? "bKash" : "Nagad"} Payment Instructions:</h3>
            <ol className="list-decimal ml-5 text-sm text-gray-600 space-y-1">
              <li>Open your {paymentMethod === "bkash" ? "bKash" : "Nagad"} app</li>
              <li>Select "Send Money" or "Payment"</li>
              <li>Enter merchant number: {paymentMethod === "bkash" ? "01712345678" : "01798765432"}</li>
              <li>Enter amount: ${totalAmount}</li>
              <li>Add reference: "Food Order"</li>
              <li>Complete the payment and note the Transaction ID</li>
              <li>Enter the Transaction ID below</li>
            </ol>
          </div>

          <div>
            <label htmlFor="mobileNumber" className="block text-sm font-medium text-gray-700 mb-1">
              Your {paymentMethod === "bkash" ? "bKash" : "Nagad"} Mobile Number
            </label>
            <div className="relative">
              <input
                id="mobileNumber"
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(formatMobileNumber(e.target.value))}
                placeholder="01712345678"
                maxLength={11}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
                required
              />
              <Smartphone className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>
          
          <div>
            <label htmlFor="transactionId" className="block text-sm font-medium text-gray-700 mb-1">
              Transaction ID
            </label>
            <input
              id="transactionId"
              type="text"
              value={transactionId}
              onChange={(e) => setTransactionId(e.target.value)}
              placeholder={`${paymentMethod === "bkash" ? "TRX123456789" : "NGD987654321"}`}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-orange/20 focus:border-brand-orange"
              required
            />
          </div>
        </>
      )}
      
      <div className="pt-2">
        <Button 
          type="submit" 
          className="w-full bg-brand-orange hover:bg-brand-orange/90 flex items-center justify-center gap-2"
          disabled={isProcessing}
        >
          {isProcessing ? (
            <>
              <div className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Processing...
            </>
          ) : (
            <>
              Pay ${totalAmount} via {paymentMethod === "card" ? "Card" : paymentMethod === "bkash" ? "bKash" : "Nagad"}
            </>
          )}
        </Button>
      </div>
      
      <div className="text-xs text-gray-500 text-center">
        Your payment information is secure and encrypted
      </div>
    </form>
  );
};

export default PaymentForm;
