"use client";
import styles from "./Product.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, notFound } from "next/navigation";
import AddToCart from "@/components/Buttons/AddToCart";

interface Data {
  id: string;
  name: string;
  description: string;
  components: string[];
  price: number;
}

export default function Product() {
  const pathname = usePathname();
  const [data, setData] = useState<Data | undefined | null>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      const path = pathname?.split("/");
      let productId: string;
      if (path?.length !== undefined) {
        productId = path[path.length - 1];
        const res = await fetch(`/pizzas.json`);
        const json = await res.json();
        let pizza = json.find((i: any) => i.id === productId);
        if (pizza === undefined) {
          pizza = null;
        }
        setData(pizza);
      }
    };
    fetchData();
  }, []);

  return (
    <main className={styles.main}>
      <section className={styles.product}>
        {data ? (
          <>
            <h1 className={styles.product__header}>{data.name}</h1>
            <div className={styles.product__image}>
              <Image
                src={`/pizzas/${data.id}.png`}
                alt={`pizza ${data.name}`}
                width={600}
                height={600}
                priority
              />
            </div>
            <p
              className={`${styles.product__text} ${styles.product__text_info}`}
            >
              <span>{data.name}</span> {data.description.slice(3)}
            </p>
            <h2
              className={`${styles.product__text} ${styles.product__text_ingredients}`}
            >
              <span>Ingredients:</span> {data.components.join(", ")}
            </h2>
            <div className={styles.product__buttonPrice}>
              <AddToCart />
              <p className={styles.product__price}>{data.price}$</p>
            </div>
          </>
        ) : data === undefined ? (
          <div>Loading...</div>
        ) : (
          notFound()
        )}
      </section>
    </main>
  );
}
