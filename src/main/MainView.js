/* eslint-disable */
import React, { PropTypes } from 'react';
import Story from '../story';
import './main.css';

export default function MainView(props) {
  return (
    <div className="app">
      <div className="app__title">{props.title}</div>
      <div className="app__title">Results</div>
      <div className="app__results">
        {props.results.map((result, i) => (
          <Story article={result} key={i} />
        ))}
      </div>
    </div>
  );
}

MainView.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
};
