let mongoose = require('mongoose');
let dbUrl = 'mongodb://127.0.0.1/todo-api';
mongoose.set('debug', true);

mongoose.Promise = Promise;

mongoose.connect(dbUrl, { useNewUrlParser: true }).then(() => {
    console.log("Database connection is active");
}).catch(err => {
    console.log(err);
});

module.exports.Todo = require('./todo');