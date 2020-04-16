import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);

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
