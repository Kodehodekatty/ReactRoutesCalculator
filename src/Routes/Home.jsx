import styles from "./MyStyles.module.css";

export function Home() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.AboutSection}>
        <h1>Home</h1>
        <p className={styles.ptext}>
          quam quisque id diam. Luctus venenatis lectus magna fringilla urna.
          Curabitur vitae nunc sed velit dignissim. Tempus imperdiet nulla
          malesuada pellentesque elit eget gravida. Etiam sit amet nisl purus in
          mollis nunc. Odio ut enim blandit volutpat.
        </p>
      </div>
    </div>
  );
}
