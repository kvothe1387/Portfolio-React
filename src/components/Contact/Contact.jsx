import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.inner}>

        <div className={styles.left}>
          <h2 className={styles.heading}>Let's Connect</h2>
          <p className={styles.sub}>
            Open to front-end developer, junior web developer, software developer, and related technology roles. Let's talk.
          </p>
          <a
            href="/assets/resume/David_McCullough_Resume.pdf"
            className={styles.resumeBtn}
            download
          >
            Download Résumé
          </a>
        </div>

        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={getImageUrl("contact/emailIcon.png")} alt="" aria-hidden="true" />
            <a href="mailto:dmccullough488@gmail.com">dmccullough488@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/linkedinIcon.png")} alt="" aria-hidden="true" />
            <a href="https://www.linkedin.com/in/davidmcc-webdev/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/davidmcc-webdev
            </a>
          </li>
          <li className={styles.link}>
            <img src={getImageUrl("contact/githubIcon.png")} alt="" aria-hidden="true" />
            <a href="https://github.com/kvothe1387" target="_blank" rel="noopener noreferrer">
              github.com/kvothe1387
            </a>
          </li>
        </ul>

      </div>
    </footer>
  );
};