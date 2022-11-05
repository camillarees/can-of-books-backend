'use strict';

require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(process.env.MONGOCONNECTION, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function () { console.log('It worked! Mongoose is connected') });

const Book = require('../models/book');

async function seed() {
    console.log('Seeding database...');

    await Book.create({
        title: 'Harry Potter and the Sorcerer\'s Stone',
        description: "The book is about 11 year old Harry Potter, who receives a letter saying that he is invited to attend Hogwarts, school of witchcraft and wizardry. He then learns that a powerful wizard and his minions are after the sorcerer\'s stone that will make this evil wizard immortal and undefeatable.",
        hasRead: true,
        email: 'luxtonethan@gmail.com'
    });

    await Book.create({
        title: 'Harry Potter and the Chamber of Secrets',
        description: "The plot follows Harry\'s second year at Hogwarts School of Witchcraft and Wizardry, during which a series of messages on the walls of the school\'s corridors warn that the 'Chamber of Secrets' has been opened and that the 'heir of Slytherin' would kill all pupils who do not come from all-magical families.",
        hasRead: true,
        email: 'luxtonethan@gmail.com'
    });

    await Book.create({
        title: 'Harry Potter and the Prisoner of Azkaban',
        description: "The book follows Harry Potter, a young wizard, in his third year at Hogwarts School of Witchcraft and Wizardry. Along with friends Ronald Weasley and Hermione Granger, Harry investigates Sirius Black, an escaped prisoner from Azkaban, the wizard prison, believed to be one of Lord Voldemort\'s old allies.",
        hasRead: true,
        email: 'luxtonethan@gmail.com'
    });

    mongoose.disconnect()
}

seed()

async function clear() {
    try {
       await Book.deleteMany({});
       console.log('Books cleared');
    } catch (err) {
        console.error(err);
    } finally {
        mongoose.disconnect();
    }
}

// clear();