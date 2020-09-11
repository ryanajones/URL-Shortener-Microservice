const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
const cors = require('cors');
const dns = require('dns');

// Express and port declaration
const app = express();
const port = process.env.PORT || 5000;

//MongoDB and mongoose connect
process.env.MONGO_URI = "mongodb+srv://rjonesy91:Rjwowz!1991@fcc.zypnf.mongodb.net/fcc?retryWrites=true&w=majority";
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

//Database schema 
const urlSchema = new mongoose.Schema({
  url: String
});

// Use cors and bodyParser
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));

// Middleware for public folder 
app.use('/public', express.static(process.cwd() + '/public'));

// Response for GET request of root
app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

// Response for POST request
app.post('/api/shorturl/new', (req, res) => { 
  let validURL = true;
  dns.lookup('freecodecamp.org/t/freecodecamp-challenge-guide-url-shortener-microservice', (err, address) => {
/*     console.log(address);
 */
    if (address === undefined){
      validURL = false;
    } 
  });
  if (validURL === false) {
    console.log('invalid');
/*     res.json({
        error: "innvalid URL"
      }); */
  } 

});

// Listens for connections
app.listen(port, function () {
  console.log('Node.js listening ...');
});