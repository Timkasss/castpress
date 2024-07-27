import Articles from "../components/Articles";
import styles from "./styles.module.scss";
export default function Page() {
  return (
    <div className={styles.container}>
      <Articles />
    </div>
  );
}
