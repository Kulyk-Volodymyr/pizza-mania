"use client";
import styles from "./Bill.module.scss";
import type { Cart } from "@/types";

interface Props {
  bill: Cart;
  isBirthday: boolean;
}

export default function BillFreePizza({ bill, isBirthday }: Props) {
  return (
    <div className={styles.flexRow}>
      <p className={styles.text}>5 for 4</p>
      {isBirthday ? (
        <div className={styles.flexRow}>
          {bill.freePizzaDealValue > 0 && (
            <p className={styles.textLineThrough}>{bill.freePizzaDealValue}</p>
          )}
          <p className={styles.text}>0$</p>
        </div>
      ) : (
        <p className={styles.text}>{bill.freePizzaDealValue * -1}$</p>
      )}
    </div>
  );
}
