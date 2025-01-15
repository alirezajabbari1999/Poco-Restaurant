import styles from "./topRecipesItem.module.css";
import Image from "next/image";
import Link from "next/link";
import { Row, Col } from "react-bootstrap";
import { RiShoppingBasketFill } from "react-icons/ri";
import topRecipesItemImage from "@/public/images/topRecipesItem.png";

export default function TopRecipesItem() {
  return (
    <div className={styles.TopRecipesItemCountainer}>
      <div className={styles.TopRecipesItem}>
        <Row>
          <Col xs={8}>
            <div className={styles.rightSide}>
              <div className={styles.shopBox}>
                <RiShoppingBasketFill className={styles.shopIcon} />
              </div>

              <div className={styles.textBox}>
                <Link href="/" className={styles.title}>
                  اسموتی توت فرنگی
                </Link>
                <Link href="/" className={styles.category}>
                  نوشیدنی سرد
                </Link>
                <p className={styles.price}>70000 هزارتومان</p>
              </div>
            </div>
          </Col>

          <Col xs={4}>
            <div className={styles.leftSide}>
              <Image
                src={topRecipesItemImage}
                className={styles.image}
                alt="top Recipes Item Image"
              />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
