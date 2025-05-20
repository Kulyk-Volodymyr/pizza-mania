"use client";
import styles from "./About.module.scss";
import LayoutTiltedSection from "@/components/LayoutTiltedSection/LayoutTiltedSection";

export default function About() {
  return (
    <LayoutTiltedSection title="About Us">
      <div className={styles.info}>
        <p>Pizza Mania offers you delicious pizza delivery!</p>
        <p>
          Our pizza menu includes a wide selection of flavors - from classics
          like Pepperoni or Margherita, to vegetarian, seafood and much more.
          Each pizza is made using fresh, quality ingredients and prepared with
          love and skill by our artisans to ensure you enjoy every bite.
        </p>
        <p>
          Thank you for choosing our delivery - we will be happy to satisfy your
          taste requests!
        </p>
      </div>
    </LayoutTiltedSection>
  );
}
