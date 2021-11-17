<template>
  <div id="app">
    <div class="nav-box">
      <router-link to="/">Practice</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/pdf">PDF</router-link> |
      <router-link to="/map">Map</router-link>
    </div>
    <hr>
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="less" scoped>
.nav-box {
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
}
</style>

