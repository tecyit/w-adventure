import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import DropDownTrigger from './DropDownTrigger';

const UserAvatarDropdown = ({ logout, user }) => (
  <Dropdown trigger={<DropDownTrigger user={user} />}>
    <Dropdown.Menu>
      <Dropdown.Item>
        <span className="custom-wib-span">
          <span className="custom-wib-currency">WIBs</span>
          <span className="custom-wib-amount">2,123</span>
        </span>
      </Dropdown.Item>
      <Dropdown.Divider className="custom-divider" />
      <Dropdown.Item text="My Profile" as={Link} to="/profile" />
      <Dropdown.Item text="Save as" />
      <Dropdown.Item text="Log Out" onClick={logout} />
    </Dropdown.Menu>
  </Dropdown>
);

UserAvatarDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.string.isRequired,
};

export default UserAvatarDropdown;
