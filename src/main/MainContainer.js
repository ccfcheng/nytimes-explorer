import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Data from '../core/actions';
import MainView from './MainView';

class MainContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { title: 'NYTimes Explorer' };
  }

  componentWillMount() {
    this.props.dispatch(Data.loadSectionsIntoState());
    // this.props.dispatch(Data.loadArticlesIntoState());
    this.props.dispatch(Data.loadTimeswireIntoState('multimedia'));
  }

  render() {
    return (
      <MainView
        title={this.state.title}
        sections={this.props.sections}
        results={this.props.results}
      />
    );
  }
}

export default connect(state => ({
  sections: state.data.sections,
  results: state.data.results,
}))(MainContainer);

MainContainer.propTypes = {
  dispatch: PropTypes.func.isRequired,
  sections: PropTypes.array.isRequired,
  results: PropTypes.array.isRequired,
};
