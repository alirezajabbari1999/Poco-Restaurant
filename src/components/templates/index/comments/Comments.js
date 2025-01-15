"use client";
import styles from "./comments.module.css";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import CommentsItem from "./CommentsItem";

export default function Comments() {
  return (
    <div className={styles.commentsContainer}>
      <Container>
        <h2 className={styles.title}>آنچه مشتریان می‌گویند</h2>
        <div className={styles.sliderBox}>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              1: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              992: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Pagination, Autoplay]}
            className={styles.mySwiper}
          >
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
            <SwiperSlide>
              <CommentsItem />
            </SwiperSlide>
          </Swiper>
        </div>
      </Container>
    </div>
  );
}
