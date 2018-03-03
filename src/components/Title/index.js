import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  margin-bottom: 1rem;
  text-align: center;
  h3 {
    display: inline;
  }
  span {
    margin: 0 1rem;
  }
`;

const Title = ({ name, date, temperature }) => {
  return (
    <Wrapper>
      <h3>{name}</h3>
      <span>{date}</span>
      <h3>{temperature}&#176;C</h3>
    </Wrapper> 
  )
}
  
Title.propTypes = {
  name: PropTypes.string,
  date: PropTypes.string,
  temperature: PropTypes.number,
}

export default Title;