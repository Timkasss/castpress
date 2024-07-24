import Image from "next/image";
import styles from "./styles.module.scss";
import { IoArrowUndo } from "react-icons/io5";
import nick from "@/public/nick.jpg";
//import aida from "@/public/aida.jpg";

export default function CommentBlock() {
  return (
    <article className={styles.comment}>
      <div>
        <div>
          <h4 className={styles.comment__fullname}>Mark Newman</h4>
          <time dateTime="2024-06-12" className={styles.comment__time}>
            Oct 24.2020
          </time>
        </div>
        <p className={styles.comment__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at arcu
          dui. Aenean placerat.
        </p>
        <button className={styles.comment__reply}>
          <IoArrowUndo />
          Reply
        </button>
      </div>
      <div className={styles.comment__wrapperImage}>
        <Image
          src={nick}
          width={400}
          height={400}
          alt="avatar"
          className={styles.comment__image}
        />
      </div>
    </article>
  );
}
