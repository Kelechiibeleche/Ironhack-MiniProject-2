import React, { useState } from "react";
import taskData from "../components/tasks.json";
import Column from "../components/Column";
import {
  DndContext,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

const Dashboard = (props) => {
  const columns = [
    { id: "To Do", status: "To Do" },
    { id: "In Progress", status: "In Progress" },
    { id: "Done", status: "Done" },
  ];

  const { task, setTask } = props;

  //improve dropzone
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 8px of movement required before drag starts
      },
    })
  );
  // drag and drop funtion here

  function handleDragend(event) {
    const { active, over } = event;
    if (!over) return;

    const taskID = String(active.id);
    const newStatus = String(over.id);

    const updatedTasks = task.map((oneTask) => {
      if (String(oneTask.id) === taskID) {
        return { ...oneTask, status: newStatus };
      }
      return oneTask;
    });

    setTask(updatedTasks);
  }

  return (
    <>
      <h1>Bär Board</h1>
      <div id="columns-container">
        {/* wrap the column in the dndcontext */}
        <DndContext sensors={sensors} onDragEnd={handleDragend}>
          {columns.map((oneColumn) => {
            return (
              <Column
                key={oneColumn.id}
                columnsArray={oneColumn}
                task={task.filter((task) => task.status === oneColumn.status)}
                setTask={setTask}
                fullTask={task}
              />
            );
          })}
        </DndContext>

        {/* end of wrapping */}
      </div>
    </>
  );
};

export default Dashboard;
