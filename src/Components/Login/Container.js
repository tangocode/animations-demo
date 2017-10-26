import React, { Component } from 'react';
import { connect } from 'react-redux';
import Presenter from './Presenter.js';
import selectors from './../../state/selectors/selectors';
import actions from './../../state/actions/actions';

class Container extends Component {
  constructor(props) {
    super(props);

    this.state = {};

    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handleUsernameChange(value) {
    this.setState({ username: value });
  }

  handlePasswordChange(value) {
    this.setState({ password: value });    
  }
      
  handleLoginClick() {
    if (
      this.state.username && this.state.username.length > 0 &&
      this.state.password && this.state.password.length > 0 
    ) {
      if (this.state.username === 'mike' && this.state.password === 'mike') {
        this.props.goToMain()
      } else {
        this.setState({ error: `Username or password don’t match` })
      }
      
    } else {
      this.setState({ error: `Username and password are required` })
    }
  }

  render() {
    return (
      <Presenter
        {...this.props}
        {...this.state}
        handleLoginClick={this.handleLoginClick}
        handleUsernameChange={this.handleUsernameChange}
        handlePasswordChange={this.handlePasswordChange}
        />
    );
  }
}

const mapStateToProps = (state) => ({ });
const mapDispatchToProps = (dispatch) => ({
  goToMain: () => {
    dispatch(actions.contextActions.setLocation('main'));
  }
});

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);

export default ConnectedContainer;
