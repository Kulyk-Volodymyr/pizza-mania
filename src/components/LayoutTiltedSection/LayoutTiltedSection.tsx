"use client";
import styles from "./LayoutTiltedSection.module.scss";
import { ReactNode } from "react";
import Image from "next/image";

interface Props {
  title: string;
  children: ReactNode | ReactNode[];
}

export default function LayoutTiltedSection({ title, children }: Props) {
  return (
    <main className={styles.main}>
      <section className={styles.picture}>
        <h1 className={styles.picture__header}>{title}</h1>
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
        {children}
      </section>
    </main>
  );
}
