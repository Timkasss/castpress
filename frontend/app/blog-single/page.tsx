import styles from "./styles.module.scss";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram, FaGithub } from "react-icons/fa";
import Image from "next/image";
import RelatedPosts from "../components/RelatedPosts";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
export default function Page() {
  return (
    <>
      <section className={styles.blogSingle}>
        <div className={styles.blogSingle__wrapperImage}>
          <Image
            width={180}
            height={180}
            src="/clock.jpg"
            alt="girl"
            className={styles.blogSingle__image}
          />
        </div>
        <h2 className={styles.blogSingle__title}>
          How to create your own podcast cover art?
        </h2>
        <div className={styles.blogSingle__data}>
          <time dateTime="2024-10-12">Feb 12, 2024</time>
          <div className={styles.blogSingle__dataAvtor}>
            By <span>VitaThemes</span>
          </div>
        </div>
        <p className={styles.blogSingle__textSection}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
          mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit
          nunc. Donec at dolor in orci tristique bibendum.ligula, sit amet
          imperdiet purus. Vestibulum quis leo nibh.
        </p>
        <h3 className={styles.blogSingle__sectionTitle}>
          Makemeup Podcast Theme{" "}
        </h3>
        <p className={styles.blogSingle__textSection}>
          Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
        </p>
        <p className={styles.blogSingle__textSection}>
          Proin ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum
          eros, id consequat nisi odio vestibulum tortor. Cras non interdum
          ligula, sit amet imperdiet purus. Vestibulum quis leo nibh. Class
          aptent taciti sociosqu ad litora torquent per conubia nostra, per
          inceptos himenaeos. Aliquam a luctus magna, a finibus massa.
        </p>
        <div className={styles.blogSingle__tags}>
          <span>#Apple</span>
          <span>#Keynote</span>
          <span>#Product</span>
        </div>
        <div className={styles.blogSingle__social}>
          Share:
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
      </section>
      <RelatedPosts />
      <Comment />
      <Comments />
    </>
  );
}
