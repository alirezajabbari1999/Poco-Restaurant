import styles from "./product.module.css";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";

export default function Product({
  name,
  price,
  // category,
  img,
  // size,
  materials,
}) {
  return (
    <div className={styles.popularItem}>
      <div className={styles.addToWishlist}>
        <IoMdHeart className={styles.wishlistIcon} />
      </div>

      <Link href="/">
        <div className={styles.imageBox}>
          <Image
            src={img}
            alt="Popular section images"
            width={500}
            height={500}
            className={styles.image}
          />
        </div>
      </Link>

      <div className={styles.detailsBox}>
        <div className={styles.starBox}>
          <AiOutlineStar className={styles.emptyStar} />
          <AiOutlineStar className={styles.emptyStar} />
          <AiFillStar className={styles.fullStar} />
          <AiFillStar className={styles.fullStar} />
          <AiFillStar className={styles.fullStar} />
        </div>
        <p className={styles.title}>
          <Link href="/" className={styles.titleLink}>
            {name}
          </Link>
        </p>
        <p className={styles.desc}>{materials}</p>

        <div className={styles.priceBox}>
          <p className={styles.price}>{price?.toLocaleString()} هزارتومان</p>
          <button className={styles.shoppingBasket}>
            <RiShoppingBasketFill className={styles.basketIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
