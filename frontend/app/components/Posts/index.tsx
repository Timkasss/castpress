import Post from "@/app/ui/Post";

import styles from "./styles.module.scss";

import clock from "@/public/clock.jpg";
import headphones from "@/public/headphones.jpg";

export default function Posts() {
  const data = [
    {
      title: "How to create your own podcast cover art?",
      date: "Feb 2, 2024",
      image: clock,
      alt: "clock",
    },
    {
      title: "How to create your own podcast cover art?",
      date: "Feb 2, 2024",
      image: headphones,
      alt: "headphones",
    },
  ];

  return (
    <section className={styles.posts}>
      <h2 className={styles.posts__title}>Latest Posts</h2>
      <div className={styles.posts__wrapper}>
        <Post data={data[0]} />
        <Post data={data[1]} />
      </div>
      <a href="#" className={styles.posts__link}>
        View Blog
      </a>
    </section>
  );
}
