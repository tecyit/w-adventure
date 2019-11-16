import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DesktopContainer from '../../pages/containers/DesktopContainer';
import MobileContainer from '../../pages/containers/MobileContainer';

const ResponsiveContainer = ({ children }) => {
  const { pathname } = window.location;

  const path = pathname === '/' ? 'home' : pathname.substr(1);

  const [activeItem, setActiveItem] = useState(path);
  const handleItemClick = (e, { name }) => setActiveItem(name);
  return (
    <>
      <DesktopContainer activeItem={activeItem} onClick={handleItemClick}>
        {children}
      </DesktopContainer>
      <MobileContainer activeItem={activeItem} onClick={handleItemClick}>
        {children}
      </MobileContainer>
    </>
  );
};

ResponsiveContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ResponsiveContainer;
