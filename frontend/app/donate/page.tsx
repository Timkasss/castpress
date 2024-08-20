import Link from "next/link";
import styles from "./styles.module.scss";
import { IoIosArrowForward } from "react-icons/io";
export default function Page() {
  return (
    <article className={styles.donate}>
      <h2 className={styles.donate__title}>Support CastPress</h2>
      <p className={styles.donate__text}>
        Help us continue to break down silos and spread knowledge through
        CastPress. By being funded, with your valuable donations, we can
        continue to bring you podcast content that is fresh, relevant and helps
        you grow.
      </p>
      <Link href={"/"} className={styles.donate__link}>
        Donate Now
        <IoIosArrowForward />
      </Link>
    </article>
  );
}
