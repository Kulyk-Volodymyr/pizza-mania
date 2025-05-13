"use client";
import styles from "./LayoutScrollPizza.module.scss";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  pizza: string;
  animationName: string;
  children: ReactNode | ReactNode[];
}

export default function LayoutScrollPizza({
  pizza,
  animationName,
  children,
}: Props) {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        {children}
        <div className={styles.picture}>
          <div className={styles.picture__inner}>
            <div className={styles.picture__container}>
              <Image
                src={pizza}
                alt="pizza"
                width={1000}
                height={1000}
                className={`${styles.picture__image} ${styles.picture__image}_${animationName}`}
                priority
              />
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
