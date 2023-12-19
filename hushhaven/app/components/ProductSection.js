import React from "react";
import { Image } from "@nextui-org/image";
import styles from "./ProductSection.module.css"; 
import robesImage from '../images/Robes.png'; 

export default function ProductSection() {
  return (
    <section className={styles.productSection}>
      <h2 className={styles.productHeader}>Shop Our Products</h2>
      <div className={styles.productContainer}>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>TOWELS</h3>
          <Image src="../images/Towels.png" alt="towels" className={styles.productImage}/>
        </div>
        <div className={styles.productCard}>
          <h3 className={styles.productTitle}>ROBES</h3>
          <Image src={robesImage} alt="Robes" className={styles.productImage}/>
        </div>
      </div>
    </section>
  );
}
