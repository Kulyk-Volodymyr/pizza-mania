"use client";
import styles from "./Navbar.module.scss";
import Link from "next/link";

interface NavbarProps {
  navbarHidden: boolean;
  hideNavbar: () => void;
}

const navbarItems: Array<{
  link: string;
  name: string;
}> = [
  {
    link: "/",
    name: "Home",
  },
  {
    link: "/menu",
    name: "Menu",
  },
  {
    link: "/about",
    name: "About",
  },
  {
    link: "/deals",
    name: "Deals",
  },
  {
    link: "/contact",
    name: "Contact",
  },
];

export default function Navbar({ navbarHidden, hideNavbar }: NavbarProps) {
  return (
    <nav
      className={
        navbarHidden
          ? `${styles.navbar} ${styles.navbar_hidden}`
          : `${styles.navbar} ${styles.navbar_visible}`
      }
    >
      <ul className={styles.list}>
        {navbarItems.map((item) => (
          <li key={item.name}>
            <Link href={item.link} onClick={hideNavbar}>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
