const NYT_API_KEY = process.env.NYT_API_KEY || 'DEFAULT_VALUE';
const API_ARTICLES_PATH = '/svc/search/v2/articlesearch.json';
const API_SECTIONLIST_PATH = '/svc/news/v3/content/section-list.json';
const API_TIMESWIRE_PATH = '/svc/news/v3/content';
const API_HOSTNAME = 'api.nytimes.com';

// http://api.nytimes.com/svc/news/v3/content/section-list.json

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
  API_ARTICLES_PATH,
  API_SECTIONLIST_PATH,
  API_TIMESWIRE_PATH,
  API_HOSTNAME,
  ARTICLE_FIELDS,
};
