const express = require('express');
const request = require('request');
const NYT = require('./nyt');

const PORT = process.env.PORT || 1337;
const app = express();

// console.log('NODE_ENV:', process.env.NODE_ENV);
// console.log('PORT:', process.env.PORT);
// console.log('NYT_ARTICLES_API:', process.env.NYT_ARTICLES_API);

app.get('/', (req, res) => res.send('Hello World'));

app.get('/test', (req, res) => {
  const urlString = NYT.makeArticlesURL('steph curry');
  request.get(urlString, (err, response, body) => {
    // console.log('err:', err);
    // console.log('response:', response);
    // console.log('body:', body);
    if (!err && response.statusCode === 200) {
      res.send(body);
    }
  });
});

app.listen(PORT, () => {
  console.log('Listening on port ', PORT);
});
