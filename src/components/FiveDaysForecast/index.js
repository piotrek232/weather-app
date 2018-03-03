import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import { times } from 'lodash';

import { dateConvert, tempToCelsius } from '../../utils.js';

const Wrapper = styled.div`
  padding: auto 1rem;
  width: 95%;
  margin: auto;
  h3 {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

class FiveDaysForecast extends Component {
  renderRows(amount, list) {
    return times(amount, i => {
      return (
        <tr key={i}>
          <td>{dateConvert(list[(i+1)*8-1].dt)}</td>
          <td>{list[(i+1)*8-1].weather[0].description}</td>
          <td>{tempToCelsius(list[(i+1)*8-1].main.temp)}&#176;C</td>
          <td>{Math.round(list[(i+1)*8-1].main.pressure*1)/1}hPa</td>
          <td>{list[(i+1)*8-1].main.humidity}%</td>
        </tr> 
      )
    });
  }

  render(){
    const { forecastWeather } = this.props; 

    const name = forecastWeather.city.name;
    const list = forecastWeather.list;
    const numberOfForecastDays = 5;

    return (
      <Wrapper>
        <h3>{name}</h3>
        <Table responsive> 
          <thead>
            <tr>
              <th>Date</th>
              <th>Description</th>
              <th>Temperature</th>
              <th>Pressure</th>
              <th>Humidity</th>
            </tr>
          </thead> 
          <tbody>
            {this.renderRows(numberOfForecastDays, list)}
          </tbody>
        </Table>
      </Wrapper> 
    )
  }
}
  
FiveDaysForecast.propTypes = {
  forecastWeather: PropTypes.shape({
    name: PropTypes.string,
    list: PropTypes.array
  })
}
  
export default FiveDaysForecast;