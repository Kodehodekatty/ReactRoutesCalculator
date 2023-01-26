import Calculator from "../components/Calculator";
import styles from "./MyStyles.module.css";

export function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.AboutSection}>
        <h1>Projects</h1>
        <p className={styles.ptext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
        </p>
        <Calculator />
      </div>
    </div>
  );
}
