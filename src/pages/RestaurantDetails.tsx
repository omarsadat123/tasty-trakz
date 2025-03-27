
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { restaurants, Restaurant } from "@/assets/restaurantData";
import { Clock, Star, MapPin, ArrowLeft } from "lucide-react";
import FoodCard from "@/components/FoodCard";

const RestaurantDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [restaurant, setRestaurant] = useState<Restaurant | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [categories, setCategories] = useState<string[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundRestaurant = restaurants.find(r => r.id === parseInt(id));
      if (foundRestaurant) {
        setRestaurant(foundRestaurant);
        
        // Extract unique categories from menu items
        const menuCategories = [...new Set(foundRestaurant.menu.map(item => item.category || "Main Menu"))];
        setCategories(menuCategories);
        setActiveCategory(menuCategories[0]);
      }
    }
  }, [id]);
  
  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl font-bold mb-2">Restaurant not found</h2>
        <p className="text-gray-600 mb-6">The restaurant you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="text-brand-orange hover:underline">Go back to home page</Link>
      </div>
    );
  }
  
  return (
    <div className="pb-16">
      {/* Restaurant Header */}
      <div className="relative h-64 md:h-80 lg:h-96 w-full overflow-hidden">
        <img 
          src={restaurant.image} 
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/10"></div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <Link to="/" className="inline-flex items-center gap-1 text-white/90 hover:text-white mb-4">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to restaurants</span>
          </Link>
          <h1 className="text-3xl font-bold">{restaurant.name}</h1>
          <div className="flex flex-wrap items-center gap-4 mt-2">
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>{restaurant.rating}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{restaurant.deliveryTime}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Delivery: {restaurant.deliveryFee}</span>
            </div>
            <div className="px-2 py-1 bg-white/20 backdrop-blur-sm rounded text-sm">
              {restaurant.cuisine}
            </div>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Category Navigation */}
          <div className="md:w-1/4">
            <div className="sticky top-20 bg-white rounded-xl shadow-sm p-4">
              <h3 className="text-lg font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category}>
                    <button
                      onClick={() => setActiveCategory(category)}
                      className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                        activeCategory === category 
                          ? "bg-brand-orange/10 text-brand-orange font-medium"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Menu Items */}
          <div className="md:w-3/4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {activeCategory || "Menu"}
              </h2>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {restaurant.menu
                  .filter(item => 
                    !activeCategory || (item.category || "Main Menu") === activeCategory
                  )
                  .map((item) => (
                    <FoodCard 
                      key={item.id} 
                      item={item} 
                      restaurantId={restaurant.id}
                      restaurantName={restaurant.name}
                    />
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetails;
