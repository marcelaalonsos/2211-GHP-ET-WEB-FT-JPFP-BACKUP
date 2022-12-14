
const express = require('express')
const path = require('path')
const cors = require('cors')
// const volleyball = require('volleyball') --> commented out because it was causing errors running npm run build-watch
const app = express()
// const bodyParser = require('body-parser');
//body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

app.use('/api', require('./api'));

app.use(cors())
// app.use(volleyball) --> commented out, not in use, see comment on line 6

//send index.html for any other requests
app.use("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error')
});

module.exports = app;

