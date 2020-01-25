'use strict';

const serverErrorHandler = (err, req, res, next) => {
  res.status(500).send(err);
}

module.exports = serverErrorHandler;