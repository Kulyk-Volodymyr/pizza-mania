"use client";
import styles from "./Bill.module.scss";
import { useCartStore } from "@/store/cartStore";
import { useProductsStore } from "@/store/productsStore";
import { useEffect, useState } from "react";
import { emptyBill, countBill } from "@/store/billCounter";
import type { Cart } from "@/types";
import BillDelivery from "./BillDelivery";
import BillFreePizza from "./BillFreePizza";

export default function Bill() {
  const { cart } = useCartStore((state) => state);
  const { data } = useProductsStore((state) => state);
  const [bill, setBill] = useState<Cart>(emptyBill);
  const [isBirthday, setIsBirthday] = useState(false);

  useEffect(() => {
    if (!cart || !data) return;
    setBill(countBill(cart, data));
  }, [cart]);

  const toggleBirthday = (e: any) => {
    e.target.blur();
    setIsBirthday(!isBirthday);
  };

  return (
    <section className={styles.bill}>
      <p className={styles.title}>Bill Details</p>

      <div className={styles.flexRow}>
        <p className={styles.text}>Total</p>
        <p className={styles.text}>{bill.total}$</p>
      </div>

      <BillFreePizza bill={bill} isBirthday={isBirthday} />

      <BillDelivery bill={bill} isBirthday={isBirthday} />

      <div className={styles.flexRow}>
        <div className={styles.flexRow}>
          <input
            type="checkbox"
            name="birthday"
            id="birthday"
            onChange={(e) => toggleBirthday(e)}
            className={styles.checkbox}
          />
          <label htmlFor="birthday" className={styles.label}>
            It's my birthday
          </label>
        </div>
        <p className={styles.text}>
          {isBirthday ? bill.birthdayDealValue * -1 : 0}$
        </p>
      </div>

      <div className={styles.toPay}>
        <p className={styles.toPay__text}>To Pay</p>
        <p className={styles.toPay__text}>
          {isBirthday ? bill.birthdayToPay : bill.toPay}$
        </p>
      </div>
    </section>
  );
}
