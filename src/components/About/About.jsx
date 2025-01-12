import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>
      <div className={styles.content}>
        <img src={getImageUrl("about/aboutImage.png")} alt="About me" className={styles.aboutImg} />

        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>I create responsive, user-friendly websites using HTML, CSS, JavaScript, React, and TypeScript. I have
                experience with DOM manipulation, Browser APIs, and tools like GitHub Copilot.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>Proficient in building efficient back-end systems and APIs with Node.js, Express, SQL, and
                PostgreSQL. I also have experience with NoSQL databases, CI/CD pipelines, and Python
                fundamentals, including Object-Oriented Programming.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>LEGO'ing My Restaurant Career into Full-Stack Development </h3>
              <p>Leveraging leadership skills from managing high-performing teams in the restaurant industry, I'm
                now applying that drive to build dynamic, user-friendly applications. Recently, I earned my Software
                Development Certificate from the University of Kansas, and I'm excited to continue growing in tech!
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Certified Software Developer</h3>
              <p>Graduated from the University of Kansas Full-Stack Web Development Bootcamp, specializing
                in modern technologies like JavaScript, React, Node.js, Express, and SQL.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};