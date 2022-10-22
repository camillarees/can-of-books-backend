'use strict';


const Book = require('../models/book');

const getBooks = async (req, res, next) => {
    try {
        const books = await Book.find({});
        res.status(200).send(books);
    } catch(err) {
        console.error(err);
        next(err);
    }
};

module.exports = getBooks;