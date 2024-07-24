import styles from "./styles.module.scss";
import { MdArrowForwardIos } from "react-icons/md";
export default function Comment() {
  return (
    <section className={styles.comment}>
      <h3 className={styles.comment__title}>Leave a Reply</h3>
      <span className={styles.comment__tip}>Required fields are marked *</span>
      <form action="#" method="POST" className={styles.comment__form}>
        <div className={styles.comment__formBlock}>
          <label htmlFor="comment">Comment</label>
          <textarea name="comment" id="comment"></textarea>
        </div>
        <div className={styles.comment__formBlock}>
          <label htmlFor="name">Name*</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div className={styles.comment__formBlock}>
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className={styles.comment__formBlock}>
          <label htmlFor="website">Website*</label>
          <input type="url" id="website" name="website" required />
        </div>
        <div className={styles.comment__formBlock}>
          <label htmlFor="savedata" className={styles.comment__checkbox}>
            <input type="checkbox" id="savedata" name="savedata" />
            Save my name, email, and website in this browser for the next time I
            comment
          </label>
        </div>
        <button type="submit" className={styles.comment__button}>
          Submit
          <MdArrowForwardIos />
        </button>
      </form>
    </section>
  );
}
