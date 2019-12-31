import Vue from 'vue'
import App from './App.vue'
import Like_show from './components/Like_show.vue'

Vue.config.productionTip = false
Vue.component('Like_show',Like_show);

new Vue({
  render: h => h(App),
}).$mount('#app')
