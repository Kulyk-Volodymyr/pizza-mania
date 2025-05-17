"use client";
import styles from "./Bill.module.scss";
import { useCartStore } from "@/store/cartStore";
import { useProductsStore } from "@/store/productsStore";
import { useEffect, useState } from "react";
import { countBill } from "@/store/billCounter";

export default function Bill() {
  const { cart } = useCartStore((state) => state);
  const { data } = useProductsStore((state) => state);
  const [bill, setBill] = useState<number | null>(0);

  useEffect(() => {
    if (!cart || !data) return;
    setBill(countBill(cart, data));
  }, [cart]);

  return (
    <section className={styles.bill}>
      <p className={styles.bill__title}>Bill Details</p>
      <div className={styles.bill__total}>
        <p className={styles.bill__totalPrice}>Total</p>
        <p className={styles.bill__totalPrice}>{bill}$</p>
      </div>
    </section>
  );
}
