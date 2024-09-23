import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "././Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">David McCullough</a>

      <div className={styles.menu}>
        <img className={styles.menuBtn}
          src={
            menuOpen
              ? getImageUrl("nav/closeIcon.png")
              : getImageUrl("nav/menuIcon.png")
          } alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)} />

        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}>

          <li><NavLink to="/about">About Me</NavLink></li>
          <li><NavLink to="/projects">Portfolio</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/resume">Resume</NavLink></li>
        </ul>
      </div>
    </nav>
  );
};