const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
// const cors = require("cors");

// let corsOptions = {
//   origin: "http://localhost:8081",
// };
// app.use(cors(corsOptions));
// app.use(bodyParser.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
const postDisc = require("./routes/discussion.route");

app.use("/posts", postDisc);

let dev_db_url = "mongodb://localhost:27017/app1";

mongoose.connect(dev_db_url, () => console.log("connectd to DB !"));
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connexion error on MongoDB:"));

require("./routes/discussion.route.js");
const port = process.eventNames.PORT || 3001;
app.listen(port, () => {
  console.log(`number of : ${port}`);
});
