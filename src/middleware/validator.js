'use strict';

module.exports = function (request, response, next) {
  const name = request.query.name;
  if (!name) {
    next('no name found');
  }
  next();
};