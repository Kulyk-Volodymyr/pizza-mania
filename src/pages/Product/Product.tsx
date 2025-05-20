"use client";
import styles from "./Product.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, notFound } from "next/navigation";
import CartHandler from "@/components/Buttons/CartHandler";
import { useProductsStore } from "@/store/productsStore";
import type { Product } from "@/types";
import Loader from "@/components/Loader/Loader";

export default function Product() {
  const pathname = usePathname();
  const { data } = useProductsStore((state) => state);
  const [product, setProduct] = useState<Product | undefined | null>(undefined);
  const [prevPizzaId, setPrevPizzaId] = useState<string | undefined>(undefined);
  const [nextPizzaId, setNextPizzaId] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!data) return;
    const path = pathname?.split("/");
    if (!path) return;

    const productId = path[path.length - 1];
    const pizza = data.find((i: any) => i.id === productId) ?? null;
    setProduct(pizza);

    let pizzasId: string[] = [];
    for (let i of data) pizzasId.push(i.id);
    let pizzaIndex: number | null = pizza ? pizzasId.indexOf(pizza.id) : null;
    if (pizzaIndex !== null) {
      let prevPizza =
        pizzasId[(pizzasId.length + pizzaIndex - 1) % pizzasId.length];
      let nextPizza =
        pizzasId[(pizzasId.length + pizzaIndex + 1) % pizzasId.length];
      setPrevPizzaId(prevPizza);
      setNextPizzaId(nextPizza);
    }
  }, [data]);

  return (
    <main className={styles.main}>
      <section className={styles.product}>
        {product ? (
          <>
            <h1 className={styles.product__header}>{product.name}</h1>
            <div className={styles.product__image}>
              <Image
                src={`/pizzas/${product.id}.png`}
                alt={`pizza ${product.name}`}
                width={600}
                height={600}
                priority
              />
            </div>
            <p
              className={`${styles.product__text} ${styles.product__text_info}`}
            >
              <span>{product.name}</span> {product.description.slice(3)}
            </p>
            <h2
              className={`${styles.product__text} ${styles.product__text_ingredients}`}
            >
              <span>Ingredients:</span> {product.components.join(", ")}
            </h2>
            <div className={styles.product__buttonPrice}>
              <CartHandler id={product.id} />
              <p className={styles.product__price}>{product.price}$</p>
            </div>
            <Link
              href={`/menu/${prevPizzaId}`}
              className={`${styles.link} ${styles.link_prev}`}
              aria-label={`go to ${prevPizzaId?.split("_").join(" ")} page`}
            >
              <Image
                src={`/pizzas/${prevPizzaId}_small.png`}
                alt={`pizza ${prevPizzaId?.split("_").join(" ")}`}
                width={180}
                height={180}
                priority
              />
            </Link>
            <Link
              href={`/menu/${nextPizzaId}`}
              className={`${styles.link} ${styles.link_next}`}
              aria-label={`go to ${nextPizzaId?.split("_").join(" ")} page`}
            >
              <Image
                src={`/pizzas/${nextPizzaId}_small.png`}
                alt={`pizza ${nextPizzaId?.split("_").join(" ")}`}
                width={180}
                height={180}
                priority
              />
            </Link>
          </>
        ) : product === undefined ? (
          <div className={styles.main__loader}>
            <Loader />
          </div>
        ) : (
          notFound()
        )}
      </section>
    </main>
  );
}
