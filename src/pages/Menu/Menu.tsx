"use client";
import styles from "./Menu.module.scss";
import Link from "next/link";
import Image from "next/image";
import LayoutScrollPizza from "@/components/LayoutScrollPizza/LayoutScrollPizza";
import { useProductsStore } from "@/store/productsStore";
import CartHandler from "@/components/Buttons/CartHandler";
import Loader from "@/components/Loader/Loader";

export default function Menu() {
  const { data } = useProductsStore((state) => state);

  return (
    <LayoutScrollPizza pizza="/menu-pizza.png" animationName="menu">
      <h1 className={styles.section__header}>Menu</h1>
      {data ? (
        <ul className={styles.section__pizzas}>
          {data.map((item) => (
            <li key={item.id}>
              <div className={styles.info}>
                <Link href={`/menu/${item.id}`} className={styles.info__image}>
                  <Image
                    src={`/pizzas/${item.id}_small.png`}
                    alt={`pizza ${item.name}`}
                    width={180}
                    height={180}
                    priority
                  />
                </Link>

                <div>
                  <Link href={`/menu/${item.id}`} className={styles.info__name}>
                    <h2 className={styles.info__name}>{item.name}</h2>
                  </Link>

                  <p className={styles.info__components}>
                    {item.components.join(", ")}
                  </p>

                  <Link href={`/menu/${item.id}`} className={styles.info__link}>
                    More Info
                  </Link>
                </div>
              </div>

              <div className={styles.action}>
                <CartHandler id={item.id} />

                <p className={styles.action__price}>{item.price}$</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.section__loader}>
          <Loader />
        </div>
      )}
    </LayoutScrollPizza>
  );
}
