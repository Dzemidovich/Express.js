const express = require('express');
const tanksRouter = require('./router/tanksRouter');
const nationsRouter = require('./router/nationsRouter');

const app = express();
app.use(express.json());

app.use('/tanks', tanksRouter);
app.use('/nations', nationsRouter);

module.exports = app;