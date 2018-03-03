import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';

import Title from '../Title';
import { dateConvert, tempToCelsius } from '../../utils.js';

const Wrapper = styled.div`
  padding: auto 1rem;
  width: 80%;
  margin: auto;
  td: first-child {
    font-weight: bold;
  }
`;

const CurrentWeather = ({ currentWeather }) => {

  const name = currentWeather.name;
  const date = dateConvert(currentWeather.dt);
  const weather = currentWeather.weather[0].main;
  const description = currentWeather.weather[0].description;
  const temperature = tempToCelsius(currentWeather.main.temp);
  const pressure = currentWeather.main.pressure;
  const humidity = currentWeather.main.humidity;
  
  return (
    <Wrapper>
      <Title name={name} date={date} temperature={temperature} />
      <Table responsive>
        <tbody>
          <tr>
            <td>Weather:</td>
            <td>{weather}</td>
          </tr>
          <tr>
            <td>Description:</td>
            <td>{description}</td>
          </tr>
          <tr>
            <td>Temperature:</td>
            <td>{temperature}&#176;C</td>
          </tr>
          <tr>
            <td>Pressure:</td>
            <td>{pressure}hPa</td>
          </tr>
          <tr>
            <td>Humidity:</td>
            <td>{humidity}%</td>
          </tr>
        </tbody>
      </Table>
    </Wrapper> 
  )
}
  
CurrentWeather.propTypes = {
  currentWeather: PropTypes.shape({
    name: PropTypes.string,
    date: PropTypes.string,
    weather: PropTypes.array,
    description: PropTypes.string,
    temperature: PropTypes.number,
    pressure: PropTypes.number,
    humidity: PropTypes.number
  })
}
  
export default CurrentWeather;