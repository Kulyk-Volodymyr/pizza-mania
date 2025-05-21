"use client";
import styles from "./LayoutScrollPizza.module.scss";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  page: string;
  children: ReactNode | ReactNode[];
}

export default function LayoutScrollPizza({ page, children }: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {children}
        <div className={styles.picture}>
          <div className={styles.picture__inner}>
            <div className={styles.picture__container}>
              {page === "cart" && (
                <Image
                  src="/cart-pizza.png"
                  alt="pizza"
                  width={1000}
                  height={1000}
                  className={`${styles.picture__image} ${styles.picture__image_cart}`}
                  priority
                />
              )}

              {page === "menu" && (
                <Image
                  src="/menu-pizza.png"
                  alt="pizza"
                  width={1000}
                  height={1000}
                  className={`${styles.picture__image} ${styles.picture__image_menu}`}
                  priority
                />
              )}

              <Image
                src="/menu-bg.png"
                alt="pizza toppings"
                width={1000}
                height={1000}
                className={styles.picture__background}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
