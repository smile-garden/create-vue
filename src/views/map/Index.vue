<template>
  <div class='app-inner'>
    <div id="container"></div> 
  </div>
</template>

<script>
import MapLoader from '@/utils/loadMap';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
    };
  },
  created() {},
  mounted () {
    let that = this
    MapLoader().then(AMap => {
      console.log('地图加载成功')
      that.map = new AMap.Map('container', {
        center: [117.000923, 36.675807],
        zoom: 11
      });
    }, e => {
      console.log('地图加载失败' ,e)
    });
  },
  methods: {},
};
</script>

<style lang='less' scoped>
#container {
  margin: 120px auto 0;
  width: 600px;
  height: 300px;;
}
</style>
