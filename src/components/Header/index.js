import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';

import Input from '../Input';

const Wrapper = styled.div`
  display: flex;    
  justify-content: space-around;
  align-items: center;
  background: #454d56;
  height: 20%;
`;

const Header = ({ handleCityChange, fetchCurrentWeather, fetchForecastWeather }) => {
  return (
    <Wrapper >
      <Input handleCityChange={handleCityChange} />
      <Button bsStyle="primary" name="currentWeather" onClick={fetchCurrentWeather}>
        Current weather
      </Button>
      <Button bsStyle="primary" name="forecastWeather" onClick={fetchForecastWeather}>
        5 days forecast
      </Button>
    </Wrapper>
  )
}
  
Header.propTypes = {
  handleCityChange: PropTypes.func,
  fetchCurrentWeather: PropTypes.func,
  fetchForecastWeather: PropTypes.func
}
  
export default Header;