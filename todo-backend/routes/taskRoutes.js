const express = require('express');
const Task = require('../models/Task');
const router = express.Router();

// Get all tasks
router.get('/', async (req, res) => {
    const tasks = await Task.find();
    res.json(tasks);
});

// Add a new task
router.post('/', async (req, res) => {
    const task = new Task({
        name: req.body.name
    });
    await task.save();
    res.json(task);
});

// Update a task (edit or mark complete/incomplete)
router.put('/:id', async (req, res) => {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
});

// Delete a task
router.delete('/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.json({ message: 'Task deleted' });
});

module.exports = router;
