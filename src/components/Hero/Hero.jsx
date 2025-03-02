import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div className={styles.heroHeader}>
          <div className={styles.textContent}>
            <h1 className={styles.title}>Hello, I'm David McCullough</h1>
            <p className={styles.description}>
              I'm a full-stack developer with a unique background in leadership and operational excellence. I combine meticulous attention to detail with a passion for building elegant, efficient solutions—all while developing the people around me.
            </p>
          </div>
          <img
            src={getImageUrl("hero/heroImage.png")}
            alt="David McCullough"
            className={styles.heroImg}
          />
        </div>

        <section className={styles.skillsSection}>
          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsHeading}>Technical & Analytical Skills</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🔍</span>
                <span className={styles.skillText}>Analytical thinker who thrives on discovering solutions hidden in the details</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🧩</span>
                <span className={styles.skillText}>I excel at connecting seemingly unrelated concepts to see the bigger picture</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>⚙️</span>
                <span className={styles.skillText}>System optimizer who transforms inefficient processes into streamlined workflows</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>👨‍🏫</span>
                <span className={styles.skillText}>Mentor and coach with a proven track record of developing high-performing teams</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📍</span>
                <span className={styles.skillText}>Training specialist who creates effective learning pathways and development programs</span>
              </li>
            </ul>
          </div>

          <div className={styles.skillsColumn}>
            <h3 className={styles.skillsHeading}>Interpersonal & Leadership Skills</h3>
            <ul className={styles.skillsList}>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>😊</span>
                <span className={styles.skillText}>Firm believer that the best work happens when we're enjoying what we do</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🧡</span>
                <span className={styles.skillText}>Relationship builder who finds common ground with diverse teammates</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>📊</span>
                <span className={styles.skillText}>Data-driven decision maker with a methodical approach to problem-solving</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>✨</span>
                <span className={styles.skillText}>Creator of environments where efficiency, growth, and enjoyment coexist</span>
              </li>
              <li className={styles.skillItem}>
                <span className={styles.skillIcon}>🖼️</span>
                <span className={styles.skillText}>As M.C Escher once said, "We adore chaos because we love to produce order"</span>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </section>
  );
};