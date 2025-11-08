import { MenuItem, Order, Shop } from './types';

export const shops: Shop[] = [
  {
    id: '1',
    name: "Campus Grill",
    description: "Burgers, fries, and American classics",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80",
    rating: 4.5,
    categories: ["American", "Fast Food"]
  },
  {
    id: '2',
    name: "Tokyo Express",
    description: "Fresh sushi and Japanese cuisine",
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=800&q=80",
    rating: 4.8,
    categories: ["Japanese", "Sushi"]
  },
  {
    id: '3',
    name: "Pizza Palace",
    description: "Authentic Italian pizza",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&q=80",
    rating: 4.6,
    categories: ["Italian", "Pizza"]
  }
];

export const menuItems: MenuItem[] = [
  {
    id: '1',
    name: 'Classic Burger',
    description: 'Juicy beef patty with cheese, lettuce, tomato',
    price: 8.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/delicious-gourmet-burger-with-melted-che-d427472b-20251108111415.jpg',
    category: 'Burgers',
    shopId: '1',
    shopName: 'Campus Grill',
    rating: 4.5,
    preparationTime: '15-20 min'
  },
  {
    id: '2',
    name: 'Sushi Platter',
    description: 'Fresh salmon, tuna, and California rolls',
    price: 14.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/fresh-colorful-sushi-platter-with-salmon-4d16a2a6-20251108111413.jpg',
    category: 'Sushi',
    shopId: '2',
    shopName: 'Tokyo Express',
    rating: 4.8,
    preparationTime: '10-15 min'
  },
  {
    id: '3',
    name: 'Pepperoni Pizza',
    description: 'Classic pepperoni with melted mozzarella',
    price: 12.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/pepperoni-pizza-slice-with-melted-mozzar-89a9a38a-20251108111412.jpg',
    category: 'Pizza',
    shopId: '3',
    shopName: 'Pizza Palace',
    rating: 4.6,
    preparationTime: '20-25 min'
  },
  {
    id: '4',
    name: 'Ramen Bowl',
    description: 'Rich broth with noodles, egg, and vegetables',
    price: 11.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/bowl-of-ramen-noodles-with-soft-boiled-e-9220b182-20251108111414.jpg',
    category: 'Asian',
    shopId: '2',
    shopName: 'Tokyo Express',
    rating: 4.7,
    preparationTime: '15-20 min'
  },
  {
    id: '5',
    name: 'Chicken Tacos',
    description: 'Grilled chicken with fresh salsa and veggies',
    price: 9.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/colorful-tacos-with-grilled-chicken-fres-0cee7a46-20251108111432.jpg',
    category: 'Mexican',
    shopId: '1',
    shopName: 'Campus Grill',
    rating: 4.4,
    preparationTime: '10-15 min'
  },
  {
    id: '6',
    name: 'Pasta Carbonara',
    description: 'Creamy pasta with bacon and parmesan',
    price: 13.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/creamy-pasta-carbonara-with-bacon-and-pa-8530b609-20251108111431.jpg',
    category: 'Italian',
    shopId: '3',
    shopName: 'Pizza Palace',
    rating: 4.7,
    preparationTime: '15-20 min'
  },
  {
    id: '7',
    name: 'Garden Salad',
    description: 'Fresh mixed greens with seasonal vegetables',
    price: 7.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/fresh-garden-salad-with-mixed-greens-che-796f7600-20251108111432.jpg',
    category: 'Healthy',
    shopId: '1',
    shopName: 'Campus Grill',
    rating: 4.3,
    preparationTime: '5-10 min'
  },
  {
    id: '8',
    name: 'Chocolate Brownie',
    description: 'Warm brownie with vanilla ice cream',
    price: 5.99,
    image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/project-uploads/5aef4c54-8d4f-4bbd-a1a7-9634fa2a054f/generated_images/chocolate-brownie-dessert-with-vanilla-i-d32f73d4-20251108111431.jpg',
    category: 'Desserts',
    shopId: '3',
    shopName: 'Pizza Palace',
    rating: 4.9,
    preparationTime: '5-10 min'
  }
];

export const featuredDeals = menuItems.slice(0, 3);
