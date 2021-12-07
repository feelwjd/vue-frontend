import Vue from 'vue'
import App from './App.vue'
import {router}  from './routes/index.js'

// 서버와 통신을 하기 위한 HTTP 통신 라이브러리
import axios from 'axios'  

// $는 모든 파일에서 사용 가능한 프로퍼티
Vue.prototype.$http = axios;  

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')