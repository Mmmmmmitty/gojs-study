// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import go from 'gojs'
import 'highlight.js/styles/monokai-sublime.css' //代码片段高亮样式
import hljs from 'highlight.js'//代码片段高亮js
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
Vue.prototype.go = go; // go注册到vue原型上
Vue.config.productionTip = false
// 定义代码高亮自定义指令 
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
