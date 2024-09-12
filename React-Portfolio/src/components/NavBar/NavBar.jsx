import React from "react";
import styles from "./NavBar.module.css";


export const NavBar = () => {
  return (
    <nav className={styles.NavBar}>
      <a className={styles.title} href="/">Portfolio</a>

      <div className={styles.menu}>
        <ul className={styles.menuItems}>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};