"use client";
import styles from "./Product.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import { usePathname, notFound } from "next/navigation";
import CartHandler from "@/components/Buttons/CartHandler";
import { useProductsStore } from "@/store/productsStore";

interface Data {
  id: string;
  name: string;
  description: string;
  components: string[];
  price: number;
}

export default function Product() {
  const pathname = usePathname();
  const { data } = useProductsStore((state) => state);
  const [product, setProduct] = useState<Data | undefined | null>(undefined);

  useEffect(() => {
    if (!data) return;

    const path = pathname?.split("/");
    if (!path) return;

    const productId = path[path.length - 1];
    const pizza = data.find((i: any) => i.id === productId) ?? null;
    setProduct(pizza);
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
          </>
        ) : product === undefined ? (
          <div>Loading...</div>
        ) : (
          notFound()
        )}
      </section>
    </main>
  );
}
