// functions/api.js

const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');

const app = express();

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'YOUR_FRONTEND_DOMAIN');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

// Apply middleware to specific routes
app.use('/.netlify/functions/api', middlewares);
app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);
