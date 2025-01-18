import styles from "./footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import logo from "@/public/images/logo_svg.svg";

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <Container>
        <div className={styles.logoBox} data-aos="zoom-in">
          <span className={styles.logoLine}></span>
          <Image src={logo} alt="logo" className={styles.logo} />
          <span className={styles.logoLine}></span>
        </div>

        <div className={styles.contentBox} data-aos="fade-up">
          <Row>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.col}>
                <h4 className={styles.colHeader}>آدرس</h4>
                <p className={styles.desc}>
                  فارس،شیراز،ستارخان،کافه رستوران پوکو
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.col}>
                <h4 className={styles.colHeader}>رزرو میز</h4>
                <p className={styles.desc}>
                  برای تجربه‌ای بهتر و اطمینان از داشتن میز در زمان دلخواه،
                  پیشنهاد می‌کنیم میز خود را از قبل رزرو کنید. برای رزرو با ما
                  تماس بگیرید:
                </p>
                <p className={styles.phoneNumber}>21-88646301+</p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.col}>
                <h4 className={styles.colHeader}>ساعات کاری</h4>
                <p className={styles.desc}>
                  شنبه تا پنجشنبه :<span className={styles.clock}> 8 - 16</span>
                </p>
                <p className={styles.desc}>
                  جمعه :<span className={styles.clock}> 9 - 17</span>
                </p>
              </div>
            </Col>
            <Col lg={3} md={6} sm={12}>
              <div className={styles.col}>
                <h4 className={styles.colHeader}>خبرنامه</h4>
                <p className={styles.desc}>
                  برای اطلاع از آخرین به روز رسانی ها در خبرنامه هفتگی مشترک
                  شوید
                </p>
                <div className={styles.inputBox}>
                  <button className={styles.subscribeBtn}>مشترک شدن</button>
                  <input
                    type="text"
                    placeholder="Your Email..."
                    className={styles.input}
                  />
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
