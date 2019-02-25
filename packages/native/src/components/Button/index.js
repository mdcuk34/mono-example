/**
 * Button.js
 * A common button.
 */

import React from 'react';
import StyledButton from './StyledButton';
import Wrapper from './Wrapper';

const Button = ({ onPress, children }) => (
  <Wrapper>
    <StyledButton onPress={onPress}>{children}</StyledButton>
  </Wrapper>
);

export default Button;
