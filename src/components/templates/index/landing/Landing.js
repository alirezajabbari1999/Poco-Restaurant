"use client";
import { useEffect, useState } from "react";
import styles from "./landing.module.css";
import { Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import pizzaImage from "@/public/images/pizza.png";
import panirImage from "@/public/images/khordePanir.png";
import tomatoImage from "@/public/images/tomato.png";
import gharchImage from "@/public/images/gharch.png";
import reyhoonImage from "@/public/images/reyhoon.png";
import bargImage from "@/public/images/barg.png";

export default function Landing() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);

  // ذخیره موقعیت موس
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // ذخیره موقعیت اسکرول
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrollPosition(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // محاسبه استایل مربوط به حرکت موس
  const parallaxStyle = (factor) => ({
    transform: `translate(${mousePosition.x * factor}px, ${
      mousePosition.y * factor
    }px)`,
  });

  // محاسبه استایل مربوط به اسکرول
  const scrollStyle = (factor) => ({
    transform: `translateY(${scrollPosition * factor}px)`,
    transition: "transform 0.1s ease-out",
  });


  return (
    <div className={styles.landingContainer}>
      <Image
        src={tomatoImage}
        alt="Tomato"
        className={`${styles.decorImage} ${styles.tomatoImage}`}
        style={parallaxStyle(-0.01)}
      />
      <Image
        src={panirImage}
        alt="Mushroom"
        className={`${styles.decorImage} ${styles.panirImage}`}
        style={scrollStyle(0.15)}
      />
      <Image
        src={gharchImage}
        alt="Herb"
        className={`${styles.decorImage} ${styles.gharchImage}`}
        style={scrollStyle(0.2)}
      />
      <Image
        src={reyhoonImage}
        alt="Herb"
        className={`${styles.decorImage} ${styles.reyhoonImage}`}
        style={parallaxStyle(0.01)}
      />
      <Image
        src={bargImage}
        alt="Herb"
        className={`${styles.decorImage} ${styles.bargImage}`}
        style={scrollStyle(0.2)}
      />

      <Row className={styles.row}>
        <Col lg={6} sm={12} >
          <div className={styles.rightSide} data-aos="fade-left">
            <h1 className={styles.title} data-aos="fade-left">
              اینجا هر <span className={styles.pizzaWord}>پیتزا</span> داستانی
              دارد!
            </h1>
            <button className={styles.orderBtn} data-aos="fade-up">
              <Link href="/" className={styles.orderBtnLink}>
                اکنون سفارش دهید
              </Link>
            </button>
          </div>
        </Col>

        <Col lg={6} sm={12}>
          <div className={styles.leftSide} data-aos="zoom-in">
            <Image
              src={pizzaImage}
              alt="Pizza Image"
              className={styles.pizzaImage}
              style={scrollStyle(0.15)}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
}
