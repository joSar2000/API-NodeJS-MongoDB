const morgan = require("morgan");
const bodyParser = require('body-parser');
const express = require('express');
const app = express();


app.use(express.urlencoded({extended: true})); 
app.use(express.json());

app.use(morgan('dev'));
app.use(require('./routes/publicationsRoutes'));


module.exports = {app};