/* eslint-disable */
import React, { PropTypes } from 'react';
import './main.css';

export default function MainView(props) {
  return (
    <div className="app">
      <div className="app__title">{props.title}</div>
      <div className="app__content">Content goes here</div>
    </div>
  );
}

MainView.propTypes = {
  title: PropTypes.string.isRequired,
};
