<template>
  <div class="card-container">
    <img alt="Weather icon" v-bind:src="getImageSrc(icon)" />
    <p>{{ snapshot.dt_txt.slice(11, 16) }}</p>
    <p id="weather-description">{{ snapshot.weather[0].description }}</p>
    <p>{{ snapshot.main.temp }}°C</p>
  </div>
</template>

<script>
import { chooseIcon } from "../utils/utils.js";

export default {
  name: "OutlookCard",
  props: {
    snapshot: Object,
  },
  data() {
    return {
      icon: null,
    };
  },
  created() {
    this.icon = chooseIcon(this.snapshot.weather[0].id);
  },
  methods: {
    getImageSrc: (filename) => {
      return require(`../assets/weather-icons/${filename}`);
    },
  },
};
</script>

<style scoped>
.card-container {
  height: 175px;
  width: 150px;
  text-align: center;
  border-bottom: 4px solid cornflowerblue;
}
#weather-description {
  font-weight: bold;
}
p {
  margin: 0;
}
img {
  height: 75px;
}
</style>
