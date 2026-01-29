import styles from "./Button.module.css";
export default function Button({type = 'primary'}) {
  return <button className={styles[type]}>CSS Module </button>;
}
