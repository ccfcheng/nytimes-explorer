const url = require('url');
const Constants = require('./constants');

const makeRequestUrl = (path, query = {}) => {
  const urlObj = {
    protocol: 'http',
    slashes: true,
    hostname: Constants.API_HOSTNAME,
    pathname: path,
  };
  const authQuery = Object.assign({}, query, { 'api-key': Constants.NYT_API_KEY });
  urlObj.query = authQuery;
  return url.format(urlObj);
};

const makeArticlesQuery = (searchStr, offset) => ({
  q: searchStr,
  fl: Constants.ARTICLE_FIELDS.join(','),
  page: offset,
});

const makeArticlesUrl = (searchStr, offset = 0) => {
  const query = makeArticlesQuery(searchStr, offset);
  return makeRequestUrl(Constants.API_ARTICLES_PATH, query);
};

const makeTimesWireQuery = offset => ({
  limit: 20,
  offset,
});

const makeTimesWireUrl = (section, offset = 0) => {
  const path = `${Constants.API_TIMESWIRE_PATH}/nyt/${section}.json`;
  const query = makeTimesWireQuery(offset);
  return makeRequestUrl(path, query);
};

const makeSectionsUrl = () => makeRequestUrl(Constants.API_SECTIONLIST_PATH);

module.exports = {
  makeArticlesUrl,
  makeSectionsUrl,
  makeTimesWireUrl,
};
