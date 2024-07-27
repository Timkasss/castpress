import Link from "next/link";
import styles from "./styles.module.scss";
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import Image from "next/image";
export default function Page() {
  return (
    <section className={styles.about}>
      <h2 className={styles.about__title}>About</h2>
      <section>
        <h3>What, when and how?</h3>
        <p className={styles.about__text}>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque.
        </p>
        <p className={styles.about__text}>
          Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu
          magna enim. Proin placerat tortor lacus, ac sodales lectus placerat
          quis. Curabitur ultricies ex ante, eu placerat ipsum hendrerit ut.
        </p>
      </section>
      <section className={styles.team}>
        <h3>Team members</h3>
        <article className={styles.member}>
          <div className={styles.member__infa}>
            <h4 className={styles.member__fullname}>Nick carleton</h4>
            <p className={styles.member__description}>
              Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu
              magna enim. Proin placerat tortor lacus, ac sodales lectus
              placerat quis.
            </p>
            <span className={styles.member__position}>Position</span>
            <footer className={styles.member__socials}>
              <a href={"#"} target="_blank">
                <RiLinkedinFill />
              </a>
              <a href={"#"} target="_blank">
                <FaGithub />
              </a>
              <a href={"#"} target="_blank">
                <FaTwitter />
              </a>
            </footer>
          </div>
          <div className={styles.member__wrapperImage}>
            <Image
              width={1000}
              height={1000}
              src={"/nick.jpg"}
              alt="Avatar"
              className={styles.member__image}
            />
          </div>
        </article>
        <article className={styles.member}>
          <div className={styles.member__infa}>
            <h4 className={styles.member__fullname}>Nick carleton</h4>
            <p className={styles.member__description}>
              Nam ac urna maximus, tempor magna et, placerat urna. Curabitur eu
              magna enim. Proin placerat tortor lacus, ac sodales lectus
              placerat quis.
            </p>
            <span className={styles.member__position}>Position</span>
            <footer className={styles.member__socials}>
              <a href={"#"} target="_blank">
                <RiLinkedinFill />
              </a>
              <a href={"#"} target="_blank">
                <FaGithub />
              </a>
              <a href={"#"} target="_blank">
                <FaTwitter />
              </a>
            </footer>
          </div>
          <div className={styles.member__wrapperImage}>
            <Image
              width={1000}
              height={1000}
              src={"/aida.jpg"}
              alt="Avatar"
              className={styles.member__image}
            />
          </div>
        </article>
      </section>
    </section>
  );
}
