import { useDraggable } from "@dnd-kit/core";
import React from "react";

const Task = (props) => {
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

  const dragID = String(id);

  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: dragID,
  });
  const style = transform
    ? { transform: `translate(${transform.x}px,${transform.y}px)` }
    : undefined;

  return (
    <div
      ref={setNodeRef}
      className={priority === "High" ? "task-card-priority" : "task-card"}
    >
      <div className="task-card-title-section">
        <div
          {...listeners}
          {...attributes}
          className="drag-handle"
          style={{ cursor: "grab", padding: "4px" }}
        >
          ⋮⋮ {/* Drag icon */}
        </div>
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
          onClick={(e) => {
            e.stopPropagation();
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
