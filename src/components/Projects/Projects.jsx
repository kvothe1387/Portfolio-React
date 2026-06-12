import React, { useState } from "react";
import projects from "../../data/projects.json";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

const FEATURED_COUNT = 6;

export const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const featured = projects.slice(0, FEATURED_COUNT);
  const remaining = projects.slice(FEATURED_COUNT);
  const visible = showAll ? projects : featured;

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.sectionLabel}>Projects</h2>
      <p className={styles.sectionSub}>
        A selection of full-stack, front-end, and back-end builds — each with
        source code and live demos where available.
      </p>

      <div className={styles.projects}>
        {visible.map((project, id) => (
          <ProjectCard key={id} project={project} />
        ))}
      </div>

      {remaining.length > 0 && (
        <div className={styles.toggleRow}>
          <button
            className={styles.toggleBtn}
            onClick={() => setShowAll(!showAll)}
            aria-expanded={showAll}
          >
            {showAll
              ? "Show less"
              : `Show ${remaining.length} more projects`}
          </button>
        </div>
      )}
    </section>
  );
};