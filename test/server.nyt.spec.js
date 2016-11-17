const expect = require('chai').expect;
const NYT = require('../server/nyt');

describe('makeArticlesURL():', () => {
  it('Should return a correctly formatted URL given a search string:', () => {
    const myURL = NYT.makeArticlesURL('testing', 3);
    const expected = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q=testing&fl=web_url%2Clead_paragraph%2Cmultimedia%2Cheadline%2Cpub_date%2Cdocument_type%2Cbyline&page=3&api-key=DEFAULT_VALUE';
    expect(myURL).to.equal(expected);
  });
});
