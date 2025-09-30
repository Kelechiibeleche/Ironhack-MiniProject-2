import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";

const EditCardPage = ({ task, setTask }) => {
  const { detailscardId } = useParams();

  const theOneTaskEdit = task.find((onetask) => {
    if (onetask.id == detailscardId) {
      return true;
    }
  });

  console.log(theOneTaskEdit);

  const nav = useNavigate();
  const [title, setTitle] = useState(theOneTaskEdit.title);
  const [description, setDescription] = useState(theOneTaskEdit.description);
  const [assignee, setAssignee] = useState(theOneTaskEdit.assignee);
  const [status, setStatus] = useState(theOneTaskEdit.status);
  const [priority, setPriority] = useState(theOneTaskEdit.priority);
  const [createdDate, setCreatedDate] = useState(theOneTaskEdit.createdDate);
  const [dueDate, setDueDate] = useState(theOneTaskEdit.dueDate);

  function handleEditTask(e) {
    e.preventDefault();
    const updatedTask = {
      id: detailscardId,
      title,
      description,
      assignee,
      status,
      priority,
      createdDate,
      dueDate,
    };

    const updateTaskArray = task.map((oneTask) => {
      if (oneTask.id == detailscardId) {
        return updatedTask;
      } else {
        return oneTask;
      }
    });

    setTask = updateTaskArray;
    nav("/");
  }

  return (
    <div>
      <form onSubmit={handleEditTask}>
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
        <button>Update task</button>
      </form>
    </div>
  );
};

export default EditCardPage;
