import { useEffect, useState } from "react";
import { fetchTasks, createTask, updateTaskStatus } from "../api/tasks.api";
import Column from "./Column";
import NewTask from "./NewTask";
import { COLUMNS } from "../config/config";
import { toast } from "react-toastify";

const Board = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  //Moves task to other colunns.
  async function handleMoveTask(taskId, newStatus) {
    try {
      const updatedTask = await updateTaskStatus(taskId, newStatus);
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskId ? { ...task, status: updatedTask.status } : task,
        ),
      );
      toast.success(`Task has been changed to ${newStatus}`);
    } catch {
      toast.error("Something went wrong..!");
    }
  }

  useEffect(() => {
    fetchTasks()
      .then((data) => {
        setTasks(data);
        setLoading(false);
      })
      .catch(() => {
        toast.error("Something went wrong..!");
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Loading board...</p>;

  return (
    <div className="board-layout">
      <h1>Kanban Board</h1>

      <NewTask setTasks={setTasks} />
      <div className="board">
        {COLUMNS.map((column) => (
          <Column
            title={column.value}
            key={column.key}
            tasks={tasks}
            handleMoveTask={handleMoveTask}
          />
        ))}
      </div>
    </div>
  );
};

export default Board;
