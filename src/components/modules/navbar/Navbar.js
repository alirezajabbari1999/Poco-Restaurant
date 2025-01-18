"use client";
import { useState, useEffect } from "react";
import styles from "./navbar.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import logoImage from "@/public/images/logo_svg.svg";
import { FiSearch } from "react-icons/fi";
import { FaUser } from "react-icons/fa";
import { IoHeart } from "react-icons/io5";
import { RiShoppingBasketFill } from "react-icons/ri";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`${styles.navbarContainer} ${
        isScrolled ? styles.scrolled : ""
      }`}
    >
      <Container>
        <div className={styles.navbar}>
          <div className={styles.logoBox}>
            <Image src={logoImage} alt="logo" />
          </div>

          <div className={styles.menuBox}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  خانه
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/menu" className={styles.menuLink}>
                  منو
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  درباره ما
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  وبلاگ ها
                </Link>
              </li>
              <li className={styles.menuItem}>
                <Link href="/" className={styles.menuLink}>
                  ارتباط با ما
                </Link>
              </li>
            </ul>
          </div>

          <div className={styles.iconsBox}>
            <div className={styles.iconBox}>
              <FiSearch className={styles.icon} />
            </div>

            <div className={styles.iconBox}>
              <FaUser className={styles.icon} />
            </div>

            <div className={styles.iconBox}>
              <Link href="/">
                <IoHeart className={styles.icon} />
                <span className={styles.wishlistCount}>0</span>
              </Link>
            </div>

            <div className={styles.iconBox}>
              <Link href="/">
                <RiShoppingBasketFill className={styles.icon} />
                <span className={styles.shoppingCount}>0</span>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
