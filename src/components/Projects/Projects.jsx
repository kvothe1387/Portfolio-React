import React from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.sectionLabel}>Projects</h2>
      <p className={styles.sectionSub}>A selection of full-stack, front-end, and back-end builds — each with source code and live demos where available.</p>
      <div className={styles.projects}>
        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};