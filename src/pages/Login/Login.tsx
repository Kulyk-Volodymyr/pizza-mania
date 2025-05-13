"use client";
import styles from "./Login.module.scss";

export default function Login() {
  return (
    <main className={styles.main}>
      <div className={styles.main__inner}>
        <div className={styles.main__info}>
          <p className={styles.main__404}>503</p>
          <p className={styles.main__oops}>Oops...</p>
          <p className={styles.main__page}>Service Unavailable</p>
        </div>
      </div>
    </main>
  );
}
