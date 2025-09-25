import React from "react";
import Task from "./Task";

const Column = (props) => {
  console.log(props.columnsArray);

  const taskArray = props.task;

  const { status } = props.columnsArray;

  return (
    <div>
      <div id="single-column">
        <h2> {status} </h2>
        <div id="task">
          {taskArray.map((onetask) => {
            return <Task key={onetask.id} onetask={onetask} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Column;
