
import { useState, useEffect } from "react";
import { restaurants, Restaurant } from "@/assets/restaurantData";
import RestaurantCard from "./RestaurantCard";
import CategoryFilter from "./CategoryFilter";

const RestaurantGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(restaurants);
  const [visibleRestaurants, setVisibleRestaurants] = useState<Restaurant[]>([]);
  
  // Filter restaurants based on selected category
  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredRestaurants(restaurants);
    } else {
      setFilteredRestaurants(
        restaurants.filter(restaurant => restaurant.cuisine === selectedCategory)
      );
    }
  }, [selectedCategory]);
  
  // Animation effect - gradually reveal restaurants
  useEffect(() => {
    setVisibleRestaurants([]);
    
    const timer = setTimeout(() => {
      setVisibleRestaurants(filteredRestaurants);
    }, 100);
    
    return () => clearTimeout(timer);
  }, [filteredRestaurants]);
  
  return (
    <section id="restaurants" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-6">Explore Restaurants</h2>
          <CategoryFilter onSelectCategory={setSelectedCategory} />
        </div>
        
        {/* Conditional rendering based on filtered results */}
        {filteredRestaurants.length === 0 ? (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium mb-2">No restaurants found</h3>
            <p className="text-gray-600">Try selecting a different category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleRestaurants.map((restaurant, index) => (
              <div
                key={restaurant.id}
                className="animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <RestaurantCard restaurant={restaurant} />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default RestaurantGrid;
