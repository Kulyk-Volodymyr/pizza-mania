"use client";
import styles from "./SectionHeader.module.scss";

interface Props {
  title: string;
  icon: string;
}

export default function SectionHeader({ title, icon }: Props) {
  return (
    <div className={styles.header}>
      <div className={styles.header__iconBg}>
        {icon === "cart" && (
          <div
            className={`${styles.header__icon} ${styles.header__icon_cart}`}
          ></div>
        )}
        {icon === "user" && (
          <div
            className={`${styles.header__icon} ${styles.header__icon_user}`}
          ></div>
        )}
        {icon === "address" && (
          <div
            className={`${styles.header__icon} ${styles.header__icon_address}`}
          ></div>
        )}
        {icon === "payment" && (
          <div
            className={`${styles.header__icon} ${styles.header__icon_payment}`}
          ></div>
        )}
      </div>
      <h1 className={styles.header__title}>{title}</h1>
    </div>
  );
}
