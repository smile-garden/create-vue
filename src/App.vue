<template>
  <div id="app">
    <div class="nav-box notranslate">
      <router-link to="/">Practice</router-link> |
      <router-link to="/home">Home</router-link> |
      <router-link to="/form">Form</router-link> |
      <router-link to="/table">Table</router-link> |
      <router-link to="/pdf">PDF</router-link> |
      <router-link to="/map">Map</router-link>
    </div>
    <hr />
    <button @click="goTranslate">翻译</button>
    <hr />
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  methods: {
    goTranslate() {
      let routeLogin = this.$router.resolve({
        name: 'translate',
      });
      window.open(routeLogin.href, "_blank", "top=300,left=300,width=800,height=500,menubar=no,toolbar=no,status=no,scrollbars=yes");
    },
  },
};
</script>

<style lang="less" scoped>
.nav-box {
  padding: 20px 0;
  text-align: center;
  font-size: 24px;
}
</style>
