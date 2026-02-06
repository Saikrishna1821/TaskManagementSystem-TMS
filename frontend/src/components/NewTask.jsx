import React, { use, useState } from "react";
import { createTask } from "../api/tasks.api";
import { toast } from "react-toastify";

const NewTask = (props) => {
  const { setTasks } = props;
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const handleCreateTask = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const newTask = await createTask(form);
      setTasks((prev) => [...prev, newTask]);
      setForm({
        title: "",
        description: "",
      });
      toast.success("Task has been created successfully");
    } catch {
      toast.error("Unable to create task , try again..!");

    } finally {
      setLoading(false);
    }
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <form onSubmit={handleCreateTask} className="task-form">
      <input
        type="text"
        placeholder="Task title"
        value={form.title}
        name="title"
        onChange={handleInput}
        className="task-input"
        required
      />
      <input
        type="text"
        placeholder="Description (optional)"
        value={form.description}
        name="description"
        onChange={handleInput}
        className="task-input"
      />
      <button type="submit" disabled={loading} className="add-task-btn">
        {loading ? "Creating..." : "Add Task"}
      </button>
    </form>
  );
};

export default NewTask;
