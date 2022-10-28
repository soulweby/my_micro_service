const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();

app.get('/', (req, res)=> {
    res.send('souley')
})

let dev_db_url = "mongodb://localhost:3000/app1";
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connexion error on MongoDB:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const port = 3000;
app.listen(port, () => {
  console.log(`number of : ${port}`);
});
