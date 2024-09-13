import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {

  return (
    <section>
      <h2>About</h2>
      <div>
        <img src={getImageUrl("about/aboutImage.png")} alt="About me" />

        <ul>

          <li>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div>
              <h3>Frontend Developer</h3>
              <p>I'm a frontend developer with experience building responsive & optimized sites using
                JavaScript, React, TypeScript, Node, Bootstrap, and NPM.
              </p>
            </div>
          </li>

          <li>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div>
              <h3>Backend Developer</h3>
              <p>I have experience developing fast and optimised back-end systems and APIs using Node, JavaScript, Express, SQL, and Postgres.
              </p>
            </div>
          </li>

        </ul>

      </div>
    </section>


  );
};