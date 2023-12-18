import React from "react";
import styles from "./ProductSection.module.css";

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.productHeader}>Shop Our Products</h2>
      <div className={styles.productContainer}>
        <div className={styles.productCard}>
          <img src="../images/towels.png" alt="Towels" className={styles.productImage}/>
          <h3 className={styles.productTitle}>TOWELS</h3>
        </div>
        <div className={styles.productCard}>
          <img src="../images/robes.png" alt="Robes" className={styles.productImage}/>
          <h3 className={styles.productTitle}>ROBES</h3>
        </div>
      </div>
    </section>
  );
}
