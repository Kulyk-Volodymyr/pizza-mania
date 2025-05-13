"use client";
import styles from "./NotFound.module.scss";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <div className={styles.main__info}>
          <p className={styles.main__404}>404</p>
          <p className={styles.main__oops}>Oops...</p>
          <p className={styles.main__page}>Page Not Found</p>
        </div>
      </div>
    </main>
  );
}
