import React from "react";
import styles from "./About.module.css";
import skills from "../../data/skills.json";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About Me</h2>

      <div className={styles.grid}>
        <div className={styles.card}>
          <span className={styles.cardIcon}>🖥️</span>
          <div>
            <h3>Front-End Development</h3>
            <p>Building responsive, accessible interfaces with React, TypeScript, JavaScript, HTML, and CSS. Comfortable with DOM manipulation, component architecture, and modern tooling like GitHub Copilot.</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon}>⚙️</span>
          <div>
            <h3>Formal Training + Self-Directed Growth</h3>
            <p>Completed 240 hours of full-stack training at the University of Kansas (90% grade, 24 CEU) covering MERN/PERN stacks, MVC, Agile, Cypress, and API design. Followed that with Scrimba's Advanced JavaScript and Advanced React coursework through 2025–2026.</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon}>🎓</span>
          <div>
            <h3>Outcomes-Driven by Nature</h3>
            <p>Ranked 3rd lowest employee turnover among 150 East Division locations at Smashburger. Achieved top-10 sales growth and customer satisfaction across multiple stores. Developed 3 assistant managers into General Manager roles. These instincts — measure it, improve it, develop people — carry directly into engineering work.</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon}>🧩</span>
          <div>
            <h3>Systems Thinker, Fast Troubleshooter</h3>
            <p>16 years diagnosing and fixing operational breakdowns in real time — inventory systems, team execution, service consistency — built a problem-solving instinct that maps cleanly onto debugging, code architecture, and building software that actually holds up under pressure.</p>
          </div>
        </div>
      </div>

      <div className={styles.skillsRow}>
        <p className={styles.skillsLabel}>Tools & technologies</p>
        <div className={styles.skills}>
          {skills.map((skill, id) => (
            <div key={id} className={styles.skillItem}>
              <div className={styles.skillImageContainer}>
                <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
              </div>
              <p>{skill.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};