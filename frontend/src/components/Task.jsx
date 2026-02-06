import React from "react";

const Task = ({ title, description, id }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("taskId", id);
  };
  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Task;
