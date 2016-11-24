import React, { Component, PropTypes } from 'react';
import StoryView from './StoryView';

export default class StoryContainer extends Component {
  render() {
    return (<StoryView article={this.props.article} />);
  }
}

StoryContainer.propTypes = {
  article: PropTypes.object.isRequired,
};
