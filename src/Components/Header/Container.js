import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presenter from './Presenter.js';
import selectors from './../../state/selectors/selectors';
import actions from './../../state/actions/actions';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Presenter {...this.props} {...this.state} />
    );
  }
}

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => ({ });

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectedContainer;
