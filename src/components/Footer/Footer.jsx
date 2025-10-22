import React from "react";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Наші соцмережі:
        <a href="https://www.instagram.com/ssherliann/" target="_blank" rel="noreferrer"> Instagram</a>,
        <a href="https://youtube.com/playlist?list=PLe8V4zbzuUiQF--Zh3XTA-D51bKFj7tOW&si=Df8sgA2Bol36M9FY" target="_blank" rel="noreferrer"> Youtube</a>
      </p>
      <p>&copy; 2025 NihongoGate</p>
    </footer>
  );
}

export default Footer;
