const express = require('express');
// const request = require('request');
// const NYT = require('./nyt');
const data = require('./mockdata');

const PORT = process.env.PORT || 1337;
const app = express();

app.use('/', express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html'));
// Endpoint to get mock data for beginning to build frontend
app.get('/data', (req, res) => {
  // const urlString = NYT.makeArticlesURL('steph curry');
  // request.get(urlString, (err, response, body) => {
  //   if (!err && response.statusCode === 200) {
  //     res.send(body);
  //   }
  // });
  res.send(data);
});

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
