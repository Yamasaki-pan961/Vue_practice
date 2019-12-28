import Vue from 'vue'
import App from './App.vue'//シングルファイルコンポーネントのvueファイル

//開発モードの選択
Vue.config.productionTip = false

new Vue({
  render: h => h(App),//ES6の書き方
  //コンポーネントのオブジェクトApp.vueを引数としている
}).$mount('#app')
