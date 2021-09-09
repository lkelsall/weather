import axios from "axios";

export const fetchAddress = (coordinates) => {
  return axios
    .get(
      `https://vue-weather-be.herokuapp.com/api/address?lat=${coordinates[0]}&lng=${coordinates[1]}`
    )
    .then((response) => {
      return response.data.address;
    });
};

export const fetchWeather = (coordinates) => {
  return axios
    .get(
      `https://vue-weather-be.herokuapp.com/api/weather?lat=${coordinates[0]}&lng=${coordinates[1]}`
    )
    .then((response) => {
      return response.data.weather;
    });
};

export const getCoordinates = (options) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => {
        resolve([latitude, longitude]);
      },
      reject,
      options
    );
  });
};

export const chooseIcon = (weatherId) => {
  switch (String(weatherId)[0]) {
    case "2":
      return "wi-thunderstorm.svg";
    case "3":
      return "wi-showers.svg";
    case "5":
      return "wi-rain.svg";
    case "6":
      return "wi-snow-wind.svg";
    case "7":
      return "wi-fog.svg";
    default:
      if (weatherId === 800) {
        return "wi-day-sunny.svg";
      } else {
        return "wi-cloud.svg";
      }
  }
};
