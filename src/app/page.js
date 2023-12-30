"use client";
import Calculator from "../components/Calculator";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Calculator />
      <footer className={styles.footer}>
        <p>©2023. Simulasi Studio</p>
        <p>Version 0.1.0</p>
      </footer>
    </main>
  );
}
