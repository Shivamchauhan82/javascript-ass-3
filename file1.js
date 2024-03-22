// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();

// Define a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Listening to a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
