'use strict';

const logger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  console.log('Request Time:', req.requestTime);
  next();
}

module.exports = logger;