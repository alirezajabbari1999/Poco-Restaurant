"use client";
import { useState } from "react";
import Product from "@/src/components/modules/product/Product";
import styles from "./menuItems.module.css";
import { Row, Col } from "react-bootstrap";

export default function MenuItems({ products, selectedCategory }) {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className={styles.menuItemsContainer}>
      <div className={styles.header}>
        <p className={styles.headerDesc}>نمایش 1 - 24 محصول از 54 محصول</p>
      </div>

      <div className={styles.products}>
        <Row>
          {filteredProducts.map((product, index) => (
            <Col lg={3} key={index + 1}>
              <Product {...product} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
