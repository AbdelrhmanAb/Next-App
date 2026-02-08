// app/api/menu/route.ts
import { NextResponse } from "next/server";

export interface Item {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  image: string;
  available: boolean;
}

const menuItems: Item[] = [
  {
    id: 1,
    name: "Cheeseburger",
    category: "Fast Food",
    description: "Juicy beef patty with melted cheese",
    price: 5.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 2,
    name: "Chicken Sandwich",
    category: "Fast Food",
    description: "Crispy chicken breast with lettuce",
    price: 6.49,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 3,
    name: "French Fries",
    category: "Fast Food",
    description: "Golden crispy potato fries",
    price: 2.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 4,
    name: "Pepperoni Pizza Slice",
    category: "Fast Food",
    description: "Classic slice with pepperoni and cheese",
    price: 3.49,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 5,
    name: "Hot Dog",
    category: "Fast Food",
    description: "Grilled sausage in a bun with toppings",
    price: 4.25,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },

  // Desserts 🍰
  {
    id: 6,
    name: "Chocolate Cake",
    category: "Desserts",
    description: "Rich and moist chocolate cake",
    price: 4.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 7,
    name: "Ice Cream Sundae",
    category: "Desserts",
    description: "Vanilla ice cream with chocolate syrup",
    price: 3.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 8,
    name: "Apple Pie",
    category: "Desserts",
    description: "Classic pie with cinnamon apples",
    price: 3.75,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 9,
    name: "Donuts",
    category: "Desserts",
    description: "Assorted glazed donuts",
    price: 2.5,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 10,
    name: "Cheesecake",
    category: "Desserts",
    description: "Creamy cheesecake with strawberry topping",
    price: 4.5,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },

  // Drinks 🥤
  {
    id: 11,
    name: "Coca-Cola",
    category: "Drinks",
    description: "Refreshing carbonated soft drink",
    price: 1.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 12,
    name: "Orange Juice",
    category: "Drinks",
    description: "Freshly squeezed orange juice",
    price: 2.49,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 13,
    name: "Iced Coffee",
    category: "Drinks",
    description: "Cold brew coffee with ice",
    price: 2.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 14,
    name: "Milkshake",
    category: "Drinks",
    description: "Creamy vanilla milkshake",
    price: 3.25,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 15,
    name: "Green Tea",
    category: "Drinks",
    description: "Hot brewed green tea",
    price: 1.75,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },

  // Dinner Plates 🍽️
  {
    id: 16,
    name: "Grilled Salmon",
    category: "Dinner Plates",
    description: "Salmon fillet with lemon butter sauce",
    price: 12.99,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 17,
    name: "Steak and Potatoes",
    category: "Dinner Plates",
    description: "Juicy steak with roasted potatoes",
    price: 14.5,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 18,
    name: "Spaghetti Bolognese",
    category: "Dinner Plates",
    description: "Pasta with rich meat sauce",
    price: 10.25,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 19,
    name: "Chicken Curry",
    category: "Dinner Plates",
    description: "Spicy chicken curry with rice",
    price: 9.75,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
  {
    id: 20,
    name: "Vegetable Stir Fry",
    category: "Dinner Plates",
    description: "Mixed vegetables sautéed in soy sauce",
    price: 8.5,
    image: "/images/items-images/RedDot_Burger.jpg",
    available: true,
  },
];

export async function GET() {
  return NextResponse.json({
    menuItems,
  });
}