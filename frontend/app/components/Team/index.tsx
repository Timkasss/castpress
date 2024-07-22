import TeamItem from "@/app/ui/TeamItem";

import styles from "./styles.module.scss";

import aida from "@/public/aida.jpg";
import nick from "@/public/nick.jpg";

export default function Team() {
  const data = [
    {
      name: "Aida Cave",
      position: "CEO",
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        twitter: "https://x.com/?lang=en",
      },
      image: aida,
    },
    {
      name: "Nick Carleton",
      position: "CTO",
      social: {
        linkedin: "https://www.linkedin.com/feed/",
        github: "https://github.com/",
        twitter: "https://x.com/?lang=en",
      },
      image: nick,
    },
  ];
  return (
    <section className={styles.team}>
      <h2 className={styles.team__title}>Team</h2>
      <div className={styles.team__wrapper}>
        <TeamItem data={data[0]} />
        <TeamItem data={data[1]} />
      </div>
    </section>
  );
}
