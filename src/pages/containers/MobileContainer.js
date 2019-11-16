import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MobileLoggedInNavBar from '../../components/NavBar/MobileLoggedInNavBar';
import MobileLoggedOutNavBar from '../../components/NavBar/MobileLoggedOutNavBar';

const MobileContainer = ({ children, activeItem, onClick, currentUser }) => {
  const menuBar = currentUser ? (
    <MobileLoggedInNavBar activeItem={activeItem} onClick={onClick}>
      {children}
    </MobileLoggedInNavBar>
  ) : (
    <MobileLoggedOutNavBar activeItem={activeItem} onClick={onClick}>
      {children}
    </MobileLoggedOutNavBar>
  );

  return menuBar;
};

MobileContainer.propTypes = {
  currentUser: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(MobileContainer);
