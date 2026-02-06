const express = require('express');
const {
  fetchTasks,
  addTask,
  moveTask
} = require('../controllers/tasks.controller');

const router = express.Router();

router.get('/', fetchTasks);
router.post('/', addTask);
router.patch('/:id', moveTask);

module.exports = router;
