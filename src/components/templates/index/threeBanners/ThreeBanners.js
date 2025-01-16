import styles from "./threeBanners.module.css";
import { Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import threeBaneersSalad from "@/public/images/threeBaneersSalad.png";
import threeBaneersBerger from "@/public/images/threeBaneersBerger.png";
import threeBaneersChicken from "@/public/images/threeBaneersChicken.png";

export default function ThreeBanners() {
  return (
    <div className={styles.threeBannersContainer}>
      <Row className={styles.row}>
        <Col lg={4} md={{ span: 12, order: 3 }} className={styles.col}>
          <div
            className={`${styles.threeBannersItem} ${styles.saladContainer}`}
          >
            <div className={styles.contentBox}>
              <p className={styles.header}>Hot Fresh</p>
              <p className={`${styles.title} ${styles.saladTitle}`}>سالاد</p>
              <p className={styles.desc}>پدیده ای جدید از طعم سالاد</p>
              <Link href="/" className={styles.orderBtn}>
                سفارش
              </Link>
            </div>

            <div className={styles.imageBox}>
              <Image
                src={threeBaneersSalad}
                className={`${styles.image} ${styles.saladImage}`}
                alt="banner image"
              />
            </div>
          </div>
        </Col>

        <Col lg={4} md={{ span: 6, order: 1 }} className={styles.col}>
          <div
            className={`${styles.threeBannersItem} ${styles.bergerContainer}`}
          >
            <div className={styles.contentBox}>
              <p className={styles.header}>House</p>
              <p className={`${styles.title} ${styles.bergerTitle}`}>همبرگر</p>
              <p className={styles.desc}>همبرگرهای فضایی</p>
              <Link href="/" className={styles.orderBtn}>
                سفارش
              </Link>
            </div>

            <div className={styles.imageBox}>
              <Image
                src={threeBaneersBerger}
                className={styles.image}
                alt="banner image"
              />
            </div>
          </div>
        </Col>

        <Col lg={4} md={{ span: 6, order: 2 }} className={styles.col}>
          <div
            className={`${styles.threeBannersItem} ${styles.chickenContainer}`}
          >
            <div className={styles.contentBox}>
              <p className={styles.header}>Fast Food</p>
              <p className={`${styles.title} ${styles.chickenTitle}`}>سوخاری</p>
              <p className={styles.desc}>سوخاری ای که هیچ جا نخوردی</p>
              <Link href="/" className={styles.orderBtn}>
                سفارش
              </Link>
            </div>

            <div className={styles.imageBox}>
              <Image
                src={threeBaneersChicken}
                className={styles.image}
                alt="banner image"
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
