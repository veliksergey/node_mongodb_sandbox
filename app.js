const express = require('express');
const app = express();
const router = express.Router();
const db = require('./db');

const sharksRouter = require('./routers/sharks');
const conversationsRouter = require('./routers/conversations');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', conversationsRouter);
app.use('/sharks', sharksRouter);

app.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error)
});
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({message: error.message});
});

module.exports = app;
