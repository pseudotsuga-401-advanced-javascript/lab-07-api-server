'use strict';

const express = require('express');
const app = express();
const logger = require('../middleware/logger.js');
const timestamp = require('../middleware/timestamp.js');
const auth = require('../middleware/auth.js');
const badRoute = require('../middleware/badRoute.js');
const errorHandler = require('../middleware/error.js');
const Product = require('../models/products.js');
const Category = require('../models/categories.js');

const product = new Product();
const category = new Category();

app.use('*', badRoute);
app.use(timestamp, logger, auth(), errorHandler);


app.get('/products', (req, res) => {
  product.get()
    .then( result => {
      res.status(200).json(result);
    })
})

app.post('/products', (req, res) => {
  let { category_id, price, weight, quantity_in_stock} = req.body;
  let record = { category_id, price, weight, quantity_in_stock};
  product.create(record)
    .then(result => {
      res.status(200).json(result);
    })
})

app.put('/products/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let { category_id, price, weight, quantity_in_stock} = req.body;
  let updatedRecord = {category_id, price, weight, quantity_in_stock};
  product.update(idToUpdate, updatedRecord)
    .then( result => {
      res.status(200).json(result);
    })
})

app.delete('/products/:id', (req, res) => {
  let {id} = req.params.id;
  product.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
})

app.get('/categories', (req, res) => {
  category.get()
    .then(result => {
      res.status(200).json(result);
    })
})

app.post('/categories', (req, res) => {
  let {id, name} = req.body;
  let record = {id, name};
  category.create(record)
    .then(result => {
      res.status(200).json(result);
    })
})

app.put('/categories/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let {id, name} = req.body;
  let updatedRecord = {id, name};
  category.update(id, updatedRecord)
    .then(result => {
      res.status(200).json(result);
    })
})

app.delete('/categories/:id', (req, res) => {
  let {id} = req.params.id;
  category.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
})



module.exports = {
  server: app,
  start: () => {
    app.listen(3000, () => {
      console.log('Server up on port 3000');
    });
  }
}
