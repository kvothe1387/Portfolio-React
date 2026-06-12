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
            <h3>Back-End & Full-Stack</h3>
            <p>Designing APIs and server-side logic with Node.js, Express, REST, and GraphQL. Database experience with PostgreSQL, MongoDB, Sequelize, and Mongoose. Deployed on Render, Netlify, and GitHub Pages.</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon}>🎓</span>
          <div>
            <h3>UX Certificate — University of Kansas</h3>
            <p>Completed 240 hours of full-stack training at the UX Boot Camp (2024). Coursework covered MERN and PERN stacks, MVC architecture, Agile, testing with Cypress, and REST and GraphQL API design.</p>
          </div>
        </div>

        <div className={styles.card}>
          <span className={styles.cardIcon}>🧩</span>
          <div>
            <h3>Leadership Translated to Tech</h3>
            <p>16 years in high-volume restaurant operations — managing teams, reducing turnover, and driving measurable outcomes. Those same instincts for systems thinking, process improvement, and people development carry directly into engineering work.</p>
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