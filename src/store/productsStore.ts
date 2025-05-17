import { create } from "zustand";
import type { Product } from "@/types";

interface ProductsStore {
  data: Product[] | null;
  fetchData: () => Promise<void>;
}

export const useProductsStore = create<ProductsStore>((set) => ({
  data: null,

  fetchData: async () => {
    try {
      const res = await fetch("/pizzas.json");
      const json = await res.json();
      set({ data: json });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  },
}));
