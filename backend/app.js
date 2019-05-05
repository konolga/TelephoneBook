const express = require('express');
const app = express();
const Contact = require('./models/contact.model')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactsRoutes = require("./routes/contacts");

mongoose
  .connect(
    "mongodb+srv://admin:G0RXLw5UUm128rks@cluster0-jat0j.mongodb.net/test?retryWrites=true", { useNewUrlParser: true }
  )
  .then(() => {
    console.log("Connected to MongoDb!");
  })
  .catch((error) => {
    console.log("Connection to MongoDb failed!");
    console.log(error)
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

app.use("/api/contacts", contactsRoutes);


module.exports = app;
