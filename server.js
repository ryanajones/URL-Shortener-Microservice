/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const express = require('express');
const mongo = require('mongodb');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const validURL = require('valid-url');
const shortID = require('shortid');

const app = express();
const port = process.env.PORT || 5000;

// MongoDB and mongoose connect
process.env.MONGO_URI =
  'mongodb+srv://rjonesy91:Rjwowz!1991@fcc.zypnf.mongodb.net/fcc?retryWrites=true&w=majority';
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Database schema
const urlSchema = new mongoose.Schema({
  originalURL: String,
  shortURL: String,
});

const URL = mongoose.model('URL', urlSchema);

// App middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/public', express.static(`${process.cwd()}/public`));
app.get('/', function (req, res) {
  res.sendFile(`${process.cwd()}/views/index.html`);
});

// Response for POST request
app.post('/api/shorturl/new', async (req, res) => {
  const { url } = req.body;
  const shortURL = shortID.generate();
  if (!validURL.isWebUri(url)) {
    res.status(401).json({
      error: 'invalid URL',
    });
  } else {
    try {
      let findOne = await URL.findOne({
        originalURL: url,
      });
      if (findOne) {
        res.json({
          originalURL: findOne.originalURL,
          shortURL: findOne.shortURL,
        });
      } else {
        findOne = new URL({
          originalURL: url,
          shortURL,
        });
        await findOne.save();
        res.json({
          originalURL: findOne.originalURL,
          shortURL: findOne.shortURL,
        });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json('Server error..');
    }
  }
});

// Redirect shortened URL to Original URL
app.get('/api/shorturl/:shortURL?', async (req, res) => {
  try {
    const urlParams = await URL.findOne({
      shortURL: req.params.shortURL,
    });
    if (urlParams) {
      return res.redirect(urlParams.originalURL);
    }
    return res.status(404).json('No URL found');
  } catch (err) {
    console.log(err);
    res.status(500).json('Server error..');
  }
});
// Listens for connections
app.listen(port, function () {
  console.log('Node.js listening ...');
});
