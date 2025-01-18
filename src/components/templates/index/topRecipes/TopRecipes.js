import styles from "./topRecipes.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import topRecipesBanner from "@/public/images/topRecipesBanner.jpg";
import { FaAngleRight } from "react-icons/fa6";
import TopRecipesItem from "./TopRecipesItem";

export default function TopRecipes() {
  return (
    <div className={styles.TopRecipesContainer}>
      <Container className={styles.container}>
        <Row>
          <Col lg={4} sm={12} className="order-2 order-lg-1" data-aos="zoom-in">
            <div className={styles.imageBox}>
              <div className={styles.imageTextBox}>
                <p className={styles.imageDesc}>Super Delicious</p>
                <p className={styles.imageTitle}>CHICKEN</p>
                <p className={styles.callText}>: CALL US NOW</p>
                <p className={styles.number}>21-88646301+</p>
              </div>
              <Image
                src={topRecipesBanner}
                className={styles.image}
                alt="Top Recipes Banner"
              />
            </div>
          </Col>

          <Col lg={8} sm={12} className="order-1 order-lg-2">
            <div className={styles.header} data-aos="fade-up">
              <Link href="/" className={styles.link}>
                <span className={styles.linkIconBox}>
                  <FaAngleRight className={styles.linkIcon} />
                </span>
                <p className={styles.linkText}>مشاهده همه</p>
              </Link>
              <h2 className={styles.title}>غذاهای پیشنهادی</h2>
            </div>

            <div className={styles.itemsBox} data-aos="fade-right">
              <Row>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
                <Col sm={6}>
                  <TopRecipesItem />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
