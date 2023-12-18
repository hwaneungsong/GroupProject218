import React from "react";
import styles from './HeroSection.module.css'
import { Image } from "@nextui-org/image";
import { Button } from "@nextui-org/react";

export default function HeroSection() {
  return (
    <section className={styles.herostyle}>
          <Image
          src="../images/HushHavenHeroPic.png"
          height={849}
          width={1440}
          alt="HushHaven Hero Section Image"
          />
        <section className={styles.textoverlay}>
          <section className={styles.textoutline}>
          <h1>
              EMBRACE TRANQUILITY
            </h1>
          </section>
        </section>
        <section className={styles.herobutton}>
          <Button size="lg" className="bg-amber-100 rounded-[83px]">
            Sign up with Email
          </Button>
        </section>
    </section>
  );
};

