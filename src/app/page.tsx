import { TasksList } from "@/features/tasks/components/TasksList";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h2>Hello Quiker!</h2>
      <TasksList />
    </main>
  );
}
