import React from "react";

const Task = (props) => {
  console.log(props);
  const { onetask, handleDelete } = props;
  const {
    id,
    title,
    description,
    assignee,
    createdDate,
    dueDate,
    status,
    priority,
  } = props.onetask;

  return (
    <div className={priority === "High" ? "task-card-priority" : "task-card"}>
      <div class="task-card-title-section">
        <h4> {title}</h4>
        <h5>{description}</h5>
        <hr></hr>
      </div>

      <div class="task-card-upper-middle-section">
        <h5>👤{assignee}</h5>
        <h5>{priority}</h5>
      </div>

      <div class="task-card-lower-middle-section">
        <h5>Created:{createdDate}</h5>
        <span>/ </span>
        <h5>Due:{dueDate}</h5>
        <hr></hr>
      </div>

      <div class="task-card-bottom-section">
        <h5>
          {status === "Done"
            ? "Done ✅"
            : status === "In Progress"
            ? "In Progress 🕣"
            : "To Do ⚠️"}
        </h5>
        <button
          className="delete-btn"
          onClick={() => {
            handleDelete(id);
          }}
        >
          🗑️
        </button>
      </div>
    </div>
  );
};

export default Task;
