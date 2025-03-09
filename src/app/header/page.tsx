'use client';

import { useState } from "react";
import styles from "@/styles/header.module.css";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for menu toggle

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Hamburger Menu Icon (Visible on Mobile) */}
      <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      {/* Navigation Links */}
      <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
        <a href="#">Home</a>
        <a href="#about">About</a>
        <a href="#journey">Journey</a>
        <a href="#experience">Experience</a>
        <a href="#past-events">Events</a>
      </div>
      <div className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
        <a href="#contact">Contact</a>
        <a href="https://linkedin.com/in/yaro-volkov">LinkedIn</a>
        <a href="https://github.com/yarovolk18">GitHub</a>
        <a href="/resume">Resume</a>
        <a href="/references">References</a>
      </div>
    </nav>
  );
}
