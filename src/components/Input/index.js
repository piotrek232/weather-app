import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledInput = styled.input`
  width: 160px;
  background: lightgrey;
  &:focus {
    border-bottom: 2px solid #293038;
    background: #b2b5ba;
    outline: 0;
  }
`;

const Input = ({ handleCityChange }) => {
  return (
    <StyledInput type="text" name="city" placeholder="City" onChange={handleCityChange} /> 
  )
}
  
Input.propTypes = {
  handleCityChange: PropTypes.func
}

export default Input;