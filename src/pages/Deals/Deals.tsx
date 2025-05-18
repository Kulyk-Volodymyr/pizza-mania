"use client";
import styles from "./Deals.module.scss";
import LayoutTiltedSection from "@/components/LayoutTiltedSection/LayoutTiltedSection";

export default function Deals() {
  return (
    <LayoutTiltedSection title="Deals">
      <div className={styles.info}>
        <p>
          We love treating our customers — here are some tasty offers just for
          you!
        </p>
        <p>Free delivery on orders over $50.</p>
        <p>Enjoy your pizza without extra delivery costs!</p>
        <p>5 pizzas for the price of 4.</p>
        <p>Order five — the cheapest one is free!</p>
        <p>20% birthday discount.</p>
        <p>
          Celebrate with flavor: valid on your birthday, 10 days before and 10
          days after.
        </p>
      </div>
    </LayoutTiltedSection>
  );
}
