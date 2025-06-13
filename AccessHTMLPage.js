const express = require('express')
const path = require('path')

// path is udes to get the path
const app = express();

// The urls will be like http://localhost:4000/about.html
// The urls will be like http://localhost:4000/home.html

const publicPath=path.join(__dirname,"public");
// static funtion is used to load static pages
app.use(express.static(publicPath));
app.listen(4000);