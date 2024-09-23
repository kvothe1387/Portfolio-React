
import React from "react";
import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Resume } from "./components/Resume/Resume";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Contact } from "./components/Contact/Contact";
import { Hero } from "./components/Hero/Hero";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function App() {

  return (
    <div className={styles.App}>

      <Header />

      <Routes>
        <Route exact path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>
      <Footer />


    </div >
  );
}

export default App;
