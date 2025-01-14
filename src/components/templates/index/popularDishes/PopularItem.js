import styles from "./popularItem.module.css";
import Image from "next/image";
import Link from "next/link";
import img1 from "@/public/images/popular.png";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { RiShoppingBasketFill } from "react-icons/ri";
import { IoMdHeart } from "react-icons/io";

export default function PopularItem() {
  return (
    <div className={styles.popularItem}>
      <div className={styles.addToWishlist}>
        <IoMdHeart className={styles.wishlistIcon}/>
      </div>
      
      <Link href="/">
        <div className={styles.imageBox}>
          <Image
            src={img1}
            alt="Popular section images"
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
            سه پنیر
          </Link>
        </p>
        <p className={styles.desc}>
          پپرونی، کابانوسی، قارچ، فلفل دلمه ای، زیتون سیاه و موزارلای کشدار
        </p>

        <div className={styles.priceBox}>
          <p className={styles.price}>250000 هزارتومان</p>
          <button className={styles.shoppingBasket}>
            <RiShoppingBasketFill className={styles.basketIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}
