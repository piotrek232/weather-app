import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin: auto;
  border: 12px solid #b2b5ba;
  border-top: 12px solid #293038;
  border-radius: 50%;
  width: 150px;
  height: 150px;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;

const Loader = () => {
  return (
    <Wrapper />
  )
}

export default Loader;