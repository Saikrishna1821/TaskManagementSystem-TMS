const {
  getAllTasks,
  createTask,
  updateTaskStatus
} = require('../services/tasks.services');
const { isValidStatus } = require('../utils/validate');



async function fetchTasks(req, res) {
  try {
    const tasks = await getAllTasks();
    res.json({ tasks });
  } catch {
    res.status(500).json({ error: 'Failed to fetch tasks' });
  }
}

async function addTask(req, res) {
  const { title, description } = req.body;

  if (!title || !title.trim()) {
    return res.status(400).json({ error: 'Title is required' });
  }

  try {
    const task = await createTask({ title, description });
    res.status(201).json({ task });
  } catch {
    res.status(500).json({ error: 'Failed to create task' });
  }
}

async function moveTask(req, res) {
  const { id } = req.params;
  const { status } = req.body;

  if (!isValidStatus(status)) {
    return res.status(400).json({ error: 'Invalid status' });
  }

  try {
    const task = await updateTaskStatus(id, status);

    if (!task) {
      return res.status(404).json({ error: 'Task not found' });
    }

    res.json({ task });
  } catch {
    res.status(500).json({ error: 'Failed to update task' });
  }
}

module.exports = {
  fetchTasks,
  addTask,
  moveTask
};
