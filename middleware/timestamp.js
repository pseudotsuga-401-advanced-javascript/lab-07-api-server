'use strict';

const timestamp = (req, res, next) => {
  const stamp = new Date().toString();
  req.requestTime = stamp;
  next();
}

module.exports = timestamp;