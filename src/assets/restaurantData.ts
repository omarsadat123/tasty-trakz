
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  deliveryFee: string;
  minOrder: string;
  featured?: boolean;
  menu: MenuItem[];
}

export const restaurants: Restaurant[] = [
  {
    id: 1,
    name: "Burger Palace",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=2500&auto=format&fit=crop",
    cuisine: "Fast Food",
    rating: 4.7,
    deliveryTime: "15-25 min",
    deliveryFee: "$1.99",
    minOrder: "$10",
    featured: true,
    menu: [
      {
        id: 101,
        name: "Classic Cheeseburger",
        description: "Juicy beef patty with cheddar cheese, lettuce, tomato, and special sauce",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2572&auto=format&fit=crop"
      },
      {
        id: 102,
        name: "Double Bacon Burger",
        description: "Two beef patties with crispy bacon, cheese, and BBQ sauce",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop"
      },
      {
        id: 103,
        name: "Veggie Burger",
        description: "Plant-based patty with fresh vegetables and avocado",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 2,
    name: "Pizza Heaven",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?q=80&w=2670&auto=format&fit=crop",
    cuisine: "Italian",
    rating: 4.5,
    deliveryTime: "20-30 min",
    deliveryFee: "$2.49",
    minOrder: "$15",
    menu: [
      {
        id: 201,
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop"
      },
      {
        id: 202,
        name: "Pepperoni Pizza",
        description: "Tomato sauce, mozzarella, and pepperoni",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2680&auto=format&fit=crop"
      },
      {
        id: 203,
        name: "Vegetarian Pizza",
        description: "Tomato sauce, mozzarella, bell peppers, mushrooms, and olives",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=2002&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 3,
    name: "Sushi World",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2670&auto=format&fit=crop",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "25-35 min",
    deliveryFee: "$3.99",
    minOrder: "$20",
    featured: true,
    menu: [
      {
        id: 301,
        name: "California Roll",
        description: "Crab, avocado, cucumber, and tobiko",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2688&auto=format&fit=crop"
      },
      {
        id: 302,
        name: "Salmon Nigiri (4 pcs)",
        description: "Fresh salmon slices on rice",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=2670&auto=format&fit=crop"
      },
      {
        id: 303,
        name: "Dragon Roll",
        description: "Eel, crab, cucumber topped with avocado",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1583623025817-d180a2fe075e?q=80&w=2662&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 4,
    name: "Golden Dragon",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=2574&auto=format&fit=crop",
    cuisine: "Chinese",
    rating: 4.3,
    deliveryTime: "25-40 min",
    deliveryFee: "$2.99",
    minOrder: "$15",
    menu: [
      {
        id: 401,
        name: "Kung Pao Chicken",
        description: "Spicy stir-fried chicken with peanuts, vegetables, and chili peppers",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=2670&auto=format&fit=crop"
      },
      {
        id: 402,
        name: "Beef with Broccoli",
        description: "Tender beef and broccoli in a savory sauce",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2000&auto=format&fit=crop"
      },
      {
        id: 403,
        name: "Vegetable Fried Rice",
        description: "Fried rice with mixed vegetables and eggs",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1645171409396-f1f93ff6b15e?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 5,
    name: "Fresh Greens",
    image: "https://images.unsplash.com/photo-1547496502-affa22d38842?q=80&w=2577&auto=format&fit=crop",
    cuisine: "Healthy",
    rating: 4.6,
    deliveryTime: "20-30 min",
    deliveryFee: "$1.99",
    minOrder: "$12",
    menu: [
      {
        id: 501,
        name: "Quinoa Bowl",
        description: "Quinoa with roasted vegetables, avocado, and tahini dressing",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop"
      },
      {
        id: 502,
        name: "Greek Salad",
        description: "Fresh cucumber, tomato, olives, feta cheese, and olive oil",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc56c?q=80&w=2000&auto=format&fit=crop"
      },
      {
        id: 503,
        name: "Avocado Toast",
        description: "Whole grain toast with avocado, cherry tomatoes, and microgreens",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=2670&auto=format&fit=crop"
      }
    ]
  },
  {
    id: 6,
    name: "Taco Fiesta",
    image: "https://images.unsplash.com/photo-1534352956036-cd81e27fed73?q=80&w=2584&auto=format&fit=crop",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-35 min",
    deliveryFee: "$2.99",
    minOrder: "$15",
    featured: true,
    menu: [
      {
        id: 601,
        name: "Beef Tacos (3 pcs)",
        description: "Corn tortillas with seasoned beef, lettuce, cheese, and salsa",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=2680&auto=format&fit=crop"
      },
      {
        id: 602,
        name: "Chicken Quesadilla",
        description: "Flour tortilla filled with chicken, cheese, and peppers",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=2000&auto=format&fit=crop"
      },
      {
        id: 603,
        name: "Guacamole & Chips",
        description: "Fresh guacamole with tortilla chips",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=2000&auto=format&fit=crop"
      }
    ]
  }
];
