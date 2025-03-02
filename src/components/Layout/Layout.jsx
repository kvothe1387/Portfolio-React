// src/components/Layout/Layout.jsx
import React from 'react';
import styles from './Layout.module.css';

export const Layout = ({ children, id, className }) => {
  return (
    <section id={id} className={`${styles.section} ${className || ''}`}>
      <div className={styles.container}>
        {children}
      </div>
    </section>
  );
};