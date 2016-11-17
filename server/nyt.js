const url = require('url');
const Constants = require('./constants');

const makeFields = fieldsArray => fieldsArray.join(',');

const makeArticlesURL = (searchStr, offset = 0) => {
  const urlObj = {
    protocol: 'http',
    slashes: true,
    hostname: Constants.API_HOSTNAME,
    pathname: Constants.API_ARTICLES_PATHNAME,
    query: {
      q: searchStr,
      fl: makeFields(Constants.ARTICLE_FIELDS),
      // sort: 'newest',
      page: offset,
      'api-key': Constants.NYT_API_KEY,
    },
  };
  return url.format(urlObj);
};

module.exports = {
  makeArticlesURL,
};
