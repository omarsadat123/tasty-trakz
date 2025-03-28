
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

interface CartIconProps {
  className?: string;
  showCount?: boolean;
}

const CartIcon = ({ className = "", showCount = true }: CartIconProps) => {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();
  
  return (
    <Link 
      to="/cart" 
      className={`relative ${className}`}
      aria-label="View cart"
    >
      <ShoppingCart className="h-5 w-5" />
      {showCount && itemCount > 0 && (
        <Badge 
          className="absolute -top-1 -right-1 flex items-center justify-center h-5 w-5 p-0 bg-brand-orange text-white" 
          variant="destructive"
        >
          {itemCount}
        </Badge>
      )}
    </Link>
  );
};

export default CartIcon;
