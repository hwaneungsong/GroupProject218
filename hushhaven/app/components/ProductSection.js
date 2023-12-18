import React from "react";
import styles from "./ProductSection.module.css";
<<<<<<< HEAD
=======
import towelsImage from '../images/Towels.png'; 
import robesImage from '../images/Robes.png'; 
>>>>>>> 3070143418e73041ec49b9566c34ae05898118a0

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.productHeader}>Shop Our Products</h2>
      <div className={styles.productContainer}>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>TOWELS</h3>
<<<<<<< HEAD
          <img src="/images/Towels.png" alt="Towels" className={styles.productImage}/>
        </div>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>ROBES</h3>
          <img src="/images/Robes.png" alt="Robes" className={styles.productImage}/>
=======
          <img src={towelsImage} alt="Towels" className={styles.productImage}/>
        </div>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>ROBES</h3>
          <img src={robesImage} alt="Robes" className={styles.productImage}/>
>>>>>>> 3070143418e73041ec49b9566c34ae05898118a0
        </div>
      </div>
    </section>
  );
}
<<<<<<< HEAD
=======

>>>>>>> 3070143418e73041ec49b9566c34ae05898118a0
