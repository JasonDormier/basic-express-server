'use strict';

const express = require('express');
const app = express();

const logger = require('./middleware/logger.js');
const validator = require('./middleware/validator.js');

const error404 = require('./error-handlers/404.js');
const error500 = require('./error-handlers/500.js');

app.use(express.json());

app.get('/person', logger, validator, nameObject);

function nameObject(request, response) {
  const nameObject = {
    name: request.query.name,
  };

  response.status(200).json(nameObject);
}

app.use(error500);
app.use('*', error404);

module.exports = {
  app: app,
  start: function (port) {
    app.listen(port, () => {
      console.log('App is running on port : ' + port);
    });
  },
};
