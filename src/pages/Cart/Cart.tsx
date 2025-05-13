"use client";
import styles from "./Cart.module.scss";
import Link from "next/link";
import EmptyCart from "@/components/PageCart/EmptyCart";
import LayoutScrollPizza from "@/components/LayoutScrollPizza/LayoutScrollPizza";

export default function Cart() {
  return (
    <LayoutScrollPizza pizza="/cart-pizza.png" animationName="cart">
      <div className={styles.container}>
        <section className={styles.section}>
          <div
            className={`${styles.section__header} ${styles.section__header_order}`}
          >
            <div className={styles.section__iconBg}>
              <div
                className={`${styles.section__icon} ${styles.section__icon_cart}`}
              ></div>
            </div>
            <h1 className={styles.section__title}>My Pizzas</h1>
          </div>
          <EmptyCart />
        </section>

        <section className={styles.section}>
          <div className={styles.section__header}>
            <div className={styles.section__iconBg}>
              <div
                className={`${styles.section__icon} ${styles.section__icon_user}`}
              ></div>
            </div>
            <h2 className={styles.section__title}>Account</h2>
          </div>
          <p className={styles.section__info}>
            To place your order now, log in to your existing account or sign up.
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
          <div className={styles.section__header}>
            <div className={styles.section__iconBg}>
              <div
                className={`${styles.section__icon} ${styles.section__icon_address}`}
              ></div>
            </div>
            <h2 className={styles.section__title}>Delivery address</h2>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.section__header}>
            <div className={styles.section__iconBg}>
              <div
                className={`${styles.section__icon} ${styles.section__icon_payment}`}
              ></div>
            </div>
            <h2 className={styles.section__title}>Payment</h2>
          </div>
        </section>
      </div>
    </LayoutScrollPizza>
  );
}

/*
<main className={styles.main}>
  <div className={styles.main__inner}>
    <section className={styles.section}>
      <div
        className={`${styles.section__header} ${styles.section__header_order}`}
      >
        <div className={styles.section__iconBg}>
          <div
            className={`${styles.section__icon} ${styles.section__icon_cart}`}
          ></div>
        </div>
        <h1 className={styles.section__title}>My Pizzas</h1>
      </div>
      <EmptyCart />
    </section>

    <section className={styles.section}>
      <div className={styles.section__header}>
        <div className={styles.section__iconBg}>
          <div
            className={`${styles.section__icon} ${styles.section__icon_user}`}
          ></div>
        </div>
        <h2 className={styles.section__title}>Account</h2>
      </div>
      <p className={styles.section__info}>
        To place your order now, log in to your existing account or sign up.
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
      <div className={styles.section__header}>
        <div className={styles.section__iconBg}>
          <div
            className={`${styles.section__icon} ${styles.section__icon_address}`}
          ></div>
        </div>
        <h2 className={styles.section__title}>Delivery address</h2>
      </div>
    </section>

    <section className={styles.section}>
      <div className={styles.section__header}>
        <div className={styles.section__iconBg}>
          <div
            className={`${styles.section__icon} ${styles.section__icon_payment}`}
          ></div>
        </div>
        <h2 className={styles.section__title}>Payment</h2>
      </div>
    </section>
  </div>
</main>;
*/
