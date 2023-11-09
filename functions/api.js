// functions/api.js
const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('path-to-your-db.json');
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(router);

module.exports = app;
module.exports.handler = serverless(app);
