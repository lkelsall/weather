<template>
  <header class="page-header">
    <h3>
      {{ weather[0].main.temp }}°C and
      {{
        weather[0].weather[0].description[0].toUpperCase() +
          weather[0].weather[0].description.slice(1)
      }}
      in
    </h3>
    <h3>{{ address }}</h3>
  </header>
</template>

<script>
export default {
  name: "PageHeader",
  props: {
    address: String,
    weather: Array,
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
