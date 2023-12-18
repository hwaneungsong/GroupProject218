import React from 'react';
import styles from './Footer.module.css'; // Ensure the stylesheet is linked correctly

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.logoContainer}>
        <img src="/path-to-your-logo.png" alt="Hush Haven Logo" className={styles.logo} />
      </div>
      <div className={styles.navContainer}>
        <a href="/home" className={styles.navLink}>Home</a>
        <a href="/shop" className={styles.navLink}>Shop Now</a>
        <a href="/about" className={styles.navLink}>About</a>
        <a href="/reviews" className={styles.navLink}>Reviews</a>
      </div>
      <div className={styles.socialContainer}>
        <span className={styles.socialTitle}>Follow Us</span>
        <a href="/instagram" className={styles.socialLink}>Instagram</a>
        <a href="/twitter" className={styles.socialLink}>Twitter</a>
      </div>
      <div className={styles.newsletterContainer}>
        <input type="text" placeholder="Email Address" className={styles.emailInput} />
        <button className={styles.submitButton}>SUBMIT</button>
      </div>
    </footer>
  );
}
