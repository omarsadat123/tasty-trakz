
import { useState } from "react";
import { foodTypes } from "@/assets/foodTypes";

interface CategoryFilterProps {
  onSelectCategory: (category: string) => void;
}

const CategoryFilter = ({ onSelectCategory }: CategoryFilterProps) => {
  const [activeCategory, setActiveCategory] = useState("All");
  
  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    onSelectCategory(category);
  };
  
  return (
    <div className="w-full overflow-x-auto pb-4 hide-scrollbar">
      <div className="flex space-x-3">
        {foodTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => handleCategoryClick(type.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-all duration-300 ${
              activeCategory === type.name
                ? "bg-brand-orange text-white shadow-md"
                : "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
            }`}
          >
            <span>{type.icon}</span>
            <span>{type.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CategoryFilter;
