'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const app = express();

const verifyUser = require('./auth.js') // lab 15

// update Handler to be an object that holds a reference
const Handler = require('./modules/handler');
app.use(cors());
app.use(express.json());
app.use(verifyUser);
const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGOCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', Handler.getBooks);
app.post('/books', Handler.createBook);
app.delete('/books/:id', Handler.deleteBook);
app.put('/books/:id', Handler.updateBook);
app.get('/user', Handler.getUser);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

