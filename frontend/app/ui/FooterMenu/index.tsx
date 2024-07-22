import styles from "./styles.module.scss";

export default function FooterMenu() {
  return (
    <nav className={styles.footerMenu}>
      <ul className={styles.footerMenu__list}>
        <li className={styles.footerMenu__item}>
          <a href="#">Episodes</a>
        </li>
        <li className={styles.footerMenu__item}>
          <a href="#">Blog</a>
        </li>
        <li className={styles.footerMenu__item}>
          <a href="#">Contact</a>
        </li>
        <li className={styles.footerMenu__item}>
          <a href="#">Donate</a>
        </li>
      </ul>
    </nav>
  );
}
