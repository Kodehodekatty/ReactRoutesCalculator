import styles from "./MyStyles.module.css";

export function About() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.AboutSection}>
        <div className="container">
          <div>I'm Front end Developer</div>
        </div>
        <p className={styles.ptext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          blandit volutpat maecenas volutpat blandit aliquam etiam erat.
        </p>
      </div>
    </div>
  );
}
