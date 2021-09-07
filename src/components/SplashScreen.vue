<template>
  <div class="centred-content">
    <img alt="Night hail icon" src="../assets/wi-night-hail.svg" />
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  name: "SplashScreen",
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
