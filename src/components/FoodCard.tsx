
import { useState } from "react";
import { Plus } from "lucide-react";
import { MenuItem } from "@/assets/restaurantData";
import { useCart } from "@/context/CartContext";

interface FoodCardProps {
  item: MenuItem;
  restaurantId: number;
  restaurantName: string;
}

const FoodCard = ({ item, restaurantId, restaurantName }: FoodCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { addToCart } = useCart();
  
  const handleAddToCart = () => {
    addToCart(item, restaurantId, restaurantName);
  };
  
  return (
    <div className="relative flex flex-col overflow-hidden bg-white rounded-xl shadow-card group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 ${!imageLoaded ? 'img-loading' : ''}`}>
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow p-4">
        <h3 className="font-semibold text-lg mb-1">{item.name}</h3>
        <p className="text-sm text-gray-500 mb-4 line-clamp-2">{item.description}</p>
        
        {/* Price and add button */}
        <div className="mt-auto flex items-center justify-between">
          <span className="font-bold text-lg">${item.price.toFixed(2)}</span>
          
          <button 
            className="flex items-center justify-center w-10 h-10 rounded-full bg-brand-orange text-white shadow-md transform transition-transform hover:scale-105 hover:shadow-lg focus:outline-none"
            aria-label={`Add ${item.name} to cart`}
            onClick={handleAddToCart}
          >
            <Plus className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
