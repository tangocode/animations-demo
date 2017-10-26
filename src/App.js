import React, { Component } from 'react';
import { connect } from 'react-redux';
import selectors from './state/selectors/selectors';
import Login from './Components/Login/Container';
import Main from './Components/Main/Container';
import { Container } from './AppStyles';

class AppContainer extends Component {
  constructor(props) {
    super(props);
 }

  render() {
    return (
      <Container>
        {this.props.context.location === 'login' &&
          <Login />
        }
        {this.props.context.location === 'main' &&
          <Main />
        }    
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  context: selectors.context.getContext(state),
});

const App = connect(
  mapStateToProps
)(AppContainer);

export default App;
