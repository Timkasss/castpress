import Link from "next/link";
import styles from "./styles.module.scss";

export default function FooterMenu() {
  return (
    <nav className={styles.footerMenu}>
      <ul className={styles.footerMenu__list}>
        <li className={styles.footerMenu__item}>
          <Link href={"/episodes"}>Episodes</Link>
        </li>
        <li className={styles.footerMenu__item}>
          <Link href={"/blog"}>Blog</Link>
        </li>
        <li className={styles.footerMenu__item}>
          <Link href={"/contact"}>Contact</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li className={styles.footerMenu__item}>
          <Link href={"/donate"}>Donate</Link>
        </li>
      </ul>
    </nav>
  );
}
