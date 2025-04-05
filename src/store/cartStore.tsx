import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartItem {
  productId: string ;
  quantity: number;
}

interface CartState {
  cartItems: CartItem[];
  addToCart: (productId: string, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartItems: [],
      addToCart: (productId, quantity = 1) => 
        set((state) => {
          const existingItem = state.cartItems.find(item => item.productId === productId);
          if (existingItem) {
            return {
              cartItems: state.cartItems.map(item =>
                item.productId === productId 
                  ? { ...item, quantity: item.quantity + quantity } 
                  : item
              )
            };
          }
          return { cartItems: [...state.cartItems, { productId, quantity }] };
        }),
      removeFromCart: (productId) =>
        set((state) => ({
          cartItems: state.cartItems.filter(item => item.productId !== productId)
        })),
      updateQuantity: (productId, quantity) =>
        set((state) => ({
          cartItems: state.cartItems.map(item =>
            item.productId === productId ? { ...item, quantity } : item
          )
        })),
      clearCart: () => set({ cartItems: [] })
    }),
    {
      name: 'cart-storage', // name for localStorage
    }
  )
);