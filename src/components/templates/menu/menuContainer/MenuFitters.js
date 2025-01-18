"use client";
import { useState } from "react";
import styles from "./menuFilters.module.css";
import { Container } from "react-bootstrap";
import { PiHamburgerLight } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { CiPizza } from "react-icons/ci";
import { BiBowlRice,BiDrink } from "react-icons/bi";
import { LuSalad } from "react-icons/lu";
import { PiCoffeeLight } from "react-icons/pi";

export default function MenuFitters() {
  const [price, setPrice] = useState(50000); // مقدار اولیه روی ۵۰,۰۰۰ تومان

  return (
    <div className={styles.menuFiltersContainer}>
      <Container>
        <div className={styles.menuFilters}>
          <div className={styles.searchBox}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="جستجو..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.categoriesBox}>
            <h3 className={styles.categoriesTitle}>دسته بندی ها</h3>
            <div className={styles.categories}>
              <ul className={styles.categoriesList}>
                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(9)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>همبرگر</p>
                    <PiHamburgerLight className={styles.categorieIcon} />
                  </div>
                </li>

                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(9)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>پیتزا</p>
                    <CiPizza  className={styles.categorieIcon} />
                  </div>
                </li>
                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(20)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>پاستا</p>
                    <BiBowlRice  className={styles.categorieIcon} />
                  </div>
                </li>
                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(5)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>سالاد</p>
                    <LuSalad  className={styles.categorieIcon} />
                  </div>
                </li>
                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(6)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>نوشیدنی سرد</p>
                    <BiDrink className={styles.categorieIcon} />
                  </div>
                </li>
                <li className={styles.categoriesItem}>
                  <div className={styles.categorieItemCountBox}>
                    <span className={styles.categorieCount}>(14)</span>
                  </div>

                  <div className={styles.categorieNameBox}>
                    <p className={styles.categorieName}>نوشیدنی گرم</p>
                    <PiCoffeeLight className={styles.categorieIcon} />
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.filterByPriceBox}>
            <h3 className={styles.filterTitle}>فیلتر بر اساس قیمت</h3>
            <div className={styles.rangeContainer}>
              <input
                type="range"
                min="50000"
                max="1000000"
                step="50000"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className={styles.rangeInput}
              />
              <div className={styles.priceValue}>
                <span className={styles.priceText}>
                  {price.toLocaleString("fa-IR")} تومان
                </span>
              </div>
            </div>
          </div>

          <div className={styles.filterBySizeBox}>
            <h3 className={styles.filterBySizeTitle}>فیلتر بر اساس سایز</h3>
            <div className={styles.filterBySizeItems}>
              <div className={styles.filterBySizeItem}>کوچک</div>
              <div className={styles.filterBySizeItem}>متوسط</div>
              <div className={styles.filterBySizeItem}>بزرگ</div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
