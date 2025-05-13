import styles from "./Buttons.module.scss";
import Link from "next/link";

interface ButtonsProps {
  navbarHidden: boolean;
  toggleNavbar: Function;
  hideNavbar: Function;
}

export default function Buttons({
  navbarHidden,
  toggleNavbar,
  hideNavbar,
}: ButtonsProps) {
  return (
    <div className={styles.buttons}>
      <nav>
        <ul className={styles.buttons__list}>
          <li>
            <Link
              href="/login"
              className={styles.buttons__user}
              //aria-labelledby="go to login page"
              onClick={() => hideNavbar()}
            ></Link>
          </li>
          <li>
            <Link
              href="/cart"
              className={styles.buttons__cart}
              //aria-labelledby="go to cart page"
              onClick={() => hideNavbar()}
            ></Link>
          </li>
        </ul>
      </nav>
      <button
        className={styles.buttons__burger}
        aria-label={
          navbarHidden ? "open navigation menu" : "close navigation menu"
        }
        onClick={() => toggleNavbar()}
      >
        <span
          className={
            navbarHidden
              ? `${styles.bar} ${styles.bar_bar1}`
              : `${styles.bar} ${styles.bar_bar1close}`
          }
        ></span>
        <span
          className={
            navbarHidden
              ? `${styles.bar} ${styles.bar_bar2}`
              : `${styles.bar} ${styles.bar_bar2close}`
          }
        ></span>
        <span
          className={
            navbarHidden
              ? `${styles.bar} ${styles.bar_bar3}`
              : `${styles.bar} ${styles.bar_bar3close}`
          }
        ></span>
        <span
          className={
            navbarHidden
              ? `${styles.bar} ${styles.bar_bar4}`
              : `${styles.bar} ${styles.bar_bar4close}`
          }
        ></span>
      </button>
    </div>
  );
}
