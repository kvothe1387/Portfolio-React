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
              16 years running high-volume operations taught me how systems break and how to fix them.
              Now I build the software side — JavaScript, React, TypeScript, Node.js, and full-stack web applications.
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

        <div className={styles.stackRow}>
          {[
            "JavaScript", "React", "TypeScript", "Git / GitHub",
            "Node.js", "Express.js", "SQL", "MongoDB",
            "REST APIs", "GraphQL", "HTML & CSS",
          ].map((tech) => (
            <span key={tech} className={styles.stackPill}>{tech}</span>
          ))}
        </div>

      </div>
    </section>
  );
};