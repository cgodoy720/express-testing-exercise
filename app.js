const express = require('express');
const logger = require('morgan');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require('./controllers'));

app.listen(3000, () => console.log('listening on port 3000'));
