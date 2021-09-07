<template>
  <div class="centred-content">
    <img alt="Weather icon" v-bind:src="getImageSrc(this.imageFilename)" />
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
  data() {
    return {
      imageFilename: "wi-night-hail.svg",
    };
  },
  created() {
    const imageLibrary = [
      "wi-day-cloudy.svg",
      "wi-day-cloudy-gusts.svg",
      "wi-day-haze.svg",
      "wi-day-storm-showers.svg",
      "wi-day-windy.svg",
      "wi-night-alt-rain.svg",
      "wi-night-fog.svg",
      "wi-rain-wind.svg",
    ];

    setInterval(() => {
      this.imageFilename =
        imageLibrary[Math.floor(Math.random() * imageLibrary.length)];
    }, 3000);
  },
  methods: {
    getImageSrc: (filename) => {
      return require(`../assets/weather-icons/${filename}`);
    },
  },
};
</script>

<style scoped>
.centred-content {
  max-height: 100vh;
  padding-top: 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
