<template>
  <div id="app">
    <img alt="Night hail icon" src="./assets/wi-night-hail.svg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template v-if="coordinates">
      <p>{{ coordinates[0] }}, {{ coordinates[1] }}</p>
    </template>
    <template v-else>
      <p>...Geolocating...</p>
    </template>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import { getCoordinates } from "./utils/geolocation.utils.js";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  data() {
    return {
      coordinates: null,
    };
  },
  async mounted() {
    // request device location from the browser
    try {
      this.coordinates = await getCoordinates({ timeout: 5000 });
    } catch (err) {
      console.log(err, "using default coordinates");
      this.coordinates = [51.5074, -0.136439];
    }
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
