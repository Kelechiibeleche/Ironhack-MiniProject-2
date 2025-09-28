import React from "react";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

const Column = (props) => {
  const taskArray = props.task;

  const { status, id } = props.columnsArray;

  const { setTask, fullTask } = props;

  function handleDelete(taskId) {
    console.log("press delete button");
    const filteredTasks = fullTask.filter((task) => {
      if (task.id != taskId) {
        return true;
      }
    });
    setTask(filteredTasks);
  }
  //mark the column'ID to drop by the hook useDroppable
  const { setNodeRef } = useDroppable({ id });
  return (
    <div>
      <div id="single-column">
        <h2> {status} </h2>
        {/* pass the setnotref below */}
        <div
          ref={setNodeRef}
          id="task"
          style={{
            minHeight: "200px", // Ensure drop zone has height
            width: "100%",
            padding: "10px",
          }}
        >
          {taskArray.map((onetask) => {
            return (
              <Task
                key={onetask.id}
                onetask={onetask}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Column;
