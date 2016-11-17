const API_ARTICLES_KEY = process.env.NYT_ARTICLES_API || 'DEFAULT_VALUE';
const API_ARTICLES_PATHNAME = '/svc/search/v2/articlesearch.json';
const API_HOSTNAME = 'api.nytimes.com';

// Can turn on/off additional fields depending on my application
const ARTICLE_FIELDS = [
  'web_url',
  // 'snippet',
  'lead_paragraph',
  // 'abstract',
  // 'print_page',
  // 'blog',
  // 'source',
  'multimedia',
  'headline',
  // 'keywords',
  'pub_date',
  'document_type',
  // 'news_desk',
  'byline',
  // 'type_of_material',
  // '_id',
  // 'word_count',
];

module.exports = {
  API_ARTICLES_KEY,
  API_ARTICLES_PATHNAME,
  API_HOSTNAME,
  ARTICLE_FIELDS,
};
