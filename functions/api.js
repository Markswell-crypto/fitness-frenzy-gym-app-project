// functions/api.js

const express = require('express');
const serverless = require('serverless-http');
const jsonServer = require('json-server');

const app = express();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

app.use('/.netlify/functions/api', middlewares); 
app.use('/.netlify/functions/api', router); 

module.exports = app;
module.exports.handler = serverless(app);
