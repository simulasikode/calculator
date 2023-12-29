"use client";
import Calculator from "../components/Calculator";
import styles from "./page.module.scss";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Calculator />
      <Footer />
    </main>
  );
}
