import React, { PropTypes } from 'react';
import './story.css';

export default function StoryView(props) {
  // console.log('article:', props.article);
  const article = props.article;
  return (
    <div className="story">
      <div className="story__image">
        <img src={article.multimedia[2].url} />
      </div>
      <div className="story__title">{article.title}</div>
      <div className="story__summary">{article.abstract}</div>
    </div>
  );
}

StoryView.propTypes = {
  article: PropTypes.object.isRequired,
};
