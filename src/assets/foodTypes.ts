
export interface FoodType {
  id: number;
  name: string;
  icon: string;
}

export const foodTypes: FoodType[] = [
  { id: 1, name: "All", icon: "🍽️" },
  { id: 2, name: "Fast Food", icon: "🍔" },
  { id: 3, name: "Pizza", icon: "🍕" },
  { id: 4, name: "Burger", icon: "🍔" },
  { id: 5, name: "Asian", icon: "🍜" },
  { id: 6, name: "Dessert", icon: "🍰" },
  { id: 7, name: "Healthy", icon: "🥗" },
  { id: 8, name: "Drinks", icon: "🥤" },
  { id: 9, name: "Breakfast", icon: "🍳" },
];
