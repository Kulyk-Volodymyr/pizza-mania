"use client";
import styles from "./Menu.module.scss";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LayoutScrollPizza from "@/components/LayoutScrollPizza/LayoutScrollPizza";
import Counter from "@/components/Buttons/Counter";
import AddToCart from "@/components/Buttons/AddToCart";

interface Data {
  id: string;
  name: string;
  description: string;
  components: string[];
  price: number;
}

export default function Menu() {
  const [data, setData] = useState<Data[] | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`/pizzas.json`);
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, []);

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
                    alt="pizza"
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
                <AddToCart />

                <p className={styles.action__price}>{item.price}$</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <div>Loading...</div>
      )}
    </LayoutScrollPizza>
  );
}
