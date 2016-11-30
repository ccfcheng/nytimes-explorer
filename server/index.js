const express = require('express');
// const request = require('request');
// const NYT = require('./nyt');
const data = require('./mockdata');

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
  res.send(data.articles);
});
// Use cached sections
app.get('/sections', (req, res) => {
  // const urlString = NYT.makeSectionsUrl();
  // request.get(urlString, (e, r, body) => {
  //   if (!e && r.statusCode === 200) {
  //     res.send(body);
  //   }
  // });
  res.send(data.sections);
});

app.get('/timeswire', (req, res) => {
// app.get('/timeswire/:section', (req, res) => {
  // const section = req.params.section;
  // const urlString = NYT.makeTimesWireUrl(section);
  // console.log('url:', urlString);
  // request.get(urlString, (e, r, body) => {
  //   if (!e && r.statusCode === 200) {
  //     res.send(body);
  //   }
  // });
  res.send(data.timeswire);
});

app.listen(PORT, () => {
  // console.log('Listening on port ', PORT);
});
