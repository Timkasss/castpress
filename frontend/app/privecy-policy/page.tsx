import styles from "./styles.module.scss";

export default function Page() {
  return (
    <section className={styles.privacyPolicy}>
      <h2 className={styles.privacyPolicy__title}>Privacy Policy</h2>
      <section>
        <h3>Your details and data</h3>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et, placerat urna. Curabitur eu magna enim. Proin placerat tortor
          lacus, ac sodales lectus placerat quis. Curabitur ultricies ex ante,
          eu placerat ipsum hendrerit ut. Maecenas ornare tellus id consequat
          mollis. Aenean urna risus, dignissim non cursus nec, volutpat
          hendrerit libero.
        </p>
      </section>
      <section>
        <h3>Security</h3>
        <p>
          Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
          sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
          pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna
          et.
        </p>
      </section>
      <section>
        <h3>Cookies</h3>
        <ul className={styles.privacyPolicy__list}>
          <li>
            Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem
            ultricies .placerat et ac neque. Proin risus eros.
          </li>
          <li>
            Morbi congue odio vel luctus aliquam. Morbi accumsan sapien at lorem
            ultricies .placerat et ac neque. Proin risus eros.
          </li>
        </ul>
      </section>
    </section>
  );
}
