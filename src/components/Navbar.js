import React from "react";
import styles from "@/styles/Home.module.css";
import Link from "next/link"

const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.mainNav}>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contact</li>
          </Link>
          <Link href="/blog">
            <li>Blog</li>
          </Link>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
