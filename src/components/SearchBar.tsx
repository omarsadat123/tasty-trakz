
import { useState } from "react";
import { Search } from "lucide-react";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", query);
    // Implement search functionality
  };
  
  return (
    <form onSubmit={handleSearch} className="relative w-full max-w-md">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for restaurants or foods..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full py-2 pl-10 pr-4 text-sm text-gray-700 bg-gray-100 rounded-full focus:outline-none focus:bg-white focus:ring-2 focus:ring-brand-orange/20 transition-all duration-300"
        />
        <button 
          type="submit" 
          className="absolute inset-y-0 left-0 flex items-center pl-3"
          aria-label="Search"
        >
          <Search className="h-4 w-4 text-gray-400" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
