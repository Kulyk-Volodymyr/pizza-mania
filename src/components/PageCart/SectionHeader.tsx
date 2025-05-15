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
        <div
          className={`${styles.header__icon} ${styles.header__icon}_${icon}`}
        ></div>
      </div>
      <h1 className={styles.header__title}>{title}</h1>
    </div>
  );
}
