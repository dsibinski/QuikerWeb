import { TodoTask } from "@/types/todoTask";

async function getSampleTasks() {
  const result = await fetch(`${process.env.API_URL}/Tasks/All`);

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
