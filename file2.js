// Importing required modules
const express = require('express');
const data = require('./data/data.json');

// Creating an instance of Express
const app = express();

// Define a route to send JSON data
app.get('/data', (req, res) => {
  res.json(data);
});

// Listening to a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
