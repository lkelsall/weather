<template>
  <header class="page-header">
    <h2>
      {{ weatherData.weather[0].description }} {{ weatherData.main.temp }}
    </h2>
    <h3>{{ placeName }}</h3>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    placeName: String,
    weatherData: Object,
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
