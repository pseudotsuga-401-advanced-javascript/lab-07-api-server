'use strict';

const express = require('express');
const app = express();

// TODO: Fix this
const timestamp = (req, res, next) => {
  const stamp = new Date().toString();
  console.log(stamp);
}

const logger = (req, res, next) => {
  console.log('Method:', req.method);
  console.log('Path:', req.path);
  console.log('Request Time:', requestTime);
}

const errorHandler = (req, res, next) => {
  // Some stuff?
  console.error(error);
}


const start = app.listen(3000, ()=> {
  console.log('Server is up on 3000');
})

module.exports = {
  start: start
}
