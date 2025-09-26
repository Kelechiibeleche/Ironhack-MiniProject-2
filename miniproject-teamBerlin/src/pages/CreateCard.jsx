import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const CreateCard = (props) => {
  console.log(props);
  const nav = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [assignee, setAssignee] = useState("");
  const [status, setStatus] = useState("");
  const [priority, setPriority] = useState("");
  const [createdDate, setCreatedDate] = useState("");
  const [dueDate, setDueDate] = useState("");

  const { task, setTask } = props;
  function handleAddTask(event) {
    event.preventDefault();

    const theNewTask = {
      id: uuidv4(),
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    };

    setTask([theNewTask, ...task]);
    nav("/");
  }

  return (
    <div>
      <form onSubmit={handleAddTask}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>

        <label>
          description:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>

        <label>
          Assignee:
          <input
            type="text"
            value={assignee}
            onChange={(e) => setAssignee(e.target.value)}
          />
        </label>

        <label>
          Status
          <select
            value={status}
            onChange={(e) => {
              setStatus(e.target.value);
            }}
          >
            <option value="In Progress">In Progress</option>
            <option value="To Do">To Do</option>
            <option value="Done">Done</option>
          </select>
        </label>

        <label>
          priority
          <select
            onChange={(e) => {
              setPriority(e.target.value);
            }}
          >
            <option value="High">High</option>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
          </select>
        </label>

        <label>
          Date created:
          <input
            type="text"
            value={createdDate}
            onChange={(e) => setCreatedDate(e.target.value)}
          />
        </label>

        <label>
          Due Date:
          <input
            type="text"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </label>
        <button>Submit task</button>
      </form>
    </div>
  );
};

export default CreateCard;
