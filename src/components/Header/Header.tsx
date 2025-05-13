"use client";
import styles from "./Header.module.scss";
import Logo from "./Logo";
import Navbar from "./Navbar";
import Buttons from "./Buttons";
import { useState } from "react";

export default function Header() {
  const [navbarHidden, setNavbarHidden] = useState(true);

  const toggleNavbar = () => {
    setNavbarHidden(!navbarHidden);
  };

  const hideNavbar = () => {
    if (!navbarHidden) setNavbarHidden(true);
  };

  return (
    <header className={styles.header}>
      <div className={styles.header__inner}>
        <Logo />
        <Navbar navbarHidden={navbarHidden} hideNavbar={hideNavbar} />
        <Buttons
          navbarHidden={navbarHidden}
          toggleNavbar={toggleNavbar}
          hideNavbar={hideNavbar}
        />
      </div>
    </header>
  );
}
