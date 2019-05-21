let mongoose = require('mongoose');

let exportSchema = new mongoose.Schema({
    title: String,
    data: {
        key: Number,
        active: Boolean
    },
    date: {
        type: Date,
        default: Date.now()
    }
});