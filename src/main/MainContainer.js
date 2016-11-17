import React, { Component } from 'react';
import MainView from './MainView';

export default class TemplateContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'NYTimes Explorer' };
  }
  render() {
    return (<MainView title={this.state.title} />);
  }
}
