let mongoose = require('mongoose');

let toDoSchema = new mongoose.Schema({
    name: {
        type: String,
        required: "Please enter a name."
    },
    completed: {
        type: Boolean,
        default: false
    },
    creation_date: {
        type: Date,
        default: Date.now
    }
});

let Todo = mongoose.model('Todo', toDoSchema);

module.exports = Todo;

