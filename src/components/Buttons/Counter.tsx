"use client";
import styles from "./Counter.module.scss";

export default function Counter() {
  const increaseByOne = (e: any) => {
    e.target.blur();
  };

  const decreaseByOne = (e: any) => {
    e.target.blur();
  };

  return (
    <div className={styles.counter}>
      <button
        className={styles.counter__increase}
        aria-label="increase"
        onClick={(e) => increaseByOne(e)}
      >
        +
      </button>

      <div className={styles.counter__count}>
        <p className={styles.counter__value}>1</p>
      </div>

      <button
        className={styles.counter__decrease}
        aria-label="decrease"
        onClick={(e) => decreaseByOne(e)}
      >
        -
      </button>
    </div>
  );
}
