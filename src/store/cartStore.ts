import { create } from "zustand";

interface Cart {
  [productId: string]: number;
}

interface States {
  cart: Cart;
  itemsQuantity: number;
}

interface Actions {
  put: (value: string) => void;
  increase: (value: string) => void;
  decrease: (value: string) => void;
}

export const useCartStore = create<States & Actions>((set) => ({
  cart: {},
  itemsQuantity: 0,

  put: (value) =>
    set((state) => ({
      cart: { ...state.cart, [value]: 1 },
      itemsQuantity: state.itemsQuantity + 1,
    })),

  increase: (value) =>
    set((state) => ({
      cart: { ...state.cart, [value]: state.cart[value] + 1 },
      itemsQuantity: state.itemsQuantity + 1,
    })),

  decrease: (value) =>
    set((state) => {
      const currentCount = state.cart[value];
      const newCart = { ...state.cart };

      currentCount > 1
        ? (newCart[value] = currentCount - 1)
        : delete newCart[value];

      return { cart: newCart, itemsQuantity: state.itemsQuantity - 1 };
    }),
}));
