import type { Product, Cart } from "@/types";
import Decimal from "decimal.js";

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
  freePizzaDealValue: 0,
  toPay: 0,
  birthdayDealValue: 0,
  birthdayDeliveryValue: 0,
  birthdayToPay: 0,
};

export const countBill = (
  cart: Cart,
  data: Product[] | undefined | null
): Cart => {
  const D = (n: number) => new Decimal(n);
  let bill = { ...emptyBill };
  bill.deliveryPrice = deals.deliveryPrice;
  if (!data) return bill;

  // Total price
  const totalPrice: number = Object.entries(cart)
    .reduce((total: Decimal, [id, quantity]) => {
      const product = data.find((p) => p.id === id);
      if (!product) return total;
      return total.plus(D(product.price).mul(D(quantity)));
    }, D(0))
    .toNumber();
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
    let freePizzasDeal: number = freePizzas
      .reduce((total: Decimal, item) => {
        return total.plus(D(item));
      }, D(0))
      .toNumber();
    bill.freePizzaDealValue = freePizzasDeal;
    bill.toPay = D(bill.toPay).sub(D(freePizzasDeal)).toNumber();
  }

  // Free delivery
  if (bill.toPay < deals.minFreeDelivery) {
    bill.deliveryValue = deals.deliveryPrice;
    bill.toPay = D(bill.toPay).plus(D(deals.deliveryPrice)).toNumber();
  }

  // Birthday deal
  let birthdayDeal: number = D(totalPrice)
    .dividedBy(100)
    .times(D(deals.birthdayPercent))
    .toNumber();
  birthdayDeal = +birthdayDeal.toFixed(2);
  bill.birthdayDealValue = birthdayDeal;
  bill.birthdayToPay = D(totalPrice).sub(D(birthdayDeal)).toNumber();

  // Free Birthday delivery
  if (bill.birthdayToPay < deals.minFreeDelivery) {
    bill.birthdayDeliveryValue = deals.deliveryPrice;
    bill.birthdayToPay = D(bill.birthdayToPay)
      .plus(D(deals.deliveryPrice))
      .toNumber();
  }

  return bill;
};
