const path = require('path');
const express = require('express');


const app = express();



app.use(express.json());
app.use(express.static(path.resolve(__dirname, '..', 'dist')));






module.exports = app;