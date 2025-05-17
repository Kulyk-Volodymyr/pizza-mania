"use client";
import styles from "./Home.module.scss";
import Image from "next/image";
import Link from "next/link";
import { ThemeSwitcher } from "@/components/Theme/ThemeSwitcher";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <section className={styles.section}>
          <h1 className={styles.section__header}>Pizza Mania</h1>
          <p className={styles.section__info}>
            People Disappoint,
            <br />
            But <span className={styles.section__infoSpan}>Pizza</span> Never
            Does
          </p>

          <Link href="/menu" className={styles.section__link}>
            See Our Menu
          </Link>
        </section>

        <div className={styles.image}>
          <Image
            className={styles.image__image}
            src="/pizza-hero.png"
            alt="Next.js logo"
            width={1744}
            height={1284}
            priority
          />

          <Link href="/menu" className={styles.image__link}>
            See Our Menu
          </Link>
        </div>

        <div className={styles.main__switch}>
          <ThemeSwitcher />
        </div>
      </div>
    </main>
  );
}
