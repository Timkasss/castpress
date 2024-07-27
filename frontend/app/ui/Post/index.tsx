import Image, { StaticImageData } from "next/image";
import styles from "./styles.module.scss";
import Link from "next/link";

interface PostProps {
  title: string;
  date: string;
  image: StaticImageData;
  alt: string;
}

export default function Post({ data }: { data: PostProps }) {
  return (
    <article className={styles.post}>
      <div className={styles.post__dataWrapper}>
        <h3 className={styles.post__title}>{data.title}</h3>
        <time dateTime="2024-02-14 20:00" className={styles.post__time}>
          {data.date}
        </time>
        <Link href={"/blog-single"} className={styles.post__link}>
          Read More
        </Link>
      </div>
      <div className={styles.post__imageWrapper}>
        <Image
          width={1000}
          height={1000}
          src={data.image}
          alt={data.alt}
          className={styles.post__image}
        />
      </div>
    </article>
  );
}
