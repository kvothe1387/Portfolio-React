import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css"

export const Contact = () => {
  return (
    < footer id="contact" className={styles.container}  >
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Reach out requested please!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:dmccullough488@gmail.com">dmccullough488@gmail.com</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/linkedinIcon.png")} alt="LinkedIN icon" />
          <a href="https://www.linkedin.com/in/david-mccullough-ab2a257a">linkedin.com/in/david-mccullough-ab2a257a</a>
        </li>

        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/kvothe1387">github.com/kvothe1387</a>
        </li>

      </ul>
    </footer >

  );
};