"use client";
import { useState, useEffect } from "react";
import styles from "./menuContainer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import MenuFitters from "./MenuFitters";
import MenuItems from "./MenuItems";

export default function MenuContainer() {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className={styles.MenuContainer}>
      <Container>
        <Row>
          <Col lg={3}>
            <MenuFitters setSelectedCategory={setSelectedCategory} />
          </Col>

          <Col lg={9}>
            <MenuItems
              products={products}
              selectedCategory={selectedCategory}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
