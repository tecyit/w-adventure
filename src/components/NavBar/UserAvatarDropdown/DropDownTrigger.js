import React from 'react';
import faker from 'faker';
import { Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

const DropDownTrigger = ({ user }) => (
  <span>
    <Image avatar src={faker.internet.avatar()} /> {user}
  </span>
);

DropDownTrigger.propTypes = {
  user: PropTypes.string.isRequired,
};

export default DropDownTrigger;
