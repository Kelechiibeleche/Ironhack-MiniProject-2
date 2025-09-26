import React, { useState } from "react";
import taskData from "../components/tasks.json";
import Column from "../components/Column";

const Dashboard = (props) => {
  const columns = [
    { id: "todo", status: "To Do" },
    { id: "Inprogress", status: "In Progress" },
    { id: "Done", status: "Done" },
  ];

  const { task, setTask } = props;

  return (
    <>
      <h1>Kanban Board</h1>
      <div id="columns-container">
        {columns.map((oneColumn) => {
          return (
            <Column
              key={columns.id}
              columnsArray={oneColumn}
              task={task.filter((task) => task.status === oneColumn.status)}
              setTask={setTask}
              fullTask={task}
            />
          );
        })}
      </div>
    </>
  );
};

export default Dashboard;
