// import styles from "./menus.module.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Link from "next/link";
// import Image from "next/image";
// import drinksImage from "@/public/images/category88.png";
// import saucesImage from "@/public/images/category77.png";
// import chikenImage from "@/public/images/category66.png";
// import burgerImage from "@/public/images/category55.png";
// import boxMealsImage from "@/public/images/category44.png";
// import pizzaImage from "@/public/images/category33.png";
// import kidsMenusImage from "@/public/images/category-22.png";
// import comboImage from "@/public/images/category-11.png";

// export default function Menus() {
//   // تعریف آرایه تصاویر
//   const menuItems = [
//     {
//       id: 1,
//       image: drinksImage,
//       link: "/",
//       title: "نوشیدنی‌ها",
//     },
//     {
//       id: 2,
//       image: saucesImage,
//       link: "/",
//       title: "سس ها",
//     },
//     {
//       id: 3,
//       image: chikenImage,
//       link: "/",
//       title: "مرغ",
//     },
//     {
//       id: 4,
//       image: burgerImage,
//       link: "/",
//       title: "همبرگر",
//     },
//     {
//       id: 5,
//       image: boxMealsImage,
//       link: "/",
//       title: "باکس غذا",
//     },
//     {
//       id: 6,
//       image: pizzaImage,
//       link: "/",
//       title: "پیتزا",
//     },
//     {
//       id: 7,
//       image: kidsMenusImage,
//       link: "/",
//       title: "منو کودک",
//     },
//     {
//       id: 8,
//       image: comboImage,
//       link: "/",
//       title: "منو ترکیبی",
//     },
//   ];

//   return (
//     <div className={styles.menusContainer}>
//       <Container>
//         <div className={styles.menu}>
//           <button className={styles.menuBtn}>
//             <Link href="/" className={styles.menuLink}>
//               منو ها
//             </Link>
//           </button>

//           <div className={styles.menusItemsBox}>
//             <Row className={styles.row}>
//               {menuItems.map((item) => (
//                 <Col key={item.id} lg={1} md={3} xs={6} className={`${styles.col} column-lg-8`}>
//                   <Link href={item.link} className={styles.menusItemsLink}>
//                     <div className={styles.menuItem}>
//                       <div className={styles.imageBox}>
//                         <Image
//                           src={item.image}
//                           alt="menus item image"
//                           className={styles.image}
//                         />
//                       </div>
//                       <span className={styles.title}>{item.title}</span>
//                     </div>
//                   </Link>
//                 </Col>
//               ))}
//             </Row>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// }

import styles from "./menus.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import Image from "next/image";
import drinksImage from "@/public/images/category88.png";
import saucesImage from "@/public/images/category77.png";
import chikenImage from "@/public/images/category66.png";
import burgerImage from "@/public/images/category55.png";
import boxMealsImage from "@/public/images/category44.png";
import pizzaImage from "@/public/images/category33.png";
import kidsMenusImage from "@/public/images/category-22.png";
import comboImage from "@/public/images/category-11.png";
import yellowBlurb from "@/public/images/yellow-blurb.svg"; // مسیر تصویر SVG شما

export default function Menus() {
  const menuItems = [
    {
      id: 1,
      image: drinksImage,
      link: "/",
      title: "نوشیدنی‌ها",
    },
    {
      id: 2,
      image: saucesImage,
      link: "/",
      title: "سس ها",
    },
    {
      id: 3,
      image: chikenImage,
      link: "/",
      title: "مرغ",
    },
    {
      id: 4,
      image: burgerImage,
      link: "/",
      title: "همبرگر",
    },
    {
      id: 5,
      image: boxMealsImage,
      link: "/",
      title: "باکس غذا",
    },
    {
      id: 6,
      image: pizzaImage,
      link: "/",
      title: "پیتزا",
    },
    {
      id: 7,
      image: kidsMenusImage,
      link: "/",
      title: "منو کودک",
    },
    {
      id: 8,
      image: comboImage,
      link: "/",
      title: "منو ترکیبی",
    },
  ];
  return (
    <div className={styles.menusContainer}>
      <Container>
        <div className={styles.menu}>
          <button className={styles.menuBtn}>
            <Link href="/" className={styles.menuLink}>
              منو ها
            </Link>
          </button>

          <div className={styles.menusItemsBox}>
            <Row className={styles.row}>
              {menuItems.map((item,index) => (
                <Col
                  key={item.id}
                  lg={1}
                  md={3}
                  xs={6}
                  className={`${styles.col} column-lg-8`}
                  data-aos="fade-up"
                  data-aos-delay={`${index * 100}`}
                >
                  <Link href={item.link} className={styles.menusItemsLink}>
                    <div className={styles.menuItem}>
                      <div className={styles.imageBox}>
                        <Image
                          src={item.image}
                          alt="menus item image"
                          className={styles.image}
                        />
                      </div>
                      <span className={styles.title}>{item.title}</span>
                    </div>
                  </Link>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
}
