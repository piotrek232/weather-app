export const tempToCelsius = (temp) => {
  return Math.round((temp - 273.15) * 10 ) / 10;
}

export const dateConvert = (date) => {
  const newDate = new Date(date * 1000);
  return (newDate.toLocaleString("en-GB")).substring(0, 10);
}

export const getCurrentWeatherUrl = (city, key) => {
  return `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${key}`
}

export const getForecastWeatherUrl = (city, key) => {
  return `http://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=${key}`
}

