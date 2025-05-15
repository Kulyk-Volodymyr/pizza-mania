"use client";
import styles from "./Cart.module.scss";
import Link from "next/link";
import EmptyCart from "@/components/PageCart/EmptyCart";
import FullCart from "@/components/PageCart/FullCart";
import LayoutScrollPizza from "@/components/LayoutScrollPizza/LayoutScrollPizza";
import { useCartStore } from "@/store/cartStore";
import SectionHeader from "@/components/PageCart/SectionHeader";

export default function Cart() {
  const { itemsQuantity } = useCartStore((state) => state);

  return (
    <LayoutScrollPizza pizza="/cart-pizza.png" animationName="cart">
      <div className={styles.container}>
        <section className={styles.section}>
          <SectionHeader title="My Pizzas" icon="cart" />

          {itemsQuantity > 0 ? <FullCart /> : <EmptyCart />}
        </section>

        <div>
          <section className={styles.section}>
            <SectionHeader title="Account" icon="user" />

            <p className={styles.section__info}>
              To place your order now, log in to your existing account or sign
              up.
            </p>

            <div className={styles.account}>
              <Link href="/login" className={styles.account__link}>
                <span>Have an account?</span>
                <span>Log In</span>
              </Link>

              <Link href="/login" className={styles.account__link}>
                <span>New to Mania?</span>
                <span>Sign In</span>
              </Link>
            </div>
          </section>

          <section className={styles.section}>
            <SectionHeader title="Delivery address" icon="address" />
          </section>

          <section className={styles.section}>
            <SectionHeader title="Payment" icon="payment" />
          </section>
        </div>
      </div>
    </LayoutScrollPizza>
  );
}
