// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import exceptionHandler from '@/config/AppExceptionHandler'
import router from '@/config/AppRouter'
import Root from '@/config/AppRoot'

Vue.config.errorHandler = exceptionHandler

Vue.use(Router)

// 把 router 共享出来给其他地方使用
window.VUE_ROUTER = router

/* eslint-disable no-new */
const vm = new Vue({
  el: '#app',
  router,
  template: '<Root/>',
  components: { Root }
})

// 捕获 Permission 里面的未处理异常
window.addEventListener('unhandledrejection', e => exceptionHandler(e.reason, vm))
