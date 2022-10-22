'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/books-database', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function(){console.log('It worked! Mongoose is connected')});

const Book = require('../models/book');

async function seed() {
    console.log('Seeding database...');

    await Book.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer\'s stone that will make this evil wizard immortal and undefeatable.",
        hasRead: true
    });

    // await Book.create({
    //     title: 'Harry Potter and the Sorcerer\'s Stone',
    //     description: "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer\'s stone that will make this evil wizard immortal and undefeatable.",
    //     hasRead: true
    // })

    mongoose.disconnect()
}

seed()
