import Image from "next/image";
import { StaticImageData } from "next/image";

import styles from "./styles.module.scss";

import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

interface TeamItemProps {
  name: string;
  position: string;
  social: {
    linkedin: string;
    github: string;
    twitter: string;
  };
  image: StaticImageData;
}

export default function TeamItem({ data }: { data: TeamItemProps }) {
  return (
    <article className={styles.teamItem}>
      <div className={styles.teamItem__data}>
        <h3 className={styles.teamItem__fullname}>{data.name}</h3>
        <p className={styles.teamItem__position}>{data.position}</p>
      </div>
      <div className={styles.teamItem__wrapperImage}>
        <Image
          src={data.image}
          width={1000}
          height={1000}
          alt="Aida"
          className={styles.teamItem__image}
        />
      </div>
      <footer className={styles.teamItem__socials}>
        <a href={data.social.linkedin} target="_blank">
          <RiLinkedinFill />
        </a>
        <a href={data.social.github} target="_blank">
          <FaGithub />
        </a>
        <a href={data.social.twitter} target="_blank">
          <FaTwitter />
        </a>
      </footer>
    </article>
  );
}
