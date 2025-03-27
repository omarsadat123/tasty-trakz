
export interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category?: string;
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
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=2572&auto=format&fit=crop",
        category: "Burgers"
      },
      {
        id: 102,
        name: "Double Bacon Burger",
        description: "Two beef patties with crispy bacon, cheese, and BBQ sauce",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=1968&auto=format&fit=crop",
        category: "Burgers"
      },
      {
        id: 103,
        name: "Veggie Burger",
        description: "Plant-based patty with fresh vegetables and avocado",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?q=80&w=2080&auto=format&fit=crop",
        category: "Burgers"
      },
      {
        id: 104,
        name: "French Fries",
        description: "Crispy golden fries served with ketchup",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1576107232684-1279f390859f?q=80&w=2080&auto=format&fit=crop",
        category: "Sides"
      },
      {
        id: 105,
        name: "Onion Rings",
        description: "Crispy battered onion rings served with dipping sauce",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=2080&auto=format&fit=crop",
        category: "Sides"
      },
      {
        id: 106,
        name: "Chocolate Milkshake",
        description: "Rich and creamy chocolate milkshake topped with whipped cream",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1600718374662-0483d2b9da44?q=80&w=2080&auto=format&fit=crop",
        category: "Drinks"
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
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=2669&auto=format&fit=crop",
        category: "Pizzas"
      },
      {
        id: 202,
        name: "Pepperoni Pizza",
        description: "Tomato sauce, mozzarella, and pepperoni",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?q=80&w=2680&auto=format&fit=crop",
        category: "Pizzas"
      },
      {
        id: 203,
        name: "Vegetarian Pizza",
        description: "Tomato sauce, mozzarella, bell peppers, mushrooms, and olives",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1552539618-7eec9b4d1796?q=80&w=2002&auto=format&fit=crop",
        category: "Pizzas"
      },
      {
        id: 204,
        name: "Garlic Bread",
        description: "Freshly baked bread with garlic butter and herbs",
        price: 4.99,
        image: "https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?q=80&w=2080&auto=format&fit=crop",
        category: "Sides"
      },
      {
        id: 205,
        name: "Caesar Salad",
        description: "Crisp romaine lettuce with Caesar dressing, croutons, and parmesan",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2080&auto=format&fit=crop",
        category: "Salads"
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
        image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2688&auto=format&fit=crop",
        category: "Rolls"
      },
      {
        id: 302,
        name: "Salmon Nigiri (4 pcs)",
        description: "Fresh salmon slices on rice",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1617196035154-1e7e6e28b0db?q=80&w=2670&auto=format&fit=crop",
        category: "Nigiri"
      },
      {
        id: 303,
        name: "Dragon Roll",
        description: "Eel, crab, cucumber topped with avocado",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1583623025817-d180a2fe075e?q=80&w=2662&auto=format&fit=crop",
        category: "Rolls"
      },
      {
        id: 304,
        name: "Tuna Sashimi",
        description: "Fresh slices of tuna served with wasabi and soy sauce",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1579871766285-86c30f75ff0c?q=80&w=2080&auto=format&fit=crop",
        category: "Sashimi"
      },
      {
        id: 305,
        name: "Miso Soup",
        description: "Traditional Japanese soup with tofu, seaweed, and green onions",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1581726690015-c5fe5a4b8d64?q=80&w=2080&auto=format&fit=crop",
        category: "Sides"
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
        image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=2670&auto=format&fit=crop",
        category: "Main Dishes"
      },
      {
        id: 402,
        name: "Beef with Broccoli",
        description: "Tender beef and broccoli in a savory sauce",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?q=80&w=2000&auto=format&fit=crop",
        category: "Main Dishes"
      },
      {
        id: 403,
        name: "Vegetable Fried Rice",
        description: "Fried rice with mixed vegetables and eggs",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1645171409396-f1f93ff6b15e?q=80&w=2000&auto=format&fit=crop",
        category: "Rice & Noodles"
      },
      {
        id: 404,
        name: "Shrimp Lo Mein",
        description: "Stir-fried noodles with shrimp and vegetables",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=2080&auto=format&fit=crop",
        category: "Rice & Noodles"
      },
      {
        id: 405,
        name: "Spring Rolls (4 pcs)",
        description: "Crispy rolls filled with vegetables and served with sweet chili sauce",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1606575564234-cdb9a2a01d11?q=80&w=2080&auto=format&fit=crop",
        category: "Appetizers"
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
        image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=2080&auto=format&fit=crop",
        category: "Bowls"
      },
      {
        id: 502,
        name: "Greek Salad",
        description: "Fresh cucumber, tomato, olives, feta cheese, and olive oil",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1640719028782-8230f1bdc56c?q=80&w=2000&auto=format&fit=crop",
        category: "Salads"
      },
      {
        id: 503,
        name: "Avocado Toast",
        description: "Whole grain toast with avocado, cherry tomatoes, and microgreens",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?q=80&w=2670&auto=format&fit=crop",
        category: "Toasts"
      },
      {
        id: 504,
        name: "Berry Smoothie",
        description: "Blend of mixed berries, banana, and almond milk",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7d3be1d?q=80&w=2080&auto=format&fit=crop",
        category: "Drinks"
      },
      {
        id: 505,
        name: "Hummus Plate",
        description: "Homemade hummus with vegetables and whole grain crackers",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1577906096429-f73c2c312435?q=80&w=2080&auto=format&fit=crop",
        category: "Appetizers"
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
        image: "https://images.unsplash.com/photo-1613514785940-daed07799d9b?q=80&w=2680&auto=format&fit=crop",
        category: "Tacos"
      },
      {
        id: 602,
        name: "Chicken Quesadilla",
        description: "Flour tortilla filled with chicken, cheese, and peppers",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1618040996337-56904b7850b9?q=80&w=2000&auto=format&fit=crop",
        category: "Quesadillas"
      },
      {
        id: 603,
        name: "Guacamole & Chips",
        description: "Fresh guacamole with tortilla chips",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1600335895229-6e75511892c8?q=80&w=2000&auto=format&fit=crop",
        category: "Appetizers"
      },
      {
        id: 604,
        name: "Veggie Burrito",
        description: "Flour tortilla filled with rice, beans, vegetables, and cheese",
        price: 11.99,
        image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f?q=80&w=2080&auto=format&fit=crop",
        category: "Burritos"
      },
      {
        id: 605,
        name: "Churros",
        description: "Fried dough pastry with cinnamon sugar and chocolate dipping sauce",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1624371414821-05e137abdec1?q=80&w=2080&auto=format&fit=crop",
        category: "Desserts"
      }
    ]
  },
  {
    id: 7,
    name: "Pasta Paradise",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=2074&auto=format&fit=crop",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-40 min",
    deliveryFee: "$2.99",
    minOrder: "$15",
    menu: [
      {
        id: 701,
        name: "Spaghetti Bolognese",
        description: "Classic spaghetti with rich meat sauce and parmesan",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1622973536968-3ead9e780960?q=80&w=2080&auto=format&fit=crop",
        category: "Pasta"
      },
      {
        id: 702,
        name: "Fettuccine Alfredo",
        description: "Fettuccine pasta in creamy parmesan sauce",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882c?q=80&w=2080&auto=format&fit=crop",
        category: "Pasta"
      },
      {
        id: 703,
        name: "Lasagna",
        description: "Layers of pasta, rich meat sauce, and cheese",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?q=80&w=2080&auto=format&fit=crop",
        category: "Pasta"
      },
      {
        id: 704,
        name: "Tiramisu",
        description: "Classic Italian dessert with espresso, mascarpone, and cocoa",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=2080&auto=format&fit=crop",
        category: "Desserts"
      }
    ]
  },
  {
    id: 8,
    name: "Indian Spice",
    image: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?q=80&w=2042&auto=format&fit=crop",
    cuisine: "Indian",
    rating: 4.5,
    deliveryTime: "30-45 min",
    deliveryFee: "$3.49",
    minOrder: "$18",
    menu: [
      {
        id: 801,
        name: "Butter Chicken",
        description: "Tender chicken in a rich tomato and butter sauce",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=2080&auto=format&fit=crop",
        category: "Curries"
      },
      {
        id: 802,
        name: "Vegetable Biryani",
        description: "Fragrant basmati rice with mixed vegetables and spices",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=2080&auto=format&fit=crop",
        category: "Rice"
      },
      {
        id: 803,
        name: "Garlic Naan",
        description: "Soft flatbread with garlic and butter",
        price: 3.99,
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?q=80&w=2080&auto=format&fit=crop",
        category: "Breads"
      },
      {
        id: 804,
        name: "Samosas (2 pcs)",
        description: "Crispy pastry filled with spiced potatoes and peas",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1601050690117-94f5f7a16db3?q=80&w=2080&auto=format&fit=crop",
        category: "Appetizers"
      }
    ]
  }
];
