"use client";
import styles from "./About.module.scss";
import Image from "next/image";

export default function About() {
  return (
    <main className={styles.main}>
      <section className={styles.picture}>
        <h1 className={styles.picture__header}>About Us</h1>
        <div className={styles.picture__container}>
          <div className={styles.picture__wrapper}>
            <Image
              className={styles.picture__image}
              src="/hand-taking-pizza.png"
              alt="Next.js logo"
              width={1903}
              height={1800}
              priority
            />
          </div>
        </div>
      </section>

      <section className={styles.info}>
        <div className={styles.info__shape}></div>
        <div className={styles.info__inner}>
          <p>Pizza Mania offers you delicious pizza delivery!</p>
          <p>
            Our pizza menu includes a wide selection of flavors - from classics
            like Pepperoni or Margherita, to vegetarian, seafood and much more.
            Each pizza is made using fresh, quality ingredients and prepared
            with love and skill by our artisans to ensure you enjoy every bite.
          </p>
          <p>
            Thank you for choosing our delivery - we will be happy to satisfy
            your taste requests!
          </p>
        </div>
      </section>
    </main>
  );
}
