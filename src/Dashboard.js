import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import CurrentWeather from './components/CurrentWeather';
import FiveDaysForecast from './components/FiveDaysForecast';
import Loader from './components/Loader';
import Error from './components/Error';
import config from './config.json';
import { getCurrentWeatherUrl, getForecastWeatherUrl } from './utils.js'

const Wrapper = styled.div`
  margin: 100px auto;
  padding: auto;
  max-width: 675px;
  height: 450px;
  background: #454d56;
  color: #dee7f2;
  border: 1px solid black;
  font-family: "Times New Roman", Times, serif;
`;

class Dashboard extends Component {
  state = {
    cityValue: 'Cracow',
    currentWeather: null,
    forecastWeather: null,
    loading: true,
    error: null
  }

  componentDidMount(){
    this.fetchCurrentWeather();
  }

  fetchCurrentWeather = async () => {
    const { cityValue } = this.state;
    const url = getCurrentWeatherUrl(cityValue, config.key);

    try {
      const current = await fetch(url);
      const currentWeather = await current.json();

      this.setState({ 
        currentWeather, 
        loading: false,
        forecastWeather: null
      });
    } catch (error) {
      this.setState({ error });
    }
  }

  fetchForecastWeather = async () => {
    const { cityValue } = this.state;
    const url = getForecastWeatherUrl(cityValue, config.key);

    try {
      const forecast = await fetch(url);
      const forecastWeather = await forecast.json();
      
      this.setState({ 
        forecastWeather, 
        loading: false,
        currentWeather: null
      });
    } catch (error) {
      this.setState({ error });
    }
  }
  
  handleCityChange = (e) => {
    this.setState({ cityValue: e.target.value || 'Cracow' });
  }

  renderCurrentWeather(currentWeather) {
    if (currentWeather.message === "city not found") {
      return <Error message="City not found!" />
    } 
    return <CurrentWeather currentWeather={currentWeather} />
  }

  renderFiveDaysForecast(forecastWeather) {
    if (forecastWeather.message === "city not found") {
      return <Error message="City not found!" />
    } 
    return <FiveDaysForecast forecastWeather={forecastWeather} />
  }

  render() {
    const { 
      currentWeather,
      forecastWeather,
      loading,
      error
    } = this.state;
   
    return (
      <Wrapper>
        <Header 
          handleCityChange={this.handleCityChange}
          fetchCurrentWeather={this.fetchCurrentWeather} 
          fetchForecastWeather={this.fetchForecastWeather}
        />
    
        {loading && <Loader />} 

        {error && <Error message={error} />}
        
        {currentWeather && this.renderCurrentWeather(currentWeather)}
        
        {forecastWeather && this.renderFiveDaysForecast(forecastWeather)}
      </Wrapper>
    );
  }
}

export default Dashboard;