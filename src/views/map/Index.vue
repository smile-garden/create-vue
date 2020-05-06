<template>
  <div class='app-inner'>
    <div id="container"></div>
    <div class="input-item">
      <input
        id="input"
        style="width: 360px;"
        placeholder="请输入地址"
        v-model="address"
      />
      <button @click="handleOk">获取位置</button>
    </div>
    <hr>
    <div class="input-item">
      <input
        style="width: 360px;"
        placeholder="请输入地址"
        v-model="keyword"
        @change="sureSearch"
      />
      <!-- <button @click="">输入提示</button> -->
    </div>
    <img src="https://restapi.amap.com/v3/staticmap?location=113.060165,35.920303&zoom=13&size=750*300&markers=mid,,A:113.060165,35.920303&key=8461bc5da657e97a65d0065888a5bbcb" alt="">
  </div>
</template>

<script>
import MapLoader from '@/utils/loadMap';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      marker: null,
      geocoder: null,
      autoComplete: null,
      address: '',
      keyword: '',
    };
  },
  created() {
    console.log(process.env.NODE_ENV);
  },
  mounted () {
    MapLoader().then(AMap => {
      console.log('地图加载成功')
      this.map = new AMap.Map('container', {
        zoom: 11,
      });
      AMap.plugin(['AMap.Geocoder', 'AMap.Autocomplete'], () => { // 异步加载插件
        this.geocoder = new AMap.Geocoder({});
        this.marker = new AMap.Marker();
        const autoOptions = {
          //city 限定城市，默认全国
          city: '全国',
        }
        this.autoComplete= new AMap.Autocomplete(autoOptions);        
      });
    }, e => {
      console.log('地图加载失败' ,e)
    });
  },
  methods: {
    sureSearch() {
      this.autoComplete.search(this.keyword, (status, result) => {
        console.log(this.keyword, status, result, 'aaaaaaaaaaaaaaaaaaaa');
      });
    },
    handleOk() {
      this.geocoder.getLocation(this.address, (status, result) => {
        console.log(status, result);
        if (status === 'complete' && result.geocodes.length) {
          const lnglat = result.geocodes[0].location;
          console.log(lnglat);
          console.log(result);
          this.marker.setPosition(lnglat);
          this.map.add(this.marker);
          this.map.setFitView(this.marker);
        } else {
          console.log('根据地址查询位置失败');
        }
      });
    },
  },
};
</script>

<style lang='less' scoped>
.app-inner {
  text-align: center;
}
#container {
  margin: 120px auto 0;
  width: 600px;
  height: 300px;;
}

.input-item {
  margin: 10px 0;
}
</style>
