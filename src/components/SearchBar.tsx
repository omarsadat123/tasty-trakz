
import { useState } from "react";
import { Search, X } from "lucide-react";
import { restaurants } from "@/assets/restaurantData";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [searchResults, setSearchResults] = useState<{
    id: number;
    name: string;
    type: "restaurant" | "food";
    restaurantId?: number;
  }[]>([]);
  
  const navigate = useNavigate();
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim() === "") {
      setShowResults(false);
      setSearchResults([]);
      return;
    }
    
    // Search in restaurants and menu items
    const results: {
      id: number;
      name: string;
      type: "restaurant" | "food";
      restaurantId?: number;
    }[] = [];
    
    // Search restaurants
    restaurants.forEach(restaurant => {
      if (restaurant.name.toLowerCase().includes(query.toLowerCase()) || 
          restaurant.cuisine.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          id: restaurant.id,
          name: restaurant.name,
          type: "restaurant"
        });
      }
      
      // Search menu items
      restaurant.menu.forEach(item => {
        if (item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())) {
          results.push({
            id: item.id,
            name: item.name,
            type: "food",
            restaurantId: restaurant.id
          });
        }
      });
    });
    
    setSearchResults(results);
    setShowResults(true);
  };
  
  const handleResultClick = (result: {
    id: number;
    name: string;
    type: "restaurant" | "food";
    restaurantId?: number;
  }) => {
    setQuery("");
    setShowResults(false);
    
    if (result.type === "restaurant") {
      navigate(`/restaurant/${result.id}`);
    } else if (result.type === "food" && result.restaurantId) {
      navigate(`/restaurant/${result.restaurantId}`);
    }
  };
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim() === "") {
      setShowResults(false);
      setSearchResults([]);
    } else {
      handleSearch(e as unknown as React.FormEvent);
    }
  };
  
  const clearSearch = () => {
    setQuery("");
    setShowResults(false);
    setSearchResults([]);
  };
  
  return (
    <div className="relative w-full max-w-md">
      <form onSubmit={handleSearch} className="relative">
        <input
          type="text"
          placeholder="Search for restaurants or foods..."
          value={query}
          onChange={handleInputChange}
          onFocus={() => query.trim() !== "" && setShowResults(true)}
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 transition-all duration-300"
        />
        <button 
          type="submit" 
          className="absolute inset-y-0 left-0 flex items-center pl-3"
          aria-label="Search"
        >
          <Search className="h-4 w-4 text-gray-400" />
        </button>
        
        {query && (
          <button 
            type="button"
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            aria-label="Clear search"
          >
            <X className="h-4 w-4 text-gray-400" />
          </button>
        )}
      </form>
      
      {/* Search results dropdown */}
      {showResults && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50 max-h-80 overflow-y-auto">
          <div className="p-2">
            {searchResults.map((result) => (
              <button
                key={`${result.type}-${result.id}`}
                className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 flex items-center gap-2"
                onClick={() => handleResultClick(result)}
              >
                <span className="p-1 rounded bg-gray-100 text-xs text-gray-600">
                  {result.type === "restaurant" ? "Restaurant" : "Food"}
                </span>
                <span>{result.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
      
      {showResults && searchResults.length === 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-50">
          <div className="p-4 text-center text-gray-500">
            No results found for "{query}"
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
