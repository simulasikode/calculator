"use client";
import styles from "./footer.module.scss";

export default function Footer() {
  return (
    <div>
      <div className={styles.footer}>
        <div>
          <span>
            <h3>©2023. Simulasi</h3>
            <span>
              <p>Term of use</p>
              <p>Privacy policy</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}
