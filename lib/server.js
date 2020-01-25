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

router.use('*', badRoute);
router.use(logger, timestamp, auth, errorHandler);


router.get('/products', (req, res) => {
  product.get()
    .then( result => {
      res.status(200).json(result);
    })
})

router.post('/products', (req, res) => {
  let { category_id, price, weight, quantity_in_stock} = req.body;
  let record = { category_id, price, weight, quantity_in_stock};
  product.create(record)
    .then(result => {
      res.status(200).json(result);
    })
})

router.put('/products/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let { category_id, price, weight, quantity_in_stock} = req.body;
  let updatedRecord = {category_id, price, weight, quantity_in_stock};
  product.update(idToUpdate, updatedRecord)
    .then( result => {
      res.status(200).json(result);
    })
})

router.delete('/products/:id', (req, res) => {
  let {id} = req.params.id;
  product.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
})

router.get('/categories', (req, res) => {
  category.get()
    .then(result => {
      res.status(200).json(result);
    })
})

router.post('/categories', (req, res) => {
  let {id, name} = req.body;
  let record = {id, name};
  category.create(record)
    .then(result => {
      res.status(200).json(result);
    })
})

router.put('/categories/:id', (req, res) => {
  let idToUpdate = req.params.id;
  let {id, name} = req.body;
  let updatedRecord = {id, name};
  category.update(id, updatedRecord)
    .then(result => {
      res.status(200).json(result);
    })
})

router.delete('/categories/:id', (req, res) => {
  let {id} = req.params.id;
  category.delete(id)
    .then(result => {
      res.status(200).json(result);
    })
})


app.use(router);
const start = app.listen(3000, ()=> {
  console.log('Server is up on 3000');
})
start;
module.exports = {
  server: app,
  start: () => {
    app.listen(3000, () => {
      console.log('Server up on port 3000');
    });
  }
}
