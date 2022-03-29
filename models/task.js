const mongoose = require('mongoose');

// creating the task schema
const taskSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    due_date: {
        type: String,
        required: true
    }
});

// adding Contact collection/model of taskSchema schema
const Task = mongoose.model('Task', taskSchema);

// exporting the Task Schema
module.exports = Task;
