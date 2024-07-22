import FooterMenu from "@/app/ui/FooterMenu";
import styles from "./styles.module.scss";
import NewsForm from "@/app/ui/NewsForm";
import { FaTelegram, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footer__header}>
        <FooterMenu />
        <NewsForm />
      </div>
      <footer className={styles.footer__footer}>
        <p className={styles.footer__text}>
          PodcastTheme by VitaThemes | Privacy policy{" "}
        </p>
        <div className={styles.footer__social}>
          <a href="#">
            <FaTelegram />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <FaGithub />
          </a>
        </div>
      </footer>
    </div>
  );
}
