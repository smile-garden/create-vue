<template>
  <div class='app-inner'>
    <div id="container"></div> 
  </div>
</template>

<script>
import MP from '@/utils/loadMap';

export default {
  name: 'Map',
  data() {
    return {
    };
  },
  created() {
    console.log(MP);
  },
  mounted() {

  },
  methods: {},
};
</script>

<style lang='less' scoped>
</style>
