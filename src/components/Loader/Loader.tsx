"use client";
import styles from "./Loader.module.scss";

function Slice() {
  return (
    <div className={styles.slice}>
      <div className={styles.slice__first}></div>
      <div className={styles.slice__second}></div>
    </div>
  );
}

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Slice />
      <Slice />
      <Slice />
      <Slice />
    </div>
  );
}
