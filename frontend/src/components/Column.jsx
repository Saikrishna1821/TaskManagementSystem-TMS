import React from "react";
import Task from "./Task";
import { COLUMN_LABELS } from "../config/config";

const Column = (props) => {
  const { title, tasks, handleMoveTask } = props;
  const filterTasks = tasks.filter((item) => item.status === title);
  const handleDragOver = (e) => {
    e.preventDefault();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    const taskId = e.dataTransfer.getData("taskId");
    handleMoveTask(taskId, title);
  };
  return (
    <div
      className="column"
      droppable="true"
      onDragOver={handleDragOver}
      onDrop={handleDrop}
    >
      <h1>{COLUMN_LABELS[title]}</h1>
      {filterTasks.map((task) => (
        <Task title={task.title} description={task.description} id={task.id} />
      ))}
    </div>
  );
};

export default Column;
