const NYT_API_KEY = process.env.NYT_API_KEY || 'DEFAULT_VALUE';
const API_ARTICLES_PATHNAME = '/svc/search/v2/articlesearch.json';
const API_HOSTNAME = 'api.nytimes.com';

// Can turn on/off additional fields depending on my application
const ARTICLE_FIELDS = [
  'web_url',
  'lead_paragraph',
  'multimedia',
  'headline',
  'pub_date',
  'document_type',
  'byline',
  // 'snippet',
  // 'abstract',
  // 'print_page',
  // 'blog',
  // 'source',
  // 'keywords',
  // 'news_desk',
  // 'type_of_material',
  // '_id',
  // 'word_count',
];

module.exports = {
  NYT_API_KEY,
  API_ARTICLES_PATHNAME,
  API_HOSTNAME,
  ARTICLE_FIELDS,
};
