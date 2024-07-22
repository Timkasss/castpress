import styles from "./styles.module.scss";

import { FaArrowRightLong } from "react-icons/fa6";

export default function NewsForm() {
  return (
    <form action="" method="POST" name="news" className={styles.form}>
      <h2 className={styles.form__title}>Newsletter</h2>
      <label htmlFor="email" className={styles.form__label}>
        Sign up now; get closer to our action.
      </label>
      <div className={styles.form__wrapper}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email  adress..."
          className={styles.form__input}
        />
        <button type="submit" className={styles.form__button}>
          <FaArrowRightLong className={styles.form__arrow} />
        </button>
      </div>
    </form>
  );
}
