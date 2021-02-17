'use strict';

module.exports = function (request, response) {
  response.status(404).send('That route is not found');
};