<template>
  <div class="outlook-container">
    <h3>Outlook</h3>
    <div class="outlook-cards">
      <OutlookCard
        v-for="snapshot in weather.slice(0, 12)"
        v-bind:key="snapshot.dt"
        v-bind:snapshot="snapshot"
      />
    </div>
  </div>
</template>

<script>
import OutlookCard from "./OutlookCard.vue";

export default {
  name: "OutlookPanel",
  components: { OutlookCard },
  props: {
    weather: Array,
  },
};
</script>

<style scoped>
.outlook-container {
  margin: 40px 50px;
}
.outlook-cards {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
}
h3 {
  margin: 0 0 10px 0;
}
</style>
