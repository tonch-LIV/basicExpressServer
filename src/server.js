'use strict';

const express = require('express');

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const notFoundHandler = require('./error-handlers/404.js');
const errorHandler = require('./error-handlers/500.js');

const app = express();

// app-level middleware running for every request
app.use(logger);

// routes
app.get('/person', validator, getPerson);

// error handlers
app.use(notFoundHandler);
app.use(errorHandler);

function getPerson(req, res) {
  res.status(200).json({
    name: req.query.name,
  });
}

function start(port) {
  app.listen(port, () => {
    console.log(`Server up on port ${port}`);
  });
}

module.exports = {
  app,
  start,
};