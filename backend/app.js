const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRoutes = require("./routes/posts")

const app = express();

mongoose.connect("mongodb+srv://chino:ifZJ6kVPtSAf9Y6a@chinodb.kyu9y.mongodb.net/node-angular?retryWrites=true&w=majority&appName=ChinoDB").
    then(() => {
        console.log('Connected to ChinoDB!')
    })
    .catch(() => {
        console.log('Something was wrong :(')
    })

app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
  next();
});

app.use("/api/posts", postsRoutes);

module.exports = app;
