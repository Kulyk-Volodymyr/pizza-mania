import type { Product } from "@/types";

export const countBill = (
  cart: Record<string, number>,
  data: Product[] | undefined | null
): number => {
  if (!data) return 0;

  return Object.entries(cart).reduce((total, [id, quantity]) => {
    const product = data.find((p) => p.id === id);
    if (!product) return total;
    return total + product.price * quantity;
  }, 0);
};
