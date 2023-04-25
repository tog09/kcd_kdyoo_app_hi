const express = require('express');
const PORT = 8080;

const app = express();

app.get('/hi', (req, res) => {
  res.send('hi')
});

app.listen(PORT, () => {
  console.log("server is running");
});