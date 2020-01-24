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

app.get('/products', (req, res) => {
  // READ
})
app.post('/products', (req, res) => {
  // Do some stuff
})
app.put('/products/:id', (req, res) => {
  // Do some stuff
})
app.delete('/products/:id', (req, res) => {
  // Delete the thing
})

app.get('/categories', (req, res) => {
  // READ
})
app.post('/categories', (req, res) => {
  // CREATE
})
app.put('/categories/:id', (req, res) => {
  // UPDATE
})
app.delete('/categories/:id', (req, res) => {
  // DELETE
})

const start = app.listen(3000, ()=> {
  console.log('Server is up on 3000');
})

module.exports = {
  start: start
}
