import type { Product, Cart } from "@/types";

const deals: Cart = {
  deliveryPrice: 4.99,
  minFreeDelivery: 50,
  birthdayPercent: 20,
  freePizzaOf: 5,
};

export const emptyBill: Cart = {
  total: 0,
  deliveryPrice: 0,
  deliveryValue: 0,
  freeDizzaDealValue: 0,
  toPay: 0,
  birthdayDealValue: 0,
  birthdayDeliveryValue: 0,
  birthdayToPay: 0,
};

export const countBill = (
  cart: Cart,
  data: Product[] | undefined | null
): Cart => {
  let bill = { ...emptyBill };
  bill.deliveryPrice = deals.deliveryPrice;
  if (!data) return bill;

  // Total price
  const totalPrice: number = Object.entries(cart).reduce(
    (total, [id, quantity]) => {
      const product = data.find((p) => p.id === id);
      if (!product) return total;
      return total + product.price * quantity;
    },
    0
  );
  bill.total = totalPrice;
  bill.toPay = totalPrice;

  // Free pizza deal
  let prices: number[] = [];
  for (let item of Object.keys(cart)) {
    let itemPrice: number = data.find((i) => i.id === item)?.price ?? 0;
    for (let i: number = 0; i < cart[item]; i++) {
      prices.push(itemPrice);
    }
  }
  let freePizzasLength: number = Math.floor(prices.length / deals.freePizzaOf);
  if (freePizzasLength > 0) {
    let freePizzas: number[] = prices.sort((a, b) => a - b);
    freePizzas.splice(freePizzasLength);
    let freePizzasDeal: number = freePizzas.reduce((total, item) => {
      return total + item;
    }, 0);
    bill.freeDizzaDealValue = freePizzasDeal;
    bill.toPay -= freePizzasDeal;
  }

  // Free delivery
  if (bill.toPay < deals.minFreeDelivery) {
    bill.deliveryValue = deals.deliveryPrice;
    bill.toPay += deals.deliveryPrice;
  }

  // Birthday deal
  let birthdayDeal: number = (totalPrice / 100) * deals.birthdayPercent;
  bill.birthdayDealValue = birthdayDeal;
  bill.birthdayToPay = totalPrice - birthdayDeal;

  // Free Birthday delivery
  if (bill.birthdayToPay < deals.minFreeDelivery) {
    bill.birthdayDeliveryValue = deals.deliveryPrice;
    bill.birthdayToPay += deals.deliveryPrice;
  }

  return bill;
};
