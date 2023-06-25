import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello Quiker!</h2>
      <h3>Navigate to:</h3>
      <Link href="/tasks">Tasks</Link>
    </main>
  );
}
