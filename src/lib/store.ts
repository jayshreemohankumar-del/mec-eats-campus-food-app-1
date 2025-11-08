"use client";

import { create } from 'zustand';
import { CartItem, Order, OrderStatus } from './types';

interface AppState {
  cart: CartItem[];
  orders: Order[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  placeOrder: (studentName: string, studentId: string) => void;
  updateOrderStatus: (orderId: string, status: OrderStatus) => void;
}

export const useStore = create<AppState>((set, get) => ({
  cart: [],
  orders: [],
  
  addToCart: (item) => set((state) => {
    const existingItem = state.cart.find(i => i.id === item.id);
    if (existingItem) {
      return {
        cart: state.cart.map(i => 
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      };
    }
    return { cart: [...state.cart, { ...item, quantity: 1 }] };
  }),
  
  removeFromCart: (itemId) => set((state) => ({
    cart: state.cart.filter(i => i.id !== itemId)
  })),
  
  updateQuantity: (itemId, quantity) => set((state) => ({
    cart: state.cart.map(i => 
      i.id === itemId ? { ...i, quantity } : i
    )
  })),
  
  clearCart: () => set({ cart: [] }),
  
  placeOrder: (studentName, studentId) => set((state) => {
    if (state.cart.length === 0) return state;
    
    const total = state.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const newOrder: Order = {
      id: `ORD${Date.now()}`,
      items: [...state.cart],
      total,
      status: 'pending',
      studentName,
      studentId,
      shopId: state.cart[0].shopId,
      shopName: state.cart[0].shopName,
      timestamp: new Date(),
      estimatedTime: '15-20 min'
    };
    
    return {
      orders: [...state.orders, newOrder],
      cart: []
    };
  }),
  
  updateOrderStatus: (orderId, status) => set((state) => ({
    orders: state.orders.map(order => 
      order.id === orderId ? { ...order, status } : order
    )
  }))
}));
