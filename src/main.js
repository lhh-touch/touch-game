// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import '../static/css/bootstrap.min.css'//bootstrap4样式文件
import '../static/js/bootstrap.bundle.min.js'  //bootstrap4js文件
import '../static/css/reset.css'//重置样式文件
import 'font-awesome/css/font-awesome.css'//字体图标样式

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
