// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' // 引入第三方的模块vue
import App from './App' // 引入自定义模块，所以加./，就是把app这个组件引入

import router from './router'
// 引入自定义模块。./router是一个文件夹，会自动去找这个文件夹下的index.js

import store from './store'
// 引入自定义模块。./store是一个文件夹，会自动去找这个文件夹下的index.js

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', // 把当前的vue实例挂载到index.html中的div#app上
  router, // 注入路由对象
  store,
  components: { App },
  template: '<App/>'
})
