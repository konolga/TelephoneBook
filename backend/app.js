const express = require('express');
const app = express();
const path = require('path')
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const contactsRoutes = require("./routes/contacts");
const dotenv = require('dotenv');



dotenv.config();
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true }
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
app.use("/", express.static(path.join(__dirname, "angular")));
//app.use(fileUpload());


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

app.use("/", contactsRoutes);
app.use("/api/contacts", contactsRoutes);
app.use((req, res, next)=>{
res.sendFile(path.join(__dirname, "angular", "index.html"))
})
app.get('/', (req, res) => {
  res.sendFile(__dirname, "angular", "index.html");
});
module.exports = app;
