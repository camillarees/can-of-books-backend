'use strict';

const Book = require('../models/book');

const Handler = {};

Handler.getBooks = async (req, res, next) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch(err) {
        console.error(err);
        next(err);
    }
};

Handler.createBook = async (req, res, next) => {
    try {
        const book = await Book.create(req.body);
        res.status(201).send(book);
    } catch(err) {
        err.customMessage = 'Something went wrong when adding your book: ';
        console.error(err.customMessage + err);
        next(err);
    }
};

Handler.deleteBook = async (req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).send('Your book has been deleted');
    } catch(err) {
        err.customMessage = 'Something went wrong when deleting your book: ';
        console.error(err.customMessage + err);
        next(err);
    }
};

Handler.updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(updatedBook);
    } catch(err) {
        err.customMessage = 'Something went wrong when updating your book: ';
        console.error(err.customMessage + err);
        next(err);
    }
}

module.exports = Handler;