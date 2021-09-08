<template>
  <div class="chart-container">
    <h3>Temperature</h3>
    <LineChart
      v-bind:width="500"
      v-bind:height="100"
      v-bind:chartData="chartData"
    />
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  name: "TemperatureChart",
  components: { LineChart },
  props: {
    weather: Array,
  },
  data() {
    return {
      chartData: null,
    };
  },
  created() {
    const labels = this.weather.slice(0, 12).map((moment) => {
      return moment.dt_txt.slice(11, 16);
    });
    const temperatures = this.weather.slice(0, 12).map((moment) => {
      return moment.main.temp;
    });
    this.chartData = {
      labels: labels,
      datasets: [
        {
          label: "°C",
          data: temperatures,
          fill: false,
          tension: 0.1,
          borderColor: "cornflowerblue",
        },
      ],
    };
  },
};
</script>

<style scoped>
.chart-container {
  margin: 50px;
}
</style>
