'use strict';

function validator(req, res, next) {
  if (!req.query.name) {
    next(new Error('Name is required'));
  } else {
    next();
  }
}

module.exports = validator;