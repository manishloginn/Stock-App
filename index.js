const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const clc = require("cli-color");
const app = express();
const multer = require("multer");
const fs = require("fs")
const csv = require('csv-parser');
require("dotenv").config()
const StockModel = require("./models/stockModel.js");



const PORT = process.env.PORT || 8000;


const uploadCall = require('./routes/router.js')

// const db = require("./db.js")
const { dbConnection } = require('./db.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.resolve(__dirname, "./public")))



dbConnection()
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, 'uploads'))
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({
    storage: storage
  }).single('file')


app.use("/upload", upload, uploadCall);

app.use('/api', uploadCall)


app.use((err, req, res, next) => {
    res.send('file not supported')
    next()
})

app.listen(PORT, () => {
    console.log(clc.blue(`Server is running on ${clc.white(`http://localhost:${PORT}`)}`));
});