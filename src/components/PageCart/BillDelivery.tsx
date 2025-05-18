"use client";
import styles from "./Bill.module.scss";
import type { Cart } from "@/types";

interface Props {
  bill: Cart;
  isBirthday: boolean;
}

export default function BillDelivery({ bill, isBirthday }: Props) {
  return (
    <div className={styles.flexRow}>
      <p className={styles.text}>Delivery</p>
      <div className={styles.flexRow}>
        <p className={styles.textLineThrough}>
          {isBirthday
            ? bill.birthdayDeliveryValue === 0
              ? bill.deliveryPrice + "$"
              : ""
            : bill.deliveryValue === 0
            ? bill.deliveryPrice + "$"
            : ""}
        </p>
        <p className={styles.text}>
          {isBirthday
            ? bill.birthdayDeliveryValue === 0
              ? "Free"
              : bill.deliveryPrice + "$"
            : bill.deliveryValue === 0
            ? "Free"
            : bill.deliveryPrice + "$"}
        </p>
      </div>
    </div>
  );
}
