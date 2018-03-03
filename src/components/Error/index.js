import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.h1`
  text-align: center;
  padding-top: 1rem;
`;

const Error = ({ message }) => {
  return (
    <Wrapper>{message}</Wrapper>
  )
}

Error.propTypes = {
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
}
  
export default Error;