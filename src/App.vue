<template>
  <div id="app">
    <img alt="Night hail icon" src="./assets/wi-night-hail.svg" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <template v-if="coordinates">
      <p>{{ coordinates.latitude }}, {{ coordinates.longitude }}</p>
    </template>
    <template v-else>
      <p>...Geolocating...</p>
    </template>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

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
  beforeMount() {
    navigator.geolocation.getCurrentPosition((location) => {
      this.coordinates = location.coords;
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
