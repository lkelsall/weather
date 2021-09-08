<template>
  <header class="page-header">
    <h3>
      {{ weatherData.main.temp }}°C and
      {{
        weatherData.weather[0].description[0].toUpperCase() +
          weatherData.weather[0].description.slice(1)
      }}
      in
    </h3>
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
  height: 100px;
}
h3 {
  text-align: right;
  text-decoration: underline;
  text-decoration-color: cornflowerblue;
  text-decoration-thickness: 4px;
  margin-right: 25px;
}
</style>
