"use client";
import styles from "./blogs.module.css";
import { Container } from "react-bootstrap";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa6";
import BlogItem from "./BlogItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function Blogs() {
  return (
    <div className={styles.blogsContainer}>
      <Container>
        <div className={styles.header}>
          <Link href="/" className={styles.link}>
            <span className={styles.linkIconBox}>
              <FaAngleRight className={styles.linkIcon} />
            </span>
            <p className={styles.linkText}>مشاهده همه</p>
          </Link>
          <h2 className={styles.title}>آخرین مقالات</h2>
        </div>

        <div className={styles.blogsItem}>
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            breakpoints={{
              320: { slidesPerView: 1, spaceBetween: 10 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              992: { slidesPerView: 3, spaceBetween: 30 },
            }}
          >
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
            <SwiperSlide>
              <BlogItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

// import styles from "./blogs.module.css";
// import { Container, Row, Col } from "react-bootstrap";
// import Link from "next/link";
// import { FaAngleRight } from "react-icons/fa6";
// import BlogItem from "./BlogItem";

// export default function Blogs() {
//   return (
//     <div className={styles.blogsContainer}>
//       <Container>
//         <div className={styles.header}>
//           <Link href="/" className={styles.link}>
//             <span className={styles.linkIconBox}>
//               <FaAngleRight className={styles.linkIcon} />
//             </span>
//             <p className={styles.linkText}>مشاهده همه</p>
//           </Link>
//           <h2 className={styles.title}>آخرین مقالات</h2>
//         </div>

//         <div className={styles.blogsItem}>
//           <Row>
//             <Col lg={4} md={6} sm={12}>
//               <BlogItem />
//             </Col>
//             <Col lg={4} md={6} sm={12}>
//               <BlogItem />
//             </Col>
//             <Col lg={4} md={6} sm={12}>
//               <BlogItem />
//             </Col>
//           </Row>
//         </div>
//       </Container>
//     </div>
//   );
// }
