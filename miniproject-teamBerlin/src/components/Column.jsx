import React from "react";
import Task from "./Task";

const Column = (props) => {
  const taskArray = props.task;

  const { status } = props.columnsArray;
  const { setTask, fullTask } = props;

  function handleDelete(taskId) {
    const filteredTasks = fullTask.filter((task) => {
      if (task.id !== taskId) {
        return true;
      }
    });
    setTask(filteredTasks);
  }
  return (
    <div>
      <div id="single-column">
        <h2> {status} </h2>
        <div id="task">
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
