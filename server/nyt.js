const url = require('url');

const makeArticlesURL = (searchStr) => {
  const urlObj = {
    protocol: 'http',
    slashes: true,
    hostname: 'api.nytimes.com',
    pathname: '/svc/search/v2/articlesearch.json',
    query: {
      q: searchStr,
      'api-key': process.env.NYT_ARTICLES_API,
    },
  };
  return url.format(urlObj);
};

module.exports = {
  makeArticlesURL,
};
