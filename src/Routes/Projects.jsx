import Calculator from "../components/Calculator";
import styles from "./MyStyles.module.css";

export function Projects() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.AboutSection}>
        <p className={styles.ptext}>calculator</p>
      </div>
      <Calculator />
    </div>
  );
}
