import styles from "./menuContainer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import MenuFitters from "./MenuFitters";

export default function MenuContainer() {
  return (
    <div className={styles.MenuContainer}>
      <Container>
        <Row>
          {/* <Col lg={3} style={{ backgroundColor: "red" }}> */}
          <Col lg={3} >
            <MenuFitters />
          </Col>

          <Col lg={9}></Col>
        </Row>
      </Container>
    </div>
  );
}
