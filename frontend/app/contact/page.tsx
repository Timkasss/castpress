import { MdArrowForwardIos } from "react-icons/md";
import styles from "./styles.module.scss";
import { source } from "../ui/fonts";
export default function Page() {
  return (
    <section className={styles.contact}>
      <h3 className={styles.contact__title}>Contact</h3>
      <span className={styles.contact__tip}>
        Love to hear your thoughts, fears & feelings...
      </span>
      <form action="#" method="POST" className={styles.contact__form}>
        <div className={styles.contact__formBlock}>
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Enter your name"
          />
        </div>
        <div className={styles.contact__formBlock}>
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email"
          />
        </div>
        <div className={`${styles.contact__formBlock} ${source.className}`}>
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <button type="submit" className={styles.contact__button}>
          Submit
          <MdArrowForwardIos />
        </button>
      </form>
    </section>
  );
}
