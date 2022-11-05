'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookSchema = new Schema ({
    title: String,
    description: String,
    hasRead: Boolean,
    email: String
});

const Books = mongoose.model('Book', bookSchema);

module.exports = Books;

