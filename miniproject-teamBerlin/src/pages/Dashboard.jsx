import React from "react";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const columns = [
    { id: "todo", title: "TO DO" },
    { id: "Inprogress", title: "IN PROGRESS" },
    { id: "Done", title: "DONE" },
  ];


  return (
    <>
      <div>Dashboard</div>
      {/* 
      
      HEY CLAIRE WE UNCOMMENTED THIS BC IT WAS BREAKING AND WE DIDNT KNOW HOW TO FIX IT

      columns.map((onecolumn)=>{ onecolumn.title  }   ) */}
      <TaskCard />
    </>
  );
};

export default Dashboard;
