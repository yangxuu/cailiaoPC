// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store.js'
import _ from 'underscore'
import "./vender/underscore.mixin"
import Config from './config'
require ("babel-polyfill")

import "@/assets/common.css"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

Vue.config.productionTip = false
import axios from "axios"
Vue.prototype.api = function (api_url, data, success, fail) {
  let post_data = _.http_build_query({
    token: '',
    data: _.json_encode(data || {})
  })
  axios.post(Config.api_url + api_url, post_data).then(resp => {
    if (resp.data.status == 1) {
      if (success) {
        success(resp.data);
      }
    } else {
      if (fail) {
        fail(resp.data);
      } else {
        alert(resp.data.result);
      }
    }
  });
}
Vue.prototype.render = function (data) {
  Vue.set(this, 'info', data);
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
