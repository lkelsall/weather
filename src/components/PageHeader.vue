<template>
  <header class="page-header">
    <h3>{{ weatherData.main.temp }}</h3>
    <h2>
      {{ weatherData.weather[0].description }}
    </h2>
    <h3>{{ placeName }}</h3>
  </header>
</template>

<script>
import { chooseIcon } from "../utils/utils.js";

export default {
  name: "PageHeader",
  props: {
    placeName: String,
    weatherData: Object,
  },
  mounted() {
    this.icon = chooseIcon(this.weatherData.weather[0].id);
  },
  data() {
    return {
      icon: null,
    };
  },
};
</script>

<style scoped>
.page-header {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
