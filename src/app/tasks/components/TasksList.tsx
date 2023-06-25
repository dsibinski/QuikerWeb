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

  if (tasks === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div>Your tasks:</div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{`${task.name}, due date: ${new Date(
            task.dueDate
          ).toLocaleString()}`}</li>
        ))}
      </ul>
    </>
  );
};
