import axios from "axios";

const google_api_key = process.env.VUE_APP_GOOGLE_MAPS_KEY;

export const fetchAddress = (coordinates) => {
  axios
    .get(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates[0]},${coordinates[1]}&key=${google_api_key}`
    )
    .then((response) => {
      return response.data.results[0].address_components.slice(2, 4);
    });
};
