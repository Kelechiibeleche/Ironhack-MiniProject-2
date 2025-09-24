import taskData from "./tasks.json";

import React, { useState } from "react";

const TaskCard = () => {
  const [task, setTask] = useState(taskData);

  function handleDelete(taskId) {
    const filteredTasks = task.filter((task) => {
      if (task.id !== taskId) {
        return true;
      }
    });
    setTask(filteredTasks);
  }

  return (
    <div>
      {task.map((oneTask) => {
        return (
          <div
            className={
              oneTask.priority === "High" ? "task-card-priority" : "task-card"
            }
            key={oneTask.id}
          >
            <section>
              <h4>{oneTask.title}</h4>
              <h5>{oneTask.description}</h5>
              <h5>Assigned to: {oneTask.assignee}</h5>
              <h5>Priority: {oneTask.priority}</h5>
              <h5>Created: {oneTask.createdDate}</h5>
              <h5>Due: {oneTask.dueDate}</h5>
              <h5>
                status:{" "}
                {oneTask.status === "Done"
                  ? "Done ✅"
                  : oneTask.status === "In Progress"
                  ? "In Progress 🕣"
                  : "To Do ❌"}
              </h5>
              <button
                onClick={() => {
                  handleDelete(oneTask.id);
                }}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
