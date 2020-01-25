'use strict';

const serverErrorHandler = (err, req, res, next) => {
  res.status(500).send(console.error(err));
}

module.exports = serverErrorHandler;