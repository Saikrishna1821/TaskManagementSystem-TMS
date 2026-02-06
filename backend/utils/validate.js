function isValidStatus(status) {
  return ['todo', 'in_progress', 'done'].includes(status);
}

module.exports = { isValidStatus };
