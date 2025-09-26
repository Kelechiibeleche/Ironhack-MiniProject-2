import taskData from "./tasks.json";

import React, { useState } from "react";

const TaskCard = () => {
  const [task, setTask] = useState(taskData);

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
              <div class="task-card-title-section">
                <h4>{oneTask.title}</h4>
                <h5>{oneTask.description}</h5>
                <hr></hr>
              </div>

              <div class="task-card-upper-middle-section">
                <h5>👤 {oneTask.assignee}</h5>
                <h5>Priority: {oneTask.priority}</h5>
              </div>

              <div class="task-card-lower-middle-section">
                <h5>Created: {oneTask.createdDate} </h5>
                <span></span>
                <h5> Due: {oneTask.dueDate}</h5>
                <hr></hr>
              </div>
              <div class="task-card-bottom-section">
                <h5>
                  status:{" "}
                  {oneTask.status === "Done"
                    ? "Done ✅"
                    : oneTask.status === "In Progress"
                    ? "In Progress 🕣"
                    : "To Do ⚠️"}
                </h5>
                <button
                  className="delete-btn"
                  onClick={() => {
                    handleDelete(oneTask.id);
                  }}
                >
                  🗑️
                </button>
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
};

export default TaskCard;
