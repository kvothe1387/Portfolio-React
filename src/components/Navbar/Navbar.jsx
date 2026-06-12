import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        setScrolled(window.scrollY > 50);
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const handleClickOutside = (event) => {
      if (
        menuOpen &&
        !event.target.closest(`.${styles.menu}`) &&
        !event.target.closest(`.${styles.menuBtn}`)
      ) {
        setMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    document.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className={`${styles.navbar} ${scrolled ? styles.navbarScrolled : ""}`}
      role="navigation"
    >
      <div className={styles.navbarContainer}>
        <div className={styles.menu}>
          <button
            className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a></li>
            <li><a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a></li>
            <li>
              <a href="#contact" onClick={() => setMenuOpen(false)} className={styles.contactLink}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};