import styles from "./blogItem.module.css";
import Image from "next/image";
import Link from "next/link";
import blogImage from "@/public/images/blogImage.webp";

export default function BlogItem() {
  return (
    <div className={styles.blogItem}>
      <div className={styles.imageBox}>
        <Link href="/">
          <Image src={blogImage} alt="blog image" className={styles.image} />
        </Link>
      </div>

      <div className={styles.contentBox}>
        <div className={styles.detailBox}>
          <span className={styles.date}>30 آذر </span> /
          <span className={styles.postText}> پست شده توسط </span>
          <span className={styles.adminName}>علیرضا جباری</span>
        </div>

        <Link href="/" className={styles.blogTitle}>
          10 دلیل برای انجام یک چالش سم زدایی دیجیتال
        </Link>
        <p className={styles.desc}>
          با این حال، انجام کارها به شیوه‌ای درست و هماهنگ، حتی در شرایط دشوار،
          می‌تواند به نتایجی مؤثر منجر شود. با توجه به شرایط و سازگاری با محیط،
          می‌توان از روش‌های متنوعی برای بهبود وضعیت و دستیابی به اهداف استفاده
          کرد. هماهنگی و انطباق با شرایط محیطی، با حفظ تمرکز بر اهداف اصلی، یکی
          از اصول موفقیت به شمار می‌آید.
        </p>
        <Link href="/" className={styles.linkBtn}>
          مطالعه بیشتر
        </Link>
      </div>
    </div>
  );
}
