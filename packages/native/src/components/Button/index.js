/**
 * Button.js
 * A common button.
 */

import React from 'react';
import PropTypes from 'prop-types';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = ({ onPress, children }) => (
  <Wrapper>
    <StyledButton onPress={onPress}>{children}</StyledButton>
  </Wrapper>
);

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.object.isRequired,
};

export default Button;
