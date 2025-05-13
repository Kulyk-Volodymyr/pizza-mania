"use client";
import styles from "./Logo.module.scss";

export default function Logo() {
  return (
    <div className={styles.logo}>
      <span className={styles.logo__icon}></span>
      <p className={styles.logo__text}>mania</p>
    </div>
  );
}
