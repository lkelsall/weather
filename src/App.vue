<template>
  <div id="app">
    <template v-if="weather">
      <PageHeader v-bind:address="address" v-bind:weather="weather" />
      <TemperatureChart v-bind:weather="weather" />
      <OutlookPanel v-bind:weather="weather" />
    </template>
    <template v-else>
      <SplashScreen />
    </template>
  </div>
</template>

<script>
import SplashScreen from "./components/SplashScreen.vue";
import PageHeader from "./components/PageHeader.vue";
import TemperatureChart from "./components/TemperatureChart.vue";
import OutlookPanel from "./components/OutlookPanel.vue";
import { fetchAddress, fetchWeather, getCoordinates } from "./utils/utils.js";

export default {
  name: "App",
  components: {
    SplashScreen,
    PageHeader,
    TemperatureChart,
    OutlookPanel,
  },
  data() {
    return {
      coordinates: null,
      address: null,
      weather: null,
    };
  },
  mounted() {
    getCoordinates({ timeout: 5000 })
      .then((coordinates) => {
        this.coordinates = coordinates;
      })
      .catch((err) => {
        console.log(err, "using default coordinates");
        this.coordinates = [51.5074, -0.136439];
      })
      .then(() => {
        return Promise.all([
          fetchAddress(this.coordinates),
          fetchWeather(this.coordinates),
        ]);
      })
      .then(([address, weather]) => {
        this.address = address;
        this.weather = weather;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
