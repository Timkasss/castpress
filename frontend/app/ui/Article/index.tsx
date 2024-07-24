"use client";
import { useState } from "react";

import { FaPlayCircle } from "react-icons/fa";

import styles from "./styles.module.scss";
import Player from "../Player";
import Link from "next/link";

interface numberType {
  number: number;
}

const Article: React.FC<numberType> = ({ number }) => {
  const [openMusic, setOpenMusic] = useState<boolean>(false);

  return (
    <article className={styles.article}>
      <header className={styles.article__header}>
        <span className={styles.article__headerNew}>New</span>
        <div className={styles.article__categories}>Business</div>
        <time dateTime="18-01-2024 19:00" className={styles.article__date}>
          Jan 18, 2024
        </time>
      </header>
      <Link href={"/episode"}>
        <h2 className={styles.article__title}>
          <span className={styles.article__number}>{number}</span> - How to
          rapidly test any experience!
        </h2>
        <p className={styles.article__text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consect adipiscing elit. Sed at arcu dui. Aenean
          placerat mauris nisl Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Lorem ipsum dolor sit amet, consect adipiscing elit.
          Sed at arcu dui. Aenean placerat mauris nisl
        </p>
      </Link>

      <div className={styles.article__audioWrapper}>
        {openMusic ? (
          <Player />
        ) : (
          <div
            className={styles.article__frontPlay}
            onClick={() => setOpenMusic(true)}
          >
            <FaPlayCircle className={styles.article__playIcon} />
            <span>listen now</span>
          </div>
        )}
      </div>
    </article>
  );
};
export default Article;
