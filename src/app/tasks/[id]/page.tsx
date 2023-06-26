import { Guid } from "@/common/types/guid";
import { TodoTask } from "@/common/types/todoTask";

async function getTaskDetails(taskId: Guid): Promise<TodoTask> {
  const url = `${process.env.API_URL}/Tasks/Details/${taskId}`;
  const result = await fetch(url, { cache: "no-store" });

  if (!result.ok) {
    throw new Error("Failed to fetch task details");
  }

  return result.json();
}

const TaskDetails = async ({ params }: { params: { id: Guid } }) => {
  const task = await getTaskDetails(params.id);

  return (
    <>
      <h1>{task.name}</h1>
      <h3>Id: {task.id}</h3>
      <h3>Due date: {new Date(task.dueDate).toLocaleString()}</h3>
    </>
  );
};

export default TaskDetails;
