
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { foodTypes } from "@/assets/foodTypes";
import { Restaurant, restaurants } from "@/assets/restaurantData";
import { Search } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFoodType, setSelectedFoodType] = useState("All");
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);

  useEffect(() => {
    // Initialize restaurants from imported data
    setFilteredRestaurants(restaurants);
  }, []);

  useEffect(() => {
    // Filter restaurants based on search term and selected food type
    let results = restaurants;

    if (searchTerm) {
      results = results.filter((restaurant) =>
        restaurant.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedFoodType !== "All") {
      results = results.filter((restaurant) =>
        restaurant.cuisine.includes(selectedFoodType)
      );
    }

    setFilteredRestaurants(results);
  }, [searchTerm, selectedFoodType]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const handleFoodTypeClick = (foodType: string) => {
    setSelectedFoodType(foodType);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Header */}
      <header className="bg-white py-4 shadow-md mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="text-2xl font-bold text-brand-orange">
              TastyTrakz
            </div>

            {/* Search Bar */}
            <div className="w-full sm:w-auto mt-2 sm:mt-0">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search for restaurants..."
                  className="w-full sm:w-64 md:w-80 lg:w-96 rounded-full pl-12 pr-4 py-2 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:border-transparent"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-50 py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Food Types */}
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-3">Browse by Food Type</h2>
            <div className="flex overflow-x-auto space-x-4">
              {foodTypes.map((type) => (
                <button
                  key={type.id}
                  className={`flex items-center justify-center px-4 py-2 rounded-full text-sm font-medium ${
                    selectedFoodType === type.name
                      ? "bg-brand-orange text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  } shadow-sm transition-colors`}
                  onClick={() => handleFoodTypeClick(type.name)}
                >
                  <span className="mr-2">{type.icon}</span>
                  {type.name}
                </button>
              ))}
            </div>
          </div>

          {/* Restaurant Cards */}
          <div id="restaurants">
            <h2 className="text-xl font-semibold mb-3">Popular Restaurants</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredRestaurants.map((restaurant) => (
                <div 
                  key={restaurant.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer transition-transform hover:scale-105"
                  onClick={() => navigate(`/restaurant/${restaurant.id}`)}
                >
                  <div className="h-48 relative">
                    <img 
                      src={restaurant.image} 
                      alt={restaurant.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-white px-2 py-1 rounded-full text-xs font-semibold">
                      ⭐ {restaurant.rating}
                    </div>
                    {restaurant.featured && (
                      <div className="absolute top-2 left-2 bg-brand-orange px-2 py-1 rounded-full text-xs font-semibold text-white">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-1">{restaurant.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{restaurant.cuisine}</p>
                    <div className="flex justify-between text-xs text-gray-500">
                      <span>🕒 {restaurant.deliveryTime}</span>
                      <span>💰 {restaurant.deliveryFee}</span>
                      <span>🛒 Min: {restaurant.minOrder}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
