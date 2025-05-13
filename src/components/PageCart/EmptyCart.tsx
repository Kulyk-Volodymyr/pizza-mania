"use client";
import styles from "./EmptyCart.module.scss";
import Link from "next/link";

export default function EmptyCart() {
  return (
    <p className={styles.info}>
      The cart is empty. Let's{" "}
      <Link href="/menu" className={styles.info__link}>
        choose pizza!
      </Link>
    </p>
  );
}
