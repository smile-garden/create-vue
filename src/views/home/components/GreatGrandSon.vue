<!-- GreatGrandSon -->
<template>
  <div class='input-box'>
    <div>重孙子组件 {{infoDetail}}</div>
    <hr>
    <div @mousedown="down">
      <p>{{fullName}}</p>
      <input type="text" v-focus="{a: 123}" v-model="firstName">
      <input type="text" v-model="lastName">
      <input type="text" v-model="fullName">
    </div>
    <a @click="go">我去也</a>
  </div>
</template>

<script>
export default {
  name: 'GreatGrandSon',
  inject: ['info'],
  data() {
    return {
      infoDetail: this.info,
      firstName: 'feng',
      lastName: 'yixiao',
    };
  },
  computed: {
    fullName: {
      get() {
        return this.firstName + ':' + this.lastName;
      },
      set(newVal) {
        const names = newVal.split(':');
        this.firstName = names[0];
        this.lastName = names[1] || 'yixiao';
        return names[0] + ':' + names[1];
      },
    },
  },
  created() {},
  methods: {
    down(e) {
      e.preventDefault();
    },
    go() {
      this.$router.push({
        name: 'exception404',
        params: {
          aa: '233',
        },
        query: {
          aa: '3223323232',
        },
      });
    },
  },
};
</script>

<style lang='less' scoped>
.input {
  &-box {
    padding: 20px 30px;
    border: 1px solid #eee;
  }
}
</style>
