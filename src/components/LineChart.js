import { Line } from "vue-chartjs";

export default {
  name: "LineChart",
  extends: Line,
  props: {
    chartData: Object,
  },
  mounted() {
    this.renderChart(this.chartData, { responsive: true });
  },
};
