const express = require('express');
// const request = require('request');
// const NYT = require('./nyt');
const mockdata = require('./mockdata');
const mocksections = require('./mocksections');

const PORT = process.env.PORT || 8080;
const app = express();

app.use('/', express.static('dist'));

app.get('/', (req, res) => res.sendFile('index.html'));
// Mock endpoint
app.get('/articles', (req, res) => {
  // const urlString = NYT.makeArticlesURL('steph curry');
  // request.get(urlString, (err, response, body) => {
  //   if (!err && response.statusCode === 200) {
  //     res.send(body);
  //   }
  // });
  res.send(mockdata);
});
// Use cached sections
app.get('/sections', (req, res) => {
  // const urlString = NYT.makeSectionsUrl();
  // request.get(urlString, (e, r, body) => {
  //   if (!e && r.statusCode === 200) {
  //     res.send(body);
  //   }
  // });
  res.send(mocksections);
});

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
