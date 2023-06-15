"use client";
import { TodoTask } from "@/types/todoTask";
import React, { useEffect, useState } from "react";

export const TasksList = () => {
  const [tasks, setTasks] = useState<TodoTask[] | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/Tasks/All`)
      .then((tasksResut) => {
        tasksResut
          .json()
          .then((tasksResultJson) => {
            setTasks(tasksResultJson);
          })
          .catch((err) => alert(err));
      })
      .catch((error) => {
        alert("There was an error during fetch: " + error);
      });
  }, []);

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
