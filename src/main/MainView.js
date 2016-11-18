/* eslint-disable */
import React, { PropTypes } from 'react';
import './main.css';

export default function MainView(props) {
  // console.log(props.);
  return (
    <div className="app">
      <div className="app__title">{props.title}</div>
      <div className="app__title">Sections</div>
      <ul>
        {props.sections.map(section => (
          <li>{section.section}</li>
        ))}
      </ul>
      <div className="app__title">Results</div>
      <ul>
        {props.results.map(result => (
          <li>{result.headline.main}</li>
        ))}
      </ul>
    </div>
  );
}

MainView.propTypes = {
  title: PropTypes.string.isRequired,
  sections: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
};
