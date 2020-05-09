<template>
  <div class='app-inner'>
    <div id="container"></div>
    <div class="input-wrap">
      <div class="input-box">
        <input
          id="input"
          class="input-text"
          placeholder="请输入地址按下enter或点击获取位置"
          v-model="address"
          @keyup.enter="handleOk"
          @focus="showSelect = true"
          @blur="showSelect = false"
        />
        <div class="input-result__list" v-if="showSelect && resultList.length">
          <div
            class="input-result__item"
            v-for="item in resultList"
            :key="item.id">
            {{item.name}}
          </div>
        </div>
      </div>
      <button class="input-btn" @click="handleOk">获取位置</button>
    </div>
    <hr>
    <img class="map-img" :src="mapUrl" alt="map">
  </div>
</template>

<script>
import MapLoader from '@/utils/loadMap';
import { debounce } from '@/utils/util';

export default {
  name: 'Map',
  data() {
    return {
      map: null,
      marker: null,
      geocoder: null,
      autoComplete: null,
      address: '',
      lnglat: null,
      showSelect: false,
      resultList: [],
    };
  },
  computed: {
    mapUrl() {
      const lnglatStr = this.lnglat ? `${this.lnglat.lng},${this.lnglat.lat}` : '116.407526,39.90403';
      const url = `https://restapi.amap.com/v3/staticmap?location=${lnglatStr}&zoom=13&size=750*300&markers=mid,,A:${lnglatStr}&key=8461bc5da657e97a65d0065888a5bbcb`;
      return url;
    },
  },
  watch: {
    address(val) {
      this.searchAddress(val);
    },
  },
  created() {
    console.log(process.env.NODE_ENV);
  },
  mounted () {
    MapLoader().then(AMap => {
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
    searchAddress: debounce(function searchAddress(address) {
      this.autoComplete.search(address, (status, result) => {
        this.resultList = status === 'complete' ? result.tips : [];
      });
    }, 300),
    handleOk() {
      this.geocoder.getLocation(this.address, (status, result) => {
        if (status === 'complete' && result.geocodes.length) {
          const lnglat = result.geocodes[0].location;
          this.lnglat = lnglat;
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
  margin: 50px auto 0;
  width: 750px;
  height: 300px;;
}

.input {
  &-wrap {
    margin: 20px 0;
  }

  &-box {
    position: relative;
    display: inline-block;
  }

  &-text {
    width: 300px;
    height: 30px;
  }

  &-btn {
    padding: 0 10px;
    height: 30px;
  }

  &-result {

    &__list {
      position: absolute;
      top: 30px;
      left: 0;
      width: 300px;
      background-color: #fff;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    &__item {
      width: 100%;
      line-height: 30px;
    }
  }
}

.map-img {
  margin: 50px 0;
}
</style>
