import styles from "./commentsItem.module.css";
import Image from "next/image";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import userImg from "@/public/images/user.jpg";

export default function CommentsItem() {
  return (
    <div className={styles.comment}>
      <div className={styles.header}>
        <div className={styles.starsBox}>
          <AiOutlineStar className={styles.starIcon} />
          <AiOutlineStar className={styles.starIcon} />
          <AiFillStar className={styles.starIcon} />
          <AiFillStar className={styles.starIcon} />
          <AiFillStar className={styles.starIcon} />
        </div>

        <div className={styles.userInfoBox}>
          <p className={styles.userName}>مریم زارع</p>
          <div className={styles.imageBox}>
            <Image src={userImg} className={styles.image} alt="user image" />
          </div>
        </div>
      </div>

      <div className={styles.commentText}>
        <p className={styles.text}>
          پیتزا فروشی های مد روز را فراموش کنید، اینجا این نقطه پنهان بهترین
          پیتزاها به سبک نیویورک را میپزد.
        </p>
      </div>
    </div>
  );
}
