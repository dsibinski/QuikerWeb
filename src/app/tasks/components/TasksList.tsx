import Link from "next/link";
import "./tasks.css";
import { TodoTask } from "@/common/types/todoTask";

async function getSampleTasks() {
  const url = `${process.env.API_URL}/Tasks/All`;
  const result = await fetch(url, { cache: "no-store" });

  if (!result.ok) {
    throw new Error("Failed to fetch data");
  }

  return result.json();
}

export const TasksList = async () => {
  const tasks: TodoTask[] = await getSampleTasks();

  return (
    <>
      <div style={{ paddingBottom: "1rem" }}>Your tasks:</div>
      <table>
        <tr>
          <th>Task name</th>
          <th>Due date</th>
          <th></th>
        </tr>
        {tasks.map((task) => (
          <tr key={task.id}>
            <td>{task.name}</td>
            <td>${new Date(task.dueDate).toLocaleString()}</td>
            <td>
              <Link href={`/tasks/${task.id}`}>Details</Link>
            </td>
          </tr>
        ))}
      </table>

      {/* <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <>{`${task.name}, due date: ${new Date(task.dueDate).toLocaleString()}`}</>
          </li>
        ))}
      </ul> */}
    </>
  );
};
