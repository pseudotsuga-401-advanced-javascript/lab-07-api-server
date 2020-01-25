'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const auth = require('../middleware/auth.js');
const badRoute = require('../middleware/badRoute.js');
const errorHandler = require('../middleware/error.js');
const Product = require('../models/products.js');
const Category = require('../models/categories.js');

product = new Product();
category = new Category();

app.use(router);
router.use('*', badRoute);
router.use(errorHandler);


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
start;
module.exports = {
  start: start
}
