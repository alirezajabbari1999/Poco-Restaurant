import styles from "./breadCrumb.module.css";
import Link from "next/link";
import { FaChevronLeft } from "react-icons/fa6";

export default function BreadCrumb({ route }) {
  return (
    <div className={styles.breadCrumb}>
      <div className={styles.titleBox}>
        <h1 className={styles.title}>{route}</h1>
      </div>

      <div className={styles.roadBox}>
        <Link href="/" className={styles.link}>
          خانه
        </Link>
        <span className={styles.iconBox}>
          <FaChevronLeft className={styles.icon} />
        </span>
        <p className={styles.route}>{route}</p>
      </div>
    </div>
  );
}
