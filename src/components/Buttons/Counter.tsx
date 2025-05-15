"use client";
import styles from "./Counter.module.scss";
import { useCartStore } from "@/store/cartStore";

interface Props {
  id: string;
  small: boolean;
}

export default function Counter({ id, small }: Props) {
  const { cart, increase, decrease } = useCartStore((state) => state);

  const increaseByOne = (e: any) => {
    increase(id);
    e.target.blur();
  };

  const decreaseByOne = (e: any) => {
    decrease(id);
    e.target.blur();
  };

  return (
    <div
      className={
        small ? `${styles.counter} ${styles.counter_small}` : styles.counter
      }
    >
      <button
        className={styles.counter__increase}
        aria-label="increase"
        onClick={(e) => increaseByOne(e)}
      >
        +
      </button>

      <div className={styles.counter__count}>
        <p className={styles.counter__value}>{cart[id]}</p>
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
