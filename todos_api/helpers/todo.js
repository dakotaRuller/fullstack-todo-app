let db = require("../models");

exports.getItems = (req, res) => {
    db.Todo.find()
        .then(function (x) {
            res.json(x);
        })
        .catch(function (err) {
            res.send(err);
        })
};


exports.createItem = (req, res) => {
    db.Todo.create(req.body)
        .then(function(newTodo) {
            res.status(201).json(newTodo);
            console.log('New task created');
        })
        .catch(function(err) {
            res.send(err);
        })
};

exports.getOneItem = (req, res) => {
    db.Todo.findById(req.params.todoId)
        .then(data => res.json(data))
        .catch(err => res.send(err))
};

exports.updateOneItem = (req, res) => {
    db.Todo.findOneAndUpdate({_id: req.params.todoId}, req.body, {new: true})
        .then((todo) => {
            res.json(todo);
        })
        .catch(err => {
            res.send(err)
        })
};

exports.deleteOneItem = (req, res) => {
    db.Todo.deleteOne({_id: req.params.todoId})
        .then(() => {
            res.json({message: "Object was deleted."})
        })
        .catch(err => {
            res.send(err);
        });
};


// This failed miserably so maybe later
// exports.deleteMulti = (req, res) => {
//     let idArr = req.forEach(x => x.params.todoId);
//     db.Todo.remove({_id: {$in: [idArr]}})
//       .then(() => {
//           res.json({message: `items: ${idArr} have been deleted.`})
//       })
//       .catch(err => console.log(err, idArr))
// };

module.exports = exports;