<!-- GrandSon -->
<template>
  <div class='app-inner'>
    孙级组件
    <hr>
    {{$attrs}}
    <hr>
    <great-grand-son />
    <h1>sss{{sss}}</h1>
    <h1>aa:{{aa}}</h1>
  </div>
</template>

<script>
import GreatGrandSon from './GreatGrandSon.vue';

export default {
  name: 'GrandSon',
  components: {
    GreatGrandSon,
  },
  props: {
    aa: {
      type: String,
      default: '',
    },
    sss: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
    };
  },
  created() {},
  methods: {},
};
</script>

<style lang='less' scoped>
</style>
