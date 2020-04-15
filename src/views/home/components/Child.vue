<!-- child -->
<template>
  <div class='app-inner'>
    <h4>儿子级组件</h4>
    <grand-son v-bind="$attrs" />
  </div>
</template>

<script>
import GrandSon from './GrandSon.vue';

export default {
  name: 'child',
  inheritAttrs: false,
  components: {
    GrandSon,
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
