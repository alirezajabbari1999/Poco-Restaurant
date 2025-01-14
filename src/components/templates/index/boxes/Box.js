import styles from "./box.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Box({
  title,
  titleColor,
  description,
  descColor,
  image,
  backgroundImage,
  linkTitle,
  link,
  shape,
  price,
  priceColor,
}) {
  return (
    <div
      className={styles.box}
      style={
        backgroundImage
          ? { backgroundImage: `url(${backgroundImage.src})` }
          : {}
      }
    >
      <div className={styles.rightSide}>
        <div className={styles.imageBox}>
          <Image src={image} alt="banner image" className={styles.image} />
          <Image src={shape} alt="banner shape" className={styles.shape} />
        </div>
      </div>

      <div className={styles.leftSide}>
        <p
          className={styles.title}
          style={titleColor ? { color: titleColor } : {}}
        >
          {title}
        </p>
        {description && (
          <p
            className={styles.desc}
            style={descColor ? { color: descColor } : {}}
          >
            {description}
          </p>
        )}
        {price && (
          <span
            className={styles.price}
            style={priceColor ? { color: priceColor } : {}}
          >
            {price}
          </span>
        )}
        {linkTitle && (
          <Link href={link} className={styles.link}>
            {linkTitle}
          </Link>
        )}
      </div>
    </div>
  );
}
