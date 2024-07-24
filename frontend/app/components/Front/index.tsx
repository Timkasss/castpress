"use client";
import Image from "next/image";
import styles from "./styles.module.scss";

import { FaSpotify, FaApple, FaPlay } from "react-icons/fa";
import { PiSoundcloudLogoFill } from "react-icons/pi";
import { useState } from "react";
import Player from "@/app/ui/Player";

export default function Front() {
  const [play, setPlay] = useState<boolean>(false);
  return (
    <article className={styles.front}>
      <h2 className={styles.front__title}>
        How to rapidly test any experience!
      </h2>
      <Image
        width={180}
        height={180}
        src="/main.jpg"
        alt="girl"
        className={styles.front__image}
      />
      {play ? (
        <div className={styles.player}>
          <Player />
        </div>
      ) : (
        <a
          href="#"
          className={styles.front__link}
          onClick={() => setPlay(true)}
        >
          <FaPlay />
          Episode Page
        </a>
      )}

      <footer className={styles.front__footer}>
        <h2 className={styles.front__titleSocials}>Listen on</h2>
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
    </article>
  );
}
