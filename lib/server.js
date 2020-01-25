'use strict';

const express = require('express');
const app = express();
const router = express.Router();

app.use(router);

const timestamp = (req, res, next) => {
  const stamp = new Date().toString();
  req.requestTime = stamp;
  next();
}



const badRouteHandler = (err, req, res, next) => {
  res.status(404).send(console.error(err));
}

const serverErrorHandler = (err, req, res, next) => {
  res.status(500).send(console.error(err));
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

router.use('*', badRouteHandler);
router.use(serverErrorHandler);

const start = app.listen(3000, ()=> {
  console.log('Server is up on 3000');
})
start;
module.exports = {
  start: start
}
