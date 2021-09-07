import axios from "axios";

export const fetchAddress = (coordinates) => {
  return axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates[0]},${coordinates[1]}&key=${process.env.VUE_APP_GOOGLE_MAPS_KEY}`
    )
    .then((response) => {
      return response.data.results[0].address_components
        .slice(2, 4)
        .map((addressComponent) => {
          return addressComponent.long_name;
        })
        .join(", ");
    });
};

export const fetchWeather = (coordinates) => {
  return axios
    .get(
      `https://api.openweathermap.org/data/2.5/forecast?units=metric&lat=${coordinates[0]}&lon=${coordinates[1]}&appid=${process.env.VUE_APP_OPENWEATHER_KEY}`
    )
    .then((response) => {
      return response.data.list;
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
      return "wi-day-sunny.svg";
  }
};
