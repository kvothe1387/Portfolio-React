import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>

        <div className={styles.heroHeader}>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="David McCullough"
            className={styles.heroImg}
          />
          <div className={styles.textContent}>
            <p className={styles.eyebrow}>Front-End Developer · Kansas City, MO</p>
            <h1 className={styles.title}>David McCullough</h1>
            <p className={styles.description}>
              Front-end and software development professional with hands-on training in JavaScript, React,
              TypeScript, Node.js, SQL, REST APIs, GraphQL, and responsive design. Bringing a strong
              operations leadership background with transferable strengths in problem-solving, systems
              thinking, communication, user experience, and process improvement.
            </p>
            <div className={styles.ctaRow}>
              <a
                href="https://github.com/kvothe1387"
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/davidmcc-webdev/"
                className={styles.ctaSecondary}
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a
                href="/assets/resume/David_McCullough_Resume.pdf"
                className={styles.ctaSecondary}
                download
              >
                Download Résumé
              </a>
            </div>
          </div>
        </div>



      </div>
    </section>
  );
};