<!-- 404 -->
<template>
  <div class='app-inner'>
    404
    <a @click="go">首页</a>
  </div>
</template>

<script>
export default {
  name: 'exception404',
  data() {
    return {
    };
  },
  created() {},
  methods: {
    go() {
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style lang='less' scoped>
</style>
