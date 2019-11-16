import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DesktopLoggedInNavBar from '../../components/NavBar/DesktopLoggedInNavBar';
import DesktopLoggedOutNavBar from '../../components/NavBar/DesktopLoggedOutNavBar';

const DesktopContainer = ({ children, activeItem, onClick, currentUser }) => {
  const menuBar = currentUser ? (
    <DesktopLoggedInNavBar activeItem={activeItem} onClick={onClick}>
      {children}
    </DesktopLoggedInNavBar>
  ) : (
    <DesktopLoggedOutNavBar activeItem={activeItem} onClick={onClick}>
      {children}
    </DesktopLoggedOutNavBar>
  );

  return menuBar;
};

DesktopContainer.propTypes = {
  currentUser: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  activeItem: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
});

export default connect(mapStateToProps)(DesktopContainer);
