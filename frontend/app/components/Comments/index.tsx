import CommentBlock from "@/app/ui/CommentBlock";
import styles from "./styles.module.scss";

export default function Comments() {
  return (
    <section className={styles.comments}>
      <h3 className={styles.comments__title}>Comments</h3>
      <article className={styles.comments__comment}>
        <CommentBlock />
        <section className={styles.comments__reply}>
          <CommentBlock />
        </section>
      </article>
      <article>
        <CommentBlock />
      </article>
    </section>
  );
}
