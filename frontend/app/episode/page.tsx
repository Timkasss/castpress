import Image from "next/image";
import styles from "./styles.module.scss";

import { FaSpotify, FaApple, FaTelegram, FaGithub } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { GoArrowRight } from "react-icons/go";
import { FaXTwitter } from "react-icons/fa6";
import Player from "../ui/Player";
import RelatedPosts from "../components/RelatedPosts";
import Comment from "../components/Comment";
import Comments from "../components/Comments";
export default function Page() {
  return (
    <article className={styles.front}>
      <h2 className={styles.front__title}>
        Makemeup Podcast Theme; launch it now!
      </h2>
      <p className={styles.front__text}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sed
        mollis augue. Cras suscipit sit amet est in aliquam. In vel blandit
        nunc. Donec at dolor in orci tristique bibendum.Cras non interdum
        ligula, sit amet imperdiet purus. Vestibulum quis leo nibh.
      </p>
      <div className={styles.front__data}>
        <span className={styles.front__dataNumber}>Episode 18</span>
        <time dateTime="2024-10-12">feb 12, 2024</time>
        <div className={styles.front__dataAvtor}>
          By <span>VitaThemes</span>
        </div>
      </div>
      <Image
        width={180}
        height={180}
        src="/main.jpg"
        alt="girl"
        className={styles.front__image}
      />
      <div className={styles.player}>
        <Player />
      </div>
      <footer className={styles.front__footer}>
        <h3 className={styles.front__titleSocials}>Listen on</h3>
        <div className={styles.front__socials}>
          <a href="#">
            <FaSpotify />
          </a>
          <a href="#">
            <PiSoundcloudLogoFill />
          </a>
          <a href="#">
            <FaApple />
          </a>
        </div>
      </footer>
      <section className={styles.front__section}>
        <h3 className={styles.front__sectionTitle}>Makemeup Podcast Theme</h3>
        <p className={styles.front__textSection}>
          Vivamus et aliquet neque. Mauris feugiat blandit augue a vestibulum.
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Aliquam a luctus magna, a finibus massa. Proin
          ultricies, arcu ac dignissim sollicitudin, nibh nibh fermentum eros,
          id consequat nisi odio vestibulum tortor. Cras non interdum ligula,
          sit amet imperdiet purus. Vestibulum quis leo nibh. Class aptent
          taciti sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos. Aliquam a luctus magna, a finibus massa.
        </p>
        <footer>
          <div className={styles.front__typeScript}>
            Listening time: <span>86</span> minutes | View transcript
            <GoArrowRight className={styles.front__arrow} />
          </div>
          <div className={styles.front__tags}>
            <span>#Apple</span>
            <span>#Keynote</span>
            <span>#Product</span>
          </div>
          <div className={styles.front__social}>
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
        </footer>
      </section>
      <div className={styles.front__wrapperOther}>
        <RelatedPosts />
        <Comment />
        <Comments />
      </div>
    </article>
  );
}