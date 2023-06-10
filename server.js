const express = require('express');
const http = require('http');
const httpport = 3001;
const bodyParser = require("body-parser");
let app = express();
const beforeMiddleware = require('./Middleware/Middleware').beforeMiddleware;

let httpSeverRef = app;
const httpserver = http.createServer(httpSeverRef);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const routes = require('./Routes/Route');

app.use(beforeMiddleware);

app.use('/', routes);

httpserver.listen(httpport, () => {
    console.log(`INFO - HTTP Server is up and running on ${httpport}`);
});