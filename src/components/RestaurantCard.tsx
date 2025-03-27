
import { useState } from "react";
import { Clock, Star, ArrowUpRight } from "lucide-react";
import { Restaurant } from "@/assets/restaurantData";
import { Link } from "react-router-dom";

interface RestaurantCardProps {
  restaurant: Restaurant;
}

const RestaurantCard = ({ restaurant }: RestaurantCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  
  return (
    <div 
      className="group relative rounded-xl overflow-hidden shadow-card transition-all duration-300 hover:shadow-lg bg-white transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image container */}
      <div className="relative h-48 overflow-hidden">
        <div className={`absolute inset-0 ${!imageLoaded ? 'img-loading' : ''}`}>
          <img
            src={restaurant.image}
            alt={restaurant.name}
            className={`w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
            onLoad={() => setImageLoaded(true)}
            loading="lazy"
          />
        </div>
        
        {/* Featured badge */}
        {restaurant.featured && (
          <div className="absolute top-3 left-3 bg-brand-orange text-white text-xs font-medium px-2 py-1 rounded">
            Featured
          </div>
        )}
        
        {/* Cuisine tag */}
        <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-sm text-white text-xs px-2 py-1 rounded">
          {restaurant.cuisine}
        </div>
      </div>
      
      {/* Content */}
      <div className="p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-bold">{restaurant.name}</h3>
          <div className="flex items-center gap-1 bg-gray-100 px-2 py-0.5 rounded">
            <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-semibold">{restaurant.rating}</span>
          </div>
        </div>
        
        <div className="mt-3 flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="text-sm">
            <span className="text-gray-500">Delivery: </span>
            <span className="font-medium">{restaurant.deliveryFee}</span>
          </div>
        </div>
        
        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <div className="text-sm">
            <span className="text-gray-500">Min. order: </span>
            <span className="font-medium">{restaurant.minOrder}</span>
          </div>
          
          <Link 
            to={`/restaurant/${restaurant.id}`}
            className="flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:underline transition-all"
          >
            View Menu 
            <ArrowUpRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
