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
              <p>I'm a frontend developer with experience building responsive & optimized sites using
                JavaScript, React, TypeScript, Node, Bootstrap, and NPM.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs using Node, JavaScript, Express, SQL, and Postgres.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>LEGO'ing my restaurant career </h3>
              <p>FIIIIIXXXXX MEEEEE LAAAAATTTEEERRR!!!!
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>
  );
};