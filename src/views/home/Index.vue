<!-- Home -->
<template>
  <div class='app-inner'>
    <img :src="imgUrl" alt="logo">
    <h3>首页</h3>
    <img src="../images/logo.png" alt="">
    <Child aa="aaaaa" sss="sss1111111111111" />
  </div>
</template>

<script>
import Child from './components/Child.vue';

export default {
  name: 'home',
  components: {
    Child,
  },
  provide() {
    return {
      info: '孙女你脑子姊姊',
    };
  },
  data() {
    return {
      imgUrl: require('../images/logo.png'),
    };
  },
  created() {
    console.log(this.info, '00000000');
  },
  mounted() {
    setTimeout(() => {
      console.log(2345);
      this.info = 'hhhhhhhhhhhhhhhh';
    },5000);
  },
  methods: {},
};
</script>

<style lang='less' scoped>
</style>
