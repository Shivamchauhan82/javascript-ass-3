// Importing required modules
const express = require('express');

// Creating an instance of Express
const app = express();

// Middleware to log requests
app.use((req, res, next) => {
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// Define a route
app.get('/', (req, res) => {
  res.send('This is a sample route with middleware logging');
});

// Listening to a port
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
