const express = require("express");
const app = express();
require("dotenv").config();
// desctructure the variables from .env file
const { PORT, BACKEND_URL } = process.env;

// cross origin resource sharing
const cors = require("cors");
app.use(cors());

// express.urlencoded allows posting from data
app.use(express.urlencoded({ extended: true }));
// in order to access req.body you need to use express.json() middleware
app.use(express.json());
// serve public files e.g. index.html
app.use(express.static("public"));

// get, post, put methods for /api/books
const vegetablesRoutes = require("./routes/api/vegetables");
app.use("/api/vegetables", vegetablesRoutes);

// start the server and listen on port 5000
app.listen(5005, () => {
  console.log(`server is running at: ${BACKEND_URL}:${PORT}`);
});

/////////////////////////////////

//Require Express
//app = express.router()
//require cors
//app.use(cors())

//! These two lines in route file
//const fileName = `${__dirname}/models/vegetables.json` //!locate json
//const vegetables = require(fileName) //!Gives access to json, and vegetables will be that array

//Setup routes -> follow Brainflix

//app.use('/api/vegetables', require('./routes/api/vegetables.js'))

// app.listen(5005 => () => {
//     console.log(whatever)
// })

//Postman get request for http://localhost:5005/api/vegetables
