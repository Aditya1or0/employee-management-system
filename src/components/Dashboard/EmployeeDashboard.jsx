import React from "react";
import Header from "../Header/Header";
import TaskListNumber from "../TaskListNumber";
import TaskList from "../TaskList/TaskList";

function EmployeeDashboard({ data, changeUser }) {
  console.log("data :", data);
  return (
    <div className="p-10 bg-[bg-[#1a404d]]">
      <Header data={data} changeUser={changeUser} />
      <TaskListNumber data={data} />
      <TaskList data={data} />
    </div>
  );
}

export default EmployeeDashboard;