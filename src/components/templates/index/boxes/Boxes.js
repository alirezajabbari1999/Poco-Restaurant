import Box from "./Box";
import styles from "./boxes.module.css";
import { Container, Row, Col } from "react-bootstrap";
import bannerImage1 from "@/public/images/banner1.png";
import bannerImage2 from "@/public/images/banner2.png";
import bannerImage3 from "@/public/images/banner3.png";
import bannerShape1 from "@/public/images/bannerShape.png";
import bannerShape2 from "@/public/images/bannerShape2.png";
import bannerBg from "@/public/images/bannerBg.jpg";

export default function Boxes() {
  return (
    <div className={styles.boxesContainer}>
      <Container>
        <div className={styles.boxes}>
          <Row className={styles.row}>
            <Col xl={4} lg={6} md={12}>
              <Box
                image={bannerImage1}
                shape={bannerShape1}
                title="شعبه نزدیک به خودت رو پیدا کن"
                linkTitle="ارتباط با ما"
                link=""
              />
            </Col>

            <Col xl={4} lg={6} md={12}>
              <Box
                image={bannerImage2}
                shape={bannerShape1}
                backgroundImage={bannerBg}
                title="طعم های دیگر"
                description="SAVE ROOM, WE MADE SALATS"
                price="$12.90"
                priceColor="var(--main-color)"
                descColor="var(--white)"
              />
            </Col>

            <Col xl={4} lg={6} md={12}>
              <Box
                image={bannerImage3}
                shape={bannerShape2}
                title="تخفیف های همیشگی"
                description="پدیده ای جدید از طعم برگر"
                price="$12.90"
                descColor="var(--dark)"
                priceColor="#00a850"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
