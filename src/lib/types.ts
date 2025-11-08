export type OrderStatus = 'pending' | 'preparing' | 'ready' | 'completed' | 'cancelled';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  shopId: string;
  shopName: string;
  rating: number;
  preparationTime: string;
}

export interface CartItem extends MenuItem {
  quantity: number;
}

export interface Order {
  id: string;
  items: CartItem[];
  total: number;
  status: OrderStatus;
  studentName: string;
  studentId: string;
  shopId: string;
  shopName: string;
  timestamp: Date;
  estimatedTime?: string;
}

export interface Shop {
  id: string;
  name: string;
  description: string;
  image: string;
  rating: number;
  categories: string[];
}
