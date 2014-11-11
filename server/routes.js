/**
 * Main application routes
 */

'use strict';
module.exports = function(app) {
  var controller = require('./api/instagram/controller');
  var express = require('express');

  app.get('/fetch', function(req, res) {controller.fetch(req, res)});
  app.get('/test', function(req, res) {controller.test(req, res)});
};
