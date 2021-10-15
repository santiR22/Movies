import styles from "./Spinner.module.css";

export function Spinner() {
  return (
    <div className={styles.loader}>
      Loading...
    </div>
  );
}
