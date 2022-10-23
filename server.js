'use strict';

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose  = require('mongoose');
const app = express();
const getBooks = require('./modules/handler');
app.use(cors());

const PORT = process.env.PORT || 3002;
mongoose.connect(process.env.MONGOCONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

app.get('/test', (request, response) => {

  response.send('test request received')

})

app.get('/books', getBooks);

app.listen(PORT, () => console.log(`listening on ${PORT}`));

