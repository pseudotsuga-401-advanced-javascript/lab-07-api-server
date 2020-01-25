'use strict';

const badRouteHandler = (err, req, res, next) => {
  res.status(404).send(console.error(err));
}

module.exports = badRouteHandler;