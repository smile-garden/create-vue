import Vue from 'vue'
import App from './App.vue'
import router from '@/router'

Vue.config.productionTip = false

Vue.directive('focus', {
  inserted(el, binding) {
    el.focus();
    console.log(binding);
    console.log(binding.value);
  }
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
