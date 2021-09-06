<template>
  <div id="app">
    <img alt="Night hail icon" src="./assets/wi-night-hail.svg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template v-if="address">
      <p>{{ address }}</p>
    </template>
    <template v-else>
      <p>...Geolocating...</p>
    </template>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { getCoordinates } from "./utils/geolocation.utils.js";
import { fetchAddress } from "./utils/request.utils.js";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      coordinates: null,
      address: null,
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
        return fetchAddress(this.coordinates);
      })
      .then((address) => {
        this.address = address;
      });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
img {
  height: 100px;
}
</style>
