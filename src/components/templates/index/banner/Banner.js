"use client";
import { useState, useEffect } from "react";
import styles from "./banner.module.css";
import Link from "next/link";
import { Container } from "react-bootstrap";
import Image from "next/image";
import bannerPizza from "@/public/images/bigBannerPizza.png";
import bigBannerShape1 from "@/public/images/bigBannerShape1.png";
import bigBannerShape2 from "@/public/images/bigBannerShape2.png";
import bigBannerShape3 from "@/public/images/bigBannerShape3.png";

export default function Banner() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.bannerContainer}>
      <Image
        src={bigBannerShape3}
        alt="banner section shape image"
        className={`${styles.shape} ${styles.shape3}`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <Image
        src={bigBannerShape2}
        alt="banner section shape image"
        className={`${styles.shape} ${styles.shape2}`}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <Image
        src={bigBannerShape1}
        alt="banner section shape image"
        className={`${styles.shape} ${styles.shape1}`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />
      <div
        className={styles.shape1Box}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      >
        <p className={styles.firstRow}>Get Up to</p>
        <p className={styles.secondRow}>50%</p>
        <p className={styles.thirdRow}>OFF</p>
      </div>

      <Container>
        <div className={styles.banner}>
          <Image
            src={bannerPizza}
            alt="Delicious Pizza"
            className={styles.pizzaImage}
          />

          <div className={styles.textBox}>
            <span className={styles.miniDesc}>Hot Fresh</span>
            <h2 className={styles.title}>HOTDOG</h2>
            <button className={styles.shopBtn}>
              <Link href="/" className={styles.shopLink}>
                ثبت سفارش
              </Link>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
