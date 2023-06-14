const express = require('express');
const ngrok = require('ngrok');

const app = express();
const port = 1900;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Start the server
app.listen(port, async () => {
  console.log(`Server is running on http://localhost:${port}`);


});