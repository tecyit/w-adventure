import React from 'react';
import { connect } from 'react-redux';

function App({ currentUser }) {
  return <h2>Hello {currentUser}</h2>;
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(App);
