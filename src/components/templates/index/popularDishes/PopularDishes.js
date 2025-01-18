"use client";
import { useState, useEffect } from "react";
import styles from "./popularDishes.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import PopularItem from "./PopularItem";
import shape1 from "@/public/images/popularShape1.png";
import shape2 from "@/public/images/popularShape2.png";
import shape3 from "@/public/images/popularShape3.png";

export default function PopularDishes() {
  const [activeTab, setActiveTab] = useState("همبرگر");
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
    <div className={styles.PopularDishesContainer}>
      {/* shapes Images */}
      <Image
        src={shape1}
        alt="popular section shape"
        className={`${styles.shape} ${styles.shape1}`}
        style={{ transform: `translateY(${scrollY * 0.2}px)` }}
      />
      <Image
        src={shape2}
        alt="popular section shape"
        className={`${styles.shape} ${styles.shape2}`}
        style={{ transform: `translateY(${scrollY * -0.2}px)` }}
      />
      <Image
        src={shape3}
        alt="popular section shape"
        className={`${styles.shape} ${styles.shape3}`}
        style={{ transform: `translateY(${scrollY * 0.1}px)` }}
      />

      <Container>
        <h2 className={styles.title} data-aos="zoom-in">غذاهای محبوب</h2>

        <div className={styles.tabs} data-aos="zoom-in">
          <button
            className={`${styles.tab} ${
              activeTab === "همبرگر" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("همبرگر")}
          >
            همبرگر
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "سالاد" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("سالاد")}
          >
            سالاد
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "سوشی" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("سوشی")}
          >
            سوشی
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "پیتزا" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("پیتزا")}
          >
            پیتزا
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "نوشیدنی" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("نوشیدنی")}
          >
            نوشیدنی
          </button>
        </div>

        <div className={styles.popularItems}>
          <Row className={styles.row}>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
            <Col lg={3} md={4} xs={6} data-aos="fade-up">
              <PopularItem />
            </Col>
          </Row>
        </div>

        <div className={styles.menuBtnBox}>
          <Link href="/" className={styles.menuBtn}>
            منو کامل
          </Link>
        </div>
      </Container>
    </div>
  );
}
