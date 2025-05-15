"use client";
import styles from "./FullCart.module.scss";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/store/cartStore";
import { useProductsStore } from "@/store/productsStore";
import Counter from "../Buttons/Counter";

export default function FullCart() {
  const { cart } = useCartStore((state) => state);
  const { data } = useProductsStore((state) => state);

  return (
    <ul className={styles.items}>
      {data
        ?.filter((item) => Object.keys(cart).includes(item.id))
        .map((item) => (
          <li key={item.id} className={styles.item}>
            <Link href={`/menu/${item.id}`} className={styles.item__image}>
              <Image
                src={`/pizzas/${item.id}_small.png`}
                alt="pizza"
                width={180}
                height={180}
                priority
              />
            </Link>
            <div className={styles.item__info}>
              <Link href={`/menu/${item.id}`} className={styles.item__name}>
                {item.name}
              </Link>
              <p className={styles.item__price}>{item.price}$</p>
              <Counter id={item.id} small={true} />
            </div>
          </li>
        ))}
    </ul>
  );
}
