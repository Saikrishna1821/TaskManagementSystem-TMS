import { axiosClient } from "./axiosClient";

export async function fetchTasks() {
  const response = await axiosClient.get("/tasks");
  return response.data.tasks;
}

export async function createTask(payload) {
  const response = await axiosClient.post("/tasks", payload);
  return response.data.task;
}

export async function updateTaskStatus(id, status) {
  const response = await axiosClient.patch(`/tasks/${id}`, { status });
  return response.data.task;
}
