import React from "react";

const Task = (props) => {
  console.log(props);
  const { title, description, assignee, dueDate } = props.onetask;
  return (
    <div className="task-card ">
      <h3> {title}</h3>
      <h5>{description}</h5>
      <h5>{assignee}</h5>
      <h5>{dueDate}</h5>
    </div>
  );
};

export default Task;
