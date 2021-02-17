'use strict';

module.exports = function (err, request, response, next) {
  const error = 'Not-Found';

  const errorObject = {
    status: 404,
    message: error,
  };
  response.status(errorObject.status).json(errorObject);
};