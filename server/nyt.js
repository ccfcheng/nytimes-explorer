const url = require('url');
const Constants = require('./constants');

const makeFields = fieldsArray => fieldsArray.join(',');

const makeArticlesURL = (searchStr) => {
  const urlObj = {
    protocol: 'http',
    slashes: true,
    hostname: Constants.API_HOSTNAME,
    pathname: Constants.API_ARTICLES_PATHNAME,
    query: {
      q: searchStr,
      fl: makeFields(Constants.ARTICLE_FIELDS),
      sort: 'newest',
      'api-key': Constants.API_ARTICLES_KEY,
    },
  };
  return url.format(urlObj);
};

module.exports = {
  makeArticlesURL,
};
