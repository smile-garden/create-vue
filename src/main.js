import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
/* import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css'; */
import iView from 'iview';
import 'iview/dist/styles/iview.css';    // 使用 CSS

// Vue.use(ViewUI);
Vue.use(iView);

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
