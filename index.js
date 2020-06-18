'use strict'

const escapeHtml = require('escape-html')

exports.helloGET = (req, res) => {
  res.send('Hello World!');
}
